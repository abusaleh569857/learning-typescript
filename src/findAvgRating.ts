// Basic Reduce

let num:number[] = [1,2,3,4,5];
const add = (acc:number, item:number):number => {
    acc = acc + item;
    return acc;

}
const result = num.reduce(add,10)
console.log(result);


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

type RatingInfo = {
    categoryName : string,
    avgRating : number,
}

const calculateAvgRating = (products:Products[]): RatingInfo[] => {
    let avgElectronicsRating = 0;
    let totalElectronicsRating = 0;
    let electronicsReviewCount = 0;
  
    let avgFitnessRating = 0;
    let totalFitnessRating = 0;
    let fitnessReviewCount = 0;

    let avgHomeRating = 0;
    let totalHomeRating = 0;
    let homeReviewCount = 0;
    products.forEach(item => {
        if(item.category.main === "Electronics"){
        item.reviews.forEach(i => {
            totalElectronicsRating = totalElectronicsRating + i[1];
        });
        electronicsReviewCount = electronicsReviewCount + item.reviews.length;


    }
    else if(item.category.main === "Fitness"){
        item.reviews.forEach(i => {
            totalFitnessRating = totalFitnessRating + i[1];
        });
        fitnessReviewCount = fitnessReviewCount + item.reviews.length;


    }
    else if(item.category.main === "Home"){
        item.reviews.forEach(i => {
            totalHomeRating = totalHomeRating + i[1];
        });
        homeReviewCount = homeReviewCount + item.reviews.length;


    }
    

    })

    avgElectronicsRating = totalElectronicsRating / electronicsReviewCount;
    avgFitnessRating = totalFitnessRating / fitnessReviewCount;
    avgHomeRating = totalHomeRating / homeReviewCount;
    return [{categoryName : "Electronics", avgRating : avgElectronicsRating}, {categoryName : "Fitness", avgRating : avgFitnessRating}, {categoryName : "Home", avgRating : avgHomeRating}];
    
  
    


}

const categoryWiseAvgRating = calculateAvgRating(productsData);
console.log("val : ",categoryWiseAvgRating);




