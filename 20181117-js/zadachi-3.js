function filter(input, than) {
var result = [];

try {

if(input.length != 0) {
    for (var i = 0; i < input.length ; i++) {
        if (input[i] > than) {
        result.push(input[i]);
        }
        else if (input[i] < 0) {
        throw new Error('В массиве есть отрицательное число');
        }
        else if (!isFinite(input[i])) {
        throw new Error('В массиве есть не-число');
        }
      }
  }

else {throw new Error('Это пустой массив');}

return result;

}


catch (e) {
console.log(e.message);
}
}





var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);
console.log(result);

var array = [12, 100, 34, 65, 10];
var result = filter(array, 20);
console.log(result);

var array = [12, 'Петя', 34, 65, 10];
var result = filter(array, 60);
if (result != undefined){
  console.log(result);}

var array = [12, -100, 34, 65, -10];
var result = filter(array, 20);
if (result != undefined){
console.log(result);}

var array = [];
var result = filter(array, 20);
if (result != undefined){
console.log(result);}