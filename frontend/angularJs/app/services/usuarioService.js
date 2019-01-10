
(function () {

    //Service => Ele retorna os usuários dada uma fonte de dados
    angular.module('app')
        .service('usuarioService', usuarioService);

    usuarioService.$inject = ['$http', 'api'];

    // 1 -> Serviço que faça isso pra gente ($http)
    // 2 -> Precisamos da Url 

    function usuarioService($http, api) {

        //Usuarios que agente vai buscar no banco
        this.usuarios = getUsuarios;
        this.addUsuario = addUsuario;

        function addUsuario(usuario) {

            var url = api + 'usuario';

            //Preciso de uma Url e dos dados que serão salvos
            //O serviço abaixo irá retornar um promise
            return $http.post(url, usuario);
        }

        function getUsuarios() {

            var url = api + 'usuario';
            //O angular trabalha de forma assincrona.
            //Retorna uma promessa.
            return $http.get(url);
        }
    }

    usuarioService.prototype.sexo = "Masculino";

})();