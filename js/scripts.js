function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function processor(){
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
      if(gender == "male"){
          processDob(dob)
          alert(gender);
      }else if(gender == "female"){
          alert(gender);
      }else{
          alert("wrong entry");
      }
}

function processDob(dob){
  var dob = document.getElementById("dob").value;
  /*the array is of length 10 2020-05-12*/
  var arrDate = dob.split("");
  /*get cc */
  var centuryOne= arrDate[0];
  var centuryTwo = arrDate[1];
  var cc = centuryOne+centuryTwo;
  /*get yy */
  var yearOne = arrDate[2];
  var yearTwo = arrDate[3];
  var yy = yearOne+yearTwo;
  /*get mm */
  var monthOne = arrDate[5];
  var monthTwo = arrDate[6];
  var mm = monthOne+monthTwo;
  /*get dd */
  var dateOne = arrDate[8];
  var dateTwo = arrDate[9];
  var dd = dateOne+dateTwo;
  /*var result = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd) mod 7);*/
  var date = new Date(dob).getDay();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var day = days[date];
  if(day.toLowerCase() == "Sunday".toLowerCase()){
      alert("Kwasi");
  }else if(day == "Monday"){
      alert("Kwadwo");
  }else if(day == "Tuesday"){
      alert("Kwabena");
  }else if(day == "Wednesday"){
      alert("Kwaku");
  }else if(day == "Thursday"){
      alert("Yaw");
  }else if(day == "Friday"){
      alert("Kofi");
  }else if(day == "Saturday"){
      alert("Kwame");
  }else{
    alert("Wrong input");
  }
  alert(result);
}
