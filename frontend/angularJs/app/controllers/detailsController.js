
(function () {

    //Inicializando o Modulo
    angular.module('app')
        .controller('detailsController', detailsController)

    // Injetando as dependencias
    // Resgatando a factory (Singleton)
    detailsController.$inject = ['$scope', 'usuarioFactory']

    // O callBack ele precisa ter as referências
    function detailsController($scope, usuarioFactory) {
        
        //Colocando uma factory geranda em outro escopo
        $scope.usuarioSelecionado = usuarioFactory.usuarioSelecionado;
        //Criando uma variavel chamada test com o valor a seguir:
        $scope.test = "Testando controllers";
    }

})();
