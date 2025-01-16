const init = () => {
   const form = document.querySelector('form')
   const searchByID = document.getElementById('searchByID')
   const movieDetails = document.getElementById('movieDetails')
   const title = movieDetails.querySelector('h4')
   const summary = movieDetails.querySelector('p')
let inputValue;
let movieList = []

   function fetchMovies() {
      fetch(`http://localhost:3000/movies`)
      .then(r => r.json())
      .then((data) => {
         movieList = data
      })
   }
   fetchMovies()

   document.addEventListener('input', function () {
    return inputValue = searchByID.value
   })

   document.addEventListener('submit', function (e) {
      e.preventDefault()
      if(!inputValue) {
         console.error('EMPTY SEARCH VAlUE')
      } else {
         searchMovie(inputValue)
      }
    })

    function searchMovie(id) {
      let movieObj = {}
      const searchResults = movieList.filter(movie => 
         movie.id === id
      )
      movieObj = searchResults
      if (!movieObj || movieObj.length <= 0 || movieObj === undefined) {
         console.error('No movie in input');
       } else {
         const { title, summary } = movieObj[0]
         renderResults(title, summary)
       }
  
    }

    function renderResults(pTitle, pSummary) {
      title.textContent = pTitle
      summary.textContent = pSummary
    } 

}

document.addEventListener('DOMContentLoaded', init);