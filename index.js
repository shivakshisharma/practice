//Event listeners,closuers with event listeners 



function attachEventListeners() {
    let count = 0;
    const button = document.getElementById("butt");
    if(button) {
        button.addEventListener("click", function xyz(){
            console.log("Button clicked",++count);
        });
    } else {
        console.log("Button element not found");
    }
}

attachEventListeners();

//Example of functional programming-code reusabililty

const radius=[3,2,1,4]

const area=function(radius){
    return Math.PI*radius*radius;
}
const circum=function(radius){
    return 2*Math.PI*radius;
}
const dia=function(radius){
    return 2*radius;
}


const calculate=function(radius,logic)
{
    const output=[];
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}


Array.prototype.calculate=function(logic)
{
    const output=[];
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,dia));
console.log(calculate(radius,circum));
console.log(radius.calculate(area));

/*CODE->PARSONG->COMPILATION->EXECUTION


//Anonymous function i.e function without the name
/*function(){

}
//function statement or function declaration
function a(){
    console.log("a called")
}


//First class function
param1 is parameters and argu is argument
//function expression
const b=function(params1)
{gument
    return function xyz(){
       
     }
}

b(argu);

*/

//Callbacks and event stener

//the callback function is the function we oassed to the other functuon as argument

