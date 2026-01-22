function sum(...nums){//ye 3 dot(spread operaator ) isiliye lagate hai kuki jab hume pata na hi  ki humare array ka size kya higa toh aaone aap ye le leta hau
let sum=0;
let i=0;
while(i<nums.length){
    sum+=nums[i];
    i++
}
return sum;
}

const r1=sum(10,20,30);
const r2=sum(10,20,30,40);
console.log(r1);
console.log(r2);