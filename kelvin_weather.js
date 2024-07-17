const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('What is the Kelvin temperature? ', (kelvin) => {
    kelvin = parseFloat(kelvin);
  
    const celsius = kelvin - 273;
    console.log(`The temperature is ${celsius} degrees Celsius.`);
  
    let fahrenheit = celsius * (9/5) + 32;
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
  
    let newton = celsius * (33/100);
    newton = Math.floor(newton);
    console.log(`The temperature is ${newton} degrees Newton.`);
  
    readline.close();
  });
  