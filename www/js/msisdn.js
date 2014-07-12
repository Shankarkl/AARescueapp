var dataError;

function getMsisdn() {

  //return "0723981265";

  try {
  //alert('a1');
  if (window.localStorage) {
    //alert('a2');

    var msisdn = window.localStorage.getItem("aaRescueMsisdn6");
    //alert('a3');
    //alert(msisdn);

    if(msisdn == null)
      msisdn = "";
    
    dataError = null;

    return msisdn;
  }
  else {
    dataError = "Local storage is not supported.";    

    return "";
  }
  }
  catch (e) {
        alert('exception');

    alert(e);
    dataError = "Exception has occured.";    
    return "";
  } 
}

function setMsisdn(newMsisdn) {
  try {
  

  if ((newMsisdn == null) || (newMsisdn == '')) {
    dataError = "Please enter a valid phone number.";
    return false;
  } 

  if (window.localStorage) {
    //alert('saving ' + newMsisdn);
    window.localStorage.setItem("aaRescueMsisdn6", newMsisdn);
    dataError = null;
    return true;
  }
  else
  {
    dataError = "Local storage is not supported.";    
    return false;
  }
  }
  catch (e) {
    alert('exception');
    dataError = "Exception has occured.";    
    return "";
  } 
}

