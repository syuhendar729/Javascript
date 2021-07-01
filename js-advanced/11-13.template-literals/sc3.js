// Tagged template 

const nama	= "Syuhendar"
const umur = 11


function coba(strings, ...values){
	// let result = ''
	// strings.forEach((str, i)=>{
	// 	result += `${str}${values[i]||''}`
	// })
	// return result

	return strings.reduce((result, str, i)=> `${result}${str}${values[i] || ''}`, '')
}

// string nya masuk ke parameter function coba
const str = coba`Halo nama sy ${nama}, umur ${umur} tahun.`
console.log(str)



// Contoh penerapan membuat highlight

function highlight(strings, ...values){
	return strings.reduce((result, str, i)=> `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}
const strHL = highlight`Halo nama sy ${nama}, umur ${umur} tahun.`
// document.body.innerHTML = strHL


// Contoh penerapan lain:

// 1. Escaping/Sanitize HTML tags
// untuk memfilter tag2 html yg dimasukkan user

// 2. Translation & Internationalization
// alih bahasa(translate)

// 3. Styled components
// untuk front end framework, seperti vue dll
//


