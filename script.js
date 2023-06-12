let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
        return `Title: ${this.title} \nAuthor: ${this.author} \nPages: ${this.pages} \nRead: ${this.read}`;
    }
}

function addBookToLibrary(book) {
    
    myLibrary.push(book)
}


const form = document.getElementById('new-book')
const submitButton = document.getElementById('submit-button')
const allBooks = document.getElementById('show-all-books')
const bookText = document.getElementById('book-text')
const secondInterface = document.getElementById('second-interface')
const firstInterface = document.querySelector('.main-container')
const addNewBook = document.getElementById('new-book');
const showButton = document.getElementById('show-button')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const LogInInterface = document.getElementById('log-in-interface');


  form.addEventListener('submit', function(event){
    event.preventDefault();
    const titleInput = document.getElementById('user-input');
    const authorInput = document.getElementById('author-input');
    const pagesInput = document.getElementById('pages-input');
    const readInput = document.querySelector('input[name="yesno"]:checked');
    
  
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value;
    

      const newBook = new Book(title, author, pages, read);
      addBookToLibrary(newBook);

        const newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.textContent = newBook.info();
        secondInterface.appendChild(newDiv);
  
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button-div');
        newDiv.appendChild(buttonDiv)
  
        const remove = document.createElement('button');
        remove.classList.add('remove-button');
        remove.textContent = 'REMOVE';
        remove.setAttribute('style', 'font-size: 15px;')
        buttonDiv.appendChild(remove);
  
        remove.addEventListener('click', () =>{
          newDiv.remove();
        })
      form.reset();
    })

    function showForm (){
        addNewBook.style.display = 'flex';
        showButton.style.display = 'none';
        secondInterface.style.display = 'none';
        bookText.textContent = '';
        
        header.setAttribute('style', 'filter: blur(3px);')
        footer.setAttribute('style', 'filter: blur(3px);')
  }

    function addNewBooks() {
      firstInterface.setAttribute('style', 'display: flex;')
      addNewBook.setAttribute('style', 'display: flex;')
      secondInterface.setAttribute('style', 'display: none;')

        header.setAttribute('style', 'filter: blur(3px);')
        footer.setAttribute('style', 'filter: blur(3px);')
    }

    function showSecondInterface(){
      bookText.setAttribute('style', 'white-space: pre;');
        if(myLibrary.length <= 0){
            bookText.textContent = "No books added. \nAdd a new book!"
        }else{
            secondInterface.style.display = 'grid';
            firstInterface.style.display = 'none';
        }
      header.setAttribute('style', 'filter: blur(0px);')
      footer.setAttribute('style', 'filter: blur(0px);')

    
  }
  allBooks.addEventListener('click', showSecondInterface);

  submitButton.addEventListener('click', () =>{
    bookText.textContent = '';
  }) 


  const logIn = document.getElementById('log-in');

  logIn.addEventListener('click', ()=>{
    firstInterface.style.display = 'none';
    secondInterface.style.display = 'none';
  });