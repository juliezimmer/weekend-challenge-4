//client-side logic with angular
//instantiate the angular application module
var app = angular.module('EmployeeApp', []);

//create the application controller to handle http requests
app.controller('EmployeeController', ['$http', function ($http){
    console.log('Employee controller has been loaded');
    var self = this;
    self.employees = [];
    self.newEmployee = {};
    //gets employee list from DB to load on the DOM
    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/employee',
        }).then(function(response) {
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
            console.log(self.employees);
        });//end of $http request
   };//end of getEmployees function
   
   //Add the new employee to the DB
   self.postNewEmployee = function() {
       var newEmployee = {
           first_name: self.newEmployee.firstName,
           last_name: self.newEmployee.lastName,
           job_title: self.newEmployee.jobTitle,
           annual_salary: self.newEmployee.annualSalary
       }
       $http({
           method:'POST',
           url: '/employee',
           data: self.newEmployee
       }).then(function(response) {
            console.log(response);
            self.getEmployees(); //this function will now update the DOM with the //new employee
       }); //end of $http POST request
   }; //end of postNewEmployee function

        //clear the DOM of newly entered employee
        self.newEmployee = {};
    
    //calculate the monthly salary expenditure for the company
    self.getTotalMonthlySalary = function () {
        var total = 0;
        console.log(self.employees);
        for (var i = 0; i < self.employees.length; i++) {
            var salary = self.employees[i].annual_salary;
            total += salary; 
        }//end loop through employees array
        return total/12;
    }//end getTotalMonthlySalary function

    self.getEmployees();
}]);


