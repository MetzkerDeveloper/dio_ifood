const quantidadeDeGolpes = 4;

let minerais = ["Pedra", "Carvao", "Ferro", "Diamente"];

for (let i = 1; i <=quantidadeDeGolpes; i++){
  let minaIndex = i % minerais.length;
console.log(i + ": " + minerais[minaIndex])
}

