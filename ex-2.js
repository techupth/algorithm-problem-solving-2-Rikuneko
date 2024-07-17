// ถ้า searchBook = "Gone with the Wind" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น 6
// ถ้า searchBook = "The Master Mind" ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น -1

const books = [
  { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
  { title: 'Catch-22', author: 'Joseph Heller' },
  { title: 'Don Quixote', author: 'Miguel de Cervantes' },
  { title: "Ender's Game", author: 'Orson Scott Card' },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury' },
  { title: 'Gone with the Wind', author: 'Margaret Mitchell' },
  { title: 'Harry Potter', author: 'J.K. Rowling' }
];

function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let left = 0;
  let right = books.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (books[mid].title === searchTitle) {
      return mid;
    } else if (books[mid].title < searchTitle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}


let searchBook = 'Gone with the Wind';
console.log(findBookIndex(books, searchBook)); 

searchBook = 'The Master Mind';
console.log(findBookIndex(books, searchBook)); 