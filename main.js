let myInput = document.querySelector("#name");
let btnQueue = document.querySelector("#queue");
let btnfastTrack = document.querySelector("#fastTrack");
let btnCheckin = document.querySelector("#checkin");
let ol = document.querySelector("ol");

btnQueue.addEventListener("click", () => {
    if (ol.children.length == 0) {
        document.querySelector("P").remove();
    }
    if (myInput.value == "") {
        alert("skriv in ditt namn");

    } else {
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        ol.appendChild(li);
        myInput.value = "";
    }

})

btnfastTrack.addEventListener("click", () => {
    if (ol.children.length == 0) {
        document.querySelector("P").remove();
    }
    if (myInput.value == "") {
        alert("skriv in ditt namn");

    } else {
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        ol.insertBefore(li, ol.children[0]);
        myInput.value = "";
    }
})

btnCheckin.addEventListener("click", () => {
    ol.removeChild(ol.children[0]);
    if (ol.children.length == 0) {
        let div = document.querySelector("div");
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "There’s currently no people standing in line";
        div.appendChild(paragraph);
    }
})
if (ol.children.length == 0) {
    let di = document.querySelector("div");
    let p = document.createElement("p");
    p.innerHTML = "There’s currently no people standing in line";
    di.appendChild(p);

}