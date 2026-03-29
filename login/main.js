const emaillogin = document.getElementById('email-login');
const passwordlogin = document.getElementById('password-login');
const buttonlogin = document.getElementById('btn-login');
const eye = document.getElementById('icon-eyee');
const passwordnotcoorect = document.getElementById('password-not-correct');
const motcle=document.getElementById('mot-cle');

const emailsignup= localStorage.getItem('email');
const passawordsignup=localStorage.getItem('password')

buttonlogin.addEventListener('click', function () {

   
    if (
        emaillogin.value === emailsignup && passwordlogin.value === passawordsignup) {
        alert('Login success ');
        emaillogin.value = '';
        passwordlogin = '';
    } else {

        passwordnotcoorect.innerHTML = ` <p class="try-again">Password is not correct try again</p>`
        passwordlogin.style.borderColor ='red';
        motcle.style.color='red';
    }
});


eye.addEventListener('click', function () {

    if (passwordlogin.type === "password") {
        passwordlogin.type = "text";
        eye.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                    <path d="m2 2 20 20"/></svg>`
    }
    else {
        passwordlogin.type = "password";
        eye.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-eye-icon lucide-eye">
                        <path
                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>`

    }

})