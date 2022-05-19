// Création d'une fonction asynchrone
async function identity(){

    // Chargement de l'URL du fichier JSON que je souhaite récupérer dans= une variable
    const requestURL = 'https://data.latelier.co/training/tennis_stats/headtohead.json';

    // Instance d'une nouvelle requete sur notre URL
    const request = new Request(requestURL);

    // Utilisation du fetch (AJAX) pour récupérer la réponse 
    const response = await fetch(request);
    // Stockage de la réponse à travers la propriété "response" dans notre variable "TennisPlayers"
    const idPlayers = await response.json();

    fichePlayers(idPlayers);
}


  function fichePlayers(obj) {
  const section = document.querySelector('section');
  const joueurs = obj['players'];
  // Utilisation de la boucle "for" pour parcourir les objets du tableau
  for (const joueur of joueurs) {

      // Instanciation des éléments 
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');

      joueurs.sort((a, b) => (a.rank > b.rank) ? 1 : (a.rank === b.rank) ? ((a.size > b.size) ? 1 : -1) : -1 )

      myH2.textContent = `${joueur.firstname} - ${joueur.lastname}`;
      myPara1.textContent = `Ranking : ${joueur.data.rank}`;
      myPara2.textContent = `Ranking : ${joueur.data.rank}`;
      
      // joueurs.sort(function (a, b) {
      //     return a.rank - b.rank;
      // });

      // Utilisation de la méthode appendChild pour l'affichage de mon contenu.
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      section.appendChild(myArticle);
  }
}


identity();