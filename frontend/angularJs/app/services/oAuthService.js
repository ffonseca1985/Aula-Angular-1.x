
(function() {
    
    //Vamos criar a chamada da autenticação
    angular.module('app')
        .service('oAuthService', oAuthService);

    //Precisamos dos servicos
    oAuthService.$inject = ['$http', 'api'];

    function oAuthService($http, api) {

        this.login = logar;

        function logar(login) {
            //Este item vai no Body!!
            var data = 'grant_type=password&username=' + login.userName
                + '&password=' + login.password;

            //Passando os parametros via post
            //1- Url
            //2- Dados
            //3- header
            return $http.post(api + 'login', data, {
                      header:{'Content-type': 'application/x-www-form-urlecoded' }     
            });
        }
    }
})();