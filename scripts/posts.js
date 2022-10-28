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

  postInfo.insertAdjacentHTML('afterbegin', `
    <img class="userImg postImg" src="${postObj.user.avatar}">
    ${userName.innerText}
    <span class="verticalLine">|</span>
    <span class="postDate">${postObj.createdAt}</span>
  `)

  userName.innerText = postObj.user.username;
  postHeading.innerText = `${postObj.title}`;
  postDesc.innerText = `${postObj.content}`;
  accessPostBtn.innerText = 'Acessar publicação';

  // accessPostModal(accessPostBtn);
  createUserActions(postActions);
  
  postHeader.appendChild(postInfo);
  postHeader.appendChild(postActions);
  post.append(postHeader, postHeading, postDesc, accessPostBtn);

  console.log(post)
  return post;
}

function createUserActions(element) {

  // if (userName.innerText === userObj.username) {
    element.insertAdjacentHTML('beforeend', `
      <button class="action edit">Editar</button>
      <button class="action delete">Excluir</button>
    `)
    

//   }
}

export { postList, createNewPost }