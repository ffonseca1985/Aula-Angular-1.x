
(function () {

    //Service => Ele retorna os usuários dada uma fonte de dados
    angular.module('app')
        .service('usuario2Service', usuario2Service);

    usuario2Service.$inject = ['$resource', 'api']

    function usuario2Service($resource, api) {

        this.usuarios = usuarios;

        function usuarios() {
            return $resource(api + 'usuario/:id', { id: '@id' },
            {
                save: {
                    method: 'POST',
                    isArray: true
                }
                
            });
        }
    }

})();
