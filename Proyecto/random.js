function makeid() {
  var text = "";
  var possible = "123456";

  for (var i = 1; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
