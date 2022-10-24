const form = document.querySelector('.registerForm');

function getInputs(inputName) {

  const formElements = [...form.elements];
  console.log(formElements)

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

function validateBtn() {


  const submitBtn = document.querySelector('.submit');
  submitBtn.disabled = false;
  

}

export { getInputs, form, redirect, validateBtn };