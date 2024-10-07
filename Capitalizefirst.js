
function capitalizeWord(str){

    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let sentence =" hi how are you my world";

console.log(capitalizeWord(sentence));