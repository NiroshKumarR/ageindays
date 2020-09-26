
function ageindays(){
    var birthyaer = prompt('Which year you were born?');
    var d = new Date();
    var a = d.getFullYear();
    var agedays = (a - birthyaer)*365;
    var h1= document.createElement('h6');
    var answer = document.createTextNode('I think your are '+ agedays +' days alive, and probably still alive to check this with me.');
    h1.setAttribute('id','results');
    h1.appendChild(answer);
    document.getElementById('results').appendChild(h1);
}

function reset(){
  document.getElementById('results').remove();
}