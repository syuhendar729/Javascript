// == Fetch dgn async await ==

const searchBtn = document.querySelector('.search-movie')
searchBtn.addEventListener('click', async function(){

	const inputKey = document.querySelector('.input-key')
	const movies = await getMovies(inputKey.value)
	// console.log(movies)
	updateUI(movies)

})



// ketika tombol detail di-klik
// event binding => memberikan event ke element yg awalnya blm ada
document.addEventListener('click', async function(e){
	const imdbid = e.target.dataset.imdbid
	if (imdbid) {
		// console.log(imdbid)
		const movie = await getMovieDetail(imdbid)
		updateUIDetail(movie)
		
	} 
})



