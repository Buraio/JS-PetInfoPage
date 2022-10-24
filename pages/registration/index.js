/*
Elementos interativos em variáveis - Cadastro/Login/Home/Modal/API

Url e endpoints em variáveis - API - Ok
Cadastro de conta - API - Ok
Login e token recebido - API - Ok

Evento de envio de form - Login/Cadastro - Ok
Resgate de valores dos inputs - Login/Cadastro - Ok

Evento de cadastro com API - Cadastro - Ok

Evento de acesso à conta com API - Login - Ok

Redirecionamento da tela de cadastro para a de login - API - Ok
Redirecionamento da tela de login para a de feed - API - Ok

Evento de retorno à tela de login - Cadastro - Ok
Evento de redirecionamento à tela de cadastro - Login - Ok

Token com localStorage - API - Ok

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

Animação de botão spinner de carregamento - Login/Cadastro/Modal/API
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