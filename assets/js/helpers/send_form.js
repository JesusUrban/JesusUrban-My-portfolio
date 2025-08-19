function sendEmail() {
	const formDOM = document.querySelector('#form');
	const modalDOM = document.querySelector('#modal');
	const closeButton = document.querySelector('#btn_close-modal');

	if (!formDOM) return;

	const openModal = () => {
		if (modalDOM) modalDOM.open = true;
	};

	const closeModal = () => {
		if (modalDOM) modalDOM.open = false;
	};

	formDOM.addEventListener('submit', (e) => {
		e.preventDefault();
		const params = {
			name: document.getElementById('name')?.value,
			email: document.getElementById('email')?.value,
			subject: document.getElementById('subject')?.value,
			message: document.getElementById('message')?.value,
		};

		if (params.name && params.email && params.subject && params.message) {
			emailjs
				.send('service_mh6njza', 'template_ox37jzz', params)
				.then(() => {
					openModal();
					formDOM.reset();
				})
				.catch((error) => {
					console.error('Email send failed:', error);
					alert('Failed to send your message. Please try again later.');
				});
		}
	});

	if (closeButton) closeButton.addEventListener('click', closeModal);
}

export default sendEmail;
