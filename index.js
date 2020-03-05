
//Zadatak broj 1. Ispetljavanje trougla

/* for(taraba = '#'; taraba.length <=7; taraba = taraba + "#"){
    console.log(taraba );
}  */


//Zadatak broj 2. FizzBuzz  
/*
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
}; */

// zadatak broj 3 Sahovska tabla


var size = 8; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);




























