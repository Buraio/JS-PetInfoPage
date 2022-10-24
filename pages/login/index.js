import { getInputs, form, redirect, validateBtn } from '../../scripts/input.js';
import { urls, accountWithApi } from '../../scripts/api.js';

const registerPageHref = '../../../pages/registration/index.html';
const redirectInput = document.querySelector('.goBackTo');
redirect(redirectInput, registerPageHref);

async function loginInputValues() {

  const [input1, input2] = getInputs('INPUT');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userBodyData = {
      email: `${input1.value}`,
      password: `${input2.value}`,
    }

    const token = await accountWithApi(userBodyData, urls.login, 'POST');
    console.log(token);

    localStorage.setItem('token', JSON.stringify(token));
    setTimeout(() => {
      location.replace('/pages/home/index.html');
    }, 1000);
  })

}

loginInputValues()

const email = document.querySelector('#loginEmail');
const password = document.querySelector('#loginPassword');
const submit = document.querySelector('.submit');

function loginValidateBtn() {

  email.addEventListener('input', check);
  password.addEventListener('input', check);

}

loginValidateBtn()

function check() {

  if (email.value !== '' && password.value !== '') {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }

}