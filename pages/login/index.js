import { getInputs, form, redirect, submit, animateSubmit } from '../../scripts/input.js';
import { urls, accountWithApi } from '../../scripts/api.js';

const registerPageHref = '../../../pages/registration/index.html';
const redirectInput = document.querySelector('.goBackTo');
redirect(redirectInput, registerPageHref);

const [input1, input2] = getInputs('INPUT');
async function loginInputValues() {

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    animateSubmit();
    const userBodyData = {
      email: `${input1.value}`,
      password: `${input2.value}`,
    }

    const token = await accountWithApi(userBodyData, urls.login, 'POST');
    console.log(token);

    localStorage.setItem('token', JSON.stringify(token));
    setTimeout(() => {
      submit.innerHTML = '';
      submit.innerText = 'Acessar';
      location.replace('/pages/home/index.html');
    }, 500);
  })

  getInputs('INPUT').forEach(input => {
    input.addEventListener('input', check);
  });
}

loginInputValues()

function check() {

  if (input1.value !== '' && input2.value !== '') {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }

}