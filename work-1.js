// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.
// ? 기본적으로 주석으로 정리해 놓고 시작 - 가벼운 명세ㅎ

function WorkOne(a,b) {
// * logic : 매개변수 두개를 받은 다음
// * logic : reurn은 객체였음 좋겠다.
  let localVariable = {a,b};
  return localVariable;
};

console.log(WorkOne("c","b"));

let a = WorkOne('w','x');
console.log(typeof(a));
console.log(a);

function WorkOne2(a,b) {
  let localVariable = {};
  localVariable[a] = b;
  return localVariable;
}
console.log(WorkOne2("a","b"));
