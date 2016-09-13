
myApp.controller('editBlogController',['$http','BlogService','$routeParams','$location',function($http,BlogService,$routeParams,$location) {

  //create a context
  var main = this;


  this.pageHeading = 'Edit a blog post';
  this.pageSubHeading = 'Change the values you want to change'

  this.blogId = $routeParams.blogId;
  console.log(this.blogId)

  this.getCurrentPost = function(){
     BlogService.getCurrentPost(this.blogId)
     .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.blog = response.data.data;
          console.log(main.blog);

          main.pageHeading = main.blog.heading;
          main.pageSubHeading = main.blog.subHeading;
          

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

  }

  this.editPost = function(blogId){

      var blogData = {

          heading     : main.blog.heading,
          subHeading  : main.blog.subHeading,
          bodyHtml    : main.blog.bodyHtml,
          author      : main.blog.author;

      }
      console.log(blogData);
      BlogService.editABlog(this.blogId,this.blogData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          alert("blog edited successfully");
          console.log(response.data);
          $location.path('/blog/'+blogId)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end load all blogs
   


}]); // end controller