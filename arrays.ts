// ----------- Q # 1 -------------
let fruits:string[]=["apple" , "banana" , "mango" , "orange"];
console.log(fruits,"Fruits");


// ----------- Q # 2 ---------------
let number:number[] = [10 , 20 , 30 , 40];
console.log(number,"Number");


// ----------- Q # 3 ----------------
let thirdFruit = fruits[2];
console.log(thirdFruit , "accessing third element")


// ----------- Q # 4 ---------------
number[1] = 25;
console.log(number , "changed the second element to 25");


// ----------- Q # 5 ---------------
fruits.push("grapes");
console.log(fruits,"adding element of grapes");


// ----------- Q # 6 ---------------
let lastFruit =fruits.pop();
console.log(fruits , "removing last element");


// ----------- Q # 7 ---------------
let firstFruit = fruits.shift();
console.log(fruits , "removing the first element");


// ----------- Q # 8 ----------------
fruits.unshift("kiwi"); 
console.log(fruits , "adding kiwi at the beginning");


// ----------- Q # 9 ----------------
fruits.splice(1,2);
console.log(fruits , "removed 2 elements from starting from index 1");


// ----------- Q # 10 -----------------
fruits.splice(2,0,"pineapple" , "pear");
console.log(fruits , "inserting `pineapple` & `pear` at index 2");


// ---------- Q # 11 -------------------
const citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits , "creating an array that contains the first two elements of fruit array");

// ----------  Q # 12 -----------------
const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits ,"creating a new array that contains the last two fruits of fruit array");