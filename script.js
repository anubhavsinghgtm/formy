const passwordInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirm-password");

confirmPassInput.onkeyup = () => {
    if(passwordInput.value == confirmPassInput.value){
        confirmPassInput.classList.add("valid");
        console.log("Matched!");
    }
    else{
        confirmPassInput.classList.remove("valid");
        console.log("Password didn't matched!");
    }
}

passwordInput.onkeyup = () => {
    const pass = passwordInput.value;
    const regex = '/\d/';
    if(pass.length > 7){
        passwordInput.classList.add("valid");
    }

    if(pass.match(regex)){
        console.log("Matcheessss!");
    }
}