(function() {
    angular.module("app")
        .controller("resetController", resetController);

    resetController.$inject = ["$location"];

    function resetController($location) {
        var vm = this;

        vm.reset = function(isValid) {
            if(isValid) {
                $location.path("/resetInfo");
            }
        }
    }
}());
