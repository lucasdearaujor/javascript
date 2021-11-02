import entrada from 'readline-sync'

let historicoSalarial = [
    {salario: 510.00, ano: 2010},
    {salario: 545.00, ano: 2011},
    {salario: 622.00, ano: 2012},
    {salario: 678.00, ano: 2013},
    {salario: 724.00, ano: 2014},
    {salario: 788.00, ano: 2015},
    {salario: 880.00, ano: 2016},
    {salario: 937.00, ano: 2017},
    {salario: 954.00, ano: 2018},
    {salario: 998.00, ano: 2019},
    {salario: 1045.00, ano: 2020}
];

let historicoInflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("\n=== Aplicação Salário vs Inflação ===");
console.log("\n1 - Listar salários mínimos de 2010 a 2020");
console.log("2 - Lista o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")
console.log("4 - Encerrar aplicação");

let opcao = entrada.question("\nInforme o numero da sua escolha: ");

switch(opcao){
    case "1":
        for(let contador = 0; contador < historicoSalarial.length; contador++){
            console.log("\n");
            console.log("Ano:".padEnd(40,".")+historicoSalarial[contador].ano);
            console.log("Salário mínimo:".padEnd(40,".")+ "R$ " + historicoSalarial[contador].salario.toFixed(2).replace(".",","));
        }
        break;
    case "2": 
        for(let contador = 0; contador < historicoInflacao.length; contador++){
            console.log("\n");
            console.log("Ano:".padEnd(40,".")+historicoInflacao[contador].ano);
            console.log("Inflação IPCA:".padEnd(40,".")+historicoInflacao[contador].ipca.toFixed(2).replace(".",",")+"%");
        }
        break;
    case "3":
        for(let i = 0; i < historicoSalarial.length; i++){
            let percentualCrescimento = 0.0;
            if(i > 0){
                let salarioAnoAnterior = historicoSalarial[i - 1].salario;
                let diferencaSalarioAnoAnterior = historicoSalarial[i].salario - salarioAnoAnterior;
                percentualCrescimento = (diferencaSalarioAnoAnterior / salarioAnoAnterior) * 100 ;
            }
            console.log("\n");
            console.log("Ano:".padEnd(40,".")+historicoSalarial[i].ano);
            console.log("Salário mínimo:".padEnd(40,".")+ "R$ " + historicoSalarial[i].salario.toFixed(2).replace(".",","));
            console.log("Crescimento salárial: ".padEnd(40,".")+percentualCrescimento.toFixed(2).replace(".",",")+"%");
            for(let j = 0; j < historicoInflacao.length; j++){
                if(historicoInflacao[j].ano === historicoSalarial[i].ano){
                    console.log("Inflação IPCA:".padEnd(40,".")+historicoInflacao[j].ipca.toFixed(2).replace(".",",")+"%");
                    break;
                }
            }
        }
        break;
    default:
        break;
}
