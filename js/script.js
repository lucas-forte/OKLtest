const btnOne = document.getElementById('action01');
const btnTwo = document.getElementById('action02');

function removeA() {
  const words = document.getElementById('target01').innerHTML;
  let wordsWhitoutA = words.replace(/a/g, '');

  document.getElementById("target01").innerHTML = wordsWhitoutA;
}

btnOne.addEventListener('click', removeA)

function changeCharacter() {
  const words = document.getElementById('target02').innerHTML;
  let changeOne = document.getElementById('c1').value;
  let changeTwo = document.getElementById('c2').value;
  const change = changeOne; 

  let regex = new RegExp(`[${change}+]`, 'g')
  let wordsWhitoutA = words.replace(regex, `${changeTwo}`);

  document.getElementById("target02").innerHTML = wordsWhitoutA;
}

btnTwo.addEventListener('click', changeCharacter)

function changeCharacter() {
  const word = document.getElementById('target03').value;
  const wordArray = word.split(' ');
  let changeOne = document.getElementById('c3').value;
  let changeTwo = document.getElementById('c4').value;
  const change = param1; 

  let regex = new RegExp(`[${change}+]`, 'g')
  let wordsWhitoutA = words.replace(regex, `${param2}`);

  document.getElementById("target02").innerHTML = wordsWhitoutA;
}

btnTwo.addEventListener('click', changeCharacter)
