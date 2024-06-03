function WorkThree(index,name) {
  let local = {
    number : index+1,
    name :name 
  };
  return local;
};
let test = WorkThree(0,"조자연");
console.log(test);
