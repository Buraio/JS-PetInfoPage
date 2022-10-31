import { dynamicModal } from "./modal.js";
import { token, userObj } from "../../src/pages/homepage/index.js";

function createPostModal() {

  const heading         = document.createElement('h3');
  const titleLabel      = document.createElement('label');
  const titleInput      = document.createElement('input');
  const contentLabel    = document.createElement('label');
  const contentTextarea = document.createElement('textarea');
  const cancelAction    = document.createElement('button');
  const publishPost     = document.createElement('button');

  heading.innerText = 'Criando novo post';

  titleLabel.classList.add('inputLabel');
  contentLabel.classList.add('inputLabel');
  titleLabel.innerText   = 'Título do post';
  contentLabel.innerText = 'Conteúdo do post';

  titleInput.classList.add('dataInput');
  contentTextarea.classList.add('dataInput');
  titleInput.placeholder      = 'Digite o título aqui...';
  contentTextarea.placeholder = 'Desenvolve o conteúdo do post aqui...';

  cancelAction.classList.add('modalActions', 'cancel')
  publishPost.classList.add('modalActions', 'savePost');
  cancelAction.innerText = 'Cancelar';
  publishPost.innerText  = 'Publicar';

  titleLabel.appendChild(titleInput);
  contentLabel.appendChild(contentTextarea);
  const modalMain = dynamicModal(heading);
  modalMain.append(titleLabel, contentLabel, cancelAction, publishPost);

}

function readPostModal() {

  const postInfo = document.createElement('div');
  const postImg = document.createElement('img');
  const verticalLine = document.createElement('span');
  const postDate = document.createElement('span');

  verticalLine.innerText = '|';
  postDate.innerText = userObj.date

  

  postInfo.append(postImg, verticalLine, postDate);

}

readPostModal()

function deletePostModal() {

  const heading      = document.createElement('h3');
  const question     = document.createElement('h4');
  const deleteDesc   = document.createElement('p');
  const cancelAction = document.createElement('button');
  const deleteAction = document.createElement('button');

  cancelAction.classList.add('modalActions', 'cancel');
  deleteAction.classList.add('modalActions', 'delete');

  heading.innerText      = 'Confirmação de exclusão';
  question.innerText     = 'Tem certeza que deseja excluir esse post?';
  deleteDesc.innerText   = 'Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir';
  cancelAction.innerText = 'Cancelar';
  deleteAction.innerText = 'Sim, excluir esse post';

  const modalMain = dynamicModal(heading);

  modalMain.append(question, deleteDesc, cancelAction, deleteAction);

}

export { userObj, token, createPostModal, readPostModal, deletePostModal }