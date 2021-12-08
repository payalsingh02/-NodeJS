// var rect = {
//     perimeter : (x , y) => ( 2*(x+y)),
//     area : (x , y) => ( x * y)
// };
var rect = require('./rectangle');


function solveRect (l,b) {
    console.log(" solving for rectangle with l = " + l +" and b =" + b);

    if ( l <=0 || b <= 0){
        console.log("Rectangle dimensions should be greater than zero : l = "+ l +" and b =" + b);
    }
    else{
        console.log(" The area of rectangle is " + rect.area(l,b));
        console.log(" The perimeter of rectangle is " + rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,5);