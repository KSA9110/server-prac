"use strict";
// UserStorage.js에 있는 유저정보를 처리하는 모델부분이 여기!

const UserStorage = require("./UserStorage");
//UserStorage에 접근해서 데이터를 받아와야 하니까 require로 접근할 수 있게 함.


class User {
  constructor(body) { //생성자. 여기서 body를 받음.
    this.body = body; //this의 바디 안에 인수로 받은 body를 넣어줄 것.
  }

  login() {
    const client = this.body;
    const { id, psword } = UserStorage.getUserInfo(client.id); //원하면 파라미터도 name도 받아올 수있다
    //UserStorage의 getUsers 메소드를 통해 id와 ps값을 가져오겠다!
    
    //아이디값을 받아와서, 아래의 로직에 부합하면 그에 맞는 겷과값 반환
    if (id) {
      if(id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다. User.js" };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다. User.js"};
  }
  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}


module.exports = User;
