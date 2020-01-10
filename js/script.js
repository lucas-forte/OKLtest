//btns variables
const btnOne = document.getElementById('action01');
const btnTwo = document.getElementById('action02');
const btnEnc = document.getElementById('encrypt');
const btnDec = document.getElementById('decrypt');

//task 01
function removeA() {
  const words = document.getElementById('target01').innerHTML;
  let wordsWhitoutA = words.replace(/a/g, '');

  document.getElementById("target01").innerHTML = wordsWhitoutA;
}

//task 02
function changeCharacter() {
  const words = document.getElementById('target02').innerHTML;
  let changeOne = document.getElementById('c1').value;
  let changeTwo = document.getElementById('c2').value;
  const change = changeOne; 

  let regex = new RegExp(`[${change}+]`, 'g')
  let wordsWhitoutA = words.replace(regex, `${changeTwo}`);

  document.getElementById("target02").innerHTML = wordsWhitoutA;
}

//task 03

var EncryptObj = {};

function encrypt() {
  EncryptObj.word = document.getElementById('target03').value;
  EncryptObj.wordStatic = EncryptObj.word;
  const word = EncryptObj.word;

  let wordsWhitoutA = word.replace(word, 'EE12*7&&bgyW');

  document.getElementById("output").value = wordsWhitoutA;
}

function decrypt() {
  const word = EncryptObj.wordStatic;

  let wordsWhitoutA = word.replace('EE12*7&&bgyW', word);

  document.getElementById("output").value = wordsWhitoutA;
}

//events
btnOne.addEventListener('click', removeA)
btnTwo.addEventListener('click', changeCharacter)
btnEnc.addEventListener('click', encrypt);
btnDec.addEventListener('click', decrypt);