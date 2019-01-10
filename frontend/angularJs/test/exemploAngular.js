/// <reference path="../Scripts/jasmine/jasmine.js" />
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../app/app.js" />
/// <reference path="../Scripts/angular-route.js" />
/// <reference path="../Scripts/angular-local-storage.js" />
/// <reference path="../Scripts/angular-animate.js" />
/// <reference path="../Scripts/loading-bar.js" />
/// <reference path="../app/controllers/detailsController.js" />
/// <reference path="../app/factories/usuarioFactory.js" />

describe('testandoController', function() {

    //Definir o que a gente vai testar e o que precisamos criar
    var $controller;
    var usuarioFactory;

    //Precisamos do elemento $provider para mockar a factory
    beforeEach(module('app', function($provide) {
        
        //criando o factory
        var user = jasmine.createSpy("usuarioFactory",
            ["usuarioSelecionado"]);
        //Depois de criado consigo mockar.
        user.usuarioSelecionado = {
            nome: "Fábio Fonseca"
        };

        $provide.value("usuarioFactory", user);
    }));

    //Injetando as controller via construtor
    beforeEach(inject(function(_$controller_, _usuarioFactory_) {
        $controller = _$controller_;
        usuarioFactory = _usuarioFactory_;
    }));

    describe("TestandoJaInicializadoServices", function() {

        it("testarValorRetonado", function() {
            var $scope = {};
            var usuarioSelecionado = {};

            var controller = $controller('detailsController', {
                $scope: $scope,
                usuarioSelecionado: usuarioFactory
            });

            //Obtendo a variavel do $scope
            var test = $scope.test;

            expect(test).toBe("Testando controllers");
            expect($scope.usuarioSelecionado).toBeDefined();
        });
    });
});
