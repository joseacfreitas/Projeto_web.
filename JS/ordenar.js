
const input1 = document.querySelector(".input1");
const btnConvert = document.querySelector(".btn-converter");

function sortNumbers(inputText) {

  let numArray = inputText.split(",");
  numArray.sort((a,b) => {return a - b});

  document.getElementById("h").innerText = (` ${ numArray} `); 
  console.log(numArray)

  return  numArray;
}

btnConvert.addEventListener('click', function () {
  sortNumbers(input1.value);

});