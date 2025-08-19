function resetToHome() {
	// Only set default hash when none is present
	if (!window.location.hash) {
		window.location.hash = '#home';
	}
}

export default resetToHome;
