import { dynamicModal } from "../../scripts/modal.js";
import { urls, homePageWithApi } from "../../scripts/api.js";
const token = JSON.parse(localStorage.getItem('token')).token;
const userObj = await homePageWithApi(urls.getProfile, 'GET', token);
console.log(userObj)
const userImg = document.querySelector('.userImg');
userImg.src = userObj.avatar;

dynamicModal();

const postList = document.querySelector('#postList');

function createNewPost(postObj) {

  const post          = document.createElement('li');
  const postHeader    = document.createElement('div');
  const postInfo      = document.createElement('div');
  const userName      = document.createElement('span');
  const postActions   = document.createElement('div');
  const postHeading   = document.createElement('h2');
  const postDesc      = document.createElement('p');
  const accessPostBtn = document.createElement('button');

  post.classList.add('post');

  postHeader.classList.add('postHeader');
  postInfo.classList.add('postInfo');
  postActions.classList.add('postUserActions');

  postHeading.classList.add('postHeading');
  postDesc.classList.add('postDescription');

  accessPostBtn.classList.add('accessPost');

  userName.innerText = postObj.user.username;

  postInfo.insertAdjacentHTML('afterbegin', `
    <img class="userImg postImg" src="${postObj.user.avatar}">
    ${userName.innerText}
    <span class="verticalLine">|</span>
    <span class="postDate">${postObj.createdAt}</span>
  `)

  postHeading.innerText = `${postObj.title}`;
  postDesc.innerText = `${postObj.content}`;
  accessPostBtn.innerText = 'Acessar publicação';

  postHeader.appendChild(postInfo);

  if (userName.innerText === userObj.username) {
    postActions.insertAdjacentHTML('beforeend', `
      <button class="action edit">Editar</button>
      <button class="action delete">Excluir</button>
    `)
    postHeader.appendChild(postActions);
  }

  post.append(postHeader, postHeading, postDesc, accessPostBtn);

  console.log(post)
  return post;

}

async function renderPost() {

  postList.innerHTML = '';
  const postArr = await homePageWithApi(urls.allPosts, 'GET', token);
  postArr.forEach(post => {
    console.log(post)
    const returnPost = createNewPost(post);
    postList.appendChild(returnPost);
  })

}

renderPost();