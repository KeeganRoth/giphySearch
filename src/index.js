console.log("start");
const form = document.querySelector("#gif-form");
const gifResultsSection = document.querySelector("#gif-results");
console.log(form);
form.addEventListener("submit", e => {
  console.log("submitted");
  e.preventDefault();

  //get input text
  const searchCriteria = form.querySelector("input").value;
  console.log(searchCriteria);

  //query API
  const gifSearchApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=vTDctUwdixKBz8tO3REnJC6QXi45yAmc&q=${searchCriteria}&limit=10&rating=g&lang=en`;
  fetch(gifSearchApiUrl)
    .then(res => res.json())
    .then(({ data }) => {
      console.log(data);
      const gifUrls = data.map(gif => gif.images.fixed_width.url);
      console.log(gifUrls);
      const ulResultsElement = gifResultsSection.querySelector("ul");
      const resultsFragment = document.createDocumentFragment();
      console.log("the ul", ulResultsElement);

      gifUrls.forEach(gifUrl => {
        const liElement = document.createElement("li");
        const imgElement = document.createElement("img");
        imgElement.src = gifUrl;
        liElement.appendChild(imgElement);
        resultsFragment.appendChild(liElement);
      });
      console.log("resultsFragment", resultsFragment);
      ulResultsElement.innerHTML = "";
      ulResultsElement.appendChild(resultsFragment);
    });
  console.log("here");
});
