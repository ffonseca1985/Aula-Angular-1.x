
(function() {

    angular.module('app')
        .config(interceptorConfig);

    //Agente precisa configurar um provider que irá fazer 
    //as requisições para o servidor
    interceptorConfig.$inject = ['$httpProvider'];

    //Temos agora o objeto que iremos interceptar
    function interceptorConfig($httpProvider) {

        //Vamos enviar a intercepção para uma factory
        $httpProvider.interceptors.push('interceptorFactory');
    }

})();