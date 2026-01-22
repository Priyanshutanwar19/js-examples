const person=[
    [
        {
            name: "Tommy",
            age:2,
        },
        {
            name:"Pluto",
            age:3,
        },
    ],
    [
       {
            name: "German",
            age:2,
        },
        {
            name:"Sundae",
            age:5,
        }, 
    ],
];
const names= person.map((p,i)=>{//this second paameter i  here is for index
    return i+". "+p.name;
}).forEach(n=>console.log(n))//chaining will give undefined here because here we have array inside array so we will use falt maap below
console.log("\nAfter flaatmap: ");
person.flatMap((arr,i)=>{
    return arr.map(p=>p.name);
}).forEach(n=> console.log(n));
