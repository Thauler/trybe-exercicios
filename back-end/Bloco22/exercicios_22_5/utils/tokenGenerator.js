function tokenGen() {
  let token = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i <= 12; i++) {
  token += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return token;
}

module.exports = {
  tokenGen,
}