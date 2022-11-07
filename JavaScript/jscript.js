
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}


// Login and Register

const OpenRegister = document.querySelector('.btn_register')
const FormRegister = document.querySelector('.register')
const CloseRegister = document.querySelector('.btn_close-register')

// Hàm hiển thị form đăng ký
function showDangKy() {
    FormRegister.classList.add('openFormRegister')
}
// Hàm đóng form đăng ký
function hideDangKy() {
    FormRegister.classList.remove('openFormRegister')
}

OpenRegister.addEventListener('click', showDangKy)
CloseRegister.addEventListener('click', hideDangKy)



const OpenLogin = document.querySelector('.btn_login')
const FormLogin = document.querySelector('.login')
const CloseLogin = document.querySelector('.btn_close-login')

// Hàm hiển thị form đăng nhập
function showDangNhap() {
    FormLogin.classList.add('openFormLogin')
}
// Hàm đóng form đăng nhập 
function hideDangNhap() {
    FormLogin.classList.remove('openFormLogin')
}

OpenLogin.addEventListener('click', showDangNhap)
CloseLogin.addEventListener('click', hideDangNhap)
