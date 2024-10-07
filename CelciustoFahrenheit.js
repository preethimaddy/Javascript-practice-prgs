function celsiusToFahrenheit(celsius) {

    return (celsius * 9/5 + 32)
}

let celsius = 37;
console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`)