function checkAge() {
  var name = document.querySelector("input[name=name]");
  var age = document.querySelector("input[name=age]");

  if (age.value.length == 0) {
    alert("Age is a required field!");
    return;
  }

  var ageNum = parseInt(age.value);

  if (ageNum >= 18) {
    alert("You can ride a car");
  } else if (ageNum >= 5) {
    alert("You can ride a bicycle");
  } else {
    alert("You are too young");
  }
}
