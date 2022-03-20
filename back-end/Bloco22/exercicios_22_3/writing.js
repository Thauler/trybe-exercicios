const fs = require('fs');

const write = (file, content) => {
  fs.writeFileSync(`./${file}`, content, { flag: 'wx' });

  return 'ok';
};

module.exports = write;