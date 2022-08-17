// add event listener
document.getElementById('btn-deposite').addEventListener('click', function(){
    //find input field
    //find input value by using .value
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmmount = parseFloat(depositeField.value);
    //find deposite ammount
    const depositeTotalElement = document.getElementById('deposite-total');

    const prevDepositeTotal = parseFloat(depositeTotalElement.innerText);

    //set deposite ammount
    const currentDeposite = prevDepositeTotal + newDepositeAmmount;
    depositeTotalElement.innerText = currentDeposite;

    //find prevBalance
    const totalAmmountElement = document.getElementById('total-ammount');
    const prevBalance = parseFloat(totalAmmountElement.innerText);

    const newBalance = prevBalance + newDepositeAmmount;

    totalAmmountElement.innerText = newBalance;
    //last step
    depositeField.value = '';
})