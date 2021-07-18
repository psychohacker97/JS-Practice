//logic1
function isAnagram(string1,string2){
    if(string1.length != string2.length){
        return 'String is not an Anagram'
    }
    else{
        let string1Map = new Map();
        for(let i of string1){
            if(string1Map.get(i) === undefined ){
                string1Map.set(i,1);
            }
            else{
                string1Map.set(i,string1Map.get(i)+1);
            }            
        }
        for(let j of string2){
            if(string1Map.get(j) > 0 || string1Map.get(j) !== undefined ){
                string1Map.set(j,string1Map.get(j)-1);
            }
            else{
                return 'String is not an Anagram';
            }
        }
        return 'String is an Anagram';

    }
    
}

//logic 2

function isAnagram2(string1,string2){
    if(string1.length != string2.length){
        return 'String is not an Anagram'; 
    }
    let counter={};
    for(let letter of string1){
        counter[letter]=(counter[letter] || 0) + 1 ;
    }
    for(let item of string2){
        if(!counter[item]){
            return 'String is not an Anagram'; 
        }
        counter[item]-=1;
    }
    return 'String is an Anagram'; 
}

const result = isAnagram('hello','llheo');
console.log(result);
const result2 = isAnagram2('hello','llaeo');
console.log(result2);