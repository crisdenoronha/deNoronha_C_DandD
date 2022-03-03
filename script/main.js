(() => {
	// collect the bottons at the bottom of the page
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
			gameBoard = document.querySelector('.puzzle-board'),
			puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
			dropZones = document.querySelectorAll('.drop-zone');

    const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];



	function dragStrarted(event) {
		event.preventDefault();
		console.log('started draggin a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
		//use the setData method of the drag event to store a reference to the current element
		//event.dataTransfer.setData('currentItem', event.target.id);
	}
	puzzlePieces.forEach(piece => piece.addEventListener('dragstrart', dragStrarted));

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));


	const tl = document.querySelector(".tl");
	const tr = document.querySelector(".tr");
	const bl = document.querySelector(".bl");
	const br = document.querySelector(".br");


	function droptl(event) {
		console.log('board> drop on me');

		this.classList.remove('over');

		if ("topLeft"){
			event.preventDefault();
			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);
			this.appendChild(document.querySelector(`#topLeft${droppedEl}`));
		}
		else {
			draggable = false;

		}

	}

	tl.addEventListener('drop', droptl);

	function droptr(event) {
		console.log('board> drop on me');

		this.classList.remove('over');

		if ("topRight"){
			event.preventDefault();
			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);
			this.appendChild(document.querySelector(`#topRight${droppedEl}`));
		}
		else {
			draggable = false;
		}

	}

	tr.addEventListener('drop', droptr);

	function dropbl(event) {
		console.log('board> drop on me');

		this.classList.remove('over');

		if ("bottomLeft"){
			event.preventDefault();
			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);
			this.appendChild(document.querySelector(`#bottomLeft${droppedEl}`));
		}
		else {
			draggable = false;
		}

	}

	bl.addEventListener('drop', dropbl);

	function dropbr(event) {
		console.log('board> drop on me');

		this.classList.remove('over');

		if ("bottomRight"){
			event.preventDefault();
			let droppedEl = event.dataTransfer.getData('currentItem');
			console.log(droppedEl);
			this.appendChild(document.querySelector(`#bottomRight${droppedEl}`));
		}
		else {
			draggable = false;
		}

	}

	br.addEventListener('drop', dropbr);


	function changeImgSet() {

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		//loop all small draggable images
		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
            
		});

	
	}
	theThumbnails.forEach(item => item.addEventListener('click', changeImgSet));


})();
