(() => {
	// collect the bottons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img");
	    gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
			dropZones = document.querySelectorAll(".drop-zone"),
			testLink = document.querySelector("a");

	function changeBgImg() {
		//debugger;
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
	}

	function dragStrarted() {
		console.log('started draggin a piece');
		evenr.dataTranfer.setData('currentItem', event.target.id);
  }

	function allowDragOver() {
		event.preventDefault();
		console.log('dragged over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log('dropped on me');

	let droppedEl = event.dataTranfer.getData('currentItem');
	this.appendChild(document.querySelector(`#${droppedEl}`));
	
	console.log(droppedEl);
	}

	function turnAnchorOff(e) {
		e.preventDefault();
	}
	//add event handling here-> loop through theThumbnails array and add event handing to each image
 theThumbnails.forEach(thumb => thumb.addEventListener("click", changeBgImg));

 puzzlePieces.forEach(piece => piece.addEventListener("dragstrart", dragStrarted));

 dropZones.forEach(zone => zone.addEventListener("dragover", allowDragOver));
  zone.addEventListener("dragover", allowDragOver);
	zone.addEventListener("drop", allowDrop);

})();
