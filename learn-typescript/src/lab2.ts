enum Rate {
    low = 'Thấp', medium = 'Trung bình', high = 'Cao'
}
let product: {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
} = {
    name: "Trong",
    price: 100,
    sale: true,
    rate: Rate.low
}

console.log(product);