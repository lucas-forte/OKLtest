const btnOne = document.getElementById('action01');

function removeA() {
  const words = document.getElementById('target01').innerHTML;
  let wordsWhitoutA = words.replace(/a/g, '');

  document.getElementById("target01").innerHTML = wordsWhitoutA;
}

btnOne.addEventListener('click', removeA)
