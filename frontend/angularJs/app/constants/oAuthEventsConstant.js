
(function() {
    angular.module('app')
        //Criamos um dicionario para redirecinar alguns eventos
        //do login
        .constant('oAuthEventConstant', {
            loginSucess: 'auth-login-sucess',
            loginFailed: 'auth-logout-sucess',
            logoutSucess: 'auth-logout-sucess',
            sessionTimeout: 'auth-session-timeout',
            notAuthentication: 'auth-not-authentication',
            notAuthorized: 'auth-not-authorized',
            notFound: 'auth-not-found'
        });
})();