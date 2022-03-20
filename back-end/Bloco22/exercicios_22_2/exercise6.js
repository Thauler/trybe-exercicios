const fs = require('fs').promises;
const rl = require('readline');

async function scriptFile() {
  const question = rl.question('Wich file do you wanna see?(write the path)');
  const answer = await fs.readFile(question, 'utf8');
  if (!answer) {
    throw new Error('No such file');
  }
  const fileContent = await readFile(answer, 'utf-8');
  console.log(fileContent);
}

scriptFile();