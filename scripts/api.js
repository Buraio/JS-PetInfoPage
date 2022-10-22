const searchEndpoint = 'users/createhttp://localhost:3333/users/profile/';
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

    const beforeResponse = request;
    console.log(beforeResponse)
    if (beforeResponse.ok) {
      const response = await request.json();
      return response;
    }

  }
  catch (err) {
    console.log(err);
  }

}

async function homePageWithApi(url, method, localStorage) {

  try {

    const request = await fetch(url, {
      method: method,
      headers: {
        header,
        'Authorization': `Bearer ${localStorage.token}`
      },
    })

    const response = request;
    console.log(response)

    if (response) {
      const result = await request.json();
      console.log(result)
      return result;
    }

  }
  catch (err) {
    console.log(err);
  }

}

homePageWithApi(urls.getProfile, 'GET', {token: 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjYzNzM5ODAsImV4cCI6MTY5NzkwOTk4MCwic3ViIjoiYTdiMjcyMWQtOGI4Zi00YzljLWE3OGItZjY2ZTMyOWZlMmM0In0.nrf7M1Eugalp1k1-ZOxflW-_ByE7Wudi5UBC57EY9D8"})

homePageWithApi(urls.allPosts, 'GET', {token: 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjYzNzM5ODAsImV4cCI6MTY5NzkwOTk4MCwic3ViIjoiYTdiMjcyMWQtOGI4Zi00YzljLWE3OGItZjY2ZTMyOWZlMmM0In0.nrf7M1Eugalp1k1-ZOxflW-_ByE7Wudi5UBC57EY9D8"})

export { urls, accountWithApi, homePageWithApi };