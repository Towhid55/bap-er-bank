// Add event listener(click handler) to the deposit button
document.getElementById("btn-Deposit").addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.querySelector("#deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-7: clear the deposit field
    depositField.value = "";


    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    //step-3: get the current deposit value
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6: calculate current total
    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;



})