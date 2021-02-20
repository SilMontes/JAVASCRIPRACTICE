var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};
person.lucky_numbers[3]= 33;
console.log(person.lucky_numbers[3]);
var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};
var person3={
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    lucky_numbers: [1,2,3,4],
    significant_other:null
}

var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
 //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
//Enter all your code here:
for ( var i=0; i< anArray.length; i++){ 
    //console.log(anArray[i]);
      for (var x=0; x < anArray[i].lucky_numbers.length; x++){
          sumOfAllLuckyNumbers += x;
      }
 }
  
  return sumOfAllLuckyNumbers;
}

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 