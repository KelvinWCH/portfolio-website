function createBookInfo(targetId) {
    const target = document.getElementById(targetId);
    const title = target.getAttribute('data-title');
    const author = target.getAttribute('data-author');
    const rating = target.getAttribute('data-rating');
    const review = target.getAttribute('data-review');
    const coverSrc = target.getAttribute('data-cover-src');
    const bookLink = target.getAttribute('data-book-link');

    const bookCover = document.createElement('img');
    bookCover.className = "book-cover-picture";
    bookCover.src = coverSrc;

    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';

    const bookInfo = document.createElement('div');
    bookInfo.className = 'book-information';

    const bookTitle = document.createElement('a');
    bookTitle.className = 'book-title';
    bookTitle.href = bookLink;
    bookTitle.target = '_blank';
    bookTitle.textContent = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author-title';
    bookAuthor.textContent = "by " + author;

    const starRating = document.createElement('div');
    starRating.className = "star-rating";

    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('img');
        starIcon.className = 'star-icon';
        starIcon.src = './icons/empty-star.svg';
        starRating.appendChild(starIcon);
    }

    const ratingText = document.createElement('p');
    ratingText.className = 'rating-text';
    ratingText.textContent = rating;
    starRating.appendChild(ratingText);

    const bookReview = document.createElement('p');
    bookReview.className = 'book-review-text';
    bookReview.textContent = review;

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(starRating);
    bookInfo.appendChild(bookReview);

    // Append the main container to the body or any other desired parent element
    document.body.appendChild(bookInfo);

    console.log("hello");

    target.appendChild(bookCover);
    target.appendChild(bookInfo);
}

// Create book info for each specific target by their ID
createBookInfo('book1');
createBookInfo('book2');
