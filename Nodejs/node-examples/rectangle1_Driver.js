var rect = require('./rectangle1_Module');


function solveRect(l,b) {
    console.log("Solving for rect with l=" + l + " and b=" + b);
    
    if (l<0 || b<0) {
        console.log("rectangle should be greater than 0: l=" + l + " and b=" + b);
    }
    else {
        console.log("Area of rect with dimensions of length = " + l + " and breadth =" + b + " is " + rect.area(l,b));
        console.log("Perimter of rect with dimensions of length = " + l + " and breadth =" + b + " is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);