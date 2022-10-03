// DOM Eelemnts
let translateFrom = document.querySelector('#translateFrom');
let translateTo = document.querySelector('#translateTo');


const GET_URL = 'https://text-translator2.p.rapidapi.com/getLanguages'

const OPTIONS = {
    method: 'get',
    headers: {
		'X-RapidAPI-Key': 'f3cdceacf6msh71c0e4cff5be441p15ed62jsnf06564818a72',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
}

fetch(GET_URL, OPTIONS)
    .then(res => res.json())
    .then(objeto => { 
        let languages = objeto.data.languages;
        console.log()
    // Code for the selects
        languages.forEach(element => {
           translateFrom.innerHTML += `<option value="1">${element.name}</option>`
           translateTo.innerHTML += `<option value="1">${element.name}</option>`
        })
    })
    .catch(err => console.log(err))



    // Recolect input data and send it to server
    let translate = document.querySelector('#translate');
    let inputTranslate = document.querySelector('#inputTranslate');
    translate.addEventListener('click', ()=>{

    })
