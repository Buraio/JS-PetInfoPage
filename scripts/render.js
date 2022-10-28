import { postList, createNewPost } from "./posts.js";
import { urls, homePageWithApi } from "../../scripts/api.js";
import { accessPostModal } from "../../scripts/modal.js";
const token = JSON.parse(localStorage.getItem('token')).token;

async function homeInfo() {

  const userObj = await homePageWithApi(urls.getProfile, 'GET', token);
  const userImg = document.querySelector('.userImg');
  const userName = document.querySelector('.userName');

  userName.innerText = `@${userObj.username}`;
  userImg.src = userObj.avatar;

}

async function renderPost() {

  postList.innerHTML = '';
  const postArr = await homePageWithApi(urls.allPosts, 'GET', token);
  postArr.forEach(post => {
    console.log(post)
    const returnPost = createNewPost(post);
    postList.appendChild(returnPost);
  })
  accessPostModal();
}

export { homeInfo, renderPost }