function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function tempertureConverter(){
    var C = document.getElementById("degree").value;
    alert((9/5)*C+32);
}
