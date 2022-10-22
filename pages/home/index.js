import { dynamicModal } from "../../scripts/modal.js";
import { urls, homePageWithApi } from "../../scripts/api.js";
const token = JSON.parse(localStorage.getItem('token'));
console.log(token);

// dynamicModal();

const postList = document.querySelector('#postList');

function createNewPost() {

  const post          = document.createElement('li');
  const postHeader    = document.createElement('div');
  const postInfo      = document.createElement('div');
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

  postInfo.insertAdjacentHTML('afterbegin', `
    <img class="userImg postImg">
    <span class="userName">Samuel Leão</span>
    <span class="verticalLine">|</span>
    <span class="postDate">Outubro de 2022</span>
  `)

  postActions.insertAdjacentHTML('beforeend', `
    <button class="action edit">Editar</button>
    <button class="action delete">Excluir</button>
  `)

  postHeader.append(postInfo, postActions);
  post.append(postHeader, postHeading, postDesc, accessPostBtn);

  console.log(post)
  return post;

}

async function renderPost() {

  postList.innerHTML = '';
  const postArr = await homePageWithApi(urls.allPosts, 'GET', {token});
  console.log(postArr)
  postArr.forEach(() => {
    const returnPost = createNewPost();
    postList.appendChild(returnPost);
  })

}

renderPost();