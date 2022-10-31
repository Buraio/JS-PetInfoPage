const form   = document.querySelector('.registerForm');
const submit = document.querySelector('.submit');

function getInputs(inputName) {

  const formElements = [...form.elements];
  const inputArr = formElements.filter(element => {
    if (element.tagName === inputName) {
      return element;
    }
  });

  return inputArr;
}

function redirect(button, href) {
  button.addEventListener('click', () => {
    location.assign(href);
  })
}

function animateSubmit() {

  const animImg = document.createElement('img');
  animImg.src = '../../assets/img/spinner.png'
  animImg.classList.add('loader');
  submit.innerHTML = '';
  submit.append(animImg);

}

const logOut = (input, token) => {
  input.addEventListener('click', () => {
    location.assign('../../../index.html');
    if (token) {
      localStorage.removeItem('token');
    }
  })
}

export { getInputs, form, redirect, submit, animateSubmit, logOut };