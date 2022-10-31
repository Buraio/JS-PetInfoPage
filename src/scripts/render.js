import { createNewPost } from "./posts.js";
import { urls, homePageWithApi } from "./getApi.js";
import { accessPostModal } from "./modal.js";
import { userObj } from "./modalActions.js";

async function homeInfo(token) {

  verifyUserLogin(token);

  const userImg = document.querySelector('.userImg');
  const userName = document.querySelector('.userName');

  userImg.id = userObj.id;

  userName.innerText = `@${userObj.username}`;
  userImg.src = userObj.avatar;

}

async function renderPost(listElement, token) {

  listElement.innerHTML = '';
  const postArr = await homePageWithApi(urls.allPosts, 'GET', token);
  postArr.forEach(post => {
    const returnPost = createNewPost(post);
    listElement.appendChild(returnPost);
  })
  accessPostModal();
}

function verifyUserLogin(token) {
  if (!token) {
    location.replace('../../../index.html');
  }
}

export { homeInfo, renderPost }