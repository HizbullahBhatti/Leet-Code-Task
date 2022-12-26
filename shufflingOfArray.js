let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
console.log(nums[nums.length/2]);
let splittedArray=[];
let splitted2ndArray=[];
let index = 0;
let itr=0;
const finalArray=[];

for (let i = 0; i < nums.length/2; i++) {
    splittedArray[i]=nums[i];
    
}

for (let i = nums.length/2; i < nums.length; i++) {
    
    splitted2ndArray[index]=nums[i];
    index++;
    
}

for (let i = 0; i < nums.length/2;i=i+1) {
    
    finalArray[itr]=splittedArray[i];
    finalArray[itr+1]=splitted2ndArray[i];
    itr+=2;
    
    
}
 
console.log(splittedArray);
console.log(splitted2ndArray);
console.log(finalArray);
