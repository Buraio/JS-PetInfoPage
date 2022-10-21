import { getInputs, form, redirect } from '../../scripts/input.js';
import { urls, getApi } from '../../scripts/api.js';

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

    const token = await getApi(userBodyData, urls.login, 'POST');
    console.log(token);
    return token;
  })

}

loginInputValues()

