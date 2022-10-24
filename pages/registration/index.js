/*
Elementos interativos em variáveis - Cadastro/Login/Home/Modal/API

// Pendente -----------------------------------------------

Resgate de todos os posts - API
Criação de posts - API
Posts de outros usuários - API

Evento de sair da conta - Home
Elementos de posts (li) com DOM - Home
Evento de criação de novo post - Home
Evento de edição e exclusão de post - Home
Evento de acesso ao post completo - Home
Renderizar data de criação de posts - Home

Modal dinâmico - Modal
Tooltip - Modal
Ver post completo - Modal
Criar novo post - Modal
Editar post - Modal
Deletar post - Modal

*/

import { getInputs, form, redirect, submit, animateSubmit } from '../../scripts/input.js';
import { urls, accountWithApi } from '../../scripts/api.js';
import { showTooltip } from '../../scripts/modal.js';

const loginPageHref = '../../index.html';
const redirectInput = document.querySelectorAll('.goBackTo');

redirectInput.forEach(button => redirect(button, loginPageHref));

const [input1, input2, input3, input4] = getInputs('INPUT');
async function registerInputValues() {

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    animateSubmit();
    const userBodyData = {
      username: `${input1.value}`,
      email:    `${input2.value}`,
      avatar:   `${input3.value}`,
      password: `${input4.value}`
    }

    const response = await accountWithApi(userBodyData, urls.register, 'POST');
    if (response) {
      setTimeout(() => {
        showTooltip();
      }, 500)
    }
    setTimeout(() => {
      submit.innerHTML = '';
      submit.innerText = 'Cadastrar'
    }, 500)
  })

  getInputs('INPUT').forEach(input => {
    input.addEventListener('input', check);
  });

}

registerInputValues();

function check() {

  if (input1.value && input2.value && input3.value && input4.value) {
    submit.disabled = false;
  }
  else {
    submit.disabled = true;
  }

}