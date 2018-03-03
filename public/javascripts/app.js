var app = angular.module('easyLabel',['ngRoute', 'ui.bootstrap','angularUtils.directives.dirPagination']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when("/", {
        templateUrl : "clients.html",
        controller : "clients"
    })
    .when("/listProducts", {
        templateUrl : "products.html",
        controller : "products"
    });

    // remove o # da url
    $locationProvider.html5Mode(true);
});

app.controller('clients', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/clients');    
    request.then(function successCallback(response) {
        $scope.data  = response.data;
        return  $scope.data; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });
});

app.controller('products', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/products');    
    request.then(function successCallback(response) {
        $scope.data = response.data;
        return  $scope.data; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });

    $scope.removeRow = function (product, product2) {
        //var i = $scope.users[idx];
        console.log('value2 i:' + product);
        console.log('value2 i:' + product2);
        alert("Clicked!!!!");
    }
});

