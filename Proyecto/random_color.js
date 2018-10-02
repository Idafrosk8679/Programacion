function makeid() {
  var text = "";
  var possible = "RNVAB";

  for (var i = 1; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());

function myFunction() {
    var res = String.fromCharCode(70);
    document.getElementById("demo").innerHTML = res;
}
