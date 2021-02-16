function fizzBuzz() {
    // Your code here
    let word1 = "Fizz";
    let word2 = "Buzz";
    let word3 = "FizzBuzz";
   // let result = "";
    for (var i = 0; i <=100; i++) {
        if (i = [i] % 3 === 0) {
            return word1;
        }
        else if (i = [i] % 5 === 0) {
          return  word2;
        }
        else if (i = [i] % 3 === 0 && [i] % 5 === 0) {
           return  word3;
        }
        else {
           return [i];
        }
     };


};

console.log(fizzBuzz());