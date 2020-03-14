let button = document.getElementById("button")
button.addEventListener("click", ()=>{
  let search = document.getElementById("input").value
  let lowerCase = search.toLowerCase()

  fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCase}/`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        let randomNum = Math.floor(Math.random() * Math.floor(100))
  console.log(response);
  let moveName = response.moves[randomNum].move.name
  document.getElementById("move").textContent=moveName



  fetch(`https://api.giphy.com/v1/gifs/search?api_key=crcCAry2oJ95As80yAmppkbFxTev9sVA&q=${moveName}&limit=25&offset=0&rating=G&lang=en`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
  // console.log(response);
  console.log(response.data[3].images.downsized_large.url);
  let gif = response.data[3].images.downsized_large.url
// let big = gif.images.downsized_large.url
  document.getElementById("gif").src = gif

      })

      })
      .catch(err => {
          console.log(`error ${err}`)
          // alert("sorry, there are no results for your search")
      });

})
