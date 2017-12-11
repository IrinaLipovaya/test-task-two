(function() {
    angular.module("app")
        .controller("signupController", signupController);

    signupController.$inject = ["$location"];

    function signupController($location) {
        var vm = this;

        vm.signup = function(isValid) {
            if(isValid) {
                $location.path("/welcome");
            }
        }
    }
}());
