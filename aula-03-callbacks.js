const fs = require('fs').promises;

async function escreverArquivoCallback(nomeArquivo, dados) {
    try {
      console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`);
      await fs.writeFile(nomeArquivo, dados);
      console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function lerArquivoCallback(nomeArquivo) {
    console.log(`Lendo dados do arquivo: ${nomeArquivo}`);
  
    try {
      const data = await fs.readFile(nomeArquivo, "utf-8");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getPokemonDataWithCallbacksAsync() {
    await fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then(async (data) => {
        const pokemonInfo = {
          nome: data.name,
          tipos: data.types.map((type) => type.type.name),
          peso: data.weight,
          altura: data.height,
        };
  
        const pokemonData = JSON.stringify(pokemonInfo, null, 2);
  
        await escreverArquivoCallback("pokemon.json", pokemonData);
        await lerArquivoCallback("dados.txt");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  getPokemonDataWithCallbacksAsync();
  