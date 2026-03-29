let passwordlsign = document.getElementById('password-signup');

let coppassword = document.getElementById('copassword-signup');
let eye = document.getElementById('icon-eyee');

let eye2 = document.getElementById('icon-eyee2');



eye.addEventListener('click', function () {

    if (passwordlsign.type === "password") {
        passwordlsign.type = "text";
        eye.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                    <path d="m2 2 20 20"/></svg>`
    }
    else {
        passwordlsign.type = "password";
        eye.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-eye-icon lucide-eye">
                        <path
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>`

    }

})
eye2.addEventListener('click', function () {

    if (coppassword.type === "password") {
        coppassword.type = "text";
        eye2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                    <path d="m2 2 20 20"/></svg>`
    }
    else {
        coppassword.type = "password";
        eye2.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-eye-icon lucide-eye">
                        <path
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>`

    }

})


const fullname = document.getElementById('fullname');
const numero = document.getElementById('numero');
const emailsign = document.getElementById('email-signup');
const buttonsignup = document.getElementById('btn-signup');
const motcle=document.getElementById('mot-cle');
const passwordnotcoorect=document.getElementById('password-not-correct')


buttonsignup.addEventListener('click', function () {

    passwordnotcoorect.innerHTML = ` <p class="try-again"></p>`;
        coppassword.style.borderColor = 'black';
        motcle.style.color = 'black';

    if (
        fullname.value !== '' &&
        numero.value !== '' &&
        emailsign.value !== '' &&
        passwordlsign.value !== '' &&
        coppassword.value !== '') {

        if (passwordlsign.value !== coppassword.value) {
            passwordnotcoorect.innerHTML = ` <p class="try-again">Confirm password is deffirent</p>`
            coppassword.style.borderColor = 'red';
            motcle.style.color = 'red';
        }
        else {
            localStorage.setItem('fullname', fullname.value);
            localStorage.setItem('numero', numero.value);
            localStorage.setItem('email', emailsign.value);
            localStorage.setItem('password', passwordlsign.value);
            localStorage.setItem('cofigurepassword', coppassword.value);
            alert('Sign up success ');
            fullname.value = '';
            numero.value = '';
            emailsign.value = '';
            passwordlsign.value = '';
            coppassword.value = '';

        }

    }
    else {
        passwordnotcoorect.innerHTML = ` <p class="try-again">sign up not succes full all the champ</p>`
        coppassword.style.borderColor = 'red';
        motcle.style.color = 'red';
    }
});