//Fibonacci sequence
function fib(n){
console.log('> Fibonacci sequence');
let nFib = 0,fm = 1,fp = 0;
for (let i = 1; i<=n;i++){
    fp = nFib; // F (n-1)
    nFib = fp + fm;
    fm = fp; // F (n-2)
    console.log(i+" : "+nFib);
}
console.log('End - Fibonacci sequence');
return nFib;
}

fib(1);