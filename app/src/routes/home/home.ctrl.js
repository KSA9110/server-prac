"use strict";

// const UserStorage = require("../../models/UserStorage"); -> 이 컨프롤러파일은 유저스토리지에 접근하지 않으므로 지웁니다.
const User = require("../../models/User");

//단순히 화면을 렌더링해주는 함수들임.
const output = {
hello: (req, res) => {
  res.render("home/index");
 },
login: (req, res) => {
  res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};



const process = {
  login: (req,res) => {
    const user = new User(req.body); //req의 body를 넘길건데, 이 파라미터가 user클래스 생성자의 body로 들어간다.
    //그래서 이 user를 User라는 인스턴스로 만들 수 있다.
    const response = user.login();
    return res.json(response);


    //여기서부터는 필요없는 내용이지만 지우기 아까워서 살려둡니다///
    // return res.json(response);

    // const id = req.body.id,
    //   psword = req.body.psword;
    

    //   //원래는 다른 외부파일에서 내부 데이터에 접근하는 것이 불가하도록 하는것이 옳다. 이것을 위한 것이 은닉화이다.
    // const users = UserStorage.getUsers("id","psword");

    
    //   //로그인에 대한 검증절차
    //   const response = {}; //응답하는 객체를 하나 만든 것임.
    //   //방금 userstorage.js 파일에서 user를 은닉화했다.고로 이 컨트롤러 파일에서는 그 정보를 받아올 수 없다.
    //   //UserStorage 안에 메서드를 만들어서 데이터를 받아올 수 있게 해야함.
    //   if(users.id.includes(id)) {
    //     const idx = users.id.indexOf(id);
    //     if(users.psword[idx] === psword) {
    //       response.success = true;
    //       return res.json(response);
    //     }
    //   }
    //   response.success = false;
    //   response.msg = "로그인 실패~home.ctrl.js";
    //   return res.json(response);

    // 여기까지 살려둡니다///
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  }
};


module.exports = {
 output,
 process,
};