// Affiche l'index de joueurs dans ma console
// fetch("players.json")
//   .then(function (reponse) {
//     console.log(reponse);
//     return reponse.json(); // alimente les donnees
//   })
//   .then(function (donnees) {
//     console.log(donnees);
//   });



// ============================================================ //
//  RECUPERATION ET CONVERSION EN OBJET JS DE NOS DONNEES JSON  //
// ============================================================ //

  // Création d'une fonction asynchrone
  async function populate() {

    // Chargement de l'URL du fichier JSON que je souhaite récupérer dans= une variable
    const requestURL = 'https://data.latelier.co/training/tennis_stats/headtohead.json';

    // Instance d'une nouvelle requete sur notre URL
    const request = new Request(requestURL); 

    // Utilisation du fetch (AJAX) pour récupérer la réponse 
    const response = await fetch(request);
    
    // lire le corps de réponse et analyser en JSON
    const TennisPlayers = await response.json(); 

    rankingPlayers(TennisPlayers);

}

// Stockage de la propriété players en créant une variable
function rankingPlayers(obj) {
    const section = document.querySelector('section');
    const heroes = obj['players'];
    // Utilisation de la boucle "for" pour parcourir les objets du tableau
    for (const hero of heroes) {

        // Instanciation des éléments 
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = `${hero.firstname} - ${hero.lastname}`;
        myPara1.textContent = `Ranking : ${hero.data.rank}`;
        
        // Utilisatio nde la méthode appendChild pour l'affichage de mon contenu.
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);

        section.appendChild(myArticle);
    }
}

    // Création de ma variable pour trier les joueurs par leur ranking
    const tableauRankings = [
        { name: 'Novak', rank: 2 },
        { name: 'Venus', rank: 52 },
        { name: 'Stan', rank: 21 },
        { name: 'Serena', rank: 10 },
        { name: 'Nadal', rank: 1 }
    ];
    // utilisation de la méthode .sort en retournant les réponses selon la valeur .rank de mon tableau
    tableauRankings.sort(function (a, b) {
        return a.rank - b.rank;
    });

    console.log(tableauRankings);

// ~~~~~~~~~~~~ AUTRE METHODE ~~~~~~~~~~~~ //

// const tableauRankings = [
//     { name: 'Novak', rank: 2 },
//     { name: 'Venus', rank: 52 },
//     { name: 'Stan', rank: 21 },
//     { name: 'Serena', rank: 10 },
//     { name: 'Nadal', rank: 1 }
//   ];

//   tableauRankings.sort(function compare(a, b) {
// if (a.nom < b.nom)
//    return -1;
// if (a.nom > b.nom )
//    return 1;
// return 0;
// });


console.log(tableauRankings);


    populate();