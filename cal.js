// var screen = document.getElementById('screen')

// function displayScreen(i) {
//     screen.innerText += i
// }
// function calcValue(i) {
//     var displayNum = document.getElementById('screen').innerText
//     var answer = eval(screen);
//     document.getElementById('screen').innerText = answer
    
// }
function displayScreen(i) {
    var displayNum = document.getElementById('screen').innerText += i;
  }
  
  function calcValue() {
    var screen = document.getElementById('screen').innerText;
    const answer = eval(screen);
    document.getElementById('screen').innerText = answer;
  }
  
  function clearScreen() {
    document.getElementById('screen').innerText = '';
  }
  
  function delvalue() {
    var str = document.getElementById('screen').innerText;
    const value = String(str);
    var delstr = str.slice(0, -1);
    document.getElementById('screen').innerText = delstr;
  }
