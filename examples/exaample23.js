const names = ['Tommy','John','Cena','Dummy'];
const petNames = ['Pluto','Magic','Coffee'];

//spread operator
const combo = [...names,...petNames];
combo.forEach(n => console.log(n));

const [first,second,...rest] = combo;
console.log('------')
console.log(first);
console.log(second);
console.log(rest);

const person={
    name: 'Adam',
    age: 49,
    gender:'M'
};

const{name ,age ,gender}= person;
console.log('---');
console.log(name);
console.log(age);
console.log(gender);