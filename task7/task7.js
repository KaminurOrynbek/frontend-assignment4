let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");


a = parseFloat(a);
b = parseFloat(b);

let areaRectangular = a * b;
let perimeterRectangular = (a + b) * 2;
let diff1Rectangular = a - b;
let diff2Rectangular = b - a;
let div1Rectangular = a / b;
let div2Rectangular = b / a;

document.getElementById("result").innerHTML = `
            <p>Area of Rectangular (a * b): ${areaRectangular}</p>
            <p>Perimeter of Rectangular ((a + b) * 2): ${perimeterRectangular}</p>
            <p>Difference (a - b): ${diff1Rectangular}</p>
            <p>Difference (b - a): ${diff2Rectangular}</p>
            <p>Division (a / b): ${div1Rectangular.toFixed(2)}</p>
            <p>Division (b / a): ${div2Rectangular.toFixed(2)}</p>
        `;