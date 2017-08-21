//client-side logic with angular
//instantiate the angular application module
var app = angular.module('EmployeeApp', []);

//create the application controller to handle http requests
app.controller('EmployeeController', ['$http', function ($http){
    console.log('Employee controller has been loaded');
    var self = this;
    self.employees = [];

    //gets employee list from DB to load on the DOM
    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/employee',
        }).then(function(response) {
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
        });//end of $http request
   };//end of getEmployees function
   
   //Add the new employee to the DB
   self.postNewEmployee = function() {
       $http({
           method:'POST',
           url: '/employee',
           data: self.newEmployee
       }).then(function(response) {
            console.log(response);
            self.getEmployees(); //this function will now update the DOM with the //new employee
       }); //end of $http POST request
   }; //end of postNewEmployee function
   self.newEmployee = {};
}]);


