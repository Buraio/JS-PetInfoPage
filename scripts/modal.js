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

  modalMain.appendChild(closeModalBtn);
  modalContainer.appendChild(modalMain);
  body.appendChild(modalContainer);
  body.classList.add('noScroll');

  closeModalBtn.addEventListener('click', () => {

    modalContainer.remove();
    body.classList.remove('noScroll');

  })

}

export { showTooltip, dynamicModal };