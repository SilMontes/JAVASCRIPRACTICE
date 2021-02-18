function fizzBuzz() {
    // Your code here
    let word1 = "Fizz";
    let word2 = "Buzz";
    let word3 = "FizzBuzz";
   // let result = "";
    for (var i = 1; i <101; i++) {
        if  (i % 3 === 0 && i % 5 === 0) {
           console.log( word3); 
        }
        else if (i % 5 === 0) {
          console.log(word2);
        }
        else if (i % 3 === 0) {
            console.log(word1);
        }
        else {
           console.log(i);
        }
     };


};
fizzBuzz();
