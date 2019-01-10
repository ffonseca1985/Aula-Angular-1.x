
(function () {

    angular.module('app')
        .factory('usuarioFactory', usuarioFactory)

    function usuarioFactory() {

        var factory = {
               usuarioSelecionado: {} 
        };

        return factory;
    }
})();