describe('index', () => {
  describe('post form', () => {
    it('exists and submits correctly', () => {
      var postForm = document.getElementById("post-form");
      expect(postForm).toExist("Must have a form with an id of post-form");
      expect(postForm).toMatch(/onsubmit="createPost()/, "Form must submit to a createPost() function");
    })
  })

  describe('functions', () => {
    before(() => {
      window._ = require('lodash')
    })

//    describe('createPost', () => {
 //     it('exists', () => {
 //      expect(createPost).toExist("Must have a function named //createPost")
      })
      //it('builds the proper templates', () => {
      //  var spy = expect.spyOn(window._, 'template'//).andCallThrough()
      //  createPost()
      //  expect(spy).toHaveBeenCalledWith(document//.getElementById("page-template").innerHTML)
      //  expect(spy).toHaveBeenCalledWith(document//.getElementById("post-template").innerHTML)
     // })
   // })

    //describe('postComment', () => {
    //  it('exists', () => {
     //   expect(postComment).toExist("Must define a function //named postComment")
     // })
    //  it('builds the proper templates', () => {
     //   createPost()
     //   var spy = expect.spyOn(window._, 'template').andReturn//(function(){})
      //  postComment()
     //   expect(spy).toHaveBeenCalledWith(document//.getElementById("comment-template").innerHTML)
    //  })
    //})
 // })

  //describe('templates', () => {
 //   it('has a comments template', () => {
  //    var commentsTemplate = document.getElementById("comments//-template");
    //  expect(commentsTemplate).toExist("Must have a lodash //template with an id of 'comments-template'");
     // expect(commentsTemplate.type).toBe("text/x-lodash//-template", "Must be of type text/x-lodash-template");
    //  expect(commentsTemplate.innerHTML).toMatch(/div id//="comments"/, "Template must have a div with an id of //'comments'");
    //  expect(commentsTemplate.innerHTML).toMatch(/form onsubmit//="postComment()/, "Template must include a form to post //comments");
    })
   