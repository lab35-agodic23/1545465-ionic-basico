// login
document.querySelector(".login").addEventListener('click', () => {
    const usr = document.querySelector("#usr");
    const pass = document.querySelector("#pass");
    
    // crear elemento
    let el = document.querySelector(".output");

    el.innerHTML = `<p>Usuario <b>${usr.value}</b> conectado.</p>`;

    usr.value = '';
    pass.value = '';
});

// register
document.querySelector(".reg").addEventListener('click', () => {
    const usr = document.querySelector("#usr");
    const pass = document.querySelector("#pass");
    
    // crear elemento
    let el = document.querySelector(".output");

    el.innerHTML = `<p>Usuario <b>${usr.value}</b> registrado.</p>`;

    usr.value = '';
    pass.value = '';
});