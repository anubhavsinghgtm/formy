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
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;
    if(pass.length > 7 && pass.match(regex)){
        console.log("inside condition");
        passwordInput.classList.add("valid");
    }
    else{
        passwordInput.classList.remove("valid");
    }
}


// const pattern = /.*[0-9].*/;
// console.log(pattern.test("abc123")); 