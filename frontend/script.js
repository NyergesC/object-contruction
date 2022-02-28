/* const currentDate = new Date("1999/01/02")

console.log(currentDate)
 */
//ezt hivjak object construstion-nak, objektumot epitettunk fel 
 
//tervrajzokbol objektumot epiteni fel ES NAGY BETUVEL KEZDODIK

//OBJEKTUMOT LEHET FELEPITENI EZZEL UGYANAZZAL A SEMAVAL ES CSAK AKKOR KELL HASZNALNI AMIKOR SZUKSEGUNK VAN 
//AZERT FONTOS MERT SOK MINDEN ILYEN CONSTRUCTORRAL MUKODIK

function Book(title, author, year, genre) {

    //this - MINDEN ESETBEN EGY OBJEKTUMRA MUTAT VISSZA
    //ebbol kulcsertekek lesznek, ez a tervrajz
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;   
}
const myFavoriteBook = new Book("War and Peace", "Tolsztoj", 1867, "Historical novel")
console.log(myFavoriteBook);
console.log(myFavoriteBook.title);

const mySecondFavoriteBook = new Book("Algebra alapjai", "Joe Algebra", 1992, "sci-fi")
console.log(mySecondFavoriteBook);

//ITT IS LEHET METHODUST LETREHOZNI:

function Book(title, author, year, genre) {

    //this - MINDEN ESETBEN EGY OBJEKTUMRA MUTAT VISSZA
    //ebbol kulcsertekek lesznek, ez a tervrajz
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;   

    this.age = function(){
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear = this.year //a korat irtuk itt meg a konyvnek
    }

}
const mySecondFavoriteBook = new Book("Algebra alapjai", "Joe Algebra", 1992, "sci-fi")
console.log(mySecondFavoriteBook.age());


