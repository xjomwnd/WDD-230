// 1.
document.getElementById('getText').addEventListener('click', getText);
function getText() {
  fetch('sample.txt')
  .then( (res) => {
    // 1. console.log(res);
    // console.log(res.json());
    // 2. console.log(res.text());
    return res.text();  // 3. passing text to (data)
  })
  .then( (data) => {
    // console.log(data); // 4.
    document.getElementById('output').innerHTML = data; // 5.
  })
  .catch( err => console.log(err) );  

}

// 6.
document.getElementById('getUsers').addEventListener('click', getUsers);
function getUsers() {
  fetch('users.json')
  .then( res => res.json() )
  .then( data => {
    let output = '<h2 class="mb-4">Users</h2>';
    data.forEach( user => {
      // 11. add bootstrap class
      output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Age: ${user.age}</li>
          <li class="list-group-item">Email: ${user.email}</li>
        </ul>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

// 7.
document.getElementById('getPosts').addEventListener('click', getPosts);
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then( res => res.json() )
  .then( data => {
    // 12. add bootstrap class
    let output = '<h2 class="mb-4">Posts</h2>';
    data.forEach( post => {
      output += `
        <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
    document.getElementById('output').innerHTML = output;
  })
}

// 8.
document.getElementById('addPost').addEventListener('submit', addPost);
function addPost(e) {
  e.preventDefault();
  
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title:title, body:body })
  })
  .then( res => res.json() )
  .then( data => console.log(data) )
}