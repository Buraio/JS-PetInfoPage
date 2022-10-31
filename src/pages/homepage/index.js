import { renderPost, homeInfo } from "../../scripts/render.js";
import { urls, homePageWithApi } from "../../scripts/getApi.js";
import { logOut } from "../../scripts/input.js";

const logOutBtn = document.querySelector('.logOut');
const postList = document.querySelector('#postList');
const token = JSON.parse(localStorage.getItem('token')).token;
const userObj = await homePageWithApi(urls.getProfile, 'GET', token);

homeInfo(token);
renderPost(postList, token);
logOut(logOutBtn, token);

export {  token, userObj };