/*
Elementos interativos em variáveis - Cadastro/Login/Home/Modal/API

Url e endpoints em variáveis - API - Ok
Cadastro de conta - API - Ok
Login e token recebido - API - Ok
Criação de posts - API
Posts de outros usuários - API

Evento de envio de form - Login/Cadastro - Ok
Resgate de valores dos inputs - Login/Cadastro - Ok

Evento de cadastro com API - Cadastro - Ok

Evento de acesso à conta com API - Login - Ok

Redirecionamento da tela de cadastro para a de login - API - Ok

Evento de retorno à tela de login - Cadastro - Ok
Evento de redirecionamento à tela de cadastro - Login - Ok
// Pendente -----------------------------------------------

Token com localStorage - API

Redirecionamento da tela de login para a de feed - API

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

import { getInputs, form, redirect } from '../../scripts/input.js';
import { urls, getApi } from '../../scripts/api.js';

const loginPageHref = '../../index.html';
const redirectInput = document.querySelectorAll('.goBackTo');

redirectInput.forEach(button => redirect(button, loginPageHref));

async function registerInputValues() {

  const [input1, input2, input3, input4] = getInputs('INPUT');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userBodyData = {
      username: `${input1.value}`,
      email:    `${input2.value}`,
      avatar:   `${input3.value}`,
      password: `${input4.value}`
    }

    const response = await getApi(userBodyData, urls.register, 'POST');
    if (response) {
      console.log(response);
    }
  })

}

registerInputValues();