
(function () {
    angular.module('app')
        .controller('homeController', homeController);

    // Toda vez que injetar tem que referenciar lá no callback.
    homeController.$inject = ['$scope', 'usuarioService', 'usuarioFactory', '$location', 'getData',
    'location', '$rootScope', 'profissaoService', '$filter',
    'usuario2Service'];

    //$filter -> é um objeto que contém todos os filtros nele.
    function homeController($scope, usuarioService, usuarioFactory,
        $location, getData, location, $rootScope, profissaoService,
        $filter, usuario2Service) {

        //O Watch fica observando um elemento do model => modelo
        $scope.$watch('formulario.profissao', function(newValue, oldValue) {
            //A principio o elemento vem undefined
            if (newValue == undefined)
                return;

            
            // O BroadCast procura uma função e a execulta
            $scope.$broadcast('verificarProfissao', newValue);
            //if (newValue.nome == 'Designer')
            //    $rootScope.titulo = "Vira Homem!!!";
            //else 
            //    $rootScope.titulo = "Sistema de controle de Usuario";
        });

        $scope.$on('verificarProfissao', function (valor, newValue) {
            //$scope.$apply();

            if (newValue.nome == 'Designer')
                $rootScope.titulo = "Vira Homem!!!";
            else 
                $rootScope.titulo = "Sistema de controle de Usuario";

        });


        //$scope.titulo = "Cadastro de Usuario interno";

        //Vem de profissaoServices!!
        $scope.profissoes = profissaoService.profissao();
        //Ele retorna promessa, que hora ele vai retornar algo
        //sucess, fail é um callback

        //usuarioService.usuarios().then(success, fail);

        //function success(response) {
        //    var filtro = $filter("usuarioFilter")(response.data);
        //    $scope.usuarios = filtro;
        //}

        //function fail(response) { }
        usuario2Service.usuarios().query(function (response) {
            $scope.usuarios = response;
        });

        usuario2Service.usuarios().get({ id : 1}, function (response) {
            $scope.usuarioId = response;
        });

        //Provider que irá chamar a função $Get
        $scope.data = getData;
        $scope.location = location;

        $scope.addUsuario = addUsuario;
        
        //O usuario não esta selecionado no inicio.
        $scope.usuarioSelecionado = {};

        //É criado um modelo na controller, pois, criamos um modelo na view
        //Atrávez do ng-model
        //Também é criado um modelo do form constituido pelos names.
        function addUsuario(cadastro) {

            //$scope.usuarios.push(angular.copy(cadastro));
            //usuarioService.addUsuario(cadastro).then(success2, error2);

            usuario2Service.usuarios().save({}, angular.copy(cadastro), function(data) {
                var a = data;
            });

            //Quando for retornado a lista de usuarios
            //Será reiniciado o Formulário
            function success2(response) {

                $scope.usuarios = response.data;
                $scope.formulario = {};
                //Volta o estado do formulário
                $scope.formularioCadastro.$setPristine();
            }

            function error2(response) {
                var data = response;
            }
        }
    }
})();