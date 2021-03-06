const kostka = document.getElementById("cube");
const statistika = document.getElementById("result");
const tlacitko = document.getElementById("game");

let hod = 1;
let hody = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    kostka.src = "img/kostka" + hod + ".png";
}

tlacitko.addEventListener("click", function () {
    if (!timer) {
        zvuk2();
        timer = setInterval(animace, 100);
        tlacitko.innerText = "Stop";
    } else {
        clearInterval(timer);
        timer = false;
        tlacitko.innerText = "Hrej";
        hody.push(hod);
        if(hod == 6){
            zvuk3();
        }
        if(hod == 1){
            zvuk1();
        }
        vypisStatistiky();
    }
})

function suma() {
    let sum = 0;
    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];
    }
    return sum;
}

function max() {
    let maximum = 1;
    hody.forEach(function (value, index) {
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min() {
    let minimum = 6;
    hody.forEach(function (value, index) {
        if (value < minimum) minimum = value;
    })
    return minimum;
}

function vypisStatistiky() {
    statistika.innerHTML = `<p>Poslední hod: ${hod}</p>`
    statistika.innerHTML += `<p>Počet hodů: ${hody.length}</p>`
    statistika.innerHTML += `<p>Součet: ${suma()}</p>`
    statistika.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`
    statistika.innerHTML += `<p>Maximum: ${max()}</p>`
    statistika.innerHTML += `<p>Minimum: ${min()}</p>`
}
function zvuk1 (){

    let zvuk=document.getElementById("haha");
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
        zvuk.currentTime = 0;
    }
    ,3000
)}
function zvuk2 (){

    let zvuk=document.getElementById("shake");
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
        zvuk.currentTime = 0;
    }
    ,3000
)}
function zvuk3 (){

    let zvuk=document.getElementById("six");
    zvuk.play();
    window.setTimeout(function(){
        zvuk.pause();
        zvuk.currentTime = 0;
    }
    ,1500
)}