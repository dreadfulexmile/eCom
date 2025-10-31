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
