// Your code here:

    for (var i = 99; i >= 1; i=i-1) {
       if (i !=0 && i!=1){
            console.log(i + " bottles of milk on the wall, "+ i + " bottles of milk. Take one down and pass it around, " + parseInt(i-1)+ " bottles of milk on the wall.");
       }
      // else if(i==1){
          else{ 
           console.log(i+" bottle of milk on the wall, " +i+ " bottle of milk. Take one down and pass it around, no more bottles of milk on the wall." + "</br>"+ "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
       }
    //    else {
    // //        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    //    }
}