"use strict";

//이 파일은 정보를 은닉화하고, 은닉화된 정보를 받아올 수 있게끔 해두었다.

//사실 여기에 있는 유저 정보는 db에 있고, sql로 접근하게 될 것이여!
class UserStorage {
  static #users = { //#: 은닉화, public -> private으로 선언
    id: ["abc", "사과", "김커피"],
    psword: ["1234","1234","123456"],
    name: ["땅콩","맘모스빵","크랜베리"],
  };


//로그인 로직에서 데이터를 받아올 수 없는 상태(#users : 은닉화)에는 메소드를 통해 데이터를 받아올 수 있게 해야한다! -> 메소드 만들기

//db에 있는 유저정보를 getUsers메소드가 반환하게 작성하게 될 것
  static getUsers(...fields) { //static이 여기도 붙는 이유: static으로 생성된 클래스에서 만들어지는 메소드 이기때문!

    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}
module.exports = UserStorage;