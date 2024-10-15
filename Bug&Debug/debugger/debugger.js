// Debugando debugger

let a = 1;
let b = 2;

if (a === 1) {
    a += 2*b;
}

for (let i = 0; i < a; i++){
    b += b;
    a += Math.sqrt(b);   
}

debugger;

a = a + 1;

debugger;

console.log(a);

