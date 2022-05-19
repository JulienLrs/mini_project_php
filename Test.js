

    let players = {
        
            "players": [
              {
                "id": 52,
                "firstname": "Novak",
                "lastname": "Djokovic",
                "shortname": "N.DJO",
                "sex": "M",
                "country": {
                  "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
                  "code": "SRB"
                },
                "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
                "data": {
                  "rank": 2,
                  "points": 2542,
                  "weight": 80000,
                  "height": 188,
                  "age": 31,
                  "last": [1, 1, 1, 1, 1]
                }
              },
              
            ]
          
      }
      
      const findPlayerById = (id) => {
        const key = Object.keys(players.players).find(players.players['players'].id === '52')
        return players.players[key]
      }
      
      console.log(findPlayerById('52'))
    

