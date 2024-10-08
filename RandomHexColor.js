// RandomHexcolor code

function randomHexColor() {

    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

console.log(`Random hex color: ${randomHexColor()}`);
