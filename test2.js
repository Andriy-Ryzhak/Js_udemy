// let user = {
//     name: 'ivan',
//     age: 30
// };

// let object = user;

// console.log(object);

// let clone = {};

// for (let key in user) {
//     clone[key] = user[key];
// }

// console.log(clone);

// clone.name = 'john';

// console.log(clone);



// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };


// Object.assign(user, permissions1, permissions2);

// console.log(user);

// // 27.01.22

// let user = {
//     name: "John",
//     ahe: 30
// };

// user.sayHi = function() {
//     console.log("Holla");
// };

// user.sayHi();

// user = {
//     sayHi() {
//         console.log("Helou");
//     }
// };

// console.log(user);



// let user = {
//     name: "Patron",
//     age: 30,

//     sayHi() {
//         alert(user.name);
//     }

// };

// let user = {name: "Джохн"};
// let admin = {name: "Хуй балоновий"};

// function sayHi() {
//     console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f']();


// // 28.01.22


// function User(name) {
//     this.name = name;
//     this.isAdmin = true;
// }

// let user = new User("Pitux");

// console.log(user.name);
// console.log(user.isAdmin);


// function BigUser() {
//     this.name = "Vasia";

//     return {name: 'Godzilla'};
// }

// console.log(new BigUser().name);


// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         console.log('My name is ' + this.name);
//     };
// }

// let pidor = new User('Pidor');

// pidor.sayHi();


// const obj = {};

// function A() {return obj;}
// function B() {return obj;}

// console.log(new A() === new B());

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('enter a', "");
//         this.b = +prompt('enter b', "");
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }


// let calculator = new Calculator();
// calculator.read();

// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('How much need add');
//     };
// }


// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


// let user = {};

// console.log(user?.address?.street);

// let user1 = {
//     admin() {
//         console.log("i'm admin");
//     }
// };

// let user2 = {};

// user1.admin?.();
// user2.admin?.();


// let num = Number(obj);

// let n = +obj;

// console.log(n);


// let date1 = new Date();

// let date2 = new Date();

// let delta = date1 - date2;

// console.log(delta);

// console.log(date1);

// console.log(date2);


// for (let i = 0; i < 123456; i++) {
//     console.log(i);
// }



// let user = {
//     name: "john",
//     money: 1000,

//     toString() {
//         return `{name: "${this.name}"}`;
//     },

//     valueOf() {
//         return this.money;
//     }

// };

// console.log(user);

// console.log(+user);

// console.log(user + 500);



// let roma = {
//     name: 'roma',
//     sayHi: function() {
//         console.log('Hi, my friend');
//     }

// };

// roma.sayHi();

// let n = 1.235;
// console.log(n.toFixed(2));


// // 29.01.22


// console.log(str[str.length - 1]);


// for (let i of str) {
//     console.log(i);
// }

// let str = 'watermelon';
// console.log(str.slice(2));

// console.log(str.repeat(5));


// let fruits = ['apple', 'waterlemon', 'pear'];

// console.log(fruits[0]);

// console.log(fruits.pop());

// console.log(fruits);


// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) {
//             partialSum = 0;
//         }
//     }

//     return maxSum;
// }



// // 30.01.22


// function compeareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1,3,2,6,4,-45,9,7,99,12,75,25];

// arr.sort(compeareNumeric);

// console.log(arr);


// function camelize(str) {
//     return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// let map = new Map();

// map.set('1', 'str11');
// map.set(1, 'num12');
// map.set(true, 'bool1');
// map.set(false, 'bool2');

// console.log(map.get(1));
// console.log(map.get('1'));

// console.log(map.size);

// let john = {name: 'john'};

// let visitsCountMap = new Map();

// visitsCountMap.set(john, 123);
// console.log(visitsCountMap.get(john));

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomato', 350],
//     ['onion', 50]
// ]);

// for (let veg of recipeMap.keys()) {
//     console.log(veg);
// }

// for (let amount of recipeMap.values()) {
//     console.log(amount);
// }

// for (let entry of recipeMap) {
//     console.log(entry);
// }


// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`); 
//   });


// let map = new Map([
//    ['1', 'str1'],
//    [1, 'num1'],
//    [true, 'bool1'] 
// ]);

// console.log(map.get('1'));

// let obj = {
//     name: 'john',
//     age: 30
// };

// let map = new Map(Object.entries(obj));

// console.log(map);


// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);

// console.log(prices.orange);

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries());

// console.log(obj);

