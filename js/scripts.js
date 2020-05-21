function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function tempertureConverter(){
    var input = document.getElementById("gender").value;
    alert(input);

}
