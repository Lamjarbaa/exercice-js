// Exercice 1:
function addition(a, b) {
  return a + b;
}

console.log(addition(1, 2)); 
console.log(addition(-2, -4));


// Exercice 2:
function minuteToSecond(minutes) {
  return minutes * 60;
}

console.log(minuteToSecond(4)); 
console.log(minuteToSecond(3)); 


// Exercice 3:
function increment(number) {
  return number + 1;
}

console.log(increment(1)); 
console.log(increment(4));


//   Exercice 4:
function getSurface(base, hauteur) {
  return (base * hauteur) / 2;
}

console.log(getSurface(8, 2)); 
console.log(getSurface(7, 3)); 


// Exercice 5:
function strReverse(str) {
  return str.split('').reverse().join('');
}

console.log(strReverse('WayToLearnX')); 
console.log(strReverse('Hello'));


// Exercice 6:
function getMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10)); 

// Exercice 7:

function getFirst(arr) {
  return arr[0];
}

console.log(getFirst([1, 2, 3])); 
console.log(getFirst([50, 60, 70])); 


// Exercice 8:




// Exercice 9:
function getExtention() {
  let array3=["kawtar.html","kawtar1.jpg","kawtar2.js"];
  let array4=[];
  for (let i = 0; i < array3.length; i++) {
      let r=array3[i].lastIndexOf(".");
      let s=array3[i].slice(r+1);
      console.log(s);
  }
          }
          getExtention();

      
          