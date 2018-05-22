
var app = angular.module('agricolture', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: "view/login.html",
        controller: "login"
    })
    .when('/home', {
        templateUrl: "view/home.html",
        controller: "home"
    }).otherwise({
        templateUrl: "view/empty.html",
    });
});

app.controller('login', function ($scope, $http)
{
    $scope.logging = function ()
    {
        var user = {
            emailAddress: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        
        
    };
});

app.controller('home', function ($scope, $http)
{
    $scope.alfa = "Hello";
    
    $http.get('/alfa')
            .then(function (response)
    {
        $scope.alfa = response.data;
    });
    
    
});



