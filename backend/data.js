import bcrypt from 'bcryptjs';

const data = {
    users: [
    {
        name: 'Monique',
        email: 'wambuinyokabimn@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
        isSeller: true,
        seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
        },
    },
    {
        name: 'Nicole',
        email: 'nicolelorna02@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
    },
    ],


    products: [
    {
        
        name: 'Nike Dinner Dress',
        category: 'Dress',
        image: '/images/product-1.png',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'Adidas Dinner Dress',
        category: 'Dress',
        image: '/images/product-2.png',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'Lacoste  Pants',
        category: 'Pants',
        image: '/images/product-3.png',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
    },
    {
        
        name: 'Nike Dinner Dress',
        category: 'Pants',
        image: '/images/product-4.png',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
    },
    {
        
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/product-5.png',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
    },
    {
        
        name: 'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/product-6.png',
        price: 139,
        countInStock: 12,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
    },
    ],
    };
export default data;