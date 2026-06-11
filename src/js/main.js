import { initQuantumCanvas } from './quantum-canvas.js';
import { initInteractiveTerminal } from './terminal-console.js';
import { 
    initMobileMenu, 
    initTypingEffect, 
    initScrollReveal, 
    initTabs, 
    initPortfolioFilter, 
    initContactForm 
} from './ui-controllers.js';

// Setup and boot themes
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (!themeToggleBtn) return;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Broadcast theme change event
        window.dispatchEvent(new CustomEvent('themechanged', { detail: { theme: newTheme } }));
    });
}

// Mount modules on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initTypingEffect();
    initScrollReveal();
    initTabs();
    initPortfolioFilter();
    initContactForm();
    initInteractiveTerminal();
    initQuantumCanvas();
});
