const hamMenuBtn = document.querySelector(".hamburger-menu");
console.log(hamMenuBtn);

const linksContainer = document.querySelector(".links-container");
const body = document.body;


// events

 


window.addEventListener('click' , openHamMenu)

function openHamMenu(e) {
	console.log(e.target);


	if(e.target.matches('.hamburger-menu')) {
		linksContainer.classList.add('hamLinksOpen')
	} else {
		linksContainer.classList.remove('hamLinksOpen')
	}



}