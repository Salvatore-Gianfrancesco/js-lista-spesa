const shoppingList = [
    accessoriCucina = [
        "ACCESSORI CUCINA",
        "Bicchieri di carta",
        "Carta da forno",
        "Pellicola trasparente",
        "Piatti di carta",
        "Posate di plastica",
        "Tovaglioli",
        "Vaschette in alluminio"
    ],

    alcolici = [
        "ALCOLICI",
        "Vino bianco",
        "Vino rosso",
        "Grappa"
    ],

    animaliDomestici = [
        "ANIMALI DOMESTICI",
        "Crocchette per cani",
        "Lettiera per gatti"
    ],

    carne = [
        "CARNE",
        "Agnello",
        "Carne macinata",
        "Filetto di manzo",
        "Petto di pollo",
        "Costolette di maiale",
        "Mortadella",
        "Pancetta",
        "Guanciale",
        "Prosciutto crudo"
    ],

    cereali = [
        "CEREALI",
        "Farro",
        "Mais",
        "Fiocchi d'avena",
        "Grano saraceno"
    ]
];
// console.log(shoppingList);

// let counter = 0;
let i = 0;
while (i < shoppingList.length) {
    const ulEl = document.querySelector(`.col:nth-child(${i + 1}) ul`);
    let j = 1;

    // Intestazione colonne
    console.log(shoppingList[i][0]);
    ulEl.innerHTML = `<li>${shoppingList[i][0]}</li>`;

    while (j < shoppingList[i].length) {
        const liEl = `<li>${shoppingList[i][j]}</li>`

        // Elemento della lista
        console.log(" - ", shoppingList[i][j]);
        ulEl.innerHTML += liEl;

        j++;
        // counter++;
    }

    i++;
}
// console.log(counter);