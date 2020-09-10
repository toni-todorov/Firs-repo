function solution(num){
    return function solve(params) {
        return num + params
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(6));
console.log(add5(10));
console.log(add5(15));