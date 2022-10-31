import { getInputs, form, submit, animateSubmit } from './input.js';
import { urls, accountWithApi } from './getApi.js';

async function loginInputValues() {
  const [input1, input2] = getInputs('INPUT');

  submit.addEventListener('click', animateSubmit)

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
      submit.innerHTML = '';
      submit.innerText = 'Acessar';

      if (!token.message) {
        validateInput('ok');
        location = '../src/pages/homepage/index.html';
      }
      else {
        validateInput(token.message)
      }
    }, 1000);
  })

  getInputs('INPUT').forEach(input => {
    input.addEventListener('input', () => check(input1, input2));
  });
}

function check(input1, input2) {

  if (input1.value !== '' && input2.value !== '') {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
}

function validateInput(input) {

  const emailInput = document.querySelector('#loginEmail');
  const passwordInput = document.querySelector('#loginPassword');
  console.log(passwordInput);

  const loginEmail = document.querySelector('.emailMessage');
  const loginPassword = document.querySelector('.passwordMessage')
  console.log(loginPassword)

  if (input === 'O email está incorreto') {
    emailInput.classList.add('error');
    passwordInput.classList.remove('error');

    loginEmail.classList.remove('hidden');
    loginPassword.classList.add('hidden');
  }
  else if (input === 'A senha está incorreta') {
    passwordInput.classList.add('error');
    emailInput.classList.remove('error');

    loginPassword.classList.remove('hidden');
    loginEmail.classList.add('hidden');
  }
  else if (input === 'ok') {
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');

    loginEmail.classList.add('hidden');
    loginPassword.classList.add('hidden');
  }
}


export { loginInputValues }