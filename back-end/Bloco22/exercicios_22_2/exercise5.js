const fs = require('fs').promises;

async function arrayOfStrings() {

  const strigsArr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  
  const readStrings = strigsArr
    .map((strings, i) => fs.writeFile(`./file${i + 1}.txt`, strings), { flag: 'wx' });
  
    await Promise.all(readStrings);
  
  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  
  const readFiles = await Promise.all(
    files.map((file) => fs.readFile(file, 'utf-8'))
  );
  
  const phrase = readFiles.join(' ');
  
  await fs.writeFile('./fileAll.txt', phrase);
  
  }
  
  arrayOfStrings();