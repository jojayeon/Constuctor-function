// 분류 규격 라면 볶음면{
//   재료들(라면 종류, 라면 물, 추가 재료){
//     라면종류 : 라면 종류;
//     라면 물: 라면 물;
//     추가재료 : 추가재료;
//   }
// } 
// class 이름 {
//   constructor() {
//   }
// }
class HyeonRamen {
  constructor(ramenName, ramenWater, addFood) {
    this.ramenName = ramenName,
    this.ramenWater = ramenWater,
    this.addFood = addFood
  }
  set ramenName(ramenName) {
    if(ramenName !== "진라면"){
      console.error('진라면이 아니다.');
    }
  }
}



let test = new HyeonRamen("진라면 ", "500ml","체다 치즈");
console.log(test);