function factorial(n){
    if(factorial.cache[n] != undefined){
        return factorial.cache[n]
    }
let result = 1
for(let i = 1;i<=n;i++){
    console.log("looping...")
    result *=i
    
}
factorial.cache[n] = result
return result
}

factorial.cache = {}
console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(5))

console.log(factorial(6))
console.log(factorial(6))