const result = document.getElementById("result");

function get(param) {
  var vars = {};
    /* utilisation de la propriété Window.location.href qui renvoie un objet 'Location'
       avec des informations sur l’emplacement actuel : ici l'URL du fichier .json
    */
  window.location.href.replace(location.hash, "").replace(
    /* Utilisation du RegExp .replace, Une méthode de l'objet String qui recherche 
       une correspondance dans une chaîne de caractères et qui remplace la correspondance 
       par une chaîne de substitution.
    */
    /[?&]+([^=&]+)=?([^&]*)?/gi,
    function (m, key, value) {
    /* Utilisation d'une callback, fonction qui prend en argument une autre fonction
    */
      vars[key] = value !== undefined ? value : "";
    }
  );

  if (param) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

async function ranking() {
  const requestURL =
    "https://data.latelier.co/training/tennis_stats/headtohead.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const TennisPlayers = await response.json();
  rankingPlayers(TennisPlayers);
}

// Appel du paramètre de la fonction
function rankingPlayers(obj) {
  const joueurs = obj["players"];
  // Ici, on trie les joueurs de part leur ranking  (avant la boucle)
  joueurs.sort((a, b) => (a.data.rank > b.data.rank ? 1 : -1));

  // Pour un joueur en particulier (ex : index.html?id=52 )
  if (get("id")) {
    const idJoueur = get("id");
    const thisJoueur = joueurs.find((obj) => {
      return obj.id == parseInt(idJoueur);
    });

    // Si on trouve le joueur
    if (thisJoueur) {
      const myArticle = document.createElement("article");
      myArticle.classList.add("joueur");
      const myH1 = document.createElement("h1");
      const myH3 = document.createElement("h3");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myPara4 = document.createElement("p");
      const photo = document.createElement("img");
      photo.setAttribute("src", `${thisJoueur.picture}`);

      myH1.textContent = `${thisJoueur.firstname} ${thisJoueur.lastname}`;
      myH3.textContent = `Ranking Mondial : ${thisJoueur.data.rank}`;
      myPara1.textContent = `Points: ${thisJoueur.data.points}`;
      myPara2.textContent = `Age: ${thisJoueur.data.age}`;
      myPara3.textContent = `Taille: ${thisJoueur.data.height}`;
      myPara4.textContent = `Poid: ${thisJoueur.data.weight}`;

      myArticle.appendChild(myH1);
      myArticle.appendChild(myH3);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(photo);
      result.appendChild(myArticle);
    }
  } else {
    // Sinon je parcoure tous les joueurs avec l'utilisation de la boucle for
    for (const joueur of joueurs) {
      const myArticle = document.createElement("article");
      myArticle.classList.add("joueur");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const photo = document.createElement("img");
      photo.setAttribute("src", `${joueur.picture}`);

      myH2.textContent = `${joueur.firstname} ${joueur.lastname}`;
      myPara1.textContent = `Ranking: ${joueur.data.rank}`;
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(photo);
      result.appendChild(myArticle);
    }
  }
}

ranking();
