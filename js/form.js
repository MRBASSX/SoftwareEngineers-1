


const EvenOrOdd = document.getElementById("EvenOROdd")
const send = document.getElementById("send")
const display = document.getElementById("display")

console.log(display)



send.onclick = function Test(e) {
    
    e.preventDefault();

  

    let Number =parseFloat(EvenOrOdd.value);
    let IsEven = Number%2 === 0
     IsEven ? display.innerHTML =("Yeah,Is Even") :display.innerHTML = ("Nope, Is Odd");

     




}

