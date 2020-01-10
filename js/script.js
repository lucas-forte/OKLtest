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
  const word = EncryptObj.word;
  const wordArray = word.split('');

  let encryptedWord = '';

  for (let i = 0; i < wordArray.length; i++) {
    const char = wordArray[i];
    let result = char.charCodeAt(0);
    let sum = (result + 30) * 10;
    let encryptedChar = String.fromCharCode(sum);
    
    encryptedWord += encryptedChar; 
  }
  EncryptObj.wordStatic = encryptedWord;

  document.getElementById("output").value = encryptedWord;
}

function decrypt() {
  EncryptObj.word = document.getElementById('target03').value;
  const word = EncryptObj.word;
  const wordArray = word.split('');

  let decryptedWord = '';

  for (let i = 0; i < wordArray.length; i++) {
    const char = wordArray[i];
    let result = char.charCodeAt(0);
    let sum = (result / 10) - 30;
    let encryptedChar = String.fromCharCode(sum);
    
    decryptedWord += encryptedChar; 
  }
  EncryptObj.wordStatic = decryptedWord;

  document.getElementById("output").value = decryptedWord;
}

//events
btnOne.addEventListener('click', removeA)
btnTwo.addEventListener('click', changeCharacter)
btnEnc.addEventListener('click', encrypt);
btnDec.addEventListener('click', decrypt);