function createPost() {
  event.preventDefault();
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value
  let postTemplate = document.getElementById('post-template').innerHTML;
 
  //create template function
  let templateFn = _.template(postTemplate);
 
  let postDiv = document.getElementById('posts');
 
  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ title: title, body: body, author: author });
 
  //append rather than replace!
  postDiv.innerHTML += templateHTML;
}