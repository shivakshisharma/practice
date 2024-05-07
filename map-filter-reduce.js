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

