
(function() {

    angular.module('app')
        .directive('headerCustom', headerCustom);

    function headerCustom() {
        
        //Criando a diretiva
        var directive = {
            restrict: 'AEC', // => Atributo ou Elemento ou Classe
            templateUrl: 'app/views/directives/headerCustom.html'
        };

        return directive;
    }

})();