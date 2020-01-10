const btnOne = document.getElementById('action01');
const btnTwo = document.getElementById('action02');

function removeA() {
  const words = document.getElementById('target01').innerHTML;
  let wordsWhitoutA = words.replace(/a/g, '');

  document.getElementById("target01").innerHTML = wordsWhitoutA;
}

btnOne.addEventListener('click', removeA)

function changeCharacter(param1, param2) {
  const words = document.getElementById('target02').innerHTML;
  param1 = document.getElementById('c1').value;
  param2 = document.getElementById('c2').value;
  const change = param1; 

  let regex = new RegExp(`${change}`, 'g')
  let wordsWhitoutA = words.replace(regex, `${param2}`);

  document.getElementById("target02").innerHTML = wordsWhitoutA;
}

btnTwo.addEventListener('click', changeCharacter)
