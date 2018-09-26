//Factorial Algorithm
function fac(n){
console.log('> Factorial Algorithm');
let nFac = 1;
for (let i = 1; i<=n;i++){
    nFac *=i; 
    console.log(i+' : '+nFac);
}
console.log('End - Factorial Algorithm');
return nFac;
}


fac(1);