(function () {

    angular.module('app')
        .provider('getData', getDataProvider);

    //Preciso chamar o Delegate!!
    function getDataProvider() {
        //Setando a localização
        var _location = 'pt-br'

        //Criei um método para mudar a localização
        this.updateLocation = function (location) {
            _location = location;
        }
        // Retorna a Data
        // É chamado quando refenciamos o provider
        this.$get = function () {
            return {
                Dia: _location == 'pt-br' ? new Date().getDate('dd')
                    : new Date().getDate('dd') + 1,
                Mes: new Date().getMonth() + 1,
                Ano: new Date().getFullYear()
            }
        }
    }
})();