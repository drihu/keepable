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
    console.log(app.notes);
    app.notes.find((note,index,array)=>{
      if(note.id === this.id){
        console.log(array.splice(index,1));
      };
    })
   app.renderNotes();
  }

  createCard() {
    const div = document.createElement('DIV');
    let message = document.querySelector('.no_notes');
    div.classList.add('note');
    div.style.background = this.color;
    div.innerHTML = `
      <p>${this.body}</p>
      <div class="buttons">
        <div class="button-palette"><img src="images/palette.svg" alt="palette"></div>
        <div class="button-trash"><img src="images/trash2.svg" alt="trash"></div>
      </div>
    `;
    message.classList.add('hidden');
    const btnTrash = div.querySelector(".button-trash")
    btnTrash.addEventListener('click',()=>{
      this.deleteCard();
    });
    return div;
  }

  static createButtonPalette() {
    const a = document.createElement('A');
    a.classList.add('button-palette');
    a.href = '#';
    a.innerHTML = `
      <img class="button-palette__image" src="images/palette.svg" alt="palette">
      <div class="button-palette__colors">
        ${Note.colors.map((color) => `
          <label>
            <div class="button-palette__color" style="background:${color}"></div>
            <input class="create-note__radio" type="radio" name="color" value="${color}">
          </label>
        `).join('')}
      </div>
    `;
    return a;
  }
}
