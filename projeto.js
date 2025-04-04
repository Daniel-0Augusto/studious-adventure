
let nomeDoHeroi = "Sunlight"
let xpDoHeroi = 10200
let rankDoHeroi;
switch (true) {
  case xpDoHeroi <= 1000:
    rankDoHeroi = "Ferro";
    break;
  case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    rankDoHeroi = "Bronze";
    break;
  case xpDoHeroi > 2000 && xpDoHeroi <= 5000:
    rankDoHeroi = "Prata";
    break;
  case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
    rankDoHeroi = "Ouro";
    break;
  case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
    rankDoHeroi = "Platina";
    break;
  case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
    rankDoHeroi = "Ascendente";
    break;
  case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
    rankDoHeroi = "Imortal";
    break;
  case xpDoHeroi >= 10001:
    rankDoHeroi = "Radiante";
    break;
}
console.log(rankDoHeroi)


console.log("O Heroi de nome " + nomeDoHeroi, "esta no nivel de " + rankDoHeroi)

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000 = Imortal
//Se XP for maior ou igual a 10.001 = Radiante