//BookStore has been moved to data.js 
console.log(bookStore);

const h1 = document.querySelector('h1');
h1.innerText = bookStore.name;
console.log(h1.textContent);

function priceFormatter(price) {
  // concatenation 
  // return '$' + price.toFixed(2);
  // interpolation
  let formattedPrice = price.toFixed(2);
  return `$${formattedPrice}`;
}

// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
const renderBook = (book) => {
  //   <li class="list-li">
  //     <h3>Eloquent JavaScript</h3>
  //     <p>Marjin Haverbeke</p>
  //     <p>$10.00</p>
  //     <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   </li>
  const li = document.createElement('li');
  li.className = "list-li";

  const h3 = document.createElement('h3');
  h3.textContent = book.title;

  const pAuthor = document.createElement('p');
  pAuthor.textContent = book.author;

  const pPrice = document.createElement('p');
  pPrice.textContent = priceFormatter(book.price);

  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;

  // add the child elements to the li element
  li.append(h3, pAuthor, pPrice, img);

  // add the li to the ul that already exists in the DOM
  const ul = document.getElementById('book-list');
  ul.append(li);
}

// const renderWithInnerHTML = (book) => {
//   const li = document.createElement('li');
//   li.className = "list-li";

//   li.innerHTML = `
//   <h3></h3>
//   <p class="author"></p>
//   <p class="price"></p>
//   <img />
//   `

//   li.querySelector('h3').textContent = book.title;
//   li.querySelector('.author').textContent = book.author;
//   li.querySelector('.price').textContent = priceFormatter(book.price);
//   li.querySelector('img').src = book.imageUrl;
//   li.querySelector('img').alt = `${book.title} cover`;

//   const ul = document.getElementById('book-list');
//   ul.append(li);
// }

// renderBook(bookStore.inventory[0])

console.log(bookStore.inventory);
bookStore.inventory.forEach(book => renderBook(book));