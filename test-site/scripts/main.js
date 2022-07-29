let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/golden-terrier.webp') {
      myImage.setAttribute('src','images/firefox2.png.jpg');
    } else {
      myImage.setAttribute('src','images/golden-terrier.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Golden Terrier: The Prince of Dormir loves you, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Golden Terrier: The Prince of Dormir loves you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }