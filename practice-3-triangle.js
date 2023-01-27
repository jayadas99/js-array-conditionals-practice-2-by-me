var line1 = 9;
var line2 = 8;
var line3 = 9;

// if(line1 == line2 || line1 == line3 || line2 == line3 ){
//     console.log("Isosceles");
// }
if(line1==line2 && line2==line3){
    console.log("Equilateral Triangle");
}

else if(((line1==line2) && (line1 != line3 && line2 !=line3)) || ((line2==line3) && (line2 != line1 && line3 !=line1))|| ((line1==line3) && (line1 != line2 && line3 !=line2))){
    console.log("Isosceles");
}


// else if(line2 == line1 || line2 == line3){
//     console.log("Isosceles");
// }
else{
    console.log("Not Isosceles");
}