// this is without $scope
myApp.controller('mainController',['$http','BlogService',function($http,BlogService) {

  //create a context
  var main = this;


  this.pageHeading = 'edWisor Blog';
  this.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.blogs = [];
  console.log(this.blogs);

  this.loadAllBlogs = function(){
   
      BlogService.getAllBlogs()
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          main.blogs = response.data.data;
          console.log(main.blogs);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all blogs

  //this.loadAllBlogs();

  this.deleteBlog = function(blogId,index){

      // no body parameters are needed
        var myData = {};
        //console.log(index);
        console.log(main.blogs.length);
        BlogService.deleteBlog(blogId)
        .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
        alert("blog deleted successfully");
          
        main.blogs.splice(index,1);
        console.log(main.blogs.length);
          

        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }// end delete blog


   


}]); // end controller