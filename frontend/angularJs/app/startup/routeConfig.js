
(function () {

    // 1 - Baixar o pacote ngRoute
    angular.module('app')
        .config(routeConfig);

    // RouteProvider é o provider(service) que permite agente 
    // fazer o roteamento
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {

        // Roteamento -> indicará o local do html, controllers, etc.
        $routeProvider.when('/', {
            templateUrl: './app/views/loginUsuario.html',
            controller: 'loginController'
        }).when('/cadastroUsuario', {
            templateUrl: './app/views/cadastroUsuario.html'
        }).when('/details', {
            templateUrl: './app/views/detailsUsuario.html'
        });//.otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(false);

    }
})();