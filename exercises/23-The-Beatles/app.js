

//Your code above ^^^
// let uno = "words of wisdom";
// let dos = "there will be an answer"
// function sing(){
//     for (i=1;i<5;i++){
//         let sing="let it be";
//     }
//     return sing+ uno+dos;
// }

// console.log(sing());

function sing(){
    let string="";
    for (let i=0; i<12; i++){
        if(i<4){string=string + "let it be, "};
        if(i==4){string=string + "words of wisdom, "};
        if(i>4 && i<10) {string = string + "let it be, "};
        if(i==10){ string= string + "there will be an answer, "};
        if(i>10){ string= string + "let it be"};
    }
    return string
}
 console.log(sing() );