(function() {
    angular.module("app")
        .controller("loginController", loginController);

    loginController.$inject = ["$location"];

    function loginController($location) {
        var vm = this;

        vm.login = function(isValid) {
            if(isValid) {
                $location.path("/welcome");
            }
        }
    }
}());
