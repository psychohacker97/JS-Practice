function countUnique(array){
    if(array.length){
        let i = 0 ;
        for(let j=1; j<array.length; j++){
            if(array[i]!=array[j]){
                i++;
                array[i]=array[j];
            }
        }
        return i+1;
    }
    else{
        throw new Error('Array is Empty')
    }
}

const result = countUnique([1,1,2,2,3,4,4,5,6,7,8,8,8,9,9,9,11,12,12,14]);
console.log(result);