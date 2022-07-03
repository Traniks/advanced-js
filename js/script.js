// 95. Как сохранить данные без БД. Работа с localStorage
"use strict";

// localStorage.setItem("number", 5); //чтобы записать новый ключ со значением
// localStorage.getItem("number"); //чтобы получить 
// localStorage.removeItem("number"); //чтобы удалить
// localStorage.clear(); //полное удаление


const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
    if (localStorage.getItem("bg") === "changed") {
         localStorage.removeItem("bg");
         form.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red";
    }
});

const persone = {
    name: "Alex",
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem("alex", serializedPersone);

console.log(JSON.parse(localStorage.getItem("alex")));


// 8888888888888888888888888888888888. Методы перебора массивов
// "use strict";

///////////////////// filter

// const names = ["Ivan", "Ann", "Ksenia", "Vlodimer"];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

///////////////////// map

// let answers = ["IvAn", "AnnA", "KseNIa", "Vlodimer"];

// answers = answers.map(item => {
//     return item.toLocaleLowerCase();
// });

// console.log(answers);

///////////////////// every/some

// const some = [4, "qwq", "fsdasafs"];

// console.log(some.some(item => typeof(item) === "number"));

// const every = [4, 5, 7];

// console.log(every.every(item => typeof(item) === "number"));

///////////////////// reduce

// const arr = [4, 5, 1, 3, 2, 6];

//                     // сумма  что приходит(4)
// const res = arr.reduce((sum, current) => sum + current, 3)
// console.log(res);

// const arr = ["appele", "pear", "plum"];

//                     // сумма  что приходит(4)
// const res = arr.reduce((sum, current) => {
//     return `${sum}, ${current}`;
// });
// console.log(res);

// const obj = {
//     ivan: "persone",
//     ann: "persone",
//     dog: "animal",
//     cat: "animal"
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === "persone")
// .map(item => item[0]);

// console.log(newArr);


// 868686868686868686868686868. Promise (ES6)
// "use strict";

// setTimeout(() => { // Асинхронны код Будет первый
//     console.log("Loading...");

//     const product = {   // Будет вторым
//         name: "TV",
//         price: 2000
//     };

//     setTimeout(() => { // Будет третьим 
//         product.status = "order";
//         console.log(product);
//     }, 2000);
// }, 2000);


// console.log("Запрос..."); 

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => { 
//         console.log("Loading...");
    
//         const product = {   
//             name: "TV",
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => { // обрабатывает и выполняеться при успехе 
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => { 
//             product.status = "order";
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error("data");
// }).finally(() => {
//     console.error("Конец");
// });

// const test = (time) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("All");
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log("All");
// });

// 838383838383838838383838838. AJAX и общение с сервером
// "use strict";

// const inputRub =document.querySelector("#rub");
// const inputUsd =document.querySelector("#usd");

// inputRub.addEventListener("input", () => { //работает всегда когда инпут меняеться 
//     const request = new XMLHttpRequest(); // запрос

//     request.open("GET", "js/current.json"); //он не открывает а собирает настройки для запроса
//     request.setRequestHeader("Content-type", "application/json; charset=utf-8"); //уточнение что передаем(Заголовки HTTP)
//     request.send(); //отправка запроса 

//     request.addEventListener("load", () => { //отслеживает статус готовности запроса
//         if (request.status === 200) {
//             console.log(request.response);
//             const data = JSON.parse(request.response); //перевод в обычный формат js
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //считаем и убирает лишнии цыфры после запятой
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });

// });

// Свойства XMLHttpRequest 
// status - статус запроса (404)
// statusText - тоже самое толко текстом (Ok, Eror)
// response - ответ с бека
// readyState - содержит текушее состояние запроса