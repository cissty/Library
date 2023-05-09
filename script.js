let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
        return `${this.title} ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}


function addBookToLibrary(book) {
    
    myLibrary.push(book)
}


const form = document.getElementById('new-book')
form.addEventListener('submit', function(event){
    event.preventDefault();
    const titleInput = document.getElementById('user-input');
    const authorInput = document.getElementById('author-input');
    const pagesInput = document.getElementById('pages-input');
    const readInput = document.querySelector('input[name="yesno"]:checked');
  
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput ? readInput.value : "";

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  form.reset();
})



function showForm (){
    const addNewBook = document.getElementById('new-book');
    const showButton = document.getElementById('show-button')
    addNewBook.style.display = 'flex';
    showButton.style.display = 'none';
}



const allBooks = document.getElementById('show-all-books')
const bookText = document.getElementById('book-text')
const secondInterface = document.getElementById('second-interface')
const firstInterface = document.querySelector('.main-container')
allBooks.addEventListener('click', () => {
    bookText.setAttribute('style', 'white-space: pre;');
    if(myLibrary.length <= 0){
        bookText.textContent = "No books added. \nAdd a new book!"
    }else{
        secondInterface.style.display = 'grid';
        firstInterface.style.display = 'none';

        while (secondInterface.firstChild) {
            secondInterface.removeChild(secondInterface.firstChild);
          }
      
          for (let i = 0; i < myLibrary.length; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('box');
            newDiv.textContent = myLibrary[i].info();
            secondInterface.appendChild(newDiv);
          }
        }
      });
