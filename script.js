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
    const password = document.getElementById('register-password').value;

    // Simulação de cadastro (armazenar no localStorage)
    localStorage.setItem('user', JSON.stringify({ name, email, cpf, password }));
    alert('Cadastro realizado com sucesso!');
    document.getElementById('register-form').reset();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulação de login (verificar no localStorage)
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        alert('Login realizado com sucesso!');
        document.getElementById('auth-forms').style.display = 'none';
        document.getElementById('account-management').style.display = 'block';
    } else {
        alert('Email ou senha incorretos!');
    }
});

document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (site && username && password) {
        addOrUpdateAccount(site, username, password);
        document.getElementById('account-form').reset();
    }
});

function addOrUpdateAccount(site, username, password) {
    const accountList = document.getElementById('account-list');
    let accountItem = document.querySelector(`li[data-site="${site}"]`);

    if (accountItem) {
        accountItem.querySelector('.username').textContent = username;
        accountItem.querySelector('.password').textContent = password;
    } else {
        accountItem = document.createElement('li');
        accountItem.setAttribute('data-site', site);
        accountItem.innerHTML = `
            <span><strong>${site}</strong></span>
            <span class="username">${username}</span>
            <span class="password">${password}</span>
            <button class="edit" onclick="editAccount('${site}')">Editar</button>
            <button onclick="removeAccount('${site}')">Remover</button>
        `;
        accountList.appendChild(accountItem);
    }
}

function editAccount(site) {
    const accountItem = document.querySelector(`li[data-site="${site}"]`);
    if (accountItem) {
        document.getElementById('site').value = site;
        document.getElementById('username').value = accountItem.querySelector('.username').textContent;
        document.getElementById('password').value = accountItem.querySelector('.password').textContent;
    }
}

function removeAccount(site) {
    const accountItem = document.querySelector(`li[data-site="${site}"]`);
    if (accountItem) {
        accountItem.remove();
    }
}
