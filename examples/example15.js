//function as a variable
const add = function addNumbers(a,b){
    return a+b;
}
const r= add(10,20);
console.log(r)

//functions shortcut way
//const add=(a,b)=>{ }
//if it has only one parameter then we can write it like this (const add= a => a*2)

const sub=(a,b)=> a-b;
const re=sub(36,50);
console.log(re);