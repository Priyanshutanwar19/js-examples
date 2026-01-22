//map

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
})
console.log(names);