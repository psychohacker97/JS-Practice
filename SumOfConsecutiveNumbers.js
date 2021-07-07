function findLargest(array,number){
    if(number > array.length){
        throw new Error('Error Occurded, Numeber is greater than Array Length') ;
    }
    else {
        let sum = 0 ;
        let sumOfArrays = [];
        for (let i =0; i<=list.length-number; i++){
            sumOfArrays.push(sumOfNumbers(array.slice(i,number+i)));
        }
        return Math.max(...sumOfArrays);
    }
}

function sumOfNumbers(numbers){
    numSum = 0;
    for(let i of numbers){
        numSum+=i ;
    }
    return numSum ;
}

const list = [1,2,3,4,3,5,4,6,7,8];
const output = findLargest(list,10);
console.log(output);

function help(array,num){
    let ans=0, tsum=0,psum=0,i=0;
    for(let a=0;a<array.length;a++){
        tsum+=array[a];
       if(a>=num-1){
         if(tsum>=ans-psum){
             ans=tsum-psum;
             psum+=array[i];
             i++;
         } 
         
       }
       //console.log(`loop ${a} - tsum = ${tsum} - ans = ${ans} - psum = ${psum} - i = ${i}`);
    }
   return ans;
}
 const r=help(list,4);
 //console.log(r);
