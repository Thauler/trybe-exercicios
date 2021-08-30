"use strict";

var vetor = [5, 3, 2, 4, 7, 1, 0, 6];

for (var index = 1; index < vetor.length; index += 1) {
  for (var secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (vetor[index] < vetor[secondIndex]) {
      var _position = vetor[index];
      vetor[index] = vetor[secondIndex];
      vetor[secondIndex] = _position;
    }
  }
}

console.log(position);