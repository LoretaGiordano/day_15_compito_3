/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 30

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21)
console.log('Hai ottenuto: ', random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome,
  surname = il tuo cognome, age = la tua età.
*/
const me = {
  nome: 'Loreta',
  surname: 'Giordano',
  age: 24,
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato 
  "skills", contenente i linguaggi di programmazione che conosci.*/
me.skills = ['HTML', 'CSS']
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".*/
me.skills.push('JavaScript')
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto 
  nell'oggetto "me".*/
me.skills.pop()
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  return Math.floor(Math.random() * 6) + 1
}
const result = dice()
console.log('Hai ottenuto: ', result)

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}
whoIsBigger(5262, 8462)
console.log('Tra 5262 e 8462, è più grande: ', whoIsBigger(5262, 8462))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni
  parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (str) => {
  return str.split(' ')
}
splitMe('I love coding')
console.log(splitMe('I love coding'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la 
  deve ritornare senza l'ultimo.
*/
const deleteOne = (str, bool) => {
  if (bool === true) {
    return str.slice(1)
  } else {
    return str.slice(0, -1)
  }
}
deleteOne('Epicode', 5 < 8)
console.log('Il valore boleano è true: ', deleteOne('Epicode', 5 < 8))
deleteOne('Epicode', 1 > 10)
console.log('Il valore boleano è false: ', deleteOne('Epicode', 1 > 10))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte 
  le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => {
  return str.replace(/\d+/g, '')
}
onlyLetters('Patrizia has 16 cats')
console.log(onlyLetters('Patrizia has 16 cats'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa
  è un valido indirizzo email.
*/
const email = 'loretagiordano2000@libero.it'
const isThisAnEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}
if (isThisAnEmail(email)) {
  console.log("L'indirizzo email è valido")
} else {
  console.log("L'indirizzo email non è valido")
}

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const giorni = [
    'Domenica',
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
  ]
  const dataCorrente = new Date()
  const giornoCorrente = dataCorrente.getDay()
  return giorni[giornoCorrente]
}
console.log('oggi è ', whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un 
  oggetto contenente una proprietà "sum": il suo valore deve rappresentare il totale di tutti i valori estratti 
  con le invocazioni di dice(). L'oggetto ritornato deve anche contenere una proprietà "values", contenente un 
  array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (numDices) => {
  let sum = 0
  let values = []

  for (let i = 0; i < numDices; i++) {
    let value = dice()
    sum += value
    values.push(value)
  }

  return { sum, values }
}
rollTheDices(3)
console.log('Dice ', rollTheDices(dice()))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni 
  trascorsi da tale data.
  */
const data = '2024-02-27'
const howManyDays = (data) => {
  const dataScelta = new Date(data)
  const oggi = new Date()
  const differenzaDiTempo = oggi - dataScelta
  const differenzaDeiGiorni = Math.floor(
    differenzaDiTempo / (24 * 60 * 60 * 1000)
  )
  return differenzaDeiGiorni
}
howManyDays(data)
console.log('Giorni trascorsi da ', data, ': ', howManyDays(data))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso 
  negli altri casi.
*/
const data2 = '2024-10-3'
const isTodayMyBirthday = (data) => {
  const date2 = new Date(data2)
  const oggi = new Date()
  if (date2 === oggi) {
    return true
  } else {
    return false
  }
}
isTodayMyBirthday(data2)
console.log('È il mio compleanno?', isTodayMyBirthday(data2))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare 
  l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo 
  parametro.
*/
const obj = {
  nome: 'Loreta',
  surname: 'Giordano',
  age: 24,
  profession: 'Graphic Designer',
}
const deleteProp = (obj, prop) => {
  delete obj.age
  return obj
}
deleteProp(obj, 'age')
console.log(deleteProp(obj, 'age'))

/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

const newestMovie = (arrey) => {
  let latest = movies[13]
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > latest.year) {
      latest = movies[i]
    }
  }
  return latest
}
newestMovie(movies)
console.log(newestMovie(movies))

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (arrey) => {
  for (let i = 0; i < movies.length; i++) {
    return movies.length
  }
}
countMovies(movies)
console.log(countMovies(movies))

/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film 
contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arrey) => {
  const years = []
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].year)
  }
  return years
}
onlyTheYears(movies)
console.log(onlyTheYears(movies))

/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso
contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (arrey) => {
  const lastMillennium = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].year > 2000) {
      lastMillennium.push(movies[i])
    }
    return lastMillennium
  }
}
onlyInLastMillennium(movies)
console.log(onlyInLastMillennium(movies))

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati 
prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (arrey) => {
  let totalYears = 0
  for (let i = 0; i < movies.length; i++) {
    totalYears += movies[i].year
  }
  return totalYears
}
sumAllTheYears(movies)
console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array"
movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto 
contenente due array: "match" e "unmatch"."match" deve includere tutti i film dell'array "movies" fornito che
contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" 
fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selezionaContainer = () => {
  const container = document.getElementById('container')
  return container
}

selezionaContainer()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selezionaTds = () => {
  const tds = document.querySelectorAll('td')
  return tds
}
selezionaTds()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno 
  della pagina.
*/
const stampaTestoTD = () => {
  const celleTD = document.querySelectorAll('td')
  celleTD.forEach((td) => {
    console.log(td.textContent)
  })
}
stampaTestoTD()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const linkBackgroundRed = () => {
  const linkElements = document.querySelectorAll('a')
  linkElements.forEach((link) => {
    link.style.backgroundColor = 'red'
  })
}
linkBackgroundRed()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newElementToList = (testo) => {
  const lista = document.getElementById('myList')
  const nuovoElemento = document.createElement('li')
  nuovoElemento.textContent = 'testo'
  lista.appendChild(nuovoElemento)
}
newElementToList('Nuovo elemento')

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  const lista = document.getElementById('myList')
  lista.removeChild(lista.firstChild)
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTr() {
  const trElements = document.getElementsByTagName('tr')
  for (let i = 0; i < trElements.length; i++) {
    trElements[i].classList.add('test')
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
