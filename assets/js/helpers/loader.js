function loader() {
    const loaderContainer = document.querySelector('.loader');
    if (!loaderContainer) return;
	window.addEventListener('load', () => {
		loaderContainer.classList.add('loader--hidden');
	});
}

export default loader;
