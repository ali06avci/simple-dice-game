let randomNumber1 =Math.floor(Math.random()*6)+1;
let randomImageSrc1 = "images/dice"+randomNumber1+".png";
let image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSrc1);

let randomNumber2 =Math.floor(Math.random()*6)+1;
let randomImageSrc2 = "images/dice"+randomNumber2+".png";
let image2 = document.querySelector(".img2");
image2.setAttribute("src", randomImageSrc2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins!!!";
    
} else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!!!";
} else {
    document.querySelector("h1").innerHTML="DRAW!!!";
}

function refreshPage(){
    window.location.reload();
} 
    
