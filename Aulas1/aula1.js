
//number




const meuNumero = 3;

const num1 = 6;

const num2 = 10

const operacao = num1 + num2;


console.log(operacao);

// Formatando o resultado com ajuda do método toFixed() Como estamos trabalhando com dinheiro é importante saber também os centavos, com o auxílio do método .toFixed() eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.



function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    console.log(salarioHora);
  }

ganhoPorHora(3000,176); 

    

var lista = [10,1, 5, 9, 8, 12, 15];

lista.sort();

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

lista.sort(comparaNumeros); 

console.log(lista);
