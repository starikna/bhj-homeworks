const books = document.querySelectorAll(".book");
books.forEach((book) => {
  book.addEventListener("click", (e) => {
    const currentLink = e.target;
    if (!currentLink.classList.contains("font-size") || currentLink.classList.contains("font-size_active")) return;
    e.preventDefault();
    
    const currentLinkSize = currentLink.getAttribute("data-size");
    const currentBook = currentLink.closest(".book");
   
    let activeItem = currentBook.querySelector(".font-size_active");
    currentLink.classList.add("font-size_active");
    activeItem.classList.remove("font-size_active");
   
    currentBook.className = "book";
    currentBook.classList.add(`book_fs-${currentLinkSize}`);
  })
});