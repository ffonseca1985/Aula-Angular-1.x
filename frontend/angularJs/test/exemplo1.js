/// <reference path="../Scripts/jasmine/jasmine.js" />

    //1 - Definimos um namespace
describe('Operacoes', function() {

    //2 - O que agente testa
    it('somar', function() {

        //Dados as serem testados
        var resultado = 1 + 1;

        //Asserts
        expect(resultado).toBe(2);
    });
});

describe('somarSubtrair', function() {

    //1 - Podemos inicializar algo antes de testar
    //2 - Podemos fazer algo depois de testar

    var a = 1;
    //Antes de qquer coisa faça algo!!!!
    beforeEach(function() {
        a = a + 1;
    });

    //Depois de qquer coisa faça algo!!!
    afterEach(function() {
        a = a - 1;
    });

    //Vamos testar agora!!
    //Somar
    it('somar', function() {
        a = a + 1;
        expect(a).toBe(3);
    });

    //Vamos testar agora!!
    //Subtrair
    it('subtrair', function () {
        a = a - 1;
        expect(a).toBe(2);
    });
});
