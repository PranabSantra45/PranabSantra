export function initInteractiveTerminal() {
    const termInput = document.getElementById('terminal-input');
    const outputTarget = document.getElementById('terminal-output-target');
    const terminalBody = document.getElementById('terminal-console');

    if (!termInput || !outputTarget) return;

    // Command listener
    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawCommand = termInput.value;
            const command = rawCommand.trim().toLowerCase();
            termInput.value = '';

            // Print Echo Command
            appendOutput(`&gt; ${rawCommand}`, 'echo-command');

            // Handle script router
            handleTerminalCommand(command);

            // Auto scroll down
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    function appendOutput(text, type = '') {
        const line = document.createElement('div');
        line.className = `output-line ${type}`;
        line.innerHTML = text;
        outputTarget.appendChild(line);
    }

    function handleTerminalCommand(cmd) {
        if (!cmd) return;

        const parts = cmd.split(' ');
        const primaryCmd = parts[0];

        switch(primaryCmd) {
            case 'help':
                appendOutput('Available Diagnostic Commands:', 'system-alert');
                appendOutput('  <span class="text-muted">about</span>             Print academic background metrics.');
                appendOutput('  <span class="text-muted">diagnose</span>          Verify structural directory modules status.');
                appendOutput('  <span class="text-muted">run ml-predict</span>     Simulate EV charging behavior prediction models.');
                appendOutput('  <span class="text-muted">quantum-telemetry</span> Measure wavefunction values & coherence matrices.');
                appendOutput('  <span class="text-muted">clear</span>             Clear console terminal.');
                break;

            case 'clear':
                outputTarget.innerHTML = '';
                break;

            case 'about':
                appendOutput('NODE REPORT // PRANAB KR SANTRA', 'system-alert');
                appendOutput('Status: B.E. Computer Science & Engineering Undergraduate (2024-2028)');
                appendOutput('Institution: Sathyabama Institute of Science and Technology, Chennai');
                appendOutput('Academic Rating: CGPA 8.82 / 10');
                appendOutput('Domain Focus: Machine Learning, Quantum Computing, Telemetry Simulation');
                appendOutput('Affiliations: Digital Strategy Lead at DHI-e Foundation');
                break;

            case 'diagnose':
                appendOutput('Running diagnostic audit on directory nodes...', 'text-muted');
                setTimeout(() => {
                    appendOutput('[OK] Systems variables: NOMINAL');
                    appendOutput('[OK] Core languages config: (Python, JS, C, Java)');
                    appendOutput('[OK] DB connection: (Firebase Firestore) - SECURE');
                    appendOutput('[OK] Academic records: Sathyabama CSE directory indexed');
                    appendOutput('ALL SYSTEMS GO.', 'system-alert');
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }, 500);
                break;

            case 'run':
                if (parts[1] === 'ml-predict') {
                    appendOutput('Initializing Regression Predictor over EV Charging logs...', 'text-muted');
                    setTimeout(() => {
                        appendOutput('Loading dataset (12.5k rows, EV-charge-log.csv)...');
                        appendOutput('Feature Extraction: Charge duration vs Temperature coefficients.');
                        appendOutput('Running Regression algorithm iteration calculations...');
                        appendOutput('ASCII Curve Approximation:');
                        appendOutput(' 10 kW |     .-----.');
                        appendOutput('  5 kW |   ./       \\.');
                        appendOutput('  0 kW | _/           \\___');
                        appendOutput('       +--------------------');
                        appendOutput('         0h   2h   4h   6h  ');
                        appendOutput('Evaluation metrics: R² = 0.942, MAE = 0.32 kWh', 'system-alert');
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                    }, 600);
                } else {
                    appendOutput('// ERROR: Command usage: "run ml-predict"', 'error-alert');
                }
                break;

            case 'quantum-telemetry':
                appendOutput('Querying local simulated Quantum Coherence vectors...', 'text-muted');
                setTimeout(() => {
                    const qubitCount = 3;
                    const alpha = (Math.random() * 0.7).toFixed(4);
                    const beta = Math.sqrt(1 - alpha*alpha).toFixed(4);
                    appendOutput(`Qubits measured: ${qubitCount}`);
                    appendOutput(`Psi State: |Ψ⟩ = ${alpha}|001⟩ + ${beta}|110⟩`);
                    appendOutput(`Decoherence rate: τ = 84.6 ns [THRESHOLD: NORMAL]`);
                    appendOutput('Fidelity: F = 0.9984 (Theoretical limit alignment)', 'system-alert');
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }, 500);
                break;

            default:
                appendOutput(`// ERROR: Unknown syntax "${cmd}". Type "help" for diagnostics.`, 'error-alert');
        }
    }
}
