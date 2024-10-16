import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import applyLanguage from './helpers/languages.js';

import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';

loader();

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

applyLanguage


document.querySelector('.Ekaz').addEventListener("click", function() {
    window.open('https://jesusurban.github.io/Ekaz/', '_blank');
  });