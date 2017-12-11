angular
    .module("app", ["ngRoute"])
    .config(routeConfig);

routeConfig.$inject = ["$routeProvider"];

function routeConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/components/login/loginView.html",
            controller: "loginController",
            controllerAs: "vm"
        })
        .when("/login", {
            templateUrl: "app/components/login/loginView.html",
            controller: "loginController",
            controllerAs: "vm"
        })
        .when("/signup", {
            templateUrl: "app/components/signup/signupView.html",
            controller: "signupController",
            controllerAs: "vm"
        })
        .when("/reset", {
            templateUrl: "app/components/reset/resetView.html",
            controller: "resetController",
            controllerAs: "vm"
        })
        .when("/welcome", {
            templateUrl: "app/components/welcome/welcomeView.html",
        })
        .when("/resetInfo", {
            templateUrl: "app/components/welcome/resetInfoView.html",
        })
        .otherwise({ redirectTo: '/login' });
}
