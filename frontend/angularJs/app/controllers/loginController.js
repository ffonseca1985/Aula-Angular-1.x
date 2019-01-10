
(function() {

    angular.module('app')
        .controller('loginController', loginController);

    //Precisamos da Factory para fazer o login!!!!
    loginController.$inject = ['$scope', 'oAuthFactory', '$location'];

    function loginController($scope, oAuthFactory, $location) {

        $scope.login = logar;
        $scope.status = '';

        function logar(login) {
            //Fazendo o login
            oAuthFactory.login(login).then(sucess, fail);

            function sucess(reponse) {
                //Caso for logado mandar para a página de cadastro de usuario
                $location.path('/cadastroUsuario');
            }
            function fail(response) {
                oAuthFactory.logOff();
                //Preenchendo a variavel status
                $scope.status = response.data.error_description;
            }
        }
    }
})();