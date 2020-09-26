
function ageindays(){
    var birthyaer = prompt('Which year you were born?');
    var agedays = (2020 - birthyaer)*365;
    var h1= document.createElement('h1');
    var answer = document.createTextNode('I think your are '+ agedays +' days alive probably still alive to check this with me.');
    h1.setAttribute('id','results');
    h1.appendChild(answer);
    document.getElementById('results').appendChild(h1);
}

function reset(){
  document.getElementById('results').remove();
}