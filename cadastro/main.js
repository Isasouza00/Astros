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


function login(){

    var login = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    if(login === "admin" && pass === "admin"){
        alert('Success');
        location.href = "../entrada/index.html";
    }else if(login === "" && pass === ""){
        alert('please fill in the fields');
    }else{
        alert('user or password is incorrect')
    }

}