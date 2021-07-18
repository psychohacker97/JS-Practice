//Logic 1
function findSumZero(numbersArray){
    let outputPair = [];
    for(let i = 0; i < numbersArray.length;i++ ){
        for(let j = i+1; j < numbersArray.length;j++){
            if(numbersArray[i]+numbersArray[j] == 0){
                outputPair.push(numbersArray[i],numbersArray[j]);
                return outputPair;
            }
        }
        
    }

}

//Logic 2
function findSumZero2(numbersArray){
    let initialIndex = 0 ;
    for(let i = numbersArray.length-1; i>0; i--){
        if( numbersArray[initialIndex]+numbersArray[i] == 0 ){
            return [numbersArray[initialIndex],numbersArray[i]];
        }
        else if( numbersArray[initialIndex]+numbersArray[i] < 0 ){
            initialIndex++ ;
            if( numbersArray[initialIndex]+numbersArray[i] == 0 ){
                return [numbersArray[initialIndex],numbersArray[i]];
            }
        }
    }
}

//logic 3
function findSumZero3(numbersArray){
    let left = 0;
    let right = numbersArray.length-1;
    while(left < right){
        if(numbersArray[left]+numbersArray[right] == 0){
            return [numbersArray[left],numbersArray[right]]
        }
        else if(numbersArray[left]+numbersArray[right] > 0){
            right--;
        }
        else{
            left++;
        }
    }

}

const inputArray = [-5, -4, -3, -2, 0, 2, 4, 6, 8] ;
let output = findSumZero(inputArray);
console.log('First Logic ' + output);

let output2 = findSumZero2(inputArray);
console.log('Second Logic ' + output2);

let output3 = findSumZero3(inputArray);
console.log('Third Logic ' + output3);