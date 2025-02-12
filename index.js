// Desafio Classificador de nível de Herói

// Referente ao Herói, preencha o seu nome:
let nomeHeroi = ""
let level = ""
let xp = 1000

// Referente a mensagens
let congrat = "Parabéns, você alcançou o level "

// Condições
if(xp <= 1000){
  console.log("Olá " + nomeHeroi + " você está no nível de Ferro. ")
  level = "Ferro"
}
else if(xp <= 2000){
    console.log(congrat + "Bronze!")
    level = "Bronze"
    console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else if(xp <= 5000){
  console.log(congrat + "Prata!")
  level = "Prata"
  console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else if(xp <= 7000){
  console.log(congrat + "Ouro!")
  level = "Ouro"
  console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else if(xp <= 8000){
  console.log(congrat + "Platina!")
  level = "Platina"
  console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else if(xp <= 9000){
  console.log(congrat + "Ascendente!")
  level = "Ascendente"
  console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else if(xp <= 10000){
  console.log(congrat + "Imortal!")
  level = "Imortal"
  console.log("O herói " + nomeHeroi + " está no nível de " + level)
}
else{
    level = "Radiante"
    console.log("Uau " + nomeHeroi + " você alcançou o nível de " + level) 
}

