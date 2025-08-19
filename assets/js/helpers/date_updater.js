function updateDateYear() {
	const currentYear = new Date().getFullYear();

	const copyrightElement = document.querySelector('.footer__copy');

	if (copyrightElement) {
		copyrightElement.textContent = `© ${currentYear}, All rights reserved`;
	}
}

export default updateDateYear;
