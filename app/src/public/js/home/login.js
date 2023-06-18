"use strict";

const id = document.querySelector("#id"), // #을 붙이면 id값에 담긴 선택자를 가져온다는 뜻.
  psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button"); //button 태그를 통째로 불러오는거임.
  

loginBtn.addEventListener("click", login);

function login() {
const req = {
  id: id.value,
  psword: psword.value,
};

console.log(req);
console.log(JSON.stringify(req));


fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req)
});
}



