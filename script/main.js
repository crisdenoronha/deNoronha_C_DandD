(() => {
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

 const tl = document.querySelector(".tl");
 const tr = document.querySelector(".tr");
 const bl = document.querySelector(".bl");
 const br = document.querySelector(".br");

function droptl(event) {
  event.preventDefault();
  console.log('board> drop on me');

  this.classList.remove('over');

  let droppedEl = event.dataTransfer.getData('currentItem');
  console.log(droppedEl);

  this.appendChild(document.querySelector(`#topLeft${droppedEl}`));
}

tl.addEventListener('drop', droptl);

function droptr(event) {
  event.preventDefault();
  console.log('board> drop on me');

  this.classList.remove('over');

  let droppedEl = event.dataTransfer.getData('currentItem');
  console.log(droppedEl);

  this.appendChild(document.querySelector(`#topRight${droppedEl}`));
}

tr.addEventListener('drop', droptr);

function dropbl(event) {
  event.preventDefault();
  console.log('board> drop on me');

  this.classList.remove('over');

  let droppedEl = event.dataTransfer.getData('currentItem');
  console.log(droppedEl);

  this.appendChild(document.querySelector(`#bottomLeft${droppedEl}`));
}

bl.addEventListener('drop', dropbl);

function dropbr(event) {
  event.preventDefault();
  console.log('board> drop on me');

  this.classList.remove('over');

  let droppedEl = event.dataTransfer.getData('currentItem');
  console.log(droppedEl);

  this.appendChild(document.querySelector(`#bottomRight${droppedEl}`));
}

br.addEventListener('drop', dropbr);


})();
