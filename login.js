document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const cpf = document.getElementById('register-cpf').value;

    // Simulação de cadastro (armazenar no localStorage)
    localStorage.setItem('user', JSON.stringify({ name, email, cpf }));
    alert('Cadastro realizado com sucesso!');
    document.getElementById('register-form').reset();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const cpf = document.getElementById('login-cpf').value;

    // Simulação de login (verificar no localStorage)
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.cpf === cpf) {
        alert('Login realizado com sucesso!');
        document.getElementById('auth-forms').style.display = 'none';
        document.getElementById('account-management').style.display = 'block';
    } else {
        alert('Email ou CPF incorretos!');
    }
});
