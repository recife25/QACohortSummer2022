const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = 0; i < charArray.length; i++){
    console.log(charArray[i]);
}

function arrayForward(charArray) {
    for (let i = 0; i < charArray.length; i++){
        return charArray;
    }
}
console.log(charArray);

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
}

function arrayBackward(array) {
    for (let i = array.length - 1; i >= 0; i--){
        //console.log(array[i]);
        return array;
    }
}
console.log(array)