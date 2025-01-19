const wrapper = document.querySelector('.wrapper');
const loginLnik = document.querySelector('.login-link');
const registerLnik = document.querySelector('.register-link');

registerLnik.addEventListener('click', ()=> {
    wrapper.classList.add('activer');
    wrapper.classList.remove('activel');
});

loginLnik.addEventListener('click', ()=> {
    wrapper.classList.remove('activer');
    wrapper.classList.add('activel');
    // wrapper.classList.add('otp');
});