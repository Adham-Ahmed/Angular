export class Products {
    imageURL: string;
    product: string
    code: string
    available: Date
    price: number
    rating: number
   
    constructor(imageURL: string,product: string, code: string,Available: Date,Price: number,Rating: number){
        this.product = product;
        this.code = code;
        this.available = Available
        this.price = Price
        this.rating = Rating
        this.imageURL =imageURL
    }
}

