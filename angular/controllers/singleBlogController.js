
myApp.controller('singleBlogController',['$http','BlogService','$routeParams',function($http,BlogService,$routeParams) {

  //create a context
  var main = this;


  this.pageHeading = '';
  this.pageSubHeading = ''
  this.blogId = $routeParams.blogId;

  console.log(this.blogId);

  this.loadSingeBlog = function(){
   
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


  }// end load all blogs

  
   


}]); // end controller

