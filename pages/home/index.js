const body = document.body;
const postList = document.querySelector('#postList');

function dynamicModal() {

  const modalContainer = document.createElement('div');
  const modalMain      = document.createElement('div');
  const closeModalBtn  = document.createElement('button');

  modalContainer.classList.add('modalContainer');
  modalMain.classList.add('modalMain');
  closeModalBtn.classList.add('modalClose');

  closeModalBtn.innerText = 'X';

  modalMain.appendChild(closeModalBtn);
  modalContainer.appendChild(modalMain);
  body.appendChild(modalContainer);
  body.classList.add('noScroll');

  closeModalBtn.addEventListener('click', () => {

    modalContainer.remove();
    body.classList.remove('noScroll');

  })

}

dynamicModal()

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
  postList.appendChild(post);

}

createNewPost()