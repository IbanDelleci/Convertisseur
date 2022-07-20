// Récupération de tous les eléments nécessaires aux calculs ....
var form = document.querySelector("#form");           // l'elément bouton
var btn = document.querySelector("#btn");           // l'elément bouton
var from = document.querySelector("#from");         // l'elément liste de départ de la conversion
var input = document.querySelector("#input");       // la valeur à convertir
var to = document.querySelector("#to");             // l'elément liste de destination de la conversion
var output = document.querySelector("#output");     // le résultat de la conversion
var message = document.querySelector("#message");   // La zone réservée aux messages (d'erreur)

// Ajout d'un écouteur d'évenement (click) au bouton ...
btn.addEventListener("click", function (event) {
    // La fonction anonyme associée à l'écouteur

    var units_from = from.options[from.selectedIndex].dataset.units;    // L'unité de départ
    var units_to = to.options[to.selectedIndex].dataset.units;          // L'unité de destination

    
    // Retirer les précédents messages d'erreur si nécessaire ...
    if (message.children.length > 0)
        message.removeChild(message.children.item(0));
        
    // On vérifie que l'on travaille sur les même unités, pour que le calcul soit valable...
    if (units_from === units_to) {
        if (input.value == "")      // Si la valeur d'entrée est vide, on l'initialise à 1 !
            input.value = 1;

        // calculons !!
        output.value = input.value * from.options[from.selectedIndex].dataset.weight / to.options[to.selectedIndex].dataset.weight
        
    } else {
        // Calcul sur des unités non compatibles, message d'erreur !
        var p = document.createElement("p");
        p.innerText = "Mais on ne compare pas des tomates et des pommes de terres, voyons !";

        message.appendChild(p);
    }

    // Empêcher la soumission du formulaire et donc le rechargement de la page ...
    event.preventDefault();

    return false;
});