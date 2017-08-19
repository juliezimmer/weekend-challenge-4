//client-side logic with angular
//instantiate the angular application module
var app = angular.module('EmployeeApp', []);

//create the application controller to handle http requests
app.controller('EmployeeController', ['$http', function ($http){
    console.log('Employee controller has been loaded');
    var self = this;
    self.employees = [];

}]);