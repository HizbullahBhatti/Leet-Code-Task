let accounts = [[1,2,3],[3,2,1,4],[3,5,6,7,4],[1,2],[3]]
let sumOfAccounts=[];
let sum=0;

for(let i=0;i<accounts.length;i++){
    for(let j=0;j<accounts[i].length;j++){
        sum+=accounts[i][j]    
    }
    sumOfAccounts[i]=sum;
    sum=0;
}
console.log("before sorting "+sumOfAccounts)

for(let i = 0; i<sumOfAccounts.length; i++){

   
    let minptr = i;
    for(let j = i+1; j<sumOfAccounts.length; j++){

        if(sumOfAccounts[minptr] > sumOfAccounts[j]){
            minptr = j;
        }
    }
    //swap
    let temp = sumOfAccounts[i];
    sumOfAccounts[i] = sumOfAccounts[minptr];
    sumOfAccounts[minptr] = temp;
}

console.log("After sorting "+sumOfAccounts)
return number =sumOfAccounts[sumOfAccounts.length-1]


