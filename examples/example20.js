//chaining

const person=[
   {
    name:"Tommy",//////this is the array of two objects separted by commas
    age: 2
   },
   {
    name:"Pluto",
    age:3,
   },
];
const names= person.map((p,i)=>{//this second paameter i  here is for index
    return i+". "+p.name;
}).forEach(n=>console.log(n))//chaining

console.log(names.toString())//comma separted string dega llekin abhi kaam nhi kar rha kuki uper for each use kar rakha hai
