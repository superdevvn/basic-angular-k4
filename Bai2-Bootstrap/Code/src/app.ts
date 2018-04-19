// declare let $;
// import * as $ from 'jquery'
// import 'bootstrap'

const onLoginFormSubmit = (event) => {
    event.preventDefault();
    
    //JavaScript
    const email1: any = document.getElementById('login-email');
    const password1: any = document.getElementById('login-password');
    console.log(email1, password1);
    // alert(email.value + ': ' + password.value);

    //jQuery
    const email2 = $('#login-email');
    const password2 = $('#login-password');
    console.log(email2, password2);    
    //alert(email.value + ': ' + password.value);

    window.location.href = 'src/app.html'
}