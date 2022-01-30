"use strict";
// 07.12.21

function copy(mainObj) {
    let objCopy = {};

    let key ;
    for ( key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
       x: 7,
       y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// ----

const oldArray = [2, 3, 4, 5, 6];
const newArray = oldArray.slice();
newArray[0] = "eh";
newArray[1] = "huita";
console.log(oldArray);
console.log(newArray);



const video = ["youtube", "vimder", "muvie"],
      blogs = ["wordpress", "livejornal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);

//-------


