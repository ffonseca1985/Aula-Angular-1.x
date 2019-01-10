
(function() {

    angular.module('app')
        .run(runRouteOauthConfig);

    runRouteOauthConfig.$inject = ['$location', '$rootScope',
        'oAuthEventConstant', 'oAuthFactory'];

    //Mapear os eventos
    function runRouteOauthConfig($location, $rootScope,
        oAuthEventConstant, oAuthFactory) {




        $rootScope.$on(oAuthEventConstant.notAuthorized, login);
        $rootScope.$on(oAuthEventConstant.notAuthentication, login);
        $rootScope.$on(oAuthEventConstant.notFound, login);

        function login(event, response) {
            oAuthFactory.logOff(response.data.message);
            $location.path('/');
        }
    }

})();