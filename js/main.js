let date = new Date();

let x = date.getHours();

let z = "From";

if (x >= 2 && x < 12) {

  document.getElementById("greeting").innerHTML = "Good Morning! " + z;

} else if (x >= 12 && x < 17) {

  document.getElementById("greeting").innerHTML = "Good Afternoon! " + z;

} else if (x >= 17 && x < 23) {

  document.getElementById("greeting").innerHTML = "Good Evening! " + z;

} else {

  document.getElementById("greeting").innerHTML = "Good Night! " + z;
  
}