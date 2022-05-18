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


function showId() {
    
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
}