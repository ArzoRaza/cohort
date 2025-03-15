const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numPeopleInput = document.getElementById("numPeople");
const calculateButton = document.getElementById("calculateButton");
const totalTipAmountDisplay = document.getElementById("totalTipAmount");
const personTipsDisplay = document.getElementById("personTips");

calculateButton.addEventListener('click', calculateTip);

function calculateTip() {
    console.log("button Cliked");
    
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numPeople = parseInt(numPeopleInput.value);

    if (Number.isNaN(billAmount) || Number.isNaN(tipPercentage) || Number.isNaN(numPeople)) {
        alert("Please Enter valid numbers");
        return;
    }

    const totalTip = (billAmount * tipPercentage) / 100;
    const tipPerPerson = totalTip / numPeople;

    totalTipAmountDisplay.textContent = `${totalTip.toFixed(2)}`
    personTipsDisplay.textContent = `${tipPerPerson.toFixed(2)}`

    

}

console.log("Scripts.js loaded successfully");

