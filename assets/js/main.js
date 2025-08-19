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

  // Set default language to English and sync toggle state
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.checked = true;
    languageToggle.addEventListener('change', function () {
      const language = this.checked ? 'en' : 'es';
      applyLanguage(language);
    });
  }
  applyLanguage('en');

  const ekazButton = document.querySelector('.Ekaz');
  if (ekazButton) {
    ekazButton.addEventListener('click', function() {
      const win = window.open('https://jesusurban.github.io/Ekaz/', '_blank', 'noopener');
      if (win) {
        win.opener = null;
      }
    });
  }
});