// //Типы данных и переменные
// var name = 'Anna'   
// console.log(name);

// var name = 'Yara'   
// console.log(name);


// //if
// var name = 'Anna';   
// if (name == 'Anna') {
// console.log('да');
// }
// else {
// console.log('нет');
// }  

// var name = 'Vasya';   
// if (name == 'Anna') {
// console.log('да');
// }
// else {
// console.log('нет');
// }



// //for
// for ( 
// var a = 0;
// a < 11;
// a++
// )
// console.log(a);

// //sum
// function sum(p1,p2,p3){
//     var result = p1 + p2 + p3;
//     return result;
// }
// var result = sum (10, 20, 30)
// console.log(result);

// //Массивы и объекты задание 1.
// var array = ['привет','loftschool'];
// array.push('я изучаю');
// array.push('javascript');
// console.log(array.length);
// for (var i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// //Массивы и объекты задание 2.
// var array = ['11' ,'2' ,'55' , '64', '970', '9', '21' ,'253' ,'109' , '64'];
// for 
// (var i = 0; i < array.length; i++){
//     if (array[i] < 100)
// {
//     console.log(array[i]);
// }
// };

// //Массивы и объекты задание 3.
// var object = {
//     name: 'Anna',
//     lastName: 'Iskhakova',
//     age: '30'
// };
// console.log(object.name);
// console.log(object.lastName);
// console.log(object.age);
// object.study = 'loftschool';
// console.log(object.study);

// //Массивы и объекты задание 4.

// function Hello (name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
// }
// var human = Hello("Аня", "Исхакова", 30);
// function result(){
//     console.log("Привет, меня зовут " + this.name + " " + this.lastName + " и мне " + this.age + " лет!");
// }
// result.call(human);