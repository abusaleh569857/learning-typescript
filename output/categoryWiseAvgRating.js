"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsData = [
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
];
const getCategoryAverageRatings = (products) => {
    const categoryData = products.reduce((acc, product) => {
        const category = product.category.main;
        const totalRating = product.reviews.reduce((sum, review) => sum + review[1], 0);
        const reviewCount = product.reviews.length;
        if (!acc[category]) {
            acc[category] = { totalSum: 0, totalReviews: 0 };
        }
        acc[category].totalSum += totalRating;
        acc[category].totalReviews += reviewCount;
        return acc;
    }, {});
    const result = {};
    for (const category in categoryData) {
        const { totalSum, totalReviews } = categoryData[category];
        result[category] = totalReviews > 0 ? totalSum / totalReviews : 0;
    }
    return result;
};
console.log(getCategoryAverageRatings(productsData));
