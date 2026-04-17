let name=prompt("Enter your name...")

let head=document.createElement("h1")
let body=document.querySelector("body")
body.before(head)
head.innerText=`Welcome ${name} to our calculator `


function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
