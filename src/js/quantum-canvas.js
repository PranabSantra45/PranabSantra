export function initQuantumCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let nodesArray = [];
    const nodeCount = 50;

    const mouse = {
        x: null,
        y: null,
        radius: 140
    };

    function getThemeColors() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            return {
                node: 'rgba(16, 185, 129, 0.4)',      // Neon Quantum Green
                line: 'rgba(139, 92, 246, 0.07)',      // Thin purple strings
                measurement: 'rgba(6, 182, 212, 0.5)'  // Cyan collapses
            };
        } else {
            return {
                node: 'rgba(5, 150, 105, 0.25)',
                line: 'rgba(109, 40, 217, 0.05)',
                measurement: 'rgba(8, 145, 178, 0.3)'
            };
        }
    }

    let colors = getThemeColors();

    window.addEventListener('themechanged', () => {
        colors = getThemeColors();
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initNodes();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Probability Node represents a wavefunction orbital path
    class ProbabilityNode {
        constructor(x, y, radius, orbitX, orbitY, speed) {
            this.x = x;
            this.y = y;
            this.baseX = x;
            this.baseY = y;
            this.radius = radius;
            this.angle = Math.random() * Math.PI * 2;
            this.orbitX = orbitX;
            this.orbitY = orbitY;
            this.speed = speed;
            this.collapsed = false;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.collapsed ? colors.measurement : colors.node;
            ctx.fill();

            // If collapsed, draw thin coordinate grid lines mapping node to axis
            if (this.collapsed) {
                ctx.beginPath();
                ctx.setLineDash([2, 3]);
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, canvas.height);
                ctx.moveTo(0, this.y);
                ctx.lineTo(canvas.width, this.y);
                ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
                ctx.stroke();
                ctx.setLineDash([]);
            }
        }

        update() {
            // Drift node in a miniature mathematical orbit
            this.angle += this.speed;
            this.x = this.baseX + Math.cos(this.angle) * this.orbitX;
            this.y = this.baseY + Math.sin(this.angle) * this.orbitY;

            // Coordinate borders check
            if (this.baseX > canvas.width) this.baseX = 0;
            if (this.baseX < 0) this.baseX = canvas.width;
            if (this.baseY > canvas.height) this.baseY = 0;
            if (this.baseY < 0) this.baseY = canvas.height;

            // Slowly drift center points
            this.baseX += Math.cos(this.angle * 0.1) * 0.2;
            this.baseY += Math.sin(this.angle * 0.1) * 0.2;

            // Hover measurement check (Wavefunction Collapse simulation)
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    this.collapsed = true;
                    // Pull node coordinates towards mouse (measurement collapse focus)
                    this.x += dx * 0.08;
                    this.y += dy * 0.08;
                } else {
                    this.collapsed = false;
                }
            } else {
                this.collapsed = false;
            }

            this.draw();
        }
    }

    function initNodes() {
        nodesArray = [];
        const quantity = Math.min(nodeCount, (canvas.width * canvas.height) / 20000);
        for (let i = 0; i < quantity; i++) {
            let radius = Math.random() * 2 + 1.5;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let orbitX = Math.random() * 20 + 5;
            let orbitY = Math.random() * 20 + 5;
            let speed = (Math.random() * 0.015) + 0.005;

            nodesArray.push(new ProbabilityNode(x, y, radius, orbitX, orbitY, speed));
        }
    }

    function connect() {
        for (let a = 0; a < nodesArray.length; a++) {
            for (let b = a + 1; b < nodesArray.length; b++) {
                let dx = nodesArray[a].x - nodesArray[b].x;
                let dy = nodesArray[a].y - nodesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(nodesArray[a].x, nodesArray[a].y);
                    ctx.lineTo(nodesArray[b].x, nodesArray[b].y);
                    ctx.strokeStyle = colors.line;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    // Render HUD diagnostics values near the mouse cursor
    function drawMouseHud() {
        if (mouse.x === null || mouse.y === null) return;

        // Draw measurement circle target
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = colors.measurement;
        ctx.fill();

        // Print tiny mathematical coordinate logs
        ctx.font = '8px Space Mono, monospace';
        ctx.fillStyle = colors.measurement;
        ctx.fillText(`X: ${mouse.x.toFixed(0)} Y: ${mouse.y.toFixed(0)}`, mouse.x + 10, mouse.y - 10);
        ctx.fillText(`Ψ_collapse: ${((Math.sin(mouse.x * 0.01) + 1)/2).toFixed(3)}`, mouse.x + 10, mouse.y + 2);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < nodesArray.length; i++) {
            nodesArray[i].update();
        }
        connect();
        drawMouseHud();
        requestAnimationFrame(animate);
    }

    animate();
}
