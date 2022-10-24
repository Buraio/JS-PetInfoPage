const header = {'Content-Type': 'application/json'};
const urls = {
  register: 'http://localhost:3333/users/create',
  login: 'http://localhost:3333/login',
  createPost: 'http://localhost:3333/posts/create',
  allPosts: 'http://localhost:3333/posts',
  getProfile: 'http://localhost:3333/users/profile',
  updatePost: 'http://localhost:3333/posts/',
  deletePost: 'http://localhost:3333/posts/'
}

async function accountWithApi(body, url, method) {

  try {

    const request = await fetch(url, {
      method: method,
      headers: header,
      body: JSON.stringify(body)
    })

    const response = request;
    if (response.ok) {
      const result = await request.json();
      return result;
    }

  }
  catch (err) {
    console.log(err);
  }

}

async function homePageWithApi(url, method, token) {

  try {

    const request = await fetch(url, {
      method: method,
      headers: {
        header,
        'Authorization': `Bearer ${token}`
      },
    })

    const response = request;

    if (response) {
      const result = await request.json();
      return result;
    }

  }
  catch (err) {
    console.log(err);
  }

}

export { urls, accountWithApi, homePageWithApi };