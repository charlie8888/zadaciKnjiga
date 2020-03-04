
//Zadatak broj 1. Ispetljavanje trougla

/* for(taraba = '#'; taraba.length <=7; taraba = taraba + "#"){
    console.log(taraba );
}  */


//Zadatak broj 2. FizzBuzz  

for(broj = 1; broj <101; broj++){
    if(broj % 15==0){
        console.log('FizzBuzz');
    }
    else if(broj % 3 == 0) {
        console.log('Fizz');
    }else if(broj % 5 == 0){
        console.log('Buzz');
  
    } else {
        console.log(broj);
    }
}