(function() {

    //Criando um modulo
    var app = angular.module('app', []);

    //Criando uma controller
    app.controller('promisesController', promisesController);

    //injetando
    //O elemeto $q é responsável por criar o promisses
    promisesController.$inject = ['$scope', '$q'];

    function promisesController($scope, $q) {

        $scope.addNumero = addNumero;

        function addNumero(a, b) {
            
            //Criar o promise
            var pr = $q.defer();
            
            if (angular.isNumber(a) && angular.isNumber(b))
                pr.resolve(a + b); //Sucess
            else
                pr.reject("Favor inserir dados válidos"); //Fail

            return pr.promise;
        }
        //Definindo um array de promises
        var promisses = [];
        //addNumero(2, 1).then(sucess, fail);
        //addNumero(2, 'a').then(sucess, fail);

        var promiseA = addNumero(2, 1);
        var promiseB = addNumero(2, 5);
        var promiseC = addNumero(2, 1);
        //Colocando tudo no array
        promisses.push(promiseA);
        promisses.push(promiseB);
        promisses.push(promiseC);
        
        //Quando todos os promisses forem executados faça algo
        $q.all(promisses).then(sucess, fail);

        //Executou o resolve
        function sucess(data) {
            var a = data;
        }
        //Executou o reject
        function fail(data) {
            var b = data;
        }
    }
})();