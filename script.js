function submitForm() {
  document.getElementById("main").style.display = "none";
  document.getElementById("thankyou").style.display = "block";
}
// submitForm()

function selectNum(value) {
  const elements = document.getElementsByClassName("numbers");
  console.log(elements)

  for (const value of elements) {
    value.style.backgroundColor = "hsl(213, 19%, 18%)";
  }

  document.getElementById(value).style.backgroundColor = "white";
  document.getElementById("changeNum").innerHTML = value;
}
