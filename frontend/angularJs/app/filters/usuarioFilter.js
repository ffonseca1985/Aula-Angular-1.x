(function() {

    //Criando um filtro
    angular.module('app')
        .filter('usuarioFilter', usuarioFilter);

    //O filtro é uma função que retorna outra função
    function usuarioFilter() {

        //a função deverá ter um parametro que são os dados que
        //serão filtrados
        function filter(input) {

            if (input == undefined)
                return;

            // Passos:
            // 1- A gente tem os dados
            // 2- retorna eles filtrados

            var itensFiltrados = [];

            //Varrendo os dados do input
            for (var i = 0; i < input.length; i++) {
                // A função toLowerCase deixa o texto minusculo
                if (input[i].nome.toLowerCase() != 'fabio')
                    itensFiltrados.push(input[i]);
            }

            //Retornando os itens filtrados
            return itensFiltrados;
        };
        return filter;
    }
})();