/**
 Ejercicio 1: Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.
Tareas:
1.Usa el constructor Libro para crear un objeto con título y autor.
2.Agrega una propiedad prestado = false.
3.Implementa el método prestar() que:
•Cambie prestado a true si el libro está disponible.
•Muestre un mensaje de error si ya está prestado (usando if).
4.Prueba prestar el libro dos veces y observa los mensajes.
 */

/*
function Book(title, autor){
  this.title = title;
  this.autor = autor;
  this.isAvail = false;
  this.lend = function () { 
   if (this.isAvail != true)
     this.isAvail = true;
    else{
     console.log("Book not available, It's already lend out")
    }
 }
}
 
const book1 = new Book("War art","tsun tsu")
console.log(book1.autor);
console.log(book1.title);
console.log(book1.isAvail);
console.log(book1.lend());
console.log(book1.isAvail);
console.log(book1.lend());

console.log("\n\n");
*/


/*
Ejercicio 2: Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
"1. Manzanas").
4.Muestra la lista completa en consola.
*/
/*
Ejercicio 2: Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
"1. Manzanas").
4.Muestra la lista completa en consola.
*/

/*
function PurchaseList (){
this.productsList = [];
this.addProduct = function(product){
   this.productsList.push(product)
}
this.showList = function(){
  let result = '';
 for (let i = 0; i < this.productsList.length; i++){
   result += `${i + 1}. ${this.productsList[i].pName} - Price: $${this.productsList[i].pPrice}\n`;
  }
  return result;
}
}
 
function Product(name,price){
 this.pName = name;
 this.pPrice = price;
}
 
const product1 = new Product("Lemon Juice", 20)
const product2 = new Product("Cookies", 8)
const product3 = new Product("Meal", 18)
 
const listProducts1 = new PurchaseList()
 
console.log(listProducts1.productsList);// solo con propositos de testeo 
listProducts1.addProduct(product1)
listProducts1.addProduct(product2)
listProducts1.addProduct(product3)
console.log(listProducts1.productsList); // solo con propositos de testeo 
console.log("\nProducts List:\n ");

console.log(listProducts1.showList());
*/

/*
Ejercicio 3: Reproductor de Música
Tareas:
1.Crea un objeto Reproductor usando una función constructora con:
•Una propiedad estado con valor inicial "detenido" (otros valores
posibles: "reproduciendo", "pausado").
2.Implementa estos métodos:
•play():
•Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
música...".
•Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
•pausar():
•Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
•Si no, muestra: "No hay música reproduciéndose.".
•detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".
*/



 /*
function musicPlayer(){
 
    this.statusPlayer = "stopped";
    this.play  = function(){
      if (this.statusPlayer.match(/stopped/) || this.statusPlayer.match(/paused/)){
            this.statusPlayer = "playing";
            console.log("Playing song");
           
        }else if (this.statusPlayer.match(/playing/)){
              console.log("Playing already a song");
        }
    };
    this.pause = function(){
      if(this.statusPlayer.match(/playing/)){
          this.statusPlayer = "paused";
          console.log("Song paused");
      }else if (this.statusPlayer.match(/stopped/) || this.statusPlayer.match(/paused/)){
        console.log("No song playing yet");
      }
    };
    this.stop = function(){
      if(this.statusPlayer.match(/playing/) || this.statusPlayer.match(/paused/)){
          this.statusPlayer = "stopped";
          console.log("Music stopped");
         
      }else{
        console.log("No song played");
      }
    }
}
 
const player1 = new musicPlayer();
 
player1.stop()
player1.play()
player1.pause()
player1.stop()
*/

/*
Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
usando métodos y condicionales (if/else).
Tareas:
1. Crea un objeto Carrito usando una función constructora o clase que tenga:
•Una propiedad productos (array vacío).
•Una propiedad total (inicialmente 0).
2.Implementa estos métodos:
•agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
•calcularDescuento():
•Si el total es mayor a $100, aplica un 10% de descuento y muestra.
•Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
•Si no, mostrar total, sin descuento.
*/

function cart() {
  this.products = [];
  this.total = 0;
  this.addProduct = function (name, price) {
    this.total += price;
    this.products.push({ name, price })
  }
  this.discountCal = function () {
    if (this.total > 100) {
      this.total = this.total - (this.total * 0.10);
      console.log(`Discount of 10% \nTolta: $${this.total}`);
    } else if (this.total <= 100 && this.total > 50) {
      this.total = this.total - (this.total * 0.05);
      console.log(`Discount of 5% \nTolta: $${this.total}`);
    } else {
      console.log(`Discount unavailable \nTolta: $${this.total}`);
    }
  }
}

const cart1 = new cart();

cart1.addProduct("Juice", 11);

cart1.addProduct("Milk", 15);

console.log("Total = $", cart1.total);

cart1.discountCal()


