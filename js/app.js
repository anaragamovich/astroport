const select = document.querySelector('select');
const allLang = ['en', 'ua', 'ru'];

select.addEventListener('change', changeURLLanguage);
function changeURLLanguage(){
	let lang = select.value;
	location.href = window.location.pathname + '#'+lang
	location.reload();
}

function changeLanguage(){
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	if (!allLang.includes(hash)){
		console.log("not found lang")
		location.href = window.location.pathname + '#en';
		location.reload();
	} else {
		console.log("found lang")
		select.value = hash;
	}

	for (let key in langArr) {
		console.log("key: ", key);
		let elem = document.getElementById(key);
		console.log("elem: ", elem);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}
	}
}

changeLanguage()