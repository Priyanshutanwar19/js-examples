const person = {
    name: 'John',
    age: 87,
    gender: 'M'
};

console.log(person);

let cp={ ...person,age:23};//used in react
cp.age = 23;
console.log(person);
console.log(cp);
