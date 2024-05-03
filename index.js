var a=10;
function b(){
    var x=10;
}

console.log(window.a);
console.log(a);
console.log(this.a);

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

