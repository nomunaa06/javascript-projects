// Define your Book class here:
class Book{
    constructor(title,author, copyrightDate, isbn,numPages,checkoutNums, isdiscarded){
        this.title = title;
        this.author= author;
        this.copyrightDate=copyrightDate;
        this.isbn=isbn
        this.numPages=numPages;
        this.checkoutNums=checkoutNums;
        this.isdiscarded=isdiscarded;
    }
    checkout(uses =1){
        this.checkoutNums+=uses;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, checkoutNums, isdiscarded){
       super(title, author, copyrightDate, isbn, numPages, checkoutNums, isdiscarded);
    }
 
    dispose(currentYear){
       if (currentYear-this.copyrightDate > 5) {
          this.isdiscarded = 'Yes';
       }
    }
 }

 class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages, checkoutNums, isdiscarded){
       super(title, author, copyrightDate, isbn, numPages, checkoutNums, isdiscarded);
    }
 
    dispose(){
       if (this.checkoutNums>100) {
          this.isdiscarded = 'Yes';
       }
    }
 }


// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel("Pride and Prejudice", 'Jane Austen', 1813, "1111111111111", 432, 32, 'No');
let manual1 = new Manual("Top Secret Shuttle Building Manual","Redacted", 2013, "0000000000000", 1147, 1, 'No');

// Code exercises 4 & 5 here:
manual1.dispose(2024);
console.log(manual1);

novel1.checkout(5);
console.log(novel1);