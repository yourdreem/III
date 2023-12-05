// Fn = F(n-1) + F(n-2)
console.log("Hi cycle");
function fibC(n) {
let f0 = 0;
let f1 = 1;
let fn = 1;
    for (i = 1; i < n; i++) {
    fn = f0 + f1; 
    f0 = f1;
    f1 = fn;
    }
return fn;
}
console.log(fibC(1));

console.log("Hi recursion");
function fibR(n) {
    if(n <= 1){
        return n;
    }
    else{
        return fibR(n - 1) + fibR(n - 2);
    }
}
console.log(fibR(1));

// расчет с начиная с нуля

console.log("Hi recursion2");
function fibR2(n) {
    if(n <= 1){
        return 0;
    }
    else if (n <= 2){
        return 1;
    }
    else{
        return fibR2(n - 1) + fibR2(n - 2);
    }
}
console.log(fibR2(3));