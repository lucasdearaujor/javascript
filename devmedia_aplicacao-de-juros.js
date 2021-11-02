import entrada from 'readline-sync'

let valorDivida = entrada.question("\nInforme o valor devido: R$ ");
if(valorDivida > 0){
    let qtdDiasAtraso = entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    if(qtdDiasAtraso > 0){
    
        let taxaJuros = 0;
        if(qtdDiasAtraso > 15){
            taxaJuros = 10;
        } else {
            taxaJuros = 5;
        }
        
        let valorTotalComJuros = Number(valorDivida) + (valorDivida/100) * taxaJuros;

        console.log("\nValor original da divida: R$ "+valorDivida);
        console.log("Dias atrasados: "+qtdDiasAtraso);
        console.log("Taxa de Juros: "+(taxaJuros)+"%");
        console.log("Valor total com juros: R$ "+valorTotalComJuros);

    } else {
        console.log("A divida não está atrasada");
    }
} else {
    console.log("O valor da divida dever ser maior que zero");
}
