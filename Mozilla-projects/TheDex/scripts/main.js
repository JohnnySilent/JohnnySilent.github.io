var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myBox = document.querySelector('.number2');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Kirby_SSB4.png'){
    myImage.setAttribute('src','images/Kirby_norm.png');
  }
  else{
    myImage.setAttribute('src','images/Kirby_SSB4.png');
  }
}

function setUserName(){
  var myName = prompt('Who is the character on screen?');
  localStorage.setItem('name',myName); /*Sets data item called "name" to whatever myName is */
  myHeading.textContent = 'Wow, its ' + myName;
}

if (!localStorage.getItem('name')){
  setUserName();
}
else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wow, its ' + storedName;
}

myButton.onclick = function(){
  setUserName();
}

myBox.onclick = function(){
  myBox.textContent = "this box number two has been clicked!!!"
}
