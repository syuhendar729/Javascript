// $('.search-movie').on('click', function() {
$('.input-key').on('keyup', function() {

	$.ajax({
		url:`https://omdbapi.com/?apikey=f1786a62&s=${$('.input-key').val()}`,
		success:(res)=> {
			const hasil = res.Search
			// console.log(hasil[0])
			let card = ''
			hasil.forEach((r)=> {
				card += showCard(r)
			})

			$('.result-content').html(card)

			$('.tombol-detail-movie').on('click', function() {
				// console.log($(this).data('imdbid'))
				$.ajax({
					url: `https://omdbapi.com/?apikey=f1786a62&i=${$(this).data('imdbid')}`,
					success: (m)=> {
						// console.log(m)
						const movieDetail = showDetail(m)

						$('.detail-movie').html(movieDetail)				          
					},
					error:(e)=> {
						console.log(e.responseText)
					}
				})
			})
		},
		error:(err)=>{
			console.log(err.responseText)
		}
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