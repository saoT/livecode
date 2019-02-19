// DECLARATIONS DE VALEURS STATIQUES --------------------------
// ce sont souvent des datas qui viennent
// d'une base de données

var bool = true;

var num = 127;

var str = "hello";


var array = [ bool, str, num ];

var obj = {
  name : 'sac',
  price : 45
};

// On travaille souvent avec des tableaux d'objets
var products = [
  {
    img : 'url1',
    price : 123
  },
  {
    img : 'url2',
    price : 20
  },
  {
    img : 'url3',
    price : 10
  }
];

// DECLARATION DE VALEURS DYNAMIQUES ------------------------
// Les fonctions aussi renvoie des valeurs


// L'argument est une sorte de tunnel
// entre la déclaration et l'appel
function hello (argument) { // function hello (var argument = valeur passée à l'appel)
  // affiche la fonction callback
  //console.log(argument);
  // affiche l'exécution de la fonction callback
  //console.log(argument());
}

// cette fonction est passée en argument
// elle sera rappelée par la suite.
// elle renvoie une valeur
var callback = function () {
  return 'A';
}

hello(callback);

// On peut aussi avoir des arguments statiques.
// hello('A').
// Ici cette ligne nous renverrait une erreur.
// -> ligne 45 on execute argument.
// Ca reviendrait à faire 'A'().
// Or : une chaine de caractere ne s'execute pas.

// ALGO ---------------------------------------------------

// LES LOOPS ---------------------
for (var i=0; i< products.length; i++) {
  //console.log(products[i].price);
  //console.log('a lindex :', i, 'jai la valeur:', products[i]);
}

// en javascript des méthodes de tableaux existent
products.forEach(function (product) {
  //console.log(product);
});


// VALEURS qui viendraient de la base de données
// Pour un produit dans ma base de données :
var price = 160; // 160 euros
var promo = true; // le produit est en promo
var finPromo = 23; // 23 heures
// ---------------- //

// OPERATEURS --------------------
// le ||
// le &&
// < et >
// ==
// !=

// Si la promo fini dans moins de 24h on affiche le temps restant
var afficheTemps = finPromo < 24; // renvoie true

// Est-ce que le produit est un petit prix
var smallPrice = price < 10; // true

// Si le produit est en promo ou est un petit prix il fait parti des topDeals
var topDeals = promo || smallPrice; // (true && false) -> false

// LES CONDITIONS -----------------


if (promo) {
  // console.log('mon produit est en promo : donc j\'affiche le prix en promo');
  var newPrice = price * 0.8;
}
if (finPromo < 24) {
  // console.log('j\'affiche le temps restant');
}

if (topDeals) {
  // console.log('j\'affiche le produit dans ma banniere topDeals');
}

var unPeuVrai = '';

if (!!unPeuVrai) {
  //console.log('un peu vrai est vrai :', unPeuVrai);
}
else {
  //console.log('mensonge : un peu vrai est false :', unPeuVrai);
}

// CONDITIONS TERNAIRES -------------------

// Une conditions if/else simple

var price = 8;
var newPrice;
if (price > 10) {
  // console.log('mon produit est en promo : donc j\'affiche le prix en promo');
  newPrice = price * 0.8;
  // 16
}
else {
  newPrice = price;
}

// peut etre simplifiée en :

var price = 20;
newPrice = price > 10 ? price * 0.8 : price;
// newPrice = 16


// DOM :: 100% javascript

// Pour tout element du DOM on peut definir des evenements
document.onclick = function (e) {
  //console.log('j\'ai cliqué mon document');
}

// On peutr selectionner un element donné
var  parent = document.querySelector('#element');
//console.dir(parent);

// On peut aussi créer de nouveaux éléments
var enfant = document.createElement('div');

// Leur définir des attributs
enfant.setAttribute('id', 'hello');

// Du contenu
enfant.innerHTML = 'Je suis du contenu dynamique';

// Et les imbriquer dans un element donné.
parent.appendChild(enfant);


// ------------------ CLASS ----------------- //

// ES 5
// Le constructeur lui-meme = majuscule
function VehiculeMotorise (moteur, nombreDeRoue, nombreDeSiege) {
  // this
  this.moteur = moteur;
  this.nombreDeRoue = nombreDeRoue;
  this.nombreDeSiege = nombreDeSiege;

  this.start = function () {
    console.log('je demarre mon moteur de puissance : ' + this.moteur);
  }
}

// Pas constructeur, instance unique : singleton
var auto = {
  moteur : 95,
  nombreDeRoue: 4,
  nombreDeSiege: 4,
}

// Passe par un contructeur toujours pas de majuscule
var auto = new VehiculeMotorise(95, 4, 4);
var moto = new VehiculeMotorise(60, 2, 2);

//console.log(auto);

auto.start();
//moto.start();


// ES 6 ---------------------------------------------

class VehiculeMotorise2 {
  constructor (moteur, nombreDeRoue, nombreDeSiege) {
    this.moteur = moteur;
    this.nombreDeRoue = nombreDeRoue;
    this.nombreDeSiege = nombreDeSiege;
  }

  methode2 () {
    console.log(this.moteur);
  }
}



var auto2 = new VehiculeMotorise2(75, 4, 2);
var moto2 = new VehiculeMotorise2(15, 2, 1);

console.log(auto2);

auto2.methode2();



class Product {
  constructor (price, name, url, like) {
    this.price = price....
  }
}


var products = [
  new Product (30, 'sac', 'urlimg', true),
  new Product (10, 'shirt', 'urlimg', false),
  new Product (50, 'shoes', 'urlimg', false)
]












