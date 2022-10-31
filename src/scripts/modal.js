import { createPostModal, deletePostModal } from "./modalActions.js";

const body = document.body;

function dynamicModal(heading) {

  const modalContainer = document.createElement('div');
  const modalMain      = document.createElement('div');
  const postHeader   = document.createElement('div');
  const button = document.createElement('button');

  modalContainer.classList.add('modalContainer');
  modalMain.classList.add('modalMain');  
  postHeader.classList.add('postHeader');
  button.classList.add('modalClose');

  button.innerText = 'X';
  closeModal(button, modalContainer);

  modalContainer.appendChild(modalMain);
  postHeader.append(heading, button);
  modalMain.append(postHeader)

  body.classList.add('noScroll');
  body.appendChild(modalContainer);

  return modalMain;

}

function closeModal(button, parent) {
  button.addEventListener('click', () => {
    parent.remove();
    body.classList.remove('noScroll');
  })
}

function accessPostModal() {

  const createBtn    = document.querySelector('.createPost');
  const accessBtnArr = document.querySelectorAll('.accessPost');
  const editBtnArr   = document.querySelectorAll('.edit');
  const deleteBtnArr = document.querySelectorAll('.delete');

  createBtn.addEventListener('click', createPostModal);


  loopBtnArray(deleteBtnArr, deletePostModal);

}

function loopBtnArray(arr, callback) {
  arr.forEach(button => {
    button.addEventListener('click', callback);
  })
}

export { dynamicModal, accessPostModal };