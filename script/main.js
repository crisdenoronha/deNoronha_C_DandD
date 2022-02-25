(() => {
  //to change the game board
  let theThumbnails = document.querySelectorAll("#buttonHolder img"),
      gameBoard = document.querySelector(".puzzle-board");

    function changeBgImg() {
      //debugger;
     gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
    }

  theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));


  const pieces = document.querySelectorAll('.puzzle-image');
  const dropzones = document.querySelectorAll('.drop-zone');


  //to DRAG : DRAGSTART; DRAG; DRAGEND
  pieces.forEach(puzzle => {
    puzzle.addEventListener('dragstart', dragstart);
    puzzle.addEventListener('drag', drag);
    puzzle.addEventListener('dragend', dragend);
  });

  function dragstart(){
    console.log('puzzle> dragstart');
    dropzones.forEach(zone => zone.classList.add('highlight'));

    //this = puzzle piece
    this.classList.add('droppuzzle');
  }

  function drag(){
    console.log('puzzle> drag');
  }

  function dragend(){
    console.log('puzzle> dragend');
    dropzones.forEach(zone => zone.classList.remove('highlight'));

    //this = puzzle piece
    this.classList.remove('droppuzzle');
  }

    //to DROP : DRAGENTER; DRAGLEAVE; DRAGOVER; DROP
    dropzones.forEach(zone => {
      zone.addEventListener('dragenter', dragenter);
      zone.addEventListener('dragover', dragover);
      zone.addEventListener('dragleave', dragleave);
      zone.addEventListener('drop', drop);
    });

  function dragenter(){
    console.log('board> enter');
  }

  function dragover(event){
    event.preventDefault();
    console.log('board> over');
    //this = dropzone
    this.classList.add('over');

  }

  function dragleave(){
    console.log('board> leave');

      //this = dropzone
    this.classList.remove('over');
  }

  function drop(event) {
    event.preventDefault();
		console.log('board> drop on me');

    this.classList.remove('over');

    let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

		this.appendChild(document.querySelector(`.puzzle-image${droppedEl}`));
	}


})();
