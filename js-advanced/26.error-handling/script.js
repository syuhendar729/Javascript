// == Error Handling dgn fetch() ==

const searchBtn = document.querySelector('.search-movie')
searchBtn.addEventListener('click', async function(){
	try {	
		const inputKey = document.querySelector('.input-key')
		const movies = await getMovies(inputKey.value)
		updateUI(movies)
	} catch(err) {
		// Error yg dihasilkan bukan dr fetch
		// console.log(err)
		const resCon = document.querySelector('.result-content')
		// alert(err)
		if (err == 'Error: Incorrect IMDb ID.') {
			resCon.innerHTML = `<h1 class="text-center text-secondary">Error: Empty keyword!</h1>` 
		} else {
			resCon.innerHTML = `<h1 class="text-center text-secondary">${err}</h1>` 
		}
	}

})



document.addEventListener('click', async function(e){
	const imdbid = e.target.dataset.imdbid
	if (imdbid) {
		const movie = await getMovieDetail(imdbid)
		updateUIDetail(movie)
		
	} 
})



