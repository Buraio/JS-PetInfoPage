import { redirect } from "../../scripts/input.js";
import { loginInputValues } from "../../scripts/login.js";

const registerPageHref = './src/pages/register/index.html';
const redirectInput = document.querySelector('.goBackTo');

redirect(redirectInput, registerPageHref);

loginInputValues();