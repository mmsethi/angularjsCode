var formsApp = angular.module("formsApp", ['ngRoute']);

formsApp.controller('FormsController', ['$scope', '$http', function ($scope, $http) {

        $scope.checkForm = function () {

            var encodedString = 'firstname=' +
                    encodeURIComponent(this.regForm.firstname) +
                    '&password=' +
                    encodeURIComponent(this.regForm.password);

            $http({
                method: 'POST',
                url: 'register',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                    .success(function (data, status, headers, config) {
                        console.log(data);
                        if (data.trim() === 'correct') {
                            window.location.href = 'success.html';
                        } else {
                            $scope.errorMsg = "Login not correct";
                        }
                    })
                    .error(function (data, status, headers, config) {
                        $scope.errorMsg = 'Unable to submit form';
                    });
        };
        $scope.message = 'Forms Controller ';
        $scope.title = "Registeration Page";

    }]);
formsApp.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

        $scope.checkLogForm = function () {

            var encodedString = 'firstname=' +
                    encodeURIComponent(this.logForm.firstname) +
                    '&password=' +
                    encodeURIComponent(this.logForm.password);

            $http({
                method: 'POST',
                url: 'login',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                    .success(function (data, status, headers, config) {
                        console.log(data);
                        if (data.trim() === 'correct') {
                            window.location.href = 'success.html';
                        } else {
                            $scope.errorMsg = "Login not correct";
                        }
                    })
                    .error(function (data, status, headers, config) {
                        $scope.errorMsg = 'Unable to submit form';
                    });
        };

        $scope.message = 'Login Controller ';
        $scope.title = "Login Page";

    }]);


formsApp.config(function ($routeProvider,$locationProvider) {
       $locationProvider.html5Mode(true);

    
    $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'
            })

            // route for the contact page
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })

            // route for the contact page
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'formsController'
            })
            .when('/', {
                templateUrl: 'views/404.html'}).
            otherwise({
                redirectTo: '/404'
            });
});
formsApp.controller('mainController', function ($scope) {
    // create a message to display in our view
 
    $scope.message = 'Everyone come and see how good I look!';
    $scope.title = "Home Page";
});
;

formsApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.title = "About Page";
});

formsApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.title = "Contact Page";
});