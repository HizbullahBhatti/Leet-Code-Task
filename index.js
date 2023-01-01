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

let str = "Hizbullah"

let str2 = str.substring(2,5)
console.log(str2)










