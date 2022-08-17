//step:1
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step : 4
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }else{
        alert('Toi password vule gecos toke ami tejjo sontan korlam');
    }
})