"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"), // #을 붙이면 id값에 담긴 선택자를 가져온다는 뜻.
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button"); //button 태그를 통째로 불러오는거임.
  
registerBtn.addEventListener("click", register);

function register() {
  if( !id.value) return alert("아이디를 입력해주세요.");
  if ( psword.value !== confirmPsword.value ) {
    return alert("비밀번호가 일치하지 않습니다. register.js");
  }
const req = {
  id: id.value,
  name: name.value,
  psword: psword.value,
};

console.log(req);
console.log(JSON.stringify(req));


fetch("/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req), //ejs에서 버튼이 눌리면 입력한 정보들을 body에 담아 보낸당
})
  .then((res) => res.json())
  .then((res) => {
    if(res.success) {
      location.href = "/login"; //res값이 성공이면 로그인 페이지로 보내버린다
    } else { //res값이 실패이면 res 안의 msg 값을 전달하여 알람을 보냄
      alert(res.msg);
    }
  })
  .catch((err) => { //then().then() 로직 실행중에 에러가 생겼을 경우 잡아주는 코드
    console.error("회원가입 중 에러 발생 register.js");
  });
}



