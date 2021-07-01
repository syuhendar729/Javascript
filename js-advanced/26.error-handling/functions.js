function showCard(r) {
	return `<div class="card my-5" style="width: 18rem;">
			  <img src="${r.Poster}" class="card-img-top">
			  <div class="card-body">
				<h5 class="card-title">${r.Title}</h5>
				<p class="card-text">${r.Year}</p>
				<a href="#" class="btn btn-primary tombol-detail-movie" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${r.imdbID}">Detail</a>
			  </div>
			</div>`
}

function showDetail(m) {
	return `<div class="container-fluid">
			  <div class="row">
				<div class="col-md-3">
				  <img src="${m.Poster}" class="img-fluid">
				</div>
				<div class="col-md">
				  <ul class="list-group">
					<li class="list-group-item"><h4>Title</h4></li>
					<li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
					<li class="list-group-item"><strong>Ratings : </strong>${m.Ratings[0].Value}</li>
					<li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
					<li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
					<li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
					<li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
				  </ul>
				</div>
			  </div>
			</div>`
}


// -- error handling diberikan setelah .then() pertama
function getMovies(keyword){
	return fetch(`https://omdbapi.com/?apikey=f1786a62&s=${keyword}`)
		.then(response => {
			// jika response ok == true
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
		} )
		.then(movies => {
			// jika response movies error
			if (movies.Response === "False") {
				throw new Error(movies.Error)
			}
			return movies.Search
		})
}


function updateUI(movies){
	let cards = ''
	movies.forEach(m => {
	cards += showCard(m)
	})
	const resCon = document.querySelector('.result-content')
	resCon.innerHTML = cards
}

function getMovieDetail(imdbid){
	return fetch(`https://omdbapi.com/?apikey=f1786a62&i=${imdbid}`)
	 .then(response => response.json())
		.then(m => m)
}

function updateUIDetail(movie){
	const bodyDetail = document.querySelector('.detail-movie')
	bodyDetail.innerHTML = showDetail(movie)
}















