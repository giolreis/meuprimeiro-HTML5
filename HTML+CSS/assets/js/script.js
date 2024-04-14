document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            showAlert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    function showAlert(message) {
        alert(message);
        setTimeout(function() {
            // Código para fechar o alerta automaticamente após 6 segundos
        }, 6000); // 6000 milissegundos = 6 segundos
    }

    function validateForm() {
        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (fname === '' || lname === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        return true;
    }
});
