"use strict";

//이 파일은 정보를 은닉화하고, 은닉화된 정보를 받아올 수 있게끔 해두었다.

//사실 여기에 있는 유저 정보는 db에 있고, sql로 접근하게 될 것이여!
class UserStorage {
  static #users = { //#: 은닉화, public -> private으로 선언. 이러면 외부에서 불러올 수 없는 변수가 됨!
    //static은 UserStorage 클래스에서 user에 접근하고 싶을 때, 정적 변수로 만들기 위해 사용함
    id: ["abc", "사과", "김커피"],
    psword: ["1234","1234","123456"],
    name: ["땅콩","맘모스빵","크랜베리"],
  };


//로그인 로직에서 데이터를 받아올 수 없는 상태(#users : 은닉화)에는 메소드를 통해 데이터를 받아올 수 있게 해야한다! -> 메소드 만들기

//db에 있는 유저정보를 getUsers메소드가 반환하게 작성하게 될 것
  static getUsers(...fields) { //static이 여기도 붙는 이유: static으로 생성된 클래스에서 만들어지는 메소드 이기때문!
//은닉화된 정보를 메서드로 전달하는 것임.
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => { //여기서 fields를 콘솔에 찍어보면 파라미터로 넘긴 데이터들이 배열 형태로 들어온다
     // newUsers : 새로운 오브젝트를 생성.field는 변수. this를 통해서 users에서 정보를 받아왔기 때문에 담아줄 변수가 필요함
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  //getUserInfo 메소드 : id값을 받아서 인덱스값이 일치하는 값들을 반환해줄 거임!
  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //받아온 users의 키값들만 리스트로 만들거임. [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) =>{
      newUser[info] = users[info][idx];//idx값에 해당하는 열의 정보를 뱉음
      return newUser;
    }, {});//reduce로 돌렸고, 초기값으로 오브젝트를 넣어준 것임.
    return userInfo;
  }
}


module.exports = UserStorage;