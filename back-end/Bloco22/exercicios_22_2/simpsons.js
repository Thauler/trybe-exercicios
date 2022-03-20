const fs = require('fs').promises;

// get all simpsons characters from simpsons.json

async function simpsonsChar() {

  const character = await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content)
  }).then((simpsons) => {
    return simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
  }).catch(err => console.log(err.message));
  return character;
}

simpsonsChar();

// find a simpson character by the id

async function simpsonsID(id) {

  const characters = await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content)
  });

  const getById = characters.find((char) => char.id === id);

  if (!getById) {
    throw new Error('id não encontrado');
  }
  return getById;
}

simpsonsID();

// remove simpson character with id = 10 and id = 6

async function removeById() {

  const characters = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content)
  });

  const filteredChar = characters
  .filter((char) => char.id !== '10' && char.id !== '6');

  await fs
  .writeFile('./simpsons.json', JSON.stringify(filteredChar));

}

removeById();

async function simpsonFamilyJson() {

  const characters = await fs
  .readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content)
  });

    const filteredChar = characters
  .filter((char) => char.id <= '4');

  await fs
  .writeFile('./simpsonFamily.json', JSON.stringify(filteredChar), { flag: 'wx' });

}

simpsonFamilyJson();
