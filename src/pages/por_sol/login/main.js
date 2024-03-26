function viewPass(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn_pass')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

function viewPass1(){
    var inputPass = document.getElementById('new_password')
    var btnShowPass = document.getElementById('btn_pass')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}



function viewPass2(){
    var inputPass = document.getElementById('confirm_password')
    var btnShowPass = document.getElementById('bt_pass')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}



function resetPass(){
    var newPass = document.getElementById('new_user')
    var confirmPass = document.getElementById('confirm_password')

    if(newPass === confirmPass){
        alert('Same passwords');
        location.href = "../login/index.html";
    }else{
        alert('The passwords entered must be the same');
    }
}


function login(){

    var login = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    if(login === "admin" && pass === "admin"){
        alert('Sucess');
        location.href = "../entrada/index.html";
    }else if(login === "" && pass === ""){
        alert('please fill in the fields');
    }else{
        alert('user or password is incorrect')
    }

}