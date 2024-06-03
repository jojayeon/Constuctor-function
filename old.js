function old(a,b){
  this.frist = a;
  this.second = b;
}
let test = new old(1,2);
console.log(test);


//함수

//규격


class Newold {
  constructor(a,b){
    this.frist = a;
    this.second = b;
  }
}
let test2 = new old(1,2);
console.log(test2);
