enum Rate {
    low = 'Thấp', medium = 'Trung bình', high = 'Cao'
}
type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
} 
let product: Product = {
    name: "Trong",
    price: 100,
    sale: true,
    rate: Rate.low
}

console.log(product);

let listProduct: Array<Product> = [
    {
        name: "Trong",
        price: 9,
        sale: true,
        rate: Rate.low
    },
    {
        name: "laptop",
        price: 6,
        sale: true,
        rate: Rate.high
    },
    {
        name: "balo",
        price: 3,
        sale: false,
        rate: Rate.medium
    },
    {
        name: "áo",
        price: 2,
        sale: false,
        rate: Rate.medium
    },
    {
        name: "quần",
        price: 1,
        sale: false,
        rate: Rate.medium
    }
]
console.log(listProduct);

function description(list: typeof listProduct){
    return list.map((item) => ({
        ...item,
        description: item.price>5? 'Tốt' : 'Bình thường'
    }))
}

console.log(description(listProduct));

function tongtien(list: typeof listProduct){
    return list.reduce((sum,item)=> item.price + sum, 0)
}

console.log(tongtien(listProduct));
