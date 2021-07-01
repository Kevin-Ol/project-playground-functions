function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

function calcArea(base, altura) {
  return ((base * altura) / 2);
}

function splitSentence(string) {
  let array = [];
  let palavra = '';
  for (let word in string) {
    if (string[word] != ' ') {
      palavra += string[word];
      if ((word == (string.length - 1))) {
        array.push(palavra);
      }
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  return array;
}

function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (3 * wins) + ties;
  return pontos;
}

function highestCount(array) {
  let maior = array[0];
  let contador = 0;
  for (let index in array) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let index2 in array) {
    if (maior === array[index2]) {
      contador += 1;
    }
  }
  return contador;
}

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

function fizzBuzz(numeros) {
  let fizzbuzz = [];
  for (let number in numeros) {
    if (numeros[number] % 3 === 0 && numeros[number] % 5 === 0) {
      fizzbuzz.push('fizzBuzz');
    } else if (numeros[number] % 3 === 0) {
      fizzbuzz.push('fizz');
    } else if (numeros[number] % 5 === 0) {
      fizzbuzz.push('buzz');
    } else {
      fizzbuzz.push('bug!');
    }
  }
  return fizzbuzz;
}

function encode(string) {
  let resposta = '';
  let codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index in string) {
    if (string[index] in codigo) {
      resposta += codigo[string[index]];
    } else {
      resposta += string[index];
    }
  }
  return resposta;
}

function decode(string) {
  let resposta = '';
  let codigo = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index in string) {
    if (string[index] in codigo) {
      resposta += codigo[string[index]];
    } else {
      resposta += string[index];
    }
  }
  return resposta;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
