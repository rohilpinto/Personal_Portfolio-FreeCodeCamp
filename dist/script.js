const hamMenuBtn = document.querySelector(".hamburger-menu");
 

const linksContainer = document.querySelector(".links-container");
const body = document.body;


// events

 





window.addEventListener('click' , openHamMenu)

function openHamMenu(e) {
	console.log(linksContainer);

 

	if(e.target.matches('.hamburger-menu')) {
		linksContainer.classList.toggle('hamLinksOpen')
		hamMenuBtn.classList.toggle('moveHamBtn')
	} else {
		linksContainer.classList.remove('hamLinksOpen')
	}

	// toggles classes & removes the class if clicked anywhere outside the button
	 
	


}


body.addEventListener('mousedown', () => {
	body.classList.add('using-mouse');
})


body.addEventListener('keydown', (e) => {
	if(e.keyCode ===9) {
		body.classList.remove('using-mouse')
	}
})


 