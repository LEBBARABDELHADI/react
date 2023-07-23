// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    { number: 1, name: "James Bond", position: "G" },
    { number: 2, name: "Mrs Moneypenny", position: "D" },
    { number: 3, name: "M", position: "D" },
    { number: 4, name: "Felix Leiter.", position: "M" },
    { number: 5, name: "Madeleine Swann", position: "M" },
    { number: 6, name: "Vesper Lynn", position: "F" }
  ],
  all: function() { return this.players},
  get: function(id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
}

export default PlayerAPI
