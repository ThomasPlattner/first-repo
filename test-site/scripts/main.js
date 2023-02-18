const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/code-uni.jpeg") {
    myImage.setAttribute("src", "images/CODE-logo.png");
  } else {
    myImage.setAttribute("src", "images/code-uni.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What's your name?");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to CODE, ${myName}`;
  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to CODE, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  function setUserName() {
    const myName = prompt("What's your name?");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to CODE, ${myName}`;
    }
  }
  