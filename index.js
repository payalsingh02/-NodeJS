// var rect = {
//     perimeter : (x , y) => ( 2*(x+y)),
//     area : (x , y) => ( x * y)
// };
var rect = require('./rectangle');


function solveRect (l,b) {
    console.log(" solving for rectangle with l = " + l +" and b =" + b);

    rect(l,b,(err , rectangle) =>{
        if (err){
            console.log("ERROR:" , err.message);
        }
        else{
            console.log("the area of rectangle of dimensions l = " + l + " and b= " + b + " is " + rectangle.area());
            console.log("the perimeter of rectangle of dimensions l = " + l + " and b= " + b + " is " + rectangle.perimeter());
        }
    });
    
    console.log("This statement is after the call to rect()");
}

solveRect(2,4);
solveRect(0,5);
solveRect(2,-5);