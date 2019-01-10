
(function() {

    angular.module('app')
        .directive('tabelaUsuario', tabelaUsuario);

    //Podemos definir apartir de diretivas componentes
    function tabelaUsuario() {

        //Injetar elementos dentro dela
        controller.$inject = ['$scope', '$location', 'usuarioFactory'];

        //Definindo uma controller para o minha diretiva
        function controller($scope, $location, usuarioFactory) {
        
            $scope.getUsuarioSelecionado = selecionarUsuario;

            //Quando clicar na tabela
            //Vou passar o usuario selecionado para a factory
            function selecionarUsuario(usuario) {
                // Quando selecionei o usuario coloquei-o na factory (usuarioFactory)
                usuarioFactory.usuarioSelecionado = usuario;
                $location.path('/details');
                //$scope.usuarioSelecionado = usuarioFactory.usuarioSelecionado;
            }
        }

        var directive = {
            restrict: 'AEC',
            templateUrl: 'app/views/directives/tabelaUsuario.html',
            //Definindo um scope local na minha diretiva
            scope: {
                //ele será entrega de fora, ou seja, da controle externa
                //xtb é um elemento externo
                //Quando está só o igual significa que o elemento externo
                //tem o mesmo nome
                tbUsuario: '=xtb',
                data:'='
            },
            controller: controller
        };
        return directive;
    }
})();