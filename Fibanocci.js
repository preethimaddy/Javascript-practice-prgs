//Fibanocci series

let input =[0,1]

function FibanocciSeries(n) {

    for(let i=2; i<n; i++){

        input.push(input[i-1] + input[i-2])
    }
    return input
}
console.log(FibanocciSeries(3))