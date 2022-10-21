const searchEndpoint = 'users/createhttp://localhost:3333/users/profile/';
const header = {'Content-Type': 'application/json'};

const urls = {

  register: 'http://localhost:3333/users/create',
  login: 'http://localhost:3333/login',
  createPost: 'http://localhost:3333/posts/create',
  allPosts: 'http://localhost:3333/posts',

  //A verificar
  updatePost: 'http://localhost:3333/posts/ee9141ab-43fb-403d-ba53-520b0b2eb31a',
  deletePost: 'http://localhost:3333/posts/632ddab1-2d5a-4533-9b82-a846fe12f2b2'

}

async function getApi(body, url, method) {

  try {

    const request = await fetch(url, {
      method: method,
      headers: header,
      body: JSON.stringify(body)
    })

    const response = await request.json();
    return response;

  }
  catch (err) {
    console.log(err);
  }

}

export { urls, getApi};