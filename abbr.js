//create a function to change sentence words into abbr
function toAbbreviation(sentence){
let abbr = '';
    // const sentenceWords = sentence.ToUpperCase().split(' ');
    const sentenceWords = sentence.toUpperCase().split(' ');
    console.log(sentenceWords);
for ( i = 0; i <= sentenceWords.length - 1; i++){
    abbr = abbr + sentenceWords[i].substring(0, 1);
}
return abbr;
}
// console.log(toAbbreviation('have a great day'));
// const abbr1 = 'you never walk alone in life';
// console.log(toAbbreviation(abbr1));

exports.toAbbreviation = toAbbreviation;