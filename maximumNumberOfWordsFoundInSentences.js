let sentences = ["alice and bob love leetcode","i think so too","this is great thanks very much"]
let count = 1;
let counterArray=[]
for(let i = 0 ; i<sentences.length;i++){
    for(let j =0 ; j<sentences[i].length;j++){
        if(sentences[i][j]==" "){
            console.log(count)
            count++;    
        }
    }
    counterArray[i]=count;
    count=1;  
}

///// Sorting of Array 

for(let i = 0; i<counterArray.length; i++){

   
    let minptr = i;
    for(let j = i+1; j<counterArray.length; j++){

        if(counterArray[minptr] > counterArray[j]){
            minptr = j;
        }
    }
    //swap
    let temp = counterArray[i];
    counterArray[i] = counterArray[minptr];
    counterArray[minptr] = temp;
}
return number = console.log(counterArray[counterArray.length-1])

