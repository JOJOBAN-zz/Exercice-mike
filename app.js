//ALGO 1 Afficher liste de produits dynamique

//DATA + visualisation 

//A Les données : Creer Array de liste de produit (String) function initArrayProduct

//B Vider le menu UL LI : fonction resetMenu()

//C boucler sur la liste des produit (boucle for array) function addAllToMenu()

//D Sur chaque produit Ajouter ELEMENT GRAPHIQUE addItemToMenu (param name)

//E resetAndInitMenu() // resetMenu + addAllToMenu

const mesProduits = [];

mesProduits[0] = "Pc gamer Asus";
mesProduits[1] = "Pc gamer Lenovo";
mesProduits[2] = "Pc gamer HP";
mesProduits[3] = "Pc gamer Dell";
mesProduits[4] = "Pc gamer Raser";
mesProduits[6] = "Pc gamer MSI";
mesProduits[7] = "Pc gamer Aorus";
mesProduits.push("Pc gamer Alienware", "Pc gamer Acer", "Pc gamer Gigabyte");
console.log(mesProduits);
console.log(mesProduits.length + " element dans mon tableau");

function resetMenu() {
    let menu = document.querySelector("ul")
    ul.remove
}