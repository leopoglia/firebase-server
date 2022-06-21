const crud = require("./crud");

async function salvarDado(){
    const savedData = await crud.save("pessoas", "JgluQ4mFWuift2cC0wCP",
    { nome: "Bruno", sobrenome: "Carvalho", idade: 19 });
    console.log(savedData);
}

salvarDado();

