function techList(tech, name) {
  let array = [];
  let alfabetica = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  } else {
    for (let language in alfabetica) {
      array.push({
        tech: alfabetica[language],
        name: name,
      });
    }
    return array;
  }
}

function generatePhoneNumber(PhoneNumber) {
  if (PhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let number in PhoneNumber) {
      if (PhoneNumber[number] < 0 || PhoneNumber[number] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      let contador = 0;
      for (let number2 in PhoneNumber) {
        if (PhoneNumber[number] === PhoneNumber[number2]) {
          contador += 1;
        }
        if (contador > 2) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    return '(' + PhoneNumber[0] + PhoneNumber[1] + ') ' + PhoneNumber[2] + PhoneNumber[3] + PhoneNumber[4] + PhoneNumber[5] + PhoneNumber[6] + '-' + PhoneNumber[7] + PhoneNumber[8] + PhoneNumber[9] + PhoneNumber[10];
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let triangle = false;
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    triangle = true;
  } else if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    triangle = true;
  } else if ((lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
    triangle = true;
  }
  return triangle;
}

function hydrate(string) {
  let soma = 0;
  for (let index in string) {
    switch (string[index]) {
    case '1':
      soma += 1;
      break;
    case '2':
      soma += 2;
      break;
    case '3':
      soma += 3;
      break;
    case '4':
      soma += 4;
      break;
    case '5':
      soma += 5;
      break;
    case '6':
      soma += 6;
      break;
    case '7':
      soma += 7;
      break;
    case '8':
      soma += 8;
      break;
    case '9':
      soma += 9;
      break;
    default:
      soma += 0;
    }
  }
  if (soma === 1) {
    return soma + ' copo de água';
  } else {
    return soma + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
