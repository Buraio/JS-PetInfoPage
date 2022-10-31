
import { getInputs, form, submit, animateSubmit } from '../scripts/input.js';
import { urls, accountWithApi } from '../scripts/getApi.js';
import { hidetooltip, registerTooltip } from '../scripts/tooltip.js';

async function registerInputValues() {
  const [input1, input2, input3, input4] = getInputs('INPUT');

  submit.addEventListener('click', () => {
    hidetooltip();
    animateSubmit();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userBodyData = {
      username: `${input1.value}`,
      email:    `${input2.value}`,
      avatar:   `${input3.value}`,
      password: `${input4.value}`
    }

    const response = await accountWithApi(userBodyData, urls.register, 'POST');
    if (!response.message) {
      setTimeout(() => {
        registerTooltip();
      }, 500)
    }
    else {
      console.log(response)
      showTooltip(response.message);
    }
    setTimeout(() => {
      submit.innerHTML = '';
      submit.innerText = 'Cadastrar'
    }, 500)
  })

  getInputs('INPUT').forEach(input => {
    input.addEventListener('input', () => check(input1, input2, input3, input4));
  });
}

function check(input1, input2, input3, input4) {

  if (input1.value && input2.value && input3.value && input4.value) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }
}

export { registerInputValues }