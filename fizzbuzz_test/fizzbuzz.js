

let numero_inserido =  parseInt(prompt("insira um numero"))

 function fizzbuzz (){

    for( let i = 1; i <= numero_inserido; i++){
        if( i % 3 ===0 && i % 5 === 0){
            console.log("FizzBuzz")
        }
        else if( i % 3 === 0){
            console.log("Fizz")
        }
        else if( i % 5 === 0){
            console.log("Buzz")
        }
        else console.log(i)
    }
 } 

 fizzbuzz()


