type ProductStatus = "instock" | "outofstock" | "discontinued";

type Review = [string, number];

interface Products {
    id : number,
    name : string,
    category : {
        main : string,
        sub : string,
    },
    price : number,
    stock : number,
    status : ProductStatus,
    reviews : Review[],
    metadata? : {
        tags : string[],
        discount? : number,
    }
}

const productsData : Products[] = [
    {
    id: 101,
    name: "MacBook Pro",
    category: { main: "Electronics", sub: "Laptops" },
    price: 2500,
    stock: 15,
    status: "instock",
    reviews: [["Anik", 5], ["Rahat", 4]],
    metadata: { tags: ["apple", "premium"], discount: 10 }
  },
  {
    id: 102,
    name: "Yoga Mat",
    category: { main: "Fitness", sub: "Equipment" },
    price: 50,
    stock: 0,
    status: "outofstock",
    reviews: [["Sara", 3]],
    metadata: { tags: ["eco-friendly"] }
  },
  {
    id: 103,
    name: "Coffee Maker",
    category: { main: "Home", sub: "Kitchen" },
    price: 120,
    stock: 20,
    status: "instock",
    reviews: [["John", 5], ["Doe", 2], ["Smith", 4]],
  }
]

interface ProductInfo{
    name : string,
    finalPrice : number,
}




function findProducts(products : Products[]):ProductInfo[] {
   
     const productsData = products.filter((p) => p.status === 'instock' && p.metadata?.discount).map((p) => {
        let discount:number = p.metadata?.discount || 0;
        let finalPrice:number = p.price - (p.price * discount/100)
         console.log(`Item : ${p.name} & Discount : ${p.metadata?.discount} & Price : ${p.price} & Final Price : ${finalPrice}`);
        return ({name : p.name, finalPrice : finalPrice})
    });
   
    return productsData;

}


const data = findProducts(productsData);
console.log(data);

