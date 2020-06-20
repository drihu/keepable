class Note {
  static id = 0;
  static colors = [
    '#FFFFFF', // default color
    '#F28B82',
    '#FBBC04',
    '#FFF475',
    '#CCFF90',
    '#A7FFEB',
    '#CBF0F8',
    '#AECBFA',
    '#D7AEFB',
    '#FDCFE8',
  ];

  constructor({ title = '', body, color }) {
    this.id = ++Note.id;
    this.title = title;
    this.body = body;
    this.color = color;
    this.deleted = false;
    this.pinned = false;
    this.date = new Date();
  }

  deleteCard(){
    app.notes.forEach((note)=>{
      if(note.id === this.id){
        note.deleted = true;
      };
    })
   app.renderNotes();
  }

  deleteTrashCard(){
    app.notes.find((note,index,array)=>{
      if(note.id === this.id){
        array.splice(index,1);
      };
    })
   app.trashRenderNotes();
  }

  createCard() {
    const div = document.createElement('DIV');
    div.classList.add('note');
    div.style.background = this.color;
    div.innerHTML = `
      <p>${this.body}</p>
      <div class="buttons">
        <div class="button-palette"><img src="images/palette.svg" alt="palette"></div>
        <div class="button-trash"><img src="images/trash2.svg" alt="trash"></div>
      </div>
    `;
    const btnTrash = div.querySelector(".button-trash")
    btnTrash.addEventListener('click',()=>{
      this.deleteCard();
    });
    return div;
  }

  createTrashCard() {
    const div = document.createElement('DIV');
    div.classList.add('note');
    div.style.background = this.color;
    div.innerHTML = `
      <p>${this.body}</p>
      <div class="buttons">
        <div class="button-palette"><img src="images/return.svg" alt="palette"></div>
        <div class="button-trash"><img src="images/trash2.svg" alt="trash"></div>
      </div>
    `;
    const btnReturn = div.querySelector(".button-patette");
    consola.log(btnReturn);
    btnReturn.addEventListener('click',()=>{
      this.deleteTrashCard();
    });
    return div;
  }

}
