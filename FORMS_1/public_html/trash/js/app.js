var formsApp = angular.module("formsApp", []);

formsApp.controller('FormsController', ['$scope', '$http', function ($scope, $http) {

        $scope.checkForm = function () {

            var encodedString = 'firstname=' +
                    encodeURIComponent(this.regForm.firstname) +
                    '&password=' +
                    encodeURIComponent(this.regForm.password);

            $http({
                method: 'POST',
                url: 'check-login.php',
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
                    })
        }


    }]);