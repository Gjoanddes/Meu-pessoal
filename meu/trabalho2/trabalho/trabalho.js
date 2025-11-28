const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});
const botoesCurtir = document.querySelectorAll('.btn-curtir');

botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.contagem');
        let numeroAtual = parseInt(contador.innerText);
        
        if (botao.classList.contains('curtido')) {
            botao.classList.remove('curtido');
            numeroAtual--;
            botao.innerHTML = `🤍 Curtir <span class="contagem">${numeroAtual}</span>`;
        } else {
            botao.classList.add('curtido');
            numeroAtual++;
            botao.innerHTML = `❤ Curtiu <span class="contagem">${numeroAtual}</span>`;
        }
    });
});
const btnTema = document.getElementById('btn-tema');
const body = document.body;
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    body.classList.add('dark-mode');
    btnTema.textContent = '☀️'; 
}
btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️'; 
        localStorage.setItem('tema', 'dark');
    } else {
        btnTema.textContent = '🌙';
        localStorage.setItem('tema', 'light');
    }
});