
//Bài 1
const averageScore = (...scores: number[]): number => {
  if (scores.length === 0) return 0; 
  const sum = scores.reduce((sum, current) => sum + current, 0);
  return sum/ scores.length;
};

console.log(averageScore(2,4,6,8,10));

//Bài 2
function checkNumber(n: number): string{
    if (n<=0) return "không hợp lệ";
    if (n%2 === 0 ) return "số chẵn";
    else return "số lẻ"
}

console.log(checkNumber(5));
console.log(checkNumber(6));

//Bài 3
function createUser(name:string,age?:number,role:string = "user"){
    if (age === undefined) return {name,role}
    else return {name,age,role}
}

console.log(createUser("Trong",20,"admin"));
console.log(createUser("hoa"));

//Bài 4
function mergeProducts(arr1: string[],arr2: string[]): string[]{
    return [...arr1,...arr2];
}

const a = ["Trong",'Vinh', "Bao"];
const b = ["Hoa","Tuyen","Van"];
console.log(mergeProducts(a,b));

function printProducts(...product: string[]){
    product.forEach((product)=>{
        console.log(`${product}`);       
    })
}
printProducts(...mergeProducts(a,b));