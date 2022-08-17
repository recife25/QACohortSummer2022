/**
 * 
 * /javascript

const charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


function printForward (charArray) {
    for (i = 0; i < charArray.length; i++) {
        console.log(charArray[i]);
    }
}

//print backard
for (i = charArray.length-1; i >= 0; i--) {
    if ( i % 2 == 0 ) {
        console.log(charArray[i]);
    }
}
#1 write functions forward and backward
#2 print within each function the content of the array
#3 print as returned array from the functions
#4 pass arrays by pointers
 * 
 *  */

const charArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// function printForward(charArray){
//     for (i = 0; i < charArray.length; i++) {
//         console.log(charArray[i]);
        
//     }
//     return charArray;
// }
// console.log(charArray);

 //printBackard(charArray){
    for (i = charArray.length-1; i >= 0; i--) {
        console.log(charArray[i]);
        
    }
    //return charArray;
//}
//console.log(charArray);
