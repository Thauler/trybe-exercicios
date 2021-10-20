// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const notAPokemon = new Error('Não temos esse pokémon para você :(');

    function callback(err, msg) {
      expect(err).toEqual(notAPokemon);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Eve', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const pokemonChosen = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, msg) {
      expect(msg).toBe(pokemonChosen);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});