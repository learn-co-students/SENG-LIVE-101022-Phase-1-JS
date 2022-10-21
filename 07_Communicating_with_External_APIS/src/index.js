document.addEventListener('DOMContentLoaded', () => {
  const resultsDiv = document.querySelector('#results');
  const apiSearchForm = document.querySelector('#api-Search');
  
  apiSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encodeURI(e.target.search.value);
    console.log(query);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
      .then(res =>res.json())
      .then(data => {
        data.items.forEach(bookData => {
          const div = document.createElement("div");
  
          const img = document.createElement("img");
          img.src = bookData.volumeInfo.imageLinks.thumbnail
  
          const h2 = document.createElement("h2");
          h2.textContent = bookData.volumeInfo.title;
  
          const h3 = document.createElement("h3");
          h3.textContent = bookData.volumeInfo.subtitle;
  
  
          const p = document.createElement("p");
          p.textContent = bookData.volumeInfo.description
  
          div.append(img, h2, h3, p);
          resultsDiv.append(div);
        })
      });
  })

  // fetch("https://api.tvmaze.com/shows/44458/episodes")
  //   .then(res => res.json())
  //   .then(episodes => {
  //     console.log(episodes);
  //     episodes.forEach(episode => {
  //       const div = document.createElement("div");

  //       const img = document.createElement("img");
  //       img.src = episode.image.medium;

  //       const h2 = document.createElement("h2");
  //       h2.textContent = episode.name;

  //       const p = document.createElement("p");
  //       p.innerHTML = episode.summary;

  //       div.append(img, h2, p);
  //       resultsDiv.append(div);
  //     })
      
  //   })
  
  
})