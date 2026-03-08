function order(product,price){

document.getElementById("popup").style.display="block"

document.getElementById("product").innerText=product
document.getElementById("price").innerText=price

}

function pay(method){

let player=document.getElementById("playerid").value
let server=document.getElementById("serverid").value

let text=`MLBB Diamond Order
Product: ${document.getElementById("product").innerText}
Price: ${document.getElementById("price").innerText}
PlayerID: ${player}
ServerID: ${server}
Payment: ${method}`

let telegram="https://t.me/YOURUSERNAME?text="+encodeURIComponent(text)

window.open(telegram)

}
