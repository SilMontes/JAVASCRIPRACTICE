let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let price = 0;
    // Your code here
    if (guests<51){
      return  price=4000;
    }
     else if (guests<101){
       return price=10000;
    }
    else  if (guests<201){
       return price=15000;
    }
     else if (guests>200){
      return  price=20000;
    }
  
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');