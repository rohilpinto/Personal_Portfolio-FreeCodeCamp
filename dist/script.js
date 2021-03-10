const hamMenuBtn = document.querySelector(".hamburger-menu");
console.log(hamMenuBtn);

const linksContainer = document.querySelector(".links-container");

hamMenuBtn.addEventListener("click", openHamMenu);

function openHamMenu() {
	linksContainer.classList.toggle('ham-links-open')
	// adds class 'ham-links-open' and changes the left property to 0;
}
