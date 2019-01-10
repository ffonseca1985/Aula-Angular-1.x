
//Factory responsavel por interceptar todas as requisições
(function() {

    angular.module('app')
        .factory('interceptorFactory', interceptorFactory);

    interceptorFactory.$inject = ['localStorageService', '$q', 
        '$rootScope', 'oAuthEventConstant'];

    //Esta factory é uma receita de bolo!!!!
    function interceptorFactory(localStorageService, $q, $rootScope, oAuthEventConstant) {

        var factory = {
            
            //requests
            request: function(configRequest) {
                //Precisa interceptar a requisição e colocar o token no header
                var session = localStorageService.get('autorizationData');
                if (session != null)
                    configRequest.headers['Authorization'] = 'bearer ' + session.token;

                return configRequest || $q.when(configRequest);
            },
            //Responses
            response: function(configResponse) {
                var b = configResponse;
                return b;
            },
            //ErrorRespose
            responseError: function (configResponseError) {
                //um objeto nada mais é que uma chave e um valor
                //var usuario = { nome: 'fabio', idade: 30 }
                //usuario.nome ou usuario['nome']

                //Defini um dicionário
                var dicionario = {
                    400: oAuthEventConstant.notFound,
                    401: oAuthEventConstant.notAuthorized,
                    403: oAuthEventConstant.notAuthentication,
                    419: oAuthEventConstant.sessionTimeout,
                    440: oAuthEventConstant.sessionTimeout
                };
                //dicionario[401] => oAuthEventConstant.notAuthorized

                $rootScope.$broadcast(dicionario[configResponseError.status],
                    configResponseError);

                //return configResponseError || $q.when(configResponseError);
                return $q.reject(configResponseError);
            }
        };
        return factory;
    }
})();