const form = document.querySelector('.registerForm');
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
    location.replace(href);
  })
}

function animateSubmit() {

  const animImg = document.createElement('img');
  animImg.src = '/pages/assets/icons/spinner.png'
  animImg.classList.add('loader');
  submit.innerHTML = '';
  submit.append(animImg);

}

export { getInputs, form, redirect, submit, animateSubmit };