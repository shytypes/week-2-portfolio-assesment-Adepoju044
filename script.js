document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    const contactForm = document.getElementById('contactForm');
    const submissionResult = document.getElementById('submissionResult');
    const displayData = document.getElementById('displayData');
    const newMessageBtn = document.getElementById('newMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            secondName: document.getElementById('secondName').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        if (!formData.firstName || !formData.secondName || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }
        displayData.innerHTML = `
            <p><strong>First Name:</strong> ${formData.firstName}</p>
            <p><strong>Second Name:</strong> ${formData.secondName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
        `;
        contactForm.classList.add('hidden');
        submissionResult.classList.remove('hidden');
        
        submissionResult.scrollIntoView({ behavior: 'smooth' });
    });
    
    newMessageBtn.addEventListener('click', function() {
        submissionResult.classList.add('hidden');
        contactForm.classList.remove('hidden');
        contactForm.reset();
        contactForm.scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});