function parallax() {
    const homeDOM = document.getElementById('home');
    if (!homeDOM) return;

    const imagesDOM = document.querySelectorAll('.home__layer');
    if (!imagesDOM || imagesDOM.length === 0) return;

	homeDOM.addEventListener('mousemove', (e) => {
		imagesDOM.forEach((img) => {
			const speed = img.getAttribute('data-speed');
			const x = (window.innerWidth - e.pageX * speed) / 100;
			const y = (window.innerHeight - e.pageY * speed) / 100;
			img.style.transform = `translate(${x}px, ${y}px)`;
		});
	});
}

export default parallax;
