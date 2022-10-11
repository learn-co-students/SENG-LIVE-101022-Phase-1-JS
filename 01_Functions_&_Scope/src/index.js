//Data 
const inventory = [
    {
        id:1,
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',
        price: 10.00,
        reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
        inventory: 10,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        
    },
    {
        id:2,
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        price: 45.75,
        reviews: [{userID: 15, content:'good way to learn JQuery'}],
        inventory: 2,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        id:3,
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        price: 36.00,
        reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
        inventory: 8,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
        id:4,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 25.50,
        reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
        inventory: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
        
    },
    {
        id:5,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 6.00,
        reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
        inventory: 7,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
    }, 
    {
        id:6,
        title: 'Learn Enough JavaScript to Be Dangerous',
        author: 'Michael Hartl',
        price: 24.00,
        reviews: [{userID: 50, content:'pretty good'}],
        inventory: 5,
        imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

    },
    {
        id:7,
        title: 'Cracking the Coding Interview',
        author: 'Gayle Laakmann McDowell',
        price: 49.95,
        reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
        inventory: 20,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

    }
]

console.log("i'm working again")

// Function ideas:
/*
- helloWorld
- priceFormatter(price)
- titleAndAuthor
- applyDiscount(price)
- randomDiscount
- generateMarketing(book)
- buildBook(price, author, imageUrl)
*/

const book = inventory[0]

function helloWorld() {
  return "Hello, world!";
}

console.log(helloWorld());

function priceFormatter(price) {
  // concatenation 
  // return '$' + price.toFixed(2);
  // interpolation
  let formattedPrice = price.toFixed(2);
  return `$${formattedPrice}`;
}

// function titleAndAuthor(book) {
//   return `${book.title} by ${book.author}`;
// }

// const titleAndAuthor = function(book) {
//   return `${book.title} by ${book.author}`;
// }

// Arrow functions vs regular functions

const titleAndAuthor = (book) => `${book.title} by ${book.author}`;

const applyDiscount = (book, discount = 20) => {
  const percentageToDecimal = discount / 100;
  const discountedPrice = book.price * (1 - percentageToDecimal);
  return `${titleAndAuthor(book)} is on sale for ${priceFormatter(discountedPrice)}! That's ${discount}% off!!!`;
}

console.log(applyDiscount(book));

// foreshadowing of arrow functions as callbacks: fetch('url').then(res => res.json())

// Difference between Block scope, Function scope, and Global scope

let newTitle = "The JavaScript Cookbook";
console.log('Global scope', newTitle);

function buildBook(price, author, imageUrl) {
  console.log('Function scope', newTitle);
  const bookObj = {};
  bookObj.title = newTitle;
  bookObj.price = price;
  bookObj.author = author;
  const defaultImage = 'placeholderImage.jpg'
  if (!imageUrl) {
    console.log('Block scope', defaultImage)
    bookObj.imageUrl = defaultImage;
  } else {
    bookObj.imageUrl = imageUrl;
  }
  console.log('Function scope', defaultImage);
  return bookObj;
}

// my own higher order function
function mapOverArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    let transformedElement = callback(element);
    newArray.push(transformedElement)
  }
  return newArray;
}

console.log(mapOverArray(inventory, titleAndAuthor))

// using a built in higher order function
console.log(inventory.map(titleAndAuthor))

const transformed = inventory.map(function(book) {
  console.log(book.title);
  return titleAndAuthor(book);
})

// const transformed = inventory.map((book) => {
//   console.log(book.title);
//   return titleAndAuthor(book);
// })

console.log(transformed)

