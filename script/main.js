(() => {
	// collect the bottons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img");
	    gameBoard = document.querySelector(".puzzle-board")

	function changeBgImg() {
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	//add event handling here-> loop through theThumbnails array and add event handing to each image
 theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBgImg));


})();
