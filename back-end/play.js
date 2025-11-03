console.log("Hello JS")

const a = 1;
const b = 5;
console.log(a==b);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}

function add(a,b){
    const sum = a+b;
    console.log(sum);
}
add(1,2);
add(1,2);
add(1,1);


const add = (a,b) => {
    const sum = a+b;
    return sum;
}

const sum = add(2,2)
console.log(sum);



const num1 = [1,2,3,4,5]
console.log(num1.length);

let num2 = [1,2,3,4,5];

for (let i = 0; i < num2.length; i++) {
    console.log(num2[i]);
}

let ig = 0;
while (ig < num3.length) {
    console.log(num3[i]);
    i++;
    
}


const num = [1,2,3,4,5];
const theFunction = (num) => {
    const result = num*2;
    console.log(result);
}
num.forEach(theFunction);


const nums = [1,2,3,4,5];
nums.forEach((nums) => {
    console.log(nums*2);
});