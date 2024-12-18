let root = document.querySelector(':root');
let saveColor = ['yellow', 'red', 'lightblue', 'orange', 'tomato'];
let finalColor = saveColor[Math.floor(Math.random() * 5)]
console.log(finalColor);


root.style.setProperty('--main-color', finalColor);

