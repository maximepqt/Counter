//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")

let messageEl = document.getElementById("message-el")

let count = 0

let saveCount = 0


function increment() {
    count = count + 1
    if(count >0){
        document.getElementById("count-el").style.color = "green";
    }
    
    
    countEl.innerText= count
}

function decrement() {
    count = count -1
    if(count < 0){
        document.getElementById("count-el").style.color = "red";
    }
    countEl.innerText= count
}

function save(){
    saveCount = count

    let myCSaveCount = "-" + saveCount
    
    messageEl.innerText += myCSaveCount
    countEl.textContent = 0
    count = 0
}


