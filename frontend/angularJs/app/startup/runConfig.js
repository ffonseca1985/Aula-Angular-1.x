(function () {
    //Um elemento que executa primeiro de executar as controles, porem antes do config
    angular.module('app')
        .run(runConfig);

    runConfig.$inject = ['$rootScope'];

    function runConfig($rootScope) {

        //Definindo algumas variaveis globais
        $rootScope.titulo = "Sistema de controle de Usuario."
    }
})();