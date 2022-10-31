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
  postHeading.innerText = `${postObj.title}`;
  postDesc.innerText = `${postObj.content}`;
  accessPostBtn.innerText = 'Acessar publicação';

  post.id = postObj.id;
  const userId = postObj.user.id;

  postInfo.insertAdjacentHTML('afterbegin', `
    <img id="${userId}" class="userImg postImg" src="${postObj.user.avatar}" >
    <span class="postUserName">${userName.innerText}</span>
    <span class="verticalLine">|</span>
    <span class="postDate">${postObj.createdAt}</span>
  `)

  // accessPostModal(accessPostBtn);
  createUserActions(postActions, userId);
  
  postHeader.appendChild(postInfo);
  postHeader.appendChild(postActions);
  post.append(postHeader, postHeading, postDesc, accessPostBtn);

  return post;
}

function createUserActions(element, id) {

  const userId = document.querySelector('.userImg');
  if (id === userId.id) {
    element.insertAdjacentHTML('beforeend', `
      <button class="action edit">Editar</button>
      <button class="action delete">Excluir</button>
    `)
  }
}

export { createNewPost }