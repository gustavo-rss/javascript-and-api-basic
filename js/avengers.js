function listAvengers() {
  //API could be creating this array
  var avengers = [
    "Tony Stark",
    "Clint Barton",
    "Natasha Romanoff",
    "Steve Rogers",
    "Spider-Man",
  ];

  var ul = document.getElementById("avengers");
  ul.innerHTML = "";

  avengers.forEach(function (a) {
    var li = document.createElement("li");
    var text = document.createTextNode(a);
    li.appendChild(text);
    ul.appendChild(li);
  });
}
