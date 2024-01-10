const myLibrary = [];
let bookPosition;

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addToLibrary = () => {
  let bookTitle = document.querySelector("#bookTitle").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookPages = document.querySelector("#bookPages").value;
  let bookRead = document.querySelector("#bookRead").value;
  console.log(bookAuthor);
  const newBook = new book(bookTitle, bookAuthor, bookPages, bookRead);
  if (myLibrary.length == 0) {
    bookPosition = 0;
  } else {
    bookPosition = myLibrary.length - 1;
  }

  myLibrary.push(newBook);
  const displayCard = document.createElement("div");
  displayCard.classList.toggle("card");
  const displayTitle = document.createElement("p");
  displayTitle.textContent = bookTitle;
  const displayAuthor = document.createElement("p");
  displayAuthor.textContent = bookAuthor;
  const displayPages = document.createElement("p");
  displayPages.textContent = bookPages;
  const displayRead = document.createElement("p");
  displayRead.textContent = bookRead;
  if (bookRead == "Completed") {
    displayCard.style.border = "3px solid green";
  } else {
    displayCard.style.border = "3px solid red";
  }
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  const changeStatus = document.createElement("button");
  changeStatus.textContent = "Change Status";

  display.append(displayCard);
  displayCard.append(
    displayTitle,
    displayAuthor,
    displayPages,
    displayRead,
    removeBtn,
    changeStatus
  );
  removeBtn.addEventListener("click", () => {
    displayCard.remove();
    myLibrary.splice(bookPosition, 1);
  });
  changeStatus.addEventListener("click", () => {
    console.log(bookPosition);
    if (myLibrary[bookPosition].read == "Completed") {
      myLibrary[bookPosition].read = "Planned";
      displayRead.textContent = "Planned";
      displayCard.style.border = "3px solid red";
    } else {
      myLibrary[bookPosition].read = "Completed";
      displayCard.style.border = "3px solid green";
      displayRead.textContent = "Completed";
    }
  });
};

const display = document.querySelector(".card-holder");

const submitForm = document.querySelector(".form");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToLibrary();
  modal.close();
});

const addBook = document.querySelector(".add-book");
const modal = document.querySelector(".modal");

addBook.addEventListener("click", () => {
  modal.show();
});
