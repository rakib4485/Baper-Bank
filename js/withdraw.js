document.getElementById('btn-withdraw').addEventListener('click', function(){
    //find withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    //find withdraw ammount
    const newWithdrawAmmount = parseFloat(withdrawField.value);

    //find totla withdraw 
    const withdrawTotalElement = document.getElementById('withdraw-total');

    const prevWithdraw = parseFloat(withdrawTotalElement.innerText);

    const totalWithdraw = prevWithdraw + newWithdrawAmmount;
    //total balance field
    const totalAmmountElement = document.getElementById('total-ammount');

    const prevBalance = parseFloat(totalAmmountElement.innerText);

    if(prevBalance > newWithdrawAmmount){
        withdrawTotalElement.innerText = totalWithdraw;

    
    

    const newBalance = prevBalance - newWithdrawAmmount;

    totalAmmountElement.innerText = newBalance;
    }else{
        alert('you dont have money.Your Current Balance is: '+ prevBalance + ' And You want To Withdraw : '+ newWithdrawAmmount);
    }
    //empty input field
    withdrawField.value = '';
})