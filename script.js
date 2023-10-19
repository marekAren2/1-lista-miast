let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

// let orderList = document.createElement('ol');
let orderList = document.querySelector("ol");

if (!orderList ) {
  console.log('nie istnieje lista w HTML tworze...');
  orderList = document.createElement('ol');
  orderList.className = 'cities';
}
// console.log(orderList)

for (let city of cities) {
  let listItem = document.createElement('li');
  // console.log(lista);
  listItem.className = 'city';
  listItem.innerText = city;
  // kod = kod + lista;
  // console.log(city);
  // console.log(lista);
  console.log(listItem);
  orderList.appendChild(listItem);
  // console.log(orderList);
}
// console.log(orderList
document.body.appendChild(orderList);

/*  Opis

  Wyświetl nazwy miast w postaci listy numerowanej.
  Miasta zostały umieszczone w tablicy poniżej.
  Znacznik listy i elementów listy stwórz w JavaScript.
  Do każdego elementu listy dodaj klasę "city".
  Następnie za pomocą odpowiednich metod wyświetl listę na stronie.

  let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

  Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

  Podpowiedź przed wysłaniem zadania do sprawdzenia:
  - za pomocą JavaScript należy stworzyć elementy HTML, a potem dopiąć je do strony :)
  - do wyświetlania miast użyj pętli (dowolnego rodzaju)
  */