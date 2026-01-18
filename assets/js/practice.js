const name = 'John';
let a = 30;
console.log(a);
const user = {name :"Alice", age :"85"};
username = "Robichon";
console.log("hello" + username);

let string = "Hello world!";
let new_string = string.toUpperCase();
console.log(new_string);
console.log(new_string.split());

const fruits = ['apple', 'pear', 'banana'];
const numbers = new Array(1,2,3,4);
console.log(fruits[1]);
fruits[3] = 'watermelon';
console.log(fruits);
fruits.push('xxx');
fruits.pop()
console.log(fruits)


const fiction= {
    title : 'La Religieuse',
    year : 'XVIII',
    token_length : 10000,
    characters : ['Jérome', 'Manuri', 'Ursule'],
    address: {
        street : 'ulm',
        city : 'Cherbourg',
        state : 'France'
    }
}
console.log(fiction);
console.log(fiction.address.street);
fiction.publisher = 'Maison Lesauvage';
console.log(fiction);

const todos=[
    {
        id:1,
        text:'meeting with the king',
        mission_status: 'done'
    },
    {
        id:2,
        text:'meeting with the queen',
        mission_status: 'done'
    },
    {
        id:3,
        text:'meeting with the princess',
        mission_status: 'done'
    }
];

const todosjson = JSON.stringify(todos);
console.log(todosjson);

'$'
console.log('hello' + username);
//console.log('"hello + ${a+b}"');


significance = 0.01;
if (significance < 0.05 || significance == 0.05) {
    console.log("***");
    document.getElementById("significance").innerText = 'Hurelevent'
    document.getElementById("significance").style.color = 'red'
    document.getElementById("significance").style.display = 'flex'
    document.getElementById("significance").style.justifyContent = 'center'
}

let number = 0;
for(let i =0; number < 10; i++){
    number += 1;
    console.log(number);
    }
function color_to_red() {
    text=document.getElementById("funtion_p");
    text.style.color='red';
}

color_to_red()

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const title = document.getElementById("shaky");
    title.classList.add("animate__animated animate__bounce");
});

// appplication


