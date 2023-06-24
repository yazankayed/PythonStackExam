
let imgtochange = document.querySelector("#suculent")
function changeSource() {
    imgtochange.src = "succulents-2.jpg"
}

function changeSourceBack() {
    imgtochange.src = "succulents-1.jpg"
}

function callAlert() {
    alert("Your Cart is empty!")
}

let cookieDiv = document.querySelector(".cookie-policy");
function accept() {
    cookieDiv.remove();
}