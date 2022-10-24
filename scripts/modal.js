function showTooltip() {

  const tooltipDiv = document.querySelector('.tooltipDiv');
  const link = document.querySelector('.pageRef');

  tooltipDiv.classList.add('show');
  tooltipDiv.classList.remove('hidden');

  link.href = '../../index.html';

}

const body = document.body;

function dynamicModal() {

  const modalContainer = document.createElement('div');
  const modalMain      = document.createElement('div');
  const closeModalBtn  = document.createElement('button');

  modalContainer.classList.add('modalContainer');
  modalMain.classList.add('modalMain');
  closeModalBtn.classList.add('modalClose');

  closeModalBtn.innerText = 'X';

  body.appendChild(modalContainer);
  body.classList.add('noScroll');

  closeModalBtn.addEventListener('click', () => {

    modalContainer.remove();
    body.classList.remove('noScroll');

  })

  modalContainer.appendChild(modalMain);

}

function deletePostModal() {

  const postHeader   = document.createElement('div');
  const heading      = document.createElement('h3');
  const question     = document.createElement('h4');
  const deleteDesc   = document.createElement('p');
  const cancelAction = document.createElement('button');
  const deleteAction = document.createElement('button');

  heading.innerText = 'Confirmação de exclusão';
  question.innerText = 'Tem certeza que deseja excluir esse post?';
  deleteDesc.innerText = 'Esta ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir';
  cancelAction.innerText = 'Cancelar';
  deleteAction.innerText = 'Sim, excluir esse post';

}

export { showTooltip, dynamicModal };