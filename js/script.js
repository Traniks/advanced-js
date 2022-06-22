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