document.querySelectorAll(".cardHuman").forEach((card)=> {
    card.addEventListener("click",() => {
        card.classList.toggle("cardHumanFixed");
    });
});
document.getElementById("play").addEventListener("click",() => {
    let cards = [...document.querySelectorAll(".cardHumanFixed")];
    let pos = 450;
    cards[0].style.position = "absolute";
    cards[0].style.width = "60px";
    cards[0].style.height = "100px";
    cards[0].style.top = "-150px";
    cards[0].style.left = `${pos}px`;
    cards[0].classList.remove("cardHumanFixed");
    cards[1].style.position = "absolute";
    cards[1].style.top = "-150px";
    cards[1].style.left = `${pos+50}px`;
    cards[1].style.width = "60px";
    cards[1].style.height = "100px";
    cards[1].style.boxShadow = "1px 4px 2px 2px yellow";
    cards[1].classList.remove("cardHumanFixed");
    playForComp();
});
let compCards = [...document.querySelectorAll(".cardCompFlip")];
function playForComp() {
    let pos = 600;
    let randOne = Math.floor(Math.random() * compCards.length);
    let randTwo = Math.floor(Math.random() * compCards.length);
    if(randTwo == 0 && randTwo == randOne) {
        randTwo = randOne + 1;
    }else if(randTwo == randOne){
        randTwo = randOne - 1;
    }
    compCards[randOne].style.transform = "rotateY(0deg)";
    compCards[randTwo].style.transform = "rotateY(0deg)";

    compCards[randOne].parentNode.style.position = "absolute";
    compCards[randOne].parentNode.style.width = "60px";
    compCards[randOne].parentNode.style.height = "100px";
    compCards[randOne].parentNode.style.top = "240px";
    compCards[randOne].parentNode.style.right = `-30px`;
    compCards[randTwo].parentNode.style.position = "absolute";
    compCards[randTwo].parentNode.style.top = "240px";
    compCards[randTwo].parentNode.style.right = `-85px`;
    compCards[randTwo].parentNode.style.width = "60px";
    compCards[randTwo].parentNode.style.height = "100px";
    compCards[randTwo].children[0].style.boxShadow = "1px 4px 2px 2px yellow";
}