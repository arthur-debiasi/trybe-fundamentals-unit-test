const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toEqual(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Cotonete', 'Curativo').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Xampu', 'Condicionador')[0]).toEqual('object');
    expect(typeof productDetails('Pente de Cabelo', 'Tiara')[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Desodorante', 'Sabonete')[0]).not.toEqual(productDetails('Desodorante', 'Sabonete')[1]);
    expect(productDetails('Desodorante', 'Sabonete')[0]).not.toEqual(productDetails('Desodorante', 'Sabonete')[1]);
    expect(productDetails('Aspirina', 'Tylenol')[0]).not.toEqual(productDetails('Aspirina', 'Tylenol')[1]);
    expect(productDetails('Aspirina', 'Tylenol')[0]).not.toEqual(productDetails('Aspirina', 'Tylenol')[1]);
  });
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Gel fixador', 'Espelho portátil')[0].details.productId).toEqual('Gel fixador123');
    expect(productDetails('Gel fixador', 'Espelho portátil')[1].details.productId).toEqual('Espelho portátil123');
    expect(productDetails('Colírio', 'Óculos Escuros')[0].details.productId).toEqual('Colírio123');
    expect(productDetails('Colírio', 'Óculos Escuros')[1].details.productId).toEqual('Óculos Escuros123');
});
