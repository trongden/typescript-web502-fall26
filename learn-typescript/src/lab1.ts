function chuvivadientichhcn(a: number, b: number) {
    return [(a + b) * 2, a * b];
}

console.log(chuvivadientichhcn(5,6));


function sum(...numbers: number[]): number {
    return numbers.reduce((sum, i) => sum + i, 0);
}

console.log(sum(2,4,5,7));

function count(str: string, ch: string): number {
    let count = 0;
    for (let i=0; i< str.length; i++){
        if(str[i] === ch) count++;
    }
    return count;
}

console.log(count('hello', 'l'));

function isprime(n: number): boolean{
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}

console.log(isprime(29));

