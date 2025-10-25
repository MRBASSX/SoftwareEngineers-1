

const EvenOrOdd = document.getElementById("EvenOROdd")
const send = document.getElementById("send")



send.onclick = function Test(e) {
    
    e.preventDefault();

    alert(EvenOrOdd.value)
}

