
(function () {
    //Inicializando o provider getDataProvider
    angular.module('app')
        .config(function (getDataProvider) {
            getDataProvider.updateLocation('en-US');
        });
})();