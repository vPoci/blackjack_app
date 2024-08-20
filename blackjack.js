var deck;
var dealerCards=[];
var playerCards=[];
var dealerSum=0;
var playerSum=0;


function _createImage(card){
    let cardImage = document.createElement("img");
    cardImage.src="./images/cards/"+card+".png";
    if(_createImage.caller.name=="dealCardsToPlayer"){
        document.getElementById("player-cards").append(cardImage);
    }else{
        if(dealerCards.length>1){
            document.getElementById("dealer-cards").append(cardImage);
        }else{
            cardImage.src="./images/cards/BACk.png";
            document.getElementById("dealer-cards").append(cardImage);
        }
    }

    console.log(cardImage.src);
}

document.addEventListener("DOMContentLoaded",function(arg){
    buildDeck();
    shuffleDeck();
    startGame();
})

function buildDeck(){
    let values=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types=["H", "D", "C", "S"];
    deck=[];
    for(let i=0; i<types.length; i++){
        for(let j=0; j<values.length; j++){
            deck.push(values[j]+"-"+types[i]);
        }
    }
    console.log(deck);
}

function shuffleDeck(){
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}


function dealCardsToPlayer(){
    let playerCard=deck.pop();
    playerCards.push(playerCard);
    _createImage(playerCard);
    _sumValuePlayer(playerCard);
}

function dealCardsToDealer(){
    let dealerCard=deck.pop();
    dealerCards.push(dealerCard);
    _createImage(dealerCard);
}

function startGame(){
    dealCardsToPlayer();
    dealCardsToPlayer();
    dealCardsToDealer();
    dealCardsToDealer();
}
function _sumValuePlayer(card){

        let cardValue = card.split("-")[0];
        if(cardValue=="A"){
            if(playerSum+11>21){
                cardValue=1;
            }else{
                cardValue=11;
            }
        }else if(cardValue=="K"||cardValue=="Q"||cardValue=="J"){
            cardValue=10;
        }else{
            cardValue=parseInt(cardValue);
        }
        playerSum+=cardValue;
    
}

function onHit(){
    dealCardsToPlayer();
    console.log(playerSum);
}