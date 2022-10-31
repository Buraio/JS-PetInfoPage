import { redirect } from "../../scripts/input.js"
import { registerInputValues } from "../../scripts/register.js";

const redirectInput = document.querySelectorAll('.goBackTo');

redirectInput.forEach(button => redirect(button, '../../../index.html'));
registerInputValues();