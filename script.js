let formDoc = document.querySelector("form");
let ismi = document.querySelector(".ismi");
let familiya = document.querySelector(".familiya");
let password = document.querySelector(".password");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

// window
window.addEventListener("DOMContentLoaded", ()=>{
//btn event
  btn.addEventListener('click', function (event){
//form default
    event.preventDefault();
    if (ismi.value == "botir"){
      alert("Ism to'g'ri");
      return;
    }else {
      alert("noto'g'ri");
      return;
    }
  })
  //btn event
  btn1.addEventListener('click', function (event){
//form default
    event.preventDefault();
    if (familiya.value == "ahmedov"){
      alert("Familiya to'g'ri");
      return;

    }else {
      alert("noto'g'ri");
      return;
    }
  })

  //btn event
  btn2.addEventListener('click', function (event){
//form default
    event.preventDefault();
    if (password.value == "parol"){
      alert("Parol to'g'ri");
      return;
    }else {
      alert("noto'g'ri");
      return;
    }
  })
})
