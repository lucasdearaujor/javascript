let cursos_idiomas = [
    {nome: "inglês", preco: 2500, carga_horaria: 160},
    {nome: "Espanhol", preco: 1500, carga_horaria: 110},
    {nome: "Francês", preco: 3600, carga_horaria: 200},
    {nome: "Chinês", preco: 5500, carga_horaria: 400},
    {nome: "Alemão", preco: 3800, carga_horaria: 230},
];

for(let curso of cursos_idiomas){
    console.log("\nNome do curso: "+curso.nome);
    console.log("Carga horaria do curso: "+curso.carga_horaria + " horas");
    console.log("Preco do curso: R$ "+curso.preco);
    
    let valor_hora_aula = curso.preco / curso.carga_horaria;

    if(valor_hora_aula >= 15){
        console.log("Hora/Aula superior ou iguala R$ 15,00")
    } else {
        console.log("Hora/Aula inferio a R$ 15,00")
    }

}