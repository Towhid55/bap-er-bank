/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 Also make sure to convert the input into a number parseFloat
3. Get previous withdraw total;
4. calculate total withdraw amount
4.5 set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6.5 set the new balance

*/

// step-1:
document.querySelector("#btn-withdraw").addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:
    const withdrawTotalElement = document.querySelector("#withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-5:
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (previousBalanceTotal < newWithdrawAmount) {
        alert('Baap er bank e eto taka nais');
        return;
    }

    // step-4:
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // step-6.5:
    balanceTotalElement.innerText = newBalanceTotal;












})