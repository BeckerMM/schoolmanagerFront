export default class user {

  username
  age
  password
  address
  userEnum

  constructor( username, password, address, age, userEnum){
    this.username = username;
    this.age = age;
    this.password = password;
    this.address = address;
    this.userEnum = userEnum;
  }
}