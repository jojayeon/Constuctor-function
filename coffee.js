
class makeCoffee {
  constructor(wondoo, water, sugar, milk) {
    this.wondoo = wondoo;
    this.water = water;
    this.sugar = sugar;
    this.milk =  milk;
  }
  //* 규격 만들기
  set wondoo(value) {
    if(typeof(value) === "string"){
      this._wondoo = value;//_값 시팅을 통과한 값에 _를 붙여주는 관습이 있다.
    } else {
      console.error("wondoo는 문자열이 아니야 문자열이여야해")
    }
  }
  get wondoo() {
    return this._wondoo + "산";
  }
  set water(value){
    if(typeof(value) === "number"){
      this._water = value;
    }else {
      console.error("놉")
    }
  }
  get water() {
    return this._water + "ml";
  }

  set sugar(value) {
    if(typeof(value) === "boolean") {
      this._sugar = value;
    } else {
      console.error("sugar는 boolean이어야 합니다.");
    }
  }

  get sugar() {
    if(this._sugar === true) {
      return "단맛커피";
    } else {
      return "쓴맛커피";
    }
  }
} 



//set이 안에서 만 사용가능
//_값 시팅을 통과한 값에 _를 붙여주는 관습이 있다.


let test = new makeCoffee("대전", 300, true, true);
let test2 = new makeCoffee(1, 300, false, true);// 빠져 버림
console.log(test);
console.log(test2);
console.log(test.wondoo);// _로 했는데 다시 원대로 바꾸어서 가져오기 가능 get 때문에
console.log(test.water);
console.log(test.sugar);
console.log(test2.sugar);