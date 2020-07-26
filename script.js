/*let age = 33;
console.log("Mon âge est :", age);
const prenom = "Johan";
console.log("Je m'apelle :", prenom);
const nom = "Alger/Lowenski";
console.log("Mon nom de famille est :", nom);

const married = (true);
const copine = (false);
if (married) {
    console.log("Félicitation comme on dit tous mes voeux de bonneur !!!!!")
} else if (copine) {
    console.log("Content pour toi vraiment !")
} else {
    console.log("IL n'y a plus qu'à trouvé la bonne !")
}

const name = "Johan";
console.log(name);
let age = 30;
console.log(age);
age = 33;
console.log("Mon nouvel âge", age);
*/

/*let produit = "Iphone";
console.log("La valeur de ma variable est : ", produit);
produit = "Iphone6";
console.log("La nouvelle valeur de ma variable est : ", produit);


/*const age = 10;
const ageJulie = 28;
const somme = age + ageJulie;
console.log("Somme vaut", somme);

//!type of
console.log(typeof ageJulie);

//!Tableau
const monTableau = [];
//!Affecter une valeur
monTableau[0] = "un truc a emplacement 0"
monTableau[1] = "un truc a emplacement 1"
console.log(monTableau.length + " elements dans le tableau ");

console.log(monTableau[1]);
//!Ajouter à la suite
monTableau.push("quelquechose");

//!Supprimer le dernier élément
monTableau.pop();
console.log(monTableau);

//!Suppimer le premier élément
monTableau.shift();
console.log(monTableau);

//!Supprimer à partir de ...
monTableau.splice(2);
console.log(monTableau);
*/

const monTableau = [];

monTableau[0] = "Ceci est mon premier test numéro 0"
monTableau[1] = "Ceci est mon premier test numéro 1"
monTableau[2] = "Ceci est mon premier test numéro 2"
monTableau[3] = "Ceci est mon premier test numéro 3"
monTableau[4] = "Ceci est mon premier test numéro 4"
monTableau[5] = "Ceci est mon premier test numéro 5"
console.log(monTableau.length + " éléments dans mon tableau");
console.log(monTableau[3]);
console.log(monTableau);
monTableau.slice(2);
monTableau.push("quelquechose");
monTableau.pop();


/*const nom = "Lowenski"
console.log(nom);
var somme = 2+2;
console.log(somme);


var monTableau = [];
monTableau[0] = "Un Truc à emplacement 0";
monTableau[1] = "Un Truc à emplacement 1";
console.log(monTableau.length + " éléments dans le tableau ");
*/

//! while

var compteur = 0;
while (compteur < 10) {
    compteur = compteur + 1;
    console.log(" compteur " + compteur)
    console.log("hello word")
}

console.log("la suite")

monTableau.push("yep")
monTableau.push("coucou")
monTableau.push("hello")
monTableau.push("bye")
monTableau.push("bonjour")
monTableau.push("saw fè")
monTableau.push("sa ka maché")
monTableau.push("a pli ta")

console.log(monTableau);

//! for

/*for (A; B; C) {
    //A condition initial
    //B condition
    //C increment
}*/

for (var i = 0; i < monTableau.length; i++) {
    console.log("boucle for", i)
    var element = monTableau[i];
    console.log(" element ", element)
}

var monObjet = {};
monObjet = { name: "johan" }
monObjet = { name: "Johan", lastname: "Lowenski" }

monObjet.name = "alger"

monObjet = { name: "johan", jeux: ["cod", "cs", "pubg"] }

console.log(" monObjet ", monObjet)
console.log(" monObjet name", monObjet.name)
console.log(" monObjet jeux ", monObjet.jeux[2])

monObjet.jeux[2] = "far cry 5";
var pubg = monObjet.jeux[2];
console.log("pubg", pubg)

//Funtion
//définition
function afficherHello(name) {
    //name paramètre accessible que dans la fonction
    alert("Hello " + name)
}
//appel
//afficherHello("Johan");
//afficherHello("Jojoban");



function calculVolume(longueur, largeur, hauteur) {
    var res = longueur * largeur * hauteur;
    //console.log("res", res);
    //afficherHelllo(res)
    return res;
}

var volume = calculVolume(10, 20, 50)
console.log("volume", volume);


//Condition
let age = 19;
if (age >= 18) {
    //portion de code
    //alert("Tu est majeur")
} else {
    // alert("Tu est mineur")
}


//DOM modifier et lire
//querySelector
document.querySelector("h2").textContent = "Nouvelle boutique"

//getElementById
document.getElementById("panier").textContent = "Votre panier est vide"


//
var ul = document.querySelector("ul");
var li = document.createElement("li");
var a = document.createElement("a");
a.setAttribute("href", "#")
a.textContent = "Androïd";
li.appendChild(a);
ul.appendChild(li);

var lis = document.querySelectorAll("li");
console.log("lis", lis);


for (var i = 0; i < lis.length; i++) {
    let liSelection = lis[i];
    //ul.removeChild(liSelection)
}

//EVENTS
function maFonctionClick() {
    console.log("maFonctionClick")
    document.getElementById("panier").textContent = "Votre panier contient 1 item"
}




















/**
 * !djfgbjhdsc
 * ?vhkshvhvks
 * Todo ndjlvncnvknkdsc
 * @param fhvkjvhkjvhkfjd
 */
//! fkffkjdvhkdjv
//? vuifdvhdfkvhfkd
//Todo fljdvjkdvhkdhv