(() => {
	// collect the bottons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZones = document.querySelectorAll(".drop-zone");

	function changeBgImg() {
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
	}

	function dragStrarted(event) {
		console.log('started draggin a piece');
		//use the setData method of the drag event to store a reference to the current element
		event.dataTransfer.setData('currentItem', event.target.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log('drop on me');
		//retrieve the dragged element using the dataTransfer object
		//this was set in the drag event using the setData method
		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

		this.appendChild(document.querySelector(`#${droppedEl}`));
	}
		//add event handling here-> loop through theThumbnails array and add event handing to each image
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstrart", dragStrarted));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
})();
