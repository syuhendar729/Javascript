// == Fetch ==
const searchBtn = document.querySelector('.search-movie')
searchBtn.addEventListener('click', function(){
	
	const inputKey = document.querySelector('.input-key')
	fetch(`https://omdbapi.com/?apikey=f1786a62&s=${inputKey.value}`)
	 .then(res => res.json())
		.then(movies => {
			let cards = ''
			movies.Search.forEach(m => {
				cards += showCard(m)
			})
			const resCon = document.querySelector('.result-content') 
			resCon.innerHTML = cards

			// ketika tombol detail di-klik
			const tombolDetail = document.querySelectorAll('.tombol-detail-movie') 
			tombolDetail.forEach(btn => {
				btn.addEventListener('click', function(){
					// console.log(this.dataset.imdbid)
					fetch(`https://omdbapi.com/?apikey=f1786a62&i=${this.dataset.imdbid}`)
					 .then(res => res.json())
						.then(m => {
							const bodyDetail = document.querySelector('.detail-movie')
							bodyDetail.innerHTML = showDetail(m)
						})
				})
			})
		})

})



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
