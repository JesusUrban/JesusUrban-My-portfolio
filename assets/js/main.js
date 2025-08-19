import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import applyLanguage from './helpers/languages.js';

import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();

document.addEventListener('DOMContentLoaded', () => {
    resetToHome();
    activeMenu();
    parallax();
    updateDateYear();
    sendEmail();

    // Initialize language based on saved preference or current toggle state
    const languageToggle = document.getElementById('language-toggle');
    let savedLanguage = null;
    try {
        savedLanguage = localStorage.getItem('preferredLanguage');
    } catch (e) {}

    if (savedLanguage) {
        applyLanguage(savedLanguage);
        if (languageToggle) languageToggle.checked = savedLanguage === 'en';
    } else {
        const initialLanguage = languageToggle && languageToggle.checked ? 'en' : 'es';
        applyLanguage(initialLanguage);
    }

    const ekazButton = document.querySelector('.Ekaz');
    if (ekazButton) {
        ekazButton.addEventListener('click', function () {
            window.open('https://jesusurban.github.io/Ekaz/', '_blank', 'noopener');
        });
    }
});