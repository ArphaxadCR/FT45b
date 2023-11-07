"use strict";

function BinarioADecimal(num) {
  let numReversed = num.split("").reverse();
  let aSumar = [];
  let resultado = 0;

  for (let i = 0; i < numReversed.length; i++) {
    let operacion = numReversed[i] * Math.pow(2, i);
    aSumar.push(operacion);
  }

  for (var value of aSumar) {
    resultado += value;
  }

  return resultado;
}

function DecimalABinario(num) {
  let binario = [];

  while (num >= 1) {
    let residuo = num % 2;
    binario.push(residuo);
    num = Math.floor(num / 2);
  }

  binario.reverse();
  let numeroBinario = binario.join("");
  return numeroBinario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
