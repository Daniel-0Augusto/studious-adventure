
function alpha(numberOfVictories, numberOfLoses){
    let balanceOfVictories = numberOfVictories - numberOfLoses;
    myRank = balanceOfVictories

    switch (true){
        case balanceOfVictories <= 10:
            myRank = "ferro";
            break;
        case balanceOfVictories >= 11 && balanceOfVictories <= 20:
            myRank = "Bronze"
            break;
        case balanceOfVictories >= 21 && balanceOfVictories <= 50:
            myRank = "Prata"
            break;
            case balanceOfVictories >= 51 && balanceOfVictories <= 80:
            myRank = "Ouro"
            break;
        case balanceOfVictories <= 81 && balanceOfVictories <=90:
            myRank = "Diamante"
            break;
        case balanceOfVictories >= 91 && balanceOfVictories <= 100:
            myRank = "Lendario"
            break;
        case balanceOfVictories >= 101:
            myRank ="Imortal"
    }
            
    console.log("O heroi tem saldo de vitorias de " + balanceOfVictories + ", e esta no rank de " + myRank)
}
alpha(73, 25)


/*function alpha(numberOfVictories, numberOfLoses) {
    let balanceOfVictories = numberOfVictories - numberOfLoses;
    let myRank;
    
    const ranks = [
        { max: 10, rank: "ferro" },
        { max: 20, rank: "Bronze" },
        { max: 50, rank: "Prata" },
        { max: 80, rank: "Ouro" },
        { max: 90, rank: "Diamante" },
        { max: 100, rank: "Lendario" },
        { max: Infinity, rank: "Imortal" }
    ];

    myRank = ranks.find(r => balanceOfVictories <= r.max).rank;

    console.log("O heroi tem saldo de vitórias de " + balanceOfVictories + ", e está no rank de " + myRank);
}

alpha(45, 25);

/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */