var panicBusy;
var panicError;
var cancelBusy;
var step;
var referenceNumber;
var cancelReferenceNumber;

function sendPanic(userMsisdn, userLatitude, userLongitude) {

  if(step > 3)
    return;

  step = 4;
//    url: 'http://gateway.aarescue.co.za/PanicService.svc',

$.soap({
    url: 'http://41.160.96.91/Blo.AA.Gateway/PanicService.svc',
    method: 'SendPanic',
    appendMethodToURL: false,
    SOAPAction: 'http://tempuri.org/IPanicService/SendPanic',
    soap12: false,
    params: {
      msisdn: userMsisdn,
      latitude: userLatitude,
      longitude: userLongitude,
      panicType: 'Unknown'
    },
    namespaceQualifier: 'tem',             
    namespaceURL: 'http://tempuri.org/',    
    noPrefix: false,
    request: function (SOAPRequest) {
      //alert(SOAPRequest);
    },
    success: function (soapResponse) {
        // do stuff with soapResponse
        // if you want to have the response as JSON use soapResponse.toJSON();
        // or soapResponse.toString() to get XML string
        // or soapResponse.toXML() to get XML DOM
        setpanicResult(false, "Ok");
        try {
        
        //alert(soapResponse.toString());
        var myxml = soapResponse.toXML();
        //alert(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeName);
        //alert(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].nodeName);
        //alert(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes);

        referenceNumber = myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].nodeValue;
        var message = '';

        if(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes.length == 0) {
          message = referenceNumber;
        }
        else {
          message = myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].nodeValue + ' ' + referenceNumber;
        }

        //alert(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].nodeValue);
        //alert(myxml.documentElement.childNodes[0].childNodes[0].childNodes[0].childNodes[10].childNodes[0].nodeValue);

        setReferenceResult(false, message);

        step = 5;
        }
        catch(e) {
          setReferenceResult(true, "Invalid response recieved.");
        }
    },
    error: function (soapResponse2) {
       setpanicResult(true, "Unable to send panic.");
    }
});
}

function sendCancelPanic(userMsisdn, referenceNumber) {

//    url: 'http://gateway.aarescue.co.za/PanicService.svc',

$.soap({
    url: 'http://41.160.96.91/Blo.AA.Gateway/PanicService.svc',
    method: 'CancelPanic',
    appendMethodToURL: false,
    SOAPAction: 'http://tempuri.org/IPanicService/CancelPanic',
    soap12: false,
    params: {
      panicReference: referenceNumber,
      msisdn: userMsisdn
    },
    namespaceQualifier: 'tem',             
    namespaceURL: 'http://tempuri.org/',    
    noPrefix: false,
    request: function (SOAPRequest) {
      //alert(SOAPRequest);
    },
    success: function (soapResponse) {
        // do stuff with soapResponse
        // if you want to have the response as JSON use soapResponse.toJSON();
        // or soapResponse.toString() to get XML string
        // or soapResponse.toXML() to get XML DOM
        setPanicCancelResult(false, "Ok");
        try {
        
          setCancelReferenceResult(false, referenceNumber);

        }
        catch(e) {
          setCancelReferenceResult(true, "Invalid response recieved.");
        }
    },
    error: function (soapResponse2) {
       setPanicCancelResult(true, "Unable to send cancellation.");
    }
});
}


/**
 * Call back function used to process the Position object returned by the Geolocation service
 *
 * @params position (Position) - contains geographic information acquired by the geolocation service.
 *     http://dev.w3.org/geo/api/spec-source.html#position_interface
 */
function geolocationSuccess(position) {
		//alert('long: ' + position.coords.longitude + ' lat: ' + position.coords.latitude);
  setDeterminLocationResult(false, "Ok");

  if(cancelBusy)
    return;
  
  var msisdn =  getMsisdn();

  if(cancelBusy)
    return;

  $("#sendingPanicDiv").css('visibility', 'visible');
  sendPanic(msisdn, position.coords.latitude, position.coords.longitude);
}

/**
 * Call back function raised by the Geolocation service when an error occurs
 *
 * @param posError (PositionError) - contains the code and message of the error that occurred while retrieving geolocation info.
 *     http://dev.w3.org/geo/api/spec-source.html#position-error
 */
function geolocationError(posError) {
  setDeterminLocationResult(true, "Unabled to determin location.");
}



/**
 * Use the geolocation service to retrieve geographic information about the user's current location.
 *
 * @param params (PositionOptions) -  http://dev.w3.org/geo/api/spec-source.html#position-options
 *      optional parameter that contains three attributes: enableHighAccuracy (boolean), timeout (long), maximumAge (long)
 *      - enableHighAccuracy (default = false) Low accuracy = cell-site (faster); High accuracy = assisted or autonomous (slower)
 *      - timeout ( default = Infinity) - the maximum length of time (in milliseconds) from the call to
 *           getCurrentPosition() or watchPosition() until the corresponding geolocationSuccess is invoked
 *      - maximumAge (default = 0) - indicates that the application is willing to accept a cached position 
 *           whose age is no greater than the specified time in milliseconds.
 */
function getPosition() {
  step = 1;
	try {
		var options;
		
		//First test to see that the browser supports the Geolocation API
		if (navigator.geolocation !== null) {
  		  options = { enableHighAccuracy : true, timeout : 60000, maximumAge : 0 };
  		  navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, options);
		} 
		else {
		  setDeterminLocationResult(true, "HTML5 geolocation is not supported.");
		}
	} 
	catch (e) {
		setDeterminLocationResult(true, "Unabled to determine location. Please ensure GPS is enabled.");

	}
}


function setReferenceResult(error, message) {

  $("#referenceResultDiv").css('visibility', 'visible');

  if(error) {
    $("#referenceResult").text(message);
    $("#referenceSpan").text(message);
    $("#referenceResult").addClass('panicStepErrorResult');
    $("#okDiv").show();
    $("#cancelPanicDiv").hide();
    panicBusy = false;
  }
  else {
    $("#referenceResult").text(message);
  }
 
  step = 5;
}


function setCancelReferenceResult(error, message) {

  $("#cancelreferenceResultDiv").css('visibility', 'visible');

  if(error) {
    $("#cancelreferenceResult").text(message);
    $("#cancelreferenceResult").addClass('panicStepErrorResult');
    $("#okCancelDiv").show();
  }
  else {
    $("#cancelreferenceResult").text(message);
    $("#okCancelDiv").show();
  }
}


function setpanicResult(error, message) {
  if(error) {
    $("#panicResult").text(message);
    $("#panicResult").addClass('panicStepErrorResult');
    $("#okDiv").show();
    $("#assistanceDiv").show();
    $("#cancelPanicDiv").hide();
    panicBusy = false;
  }
  else {
    $("#panicResult").text(message);
  }
 
  step = 3;
}

function setPanicCancelResult(error, message) {
  if(error) {
    $("#panicCancelResult").text(message);
    $("#panicCancelResult").addClass('panicStepErrorResult');
    $("#okCancelDiv").show();
  }
  else {
    $("#panicCancelResult").text(message);
    $("#cancelTextDiv").show();
    $("#okCancelDiv").show();
  }
}


function setDeterminLocationResult(error, message) {
  if(error) {
    $("#locationResult").text(message);
    $("#locationResult").addClass('panicStepErrorResult');
    $("#okDiv").show();
    $("#cancelPanicDiv").hide();
    panicBusy = false;
  }
  else {
    $("#locationResult").text(message);
  }
 
  step = 1;
}


function cancelPanic() {
  
  cancelBusy = true;
  
  if(step > 3)
  {
    $("#cancelContainer").show();
    $("#panicContainer").hide();
  }
  else
  {
    window.location = 'panic.html';
  }
}

function restart() {
    window.location = 'panic.html';
}

function cancelPanicCancel() {
  $("#cancelContainer").hide();
  $("#panicContainer").show();
}

function performCancelPanic() {
  $("#panicContainer").hide();
  $("#cancelContainer").hide();
  $("#cancelingContainer").show();

  var msisdn = getMsisdn();
  var reference = referenceNumber;

  sendCancelPanic(msisdn, reference);
}

function panic() {
  if(cancelBusy )
    setDeterminLocationResult(true, "Previous panic cancel is still being processed.");

  if(panicBusy) {
    setDeterminLocationResult(true, "Previous panic is still being processed.");
    return;
  }

  step = 0;
  cancelBusy  = false;
  panicBusy = true;
  getPosition();
}