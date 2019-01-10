
(function() {
    angular.module('app')
        .factory('oAuthFactory', oAuthFactory);

    oAuthFactory.$inject = ['oAuthService', 'localStorageService', '$q', '$location'];

    function oAuthFactory(oAuthService, localStorageService, $q, $location) {

        var factory = {
            login: logar,
            logOff: logOff,
            authentication: {
                isAuth: false,
                userName:''
            }
        };

        function logOff(error) {
            //Removemos as credenciais do usuário do cookie
            localStorageService.remove('autorizationData');

            //Inicializa a autenticação do usuário
            factory.authentication.isAuth = false;
            factory.authentication.userName = '';

            //Volta para a página de login
            $location.path('/');
        }

        function logar(userLogin) {

            var defered = $q.defer();

            //Para que a gente possa logar precisamos chamar o nosso service
            oAuthService.login(userLogin).then(success, fail);

            function success(respose) {
                //Preciso de um nome e os dados
                localStorageService.set('autorizationData', {
                    token: respose.data.access_token,
                    userName: respose.data.Usuario
                });
                factory.authentication.isAuth = true;
                factory.authentication.userName = respose.data.Usuario;

                defered.resolve(respose);
            }

            function fail(response) {
                //Se algo der errado, rejeitamos a requisição e damos o logOff
                factory.logOff();
                defered.reject(response);
            }

            return defered.promise;
        }
        return factory;
    }
})();