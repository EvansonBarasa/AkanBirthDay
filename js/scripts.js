function processor(){
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
      if(gender == "male"){
          alert(gender);
          processDob(dob,gender)
      }else if(gender == "female"){
          alert(gender);
          processDob(dob,gender);
      }else{
          alert("wrong entry");
      }
}

function processDob(dob,gender){
  /*the array is of length 10 2020-05-12*/
  var arrDate = dob.split("");
  /*get cc */
  var centuryOne= arrDate[0];
  var centuryTwo = arrDate[1];
  var cc = parseInt(centuryOne+centuryTwo);
  /*get yy */
  var yearOne = arrDate[2];
  var yearTwo = arrDate[3];
  var yy = parseInt(yearOne+yearTwo);
  /*get mm */
  var monthOne = arrDate[5];
  var monthTwo = arrDate[6];
  var mm = parseInt(monthOne+monthTwo);
  /*get dd */
  var dateOne = arrDate[8];
  var dateTwo = arrDate[9];
  var dd = parseInt(dateOne+dateTwo);
  var dayOfWeek = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  /*Array length minus one*/
  var date = (Math.ceil(dayOfWeek))-parseInt(1);
  alert(date);
  /*Alternative method to get the day of the week from date
  var date = new Date(dob).getDay();*/
  /*Array days of the week*/
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  /*Access a spefic date from array days*/
  var day = days[date];
  var akan = "Your Akan name is: ";
  if(gender.toString()=="male".toString()){
      maleNames(akan, day);
  }else if(gender.toString()=="female".toString()){
    alert("Inside female");
  }else{
    alert("Wrong input");
  }
}

/*Get name of a male person*/
function maleNames(akan, day){
  if(day.toLowerCase() == "Sunday".toLowerCase()){
      alert(akan+"Kwasi");
  }else if(day.toLowerCase() == "Monday".toLowerCase()){
      alert(akan+"Kwadwo");
  }else if(day.toLowerCase() == "Tuesday".toLowerCase()){
      alert(akan+"Kwabena");
  }else if(day.toLowerCase() == "Wednesday".toLowerCase()){
      alert(akan+"Kwaku");
  }else if(day.toLowerCase() == "Thursday".toLowerCase()){
      alert(akan+"Yaw");
  }else if(day.toLowerCase() == "Friday".toLowerCase()){
      alert(akan+"Kofi");
  }else if(day.toLowerCase() == "Saturday".toLowerCase()){
      alert(akan+"Kwame");
  }else{
    alert("Wrong Date Selected");
  }
}
