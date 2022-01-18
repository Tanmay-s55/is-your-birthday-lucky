const bdate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check");
const displayMessage = document.querySelector("#msg");
checkBtn.addEventListener("click", function disp(){
    // first we remove all occurence of hyphen from string then convert to number
    let date = bdate.value;
    date = date.replaceAll("-","");
    let sum = 0;
    let luckyNumber = luckyNum.value;
    for( let digit of date) {
        sum = sum + Number(digit);
    }
    
    if( sum && luckyNumber) {
        if(sum % luckyNumber === 0)
            display(`${luckyNumber} is Lucky 🥳🥳🥳`); //using template literal
        else
           display(`${luckyNumber} is Not so lucky 😕`);
    }
    else {
        display('Please enter both values!');
    }
});

function display(message){
    msg.innerText = message;
}