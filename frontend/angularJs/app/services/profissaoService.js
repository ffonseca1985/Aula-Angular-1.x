
(function () {

    angular.module('app')
        .service('profissaoService', profissaoService);

    function profissaoService() {
        this.profissao = getProfissao;

        function getProfissao() {
            return [
                    { id: 1, nome: 'DBA' },
                    { id: 2, nome: 'Designer' },
                    { id: 3, nome: 'Programador' }
            ];
        }
    }

    profissaoService.prototype.sexo = "Masculino";

})();