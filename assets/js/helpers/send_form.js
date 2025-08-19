const formDOM = document.querySelector('#form');
const modalDOM = document.querySelector('#modal');
const closeButton = document.querySelector('#btn_close-modal');

function openModal() {
	modalDOM.open = true;
}

function closeModal() {
	modalDOM.open = false;
}

function sendEmail() {
    if (!formDOM) return;
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();
        const params = {
            name: document.getElementById('name')?.value?.trim(),
            email: document.getElementById('email')?.value?.trim(),
            subject: document.getElementById('subject')?.value?.trim(),
            message: document.getElementById('message')?.value?.trim(),
        };

        if (params.name && params.email && params.subject && params.message) {
            if (typeof emailjs !== 'undefined' && emailjs?.send) {
                emailjs
                    .send('service_mh6njza', 'template_ox37jzz', params)
                    .then(() => {
                        openModal();
                        formDOM.reset();
                    })
                    .catch((err) => {
                        console.error('EmailJS error:', err);
                    });
            }
        }
    });
}

if (closeButton) {
    closeButton.addEventListener('click', closeModal);
}

export default sendEmail;
