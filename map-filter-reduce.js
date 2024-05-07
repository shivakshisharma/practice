const arr=[5,1,3,2,4]

//Double-[10,2,6,4,8]    -->Array manipulations

function double(x)
{
    return x*2;
}

function triple(x)
{
    return x*3;
}

function binary(x){
    return x.toString(2);
}


const output=arr.map(double);
console.log(output);


//Higher order functions
const bin=arr.map(function binary(x){
    return x.toString(2);
});

const bina=arr.map((x)=>x.toString(2));
console.log(bina);


//Filter

const arr1=[5,1,3,2,6];

//Function odd values
function isOdd(x)
{
    return x%2;
}

const out=arr1.filter(isOdd);
console.log("The output",out);

const even=arr1.filter((x)=>x%2===0)
console.log(even);

function findsum(arr1)
{
let sum=0;
for(let i=0;i<arr1.length;i++)
{
    sum+=arr1[i];
}
return sum;
}

console.log(`the sum is ${findsum(arr1)}`);

const acc1=arr1.reduce(function(acc,curr)
{
    acc+=curr;
    return acc;
   
},0);  //initital value of acc

console.log(`the sum is ${acc1}`);

const maxi=arr1.reduce(function(max,curr)
{
    if(curr>max)
    {
        max=curr;
    }
    return max;
},0)

console.log(maxi);

const users=[
    {firstname:"akshay",lastname:"saini",age:9},
    {firstname:"akilan",lastname:"bajaj",age:1},
    {firstname:"shiv",lastname:"balyan",age:2},
    {firstname:"saatvik",lastname:"sharma",age:9},

];

const lastname=users.map((x)=>
{
   let y= x.firstname+" "+x.lastname;
   return y;
});

console.log(lastname);



// const age=users.reduce(function(acc,curr){

//     if(acc[curr.age])
//     {
//         acc[curr.age]+=1;

//     }

//     else{
//         acc[curr.age]=1;
//     }

//    return acc;

// },{})

// console.log(age);

const people=users.filter((x)=>x.age<9).map((x)=>x.firstname)

console.log(people);

const age1=users.reduce(function(acc,curr){

    if(curr.age<9)
    {
        acc.push(curr.firstname);

    }


 return acc;

},[])

console.log(age1);

//CALL,APPLY AND BIND methods

let name1 ={
    firstname:"Shivakshi",
    lastname:"Sharma",
    // printFullName:function(){
    //     console.log(this.firstname+" "+this.lastname);
    // }
}
let printFullName=function(hometown,state,country){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" state "+state+" Country "+country);
}
printFullName.call(name1,"Jammu","J&K","India");

let name2={
    firstname:"saatvik",
    lastname:"balyan",
}
printFullName.call(name2,"Sonepat","Haryana","India");
//apply we have to pass the argument to function as a arrayList.
printFullName.apply(name2,["Sonepat","Haryana","India"]);

//call ->function borrowing from another object

// name1.printFullName.call(name2);  //name2 is passed for this keyword to access the parameters from name2 function

//second method we can declare the function ourside of the object

//bind  it binds and gives the copy of that function which can be invoked later.
let printnmyname=printFullName.bind(name2,"Sonepat","Haryana","India");
console.log(printnmyname);
printnmyname();

//POLYFILL FOR BIND FUNCTION
Function.prototype.mybind=function(...args){
    let obj=this,
    params=args.slice(1);
    return function(...args2)
    {
        obj.apply(args[0],[...params,...args2]);
    }

}

let printnmyname2=printFullName.mybind(name1,"Jammu","J&K");
printnmyname2("India");

//Function currying using bind method
let multiply=function(x,y){
    console.log(x*y);
}

let multiplyBy2=multiply.bind(this,2);
multiplyBy2(5);

let multiplyBy3=multiply.bind(this,3);
multiplyBy3(5);

//function currying using closures

let multiply2=function(x)
{
    return function(y){
        console.log(x*y);
    }
}

let multiplybytwo=multiply2(2);
multiplybytwo(3);

let multiplybythree=multiply2(3);
multiplybythree(3);
