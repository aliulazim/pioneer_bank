// Login button event Handler

const loginBtn = document.getElementById("submit");
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit button even handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function() {
    // Deposit input field
    const depositNumber =getInputNumber("depositAmount");

    // Deposit board amount add
    updateSpanText("currentDeposit", depositNumber);

    // Deposit input field amount + Balance board add
    updateSpanText("currentBalance", depositNumber);

    // Deposit input field add then empty 
    document.getElementById("depositAmount").value = "";

})

// Deposit withDraw even handler
const withDrawBtn = document.getElementById("addWithdraw");
withDrawBtn.addEventListener('click', function() {
    // withDraw input field
    const withDrawNumber = getInputNumber("withDrawAmount");

    //withDraw board
    updateSpanText("currentWithDraw", withDrawNumber);
    updateSpanText("currentBalance", -1 * withDrawNumber);
    
    // withDraw input field add then empty 
    document.getElementById("withDrawAmount").value = "";

})

// Deposit and withDraw input field function
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Deposit function
function updateSpanText(id, addedNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = addedNumber + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }