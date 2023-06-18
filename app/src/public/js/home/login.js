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
}).then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/"; //res값이 성공이면 루트로 보내버린다
    } else { //res값이 실패이면 res 안의 msg 값을 전달하여 알람을 보냄
      alert(res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("로그인 중 에러 발생"));
  });
}



