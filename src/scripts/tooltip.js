const tooltipError = document.querySelector('.fail');
const tooltipSuccess = document.querySelector('.success');

function registerTooltip(message) {

  if (message) {

    const failMessage = document.querySelector('.failMessage');
    failMessage.innerText = message;

    tooltipError.classList.add('show');
    tooltipError.classList.remove('hidden');

  }
  else {

    const link = document.querySelector('.pageRef');
    tooltipSuccess.classList.add('show');
    tooltipSuccess.classList.remove('hidden');
  
    link.href = '../../../index.html';

  }
}

function hidetooltip() {
  tooltipSuccess.classList.add('hidden');
  tooltipError.classList.add('hidden');
}

export { registerTooltip, hidetooltip };