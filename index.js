// let n = 5;
// let result=""

// for (let i = 1; i <= n; i++) {
//     if(i==1){
//         result+=1;
//     }
//     else{
//         for(let j=i;j<=i;j++){
//             result+=j
//             for(let k=i-1;k<i;k++){
//                 result+=k
//             }
//         }
//     }

//     console.log(result)

// }

//********************************************************************************//

// let abc = "fhdsjkfhsjfdsfjhabb"
// console.log(abc[0])
// let result = false;

// for(let i = 0 ; i < abc.length ; i++){
//     if(abc[i]=='a'){
//         if(abc[i+1]=='b'){
//             if (abc[i+2]=='b') {
//                 result = true
//             }
//         }
//     }
// }
// console.log(result)

// console.log("Git is working or not")

//Defualt Parameter

// function sum(a,b=5){
//     console.log(a*b)
// }

// sum(2)

//Arrow function

// const sum = (a,b)=>{
//     return a+b
// }

//let num = [2,3,4,6,8]

// const findElementGreaterThanTen = (arr)=>{
//     let arr2=[]
//     let number;
//     for (const element of arr) {

//         number = element*2
//         if(number > 10){
//             arr2.push(number)
//         }
//         else{
//             console.log("Not Greater than 10")
//         }

//     }return arr2;
// }

// console.log(findElementGreaterThanTen(num))

//Filter Method

// let array1 = [1,4,9,16,25]

// let newArray = array1.filter((currentValue,index,arr)=>{
//     return currentValue > 9
// });

// console.log(array1)
// console.log(newArray)

//Map Method

// let array1 = [1,4,9,16,25]

// let newArray = array1.map((currentValue,index,arr)=>{
//     return currentValue > 9
// });

// console.log(array1)
// console.log(newArray)

//Chain of Map method

// let array1 = [1,4,9,16,25]

// let newArray = array1.map((x)=>{
//     return x*2
// }).filter((y)=>{
//         return y>10});

// console.log(newArray)

// let num = [1,2,3,4]

// let newArray = num.reduce((previous,current)=>{
//     return previous+current;
// })

// console.log(newArray)

//String Method

// let str = "Hizbullah"

// let str2 = str.substring(2,5)
// console.log(str2)

/////Replace Method

// let a = "Hizbullah"
// let b = a.replace("Hizb","Safi")
// console.log(b);

///CharCode method of String
//charAt

// console.log(a.charCodeAt(a.length-1))

//Property Access method of String

// let str = "Hizbullah"
// console.log(str[0])

//upper and lower Case
// let a = "HIZBULLAH"
// let b = "bhatti"

// console.log(a.toLowerCase())
// console.log(b.toUpperCase())

//Concate Method same as +

// let a = "hello"
// console.log(a.concat(" World"))

//trim method of String
// let a = "                   Hizbullah               ";
// console.log(a)
// let trimmedA = a.trim()
// console.log(trimmedA)

//Convert String to an Array
// let text = 'a b c d e f'
// let textArray = text.split(' ');
// console.log(textArray)

//Date Object in JavaScript

// console.log(new Date());

// console.log(new Date().toLocaleString())

// console.log(new Date().toString());

// console.log(new Date().toDateString());

// console.log(new Date().toLocaleTimeString());

// console.log(Date.now())

// console.log("----------------------------------------")
// console.log(new Date(2021,11,24,2,45,23,45))

/////Objects

// const obj = {
//     name:"HIzbullah",
//     obj2:{
//         name:"ahmed"
//     }
// }
// console.log(obj.name)
// console.log(obj.obj2.name)

///Array Destructuring

// let arr = ["Hizbullah","Bhatti","Sukkur IBA"]

// let [name,caste,uni] = arr;

// console.log(name)

// Object Destructuring

// let obj = {
//     name:"HIzbullah",
//     caste:"Bhatti",
//     city:"Kumb",
//     getAllData(){return `My Name is ${obj.name} , My caste is ${obj.caste} and my city is ${obj.city}`}
// }

// let {name,caste,city,getAllData} = obj;

// console.log(getAllData())

//Dynamic Object Destructuring
// [] will show the value of the variable and not the variable name itself

// let myName = "Hizbullah"
// const obj = {
//     myName : "hello how are you",
//     [myName] : "I am fine",
// }
// console.log(obj)

//Spread Operator

// let a =[1,2,3,4,5]
// let b = [6,7,8,9,10]
// let c = [...a,...b]
// console.log(c)

//Object entries and values

// let obj = {
//     name:"Hizbullah",
//     age:22,
// }
// console.log(Object.entries(obj)); //It will return an array of arrays using the key value pair
// console.log(Object.values(obj));  //it will return an array of values

//Rest operator for Objects

// let obj = {name:"Hizbullah",age:22,city:"Kumb"}
// let obj2 = {...obj,caste:"Bhatti"}

// console.log(obj2)
// console.log(obj)
// console.log(obj2.caste)

//Flat Method of Array

// let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
// console.log(arr.flat(Infinity))

//Object from entries

// let obj = {
//     name:"Hizbullah",
//     age:22,
// }

// let name2 = [["name","Hizbullah",["caste",'bhatti']],["age",22]]
// console.log(Object.fromEntries(Object.entries(obj))) //It will return an object using the key value pair from an array of arrays
// console.log(Object.entries(obj))  //it will return an array of values
// console.log(Object.fromEntries(name2))

//BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// let num = 1n+2n;
// console.log(typeof num)

//Event Capture and Bubbling
//addEventListener has 3rd parameter which is boolean and by default it is false which is called event bubbling
//if we set it to true then it is called event capturing

//addEventListener
//addEventListner is used to add an event to an element it has 3 parameters 1st is event name 2nd is function and 3rd is boolean


//Synchrounous JavaScript
//Sync means one after another, means jab ek task complete hojaye tab dusra task start hojaye
//Sync means one line of code is executed after another line of code is executed

const fun2 = ()=>{
    console.log("Function 2 is called")
}

const fun1 = ()=>{
    console.log("Function 1 is called")
    fun2() 
    console.log("Function 1 is called again")
}

fun1()