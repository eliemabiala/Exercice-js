// Récupération des éléments du DOM par leurs ID
let resetta = document.getElementById("resetta");
let element = document.getElementById("element");
let decrementa = document.getElementById("decrementa");
let plus = document.getElementById("plus");
let incrementa = document.getElementById("incrementa");

// Initialisation du compteur à 0
let count = 0;

// Récupération de la valeur du compteur depuis le localStorage
let tema = localStorage.getItem("count");

// Si une valeur est présente dans le localStorage, l'afficher dans l'élément
if (tema !== null) {
    count = parseInt(tema);
    element.textContent = tema;
}
console.log(tema);

// Ajout d'un écouteur d'événement au bouton "plus" pour augmenter le compteur de 5
plus.addEventListener("click", function() {
    count += 5;
    element.textContent = count;
    localStorage.setItem("count", count); // Mise à jour du localStorage
});

// Ajout d'un écouteur d'événement au bouton "incrementa" pour augmenter le compteur de 1
incrementa.addEventListener("click", function() {
    count++;
    console.log(count);
    element.textContent = count;
    localStorage.setItem("count", count); // Mise à jour du localStorage
});

// Ajout d'un écouteur d'événement au bouton "decrementa" pour diminuer le compteur de 1
decrementa.addEventListener("click", function() {
    count--;
    console.log(count);
    element.textContent = count;
    localStorage.setItem("count", count); // Mise à jour du localStorage
});

// Ajout d'un écouteur d'événement au bouton "resetta" pour réinitialiser le compteur à 0
resetta.addEventListener("click", function() {
    count = 0;
    console.log(count);
    element.textContent = count;
    localStorage.setItem("count", count); // Mise à jour du localStorage
});
