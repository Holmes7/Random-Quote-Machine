let num=4;

colorList = ['MediumPurple', 'Orange', 'PaleTurquoise', 'PaleGreen'];

function update(quote, author) {
	document.querySelector('#text').innerHTML = quote;
	document.querySelector('#author').innerHTML = `-${author}`;
	num = (num+1)%4;
	console.log(num);
	document.querySelector('#text').style.color = colorList[num];
	document.querySelector('#author').style.color = colorList[num];
	document.querySelector('body').style.backgroundColor = colorList[num];
	document.querySelector('#new-quote').style.backgroundColor = colorList[num];
	document.querySelector('#new-quote').style.borderColor = colorList[num];
	document.querySelector('#tweet-quote').style.backgroundColor = colorList[num];
	// document.querySelector('text').style.color = colorList[num];
}

function getRandomQuote() {
	let url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
	fetch(url)
	.then(res => res.json())
	.then((data) => {
		let quote = data.quotes[0].text;
		let author = data.quotes[0].author;
		update(quote, author);
	})
	.catch((err) => {
		console.log(err);
	})
}
let btn = document.querySelector('#new-quote');
btn.addEventListener('click', getRandomQuote);

document.addEventListener('DOMContentLoaded', getRandomQuote);