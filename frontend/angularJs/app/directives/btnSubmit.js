
(function() {

    //Para a directive basta seguir o passo abaixo
    angular.module('app')
        .directive('btnSubmit', btnSubmit);
        //.directive('btnSubmitSucess', btnSubmit); => <div btn-submit-sucess></div>

    //Delegate - Factory
    function btnSubmit() {

        //Podemos injetar serviços entre outros
        controller.$inject = ['$scope'];

        //Agente pode definir controller dentro de uma diretiva
        function controller($scope) {

            //Podemos definir um escope interno!!
            $scope.tituloButton = "Cadastrar Usuario com Directiva";
        }

        //Objeto Literal
        var directive = {
            // A: Atributo => <div btn-submit></div>
            // E: Elemento => <btn-submit></btn-submit>
            // C: Class => <div class="btn-submit"></div>
            restrict: 'AEC', // => A diretiva aceita Elemento ou Atributo ou Classe 
            templateUrl: 'app/views/directives/btnSubmit.html', //=>Lugar aonde está o HTML
            controller:controller,
            //scope:{},
            //transclude:true,
            //link: function(scope, element, attr){}
            replace:true //Remove a declaração da directive no html
        };
        //Deve-se retornar a factory - Sempre!!
        return directive;
    }
})();