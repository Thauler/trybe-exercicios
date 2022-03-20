function numberTypes(n) {
  if (typeof n === 'string') return 'o valor deve ser um número';
  if (n > 0) return 'positivo';
  if (n < 0) return 'negativo';
  if (n === 0) return 'neutro';
}

module.exports = numberTypes;
