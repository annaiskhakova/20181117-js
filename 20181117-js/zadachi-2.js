const element = document.createElement('div');
const container = document.querySelector('#container');

container.appendChild(element);
element.textContent = 'Этот элемент создан при помощи DOM API';

const element2 = document.createElement('div');

container.appendChild(element2);
element2.textContent = 'Этот элемент тоже создан при помощи DOM API';
element2.classList.add('inner');
element2.style.color = 'red';


element2.addEventListener('click', function(){
   console.log('Этот текст говорит о том, что я всё сделал правильно'); 
});

const newlink = document.createElement('a');
container.appendChild(newlink);
newlink.textContent = 'Ссылка';
newlink.setAttribute('href', 'https://loftschool.com');


newlink.addEventListener('click', function(e){
   e.preventDefault();
    console.log('Я кликнул на ссылку ' + newlink.href); 
 });

const myButton = document.createElement('button');
container.appendChild(myButton);
myButton.setAttribute('id', 'myButton');
myButton.textContent = 'Кнопка';

const myInput = document.createElement('input');
container.appendChild(myInput);
myInput.setAttribute('id', 'myInput');
// или так: document.getElementById("myInput").placeholder = "Текст инпута";
myInput.placeholder  = "Текст инпута";

myButton.addEventListener('click', function(){
    console.log(myInput.placeholder); 
 });