
(function() {
    angular.module('app')
        .config(cacheConfig);

    cacheConfig.$inject = ['$httpProvider'];

    //Limpando o Get para as requisições (IE)
    function cacheConfig($httpProvider) {
        
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //IE
        $httpProvider.defaults.headers.get['If-Modified-since']
            = 'Mon, 26 Jul 1997 05:00:00 GMT';
        //Outros
        $httpProvider.defaults.headers.get['cache-control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }

})();