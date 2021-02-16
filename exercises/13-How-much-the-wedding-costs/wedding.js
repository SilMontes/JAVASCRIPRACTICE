
var guests = promp("How many people are invited?");


function getPrice(guests){
    var price = 0 ;
    if (guests<51){
        return price=4000;
    }
    else if (guests<101){
        return price=10000;
    }
     else if (guests<201){
        return price=15000;
    }
    else if (guests>200){
        return price=20000;
    }
}
 let price= getPrice(guests)
 console.log("You're wedding wil cost " + price +" dollars");
