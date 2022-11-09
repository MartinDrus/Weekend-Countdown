let nameInput = document.querySelector("input");
let addBtn = document.querySelector("button");
let form = document.querySelector("#form");
let onlyParagraph = document.querySelector("p");

nameInput.addEventListener("input", evt => {
    if (evt.target.value.trim().length > 0) {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
});

form.addEventListener("submit", evt => {
    evt.preventDefault();
    
    let weekdayArray = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    const today = new Date();
    let weekdayIndex = today.getDay();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();

    console.log(today);
    
    let friday = 5;

    let feierAbendStunde = 16;
    let feierAbendMinute = 15;

    let verbleibendeStuneden = 0;
    let verbleibendeMinuten = 0;

    if(feierAbendMinute >= currentMinute){
        verbleibendeMinuten = feierAbendMinute - currentMinute;
    } else {
        currentHour += 1;
        verbleibendeMinuten = (60+feierAbendMinute) - currentMinute;
    }

    if (feierAbendStunde >= currentHour) {
        verbleibendeStuneden = feierAbendStunde - currentHour;
    } else {
        weekdayIndex += 1;
        verbleibendeStuneden =  (24+feierAbendStunde) - currentHour;
    }

    if ((friday-weekdayIndex >= 0) ) {
        let x = `Hallo ${nameInput.value}. Heute ist ${weekdayArray[weekdayIndex]}. Noch ${friday-weekdayIndex} Tag(e), ${verbleibendeStuneden} Stunde(n) und ${verbleibendeMinuten} Minute(n) bis zum Wochenende!`
        onlyParagraph.innerHTML = x;
    } else {
        onlyParagraph.innerHTML = "Es ist Wochenende!"
    }



    nameInput.value = "";
});