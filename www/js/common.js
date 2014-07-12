// JScript source code nw

var currentPage = 'indexPage';
var prevPage = '';
var pageData = ["indexPage"];



function gobackPage() {

    if (currentPage == "accidentReportPage") {
        $.mobile.changePage('#indexPage', {
            transition: "none",
            reverse: false,
            changeHash: false
        });
        currentPage = 'indexPage';
        pageData.push(currentPage);
    }
    else {
        pageData.pop();
        currentPage = pageData[pageData.length - 1];
        $.mobile.changePage('#' + currentPage, {
            transition: "none",
            reverse: true,
            changeHash: false
        });
    }
}
function goindexPage() {
    $(window).scrollTop(0);
    $.mobile.changePage('#indexPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'indexPage';
    pageData.push(currentPage);
}

function gotoaccidentReportPage() {
    $(window).scrollTop(0);
    $.mobile.changePage('#accidentReportPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentReportPage';
    pageData.push(currentPage);
    getDateTimeIncident();
    getGPSIncidentLocation();
   

}
function gotoAccidentReportToDescPage() {
    $(window).scrollTop(0);
    /*  if (document.getElementById('taidLocDesc').value == "") {
    alert("Please enter the description of your current location!");
      
    return false;
    }*/
    $(window).scrollTop(0);
    $.mobile.changePage('#accidentDescriptionPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'accidentDescriptionPage';
    pageData.push(currentPage);
}
function gotoPhotoPage() {
    /*if (document.getElementById('idAccDesc').value == "") {
    alert("Please enter the description of the accident!");
    return false;
    }
    else if (document.getElementById('idSelectRoadCondition').value == "") {
    alert("Please enter details of the road conditions!");
    return false;
    }*/
    $(window).scrollTop(0);
    $.mobile.changePage('#photoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'photoPage';
    pageData.push(currentPage);
}

function gotoDamagePhotoPage() {
    $(window).scrollTop(0);
    $.mobile.changePage('#DamagePhotoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'DamagePhotoPage';
    pageData.push(currentPage);
}



function gotoFirstPartyPage() {
    $(window).scrollTop(0);
    $.mobile.changePage('#FirstPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'FirstPartyPage';
    pageData.push(currentPage);
}
function gotoSecondPartyPage() {

    $(window).scrollTop(0);
    $.mobile.changePage('#SecondPartyPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondPartyPage';
    pageData.push(currentPage);
}

function gotoWitnessPageFromFP() {
    $(window).scrollTop(0);
    var FPEmailID = document.getElementById('txtFirstpartyemail').value;
    if (document.getElementById('txtidPartyName').value == "") {
        alert("Please enter 3rd party name.");
        return false;
    }

    else if (document.getElementById('txtFirstpartyIDNumber').value == "") {
        alert("Please enter 3rd party ID number.");

        return false;
    }
    /* else if (document.getElementById('txtidDriverLicenseNum').value == "") {
    alert("Please enter 3rd party driver’s licence number!");
    return false;
    }*/
    else if (document.getElementById('txtFirstpartyPhNumber').value == "") {
        alert("Please enter 3rd party phone number.");
        return false;
    }
    /* else if (FPEmailID == "") {
    alert("Please enter 3rd party email address.");
    return false;
    }
    else if (FPEmailID.indexOf("@", 0) < 0) {
    alert("Please enter a valid email address.");
    return false;
    }

    else if (FPEmailID.indexOf(".", 0) < 0) {
    alert("Please enter a valid email address.");
    return false;
    }*/

    else if (document.getElementById('txtFirstpartyVehicleMake').value == "") {
        alert("Please enter 3rd party vehicle make.");
        return false;
    }

    else if (document.getElementById('txtFirstpartyVehicleModel').value == "") {
        alert("Please enter 3rd party vehicle model.");
        return false;
    }
    else if (document.getElementById('txtFirstpartyVehicleYear').value == "") {
        alert("Please enter year of 3rd party vehicle.");

        return false;
    }
    else if (document.getElementById('txtFirstpartyVehiclecolor').value == "") {
        alert("Please enter 3rd party vehicle colour.");

        return false;
    }

    else if (document.getElementById('txtFirstpartyRegNum').value == "") {
        alert("Please enter 3rd party vehicle registration number.");

        return false;
    }
    /* else if (document.getElementById('txtFirstpartyVINNum').value == "") {
    alert("Please enter 3rd party VIN number!!");
    return false;
    }*/

    else if (document.getElementById('txtFirstpartyInsurer').value == "") {
        alert("Please enter 3rd party insurer.");
        return false;
    }
    /*  else if (document.getElementById('txtFirstpartyInsurerPcnum').value == "") {
    alert("Please enter party insurer policy number!");
    return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerPhnum').value == "") {
    alert("Please enter insurance company phone number!");
    return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVcolor').value == "") {
    alert("Please enter party insurer vehicle color!");
    return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVReg').value == "") {
    alert("Please enter party insurer vehicle registration number!");
    return false;
    }
    else if (document.getElementById('txtFirstpartyInsurerVinnum').value == "") {
    alert("Please enter party insurer VIN number!");
    return false;
    }*/

    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

function gotoWitnessPageFromSP() {
    $(window).scrollTop(0);
    var SPEmailID = document.getElementById('txtSecondpartyemail').value;
    if (document.getElementById('txtidSecondPartyName').value == "") {
        alert("Please enter 3rd party name.");
        return false;
    }

    else if (document.getElementById('txtSecondpartyIDNumber').value == "") {
        alert("Please enter 3rd party ID number.");
        return false;
    }
    /*  else if (document.getElementById('txtidSecondpartyDriverLicenseNum').value == "") {
    alert("Please enter driver license number!");
    return false;
    }*/
    else if (document.getElementById('txtSecondpartyPhNumber').value == "") {
        alert("Please enter 3rd party phone number.");
        return false;
    }
    /*  else if (SPEmailID == "") {
    alert("Please enter email address!");
    return false;
    }
    else if (SPEmailID.indexOf("@", 0) < 0) {
    alert("Please enter a valid email address!");
    return false;
    }

    else if (SPEmailID.indexOf(".", 0) < 0) {
    alert("Please enter a valid email address!");
    return false;
    }*/

    else if (document.getElementById('txtSecondpartyVehicleMake').value == "") {
        alert("Please enter 3rd party vehicle make.");
        return false;
    }

    else if (document.getElementById('txtSecondpartyVehicleModel').value == "") {
        alert("Please enter 3rd party vehicle model.");
        return false;
    }
    else if (document.getElementById('txtSecondpartyVehicleYear').value == "") {
        alert("Please enter year of 3rd party vehicle.");
        return false;
    }
    else if (document.getElementById('txtSecondpartyVehiclecolor').value == "") {
        alert("Please enter 3rd party vehicle colour.");
        return false;
    }

    else if (document.getElementById('txtSecondpartyRegNum').value == "") {
        alert("Please enter 3rd party vehicle registration number.");
        return false;
    }
    /* else if (document.getElementById('txtSecondpartyVINNum').value == "") {
    alert("Please enter VIN number!");
    return false;
    }*/


    else if (document.getElementById('txtSecondpartyInsurer').value == "") {
        alert("Please enter 3rd party insurer.", "Info");
        return false;
    }
    /*  else if (document.getElementById('txtSecondpartyInsurerPcnum').value == "") {
    alert("Please enter party insurer policy number!");
    return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerPhnum').value == "") {
    alert("Please enter party insurer phone number!");
    return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVcolor').value == "") {
    alert("Please enter party insurer vehicle color!");
    return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVReg').value == "") {
    alert("Please enter party insurer vehicle registration number!");
    return false;
    }
    else if (document.getElementById('txtSecondpartyInsurerVinnum').value == "") {
    alert("Please enter party insurer VIN number!");
    return false;
    }*/

    $.mobile.changePage('#WitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WitnessPage';
    pageData.push(currentPage);
}

function gotoSecondWitnessPage() {
    $(window).scrollTop(0);
    $.mobile.changePage('#SecondWitnessPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'SecondWitnessPage';
    pageData.push(currentPage);
}

function gotopolicecasePageFromFirstWitness() {
    /*  var FWEmailID = document.getElementById('txtidwitnessEmail').value;
    if (document.getElementById('txtidwitnessName').value == "") {
    alert("Please enter witness name!");
    return false;
    }
    else if (document.getElementById('txtidwitnessPhnum').value == "") {
    alert("Please enter witness phone number!");
    return false;
    }
    else if (FWEmailID == "") {
    alert("Please enter witness email address!");
    return false;
    }
    else if (FWEmailID.indexOf("@", 0) < 0) {
    alert("Please enter a valid witness email address!");
    return false;
    }

    else if (FWEmailID.indexOf(".", 0) < 0) {
    alert("Please enter a valid witness email address!");
    return false;
    }
    
  
   
    else if (document.getElementById('txtidwitnessSt').value == "") {
    alert("Please enter witness statment!");
    return false;
    }*/
    $(window).scrollTop(0);
    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}
function gotopolicecasePageFromSecondWitness() {
    /*  var SWEmailID = document.getElementById('txtidSwitnessEmail').value;
    if (document.getElementById('txtidSwitnessName').value == "") {
    alert("Please enter witness name");
    return false;
    }
    else if (document.getElementById('txtidSwitnessPhnum').value == "") {
    alert("Please enter witness phone number");
    return false;
    }

    else if (SWEmailID == "") {
    alert("Please enter witness email address");
    return false;
    }
    else if (SWEmailID.indexOf("@", 0) < 0) {
    alert("Please enter a valid witness email address!");
    return false;
    }

    else if (SWEmailID.indexOf(".", 0) < 0) {
    alert("Please enter a valid witness email address!");
    return false;
    }
   
    else if (document.getElementById('txtidSwitnessSt').value == "") {
    alert("Please enter witness statment!");
    return false;
    }*/
    $(window).scrollTop(0);
    $.mobile.changePage('#policecasePage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'policecasePage';
    pageData.push(currentPage);

}


function gotoaboutAAPage() {

    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);

}


function btnAAAccidentassist() {
    $.mobile.changePage('#AAAccidentAssistPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'AAAccidentAssistPage';
    pageData.push(currentPage);
}
function gotoWhatTodoPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoHistroyPage() {
    $.mobile.changePage('#WhatTodoPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'WhatTodoPage';
    pageData.push(currentPage);
}
function gotoAboutAAPage() {
    $.mobile.changePage('#aboutAAPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'aboutAAPage';
    pageData.push(currentPage);
}

function gotoPOI() {
    $.mobile.changePage('#POIPage', {
        transition: "none",
        reverse: false,
        changeHash: false
    });
    currentPage = 'POIPage';
    pageData.push(currentPage);
}
/*Maps*/
function dBcall() {
    //alert("dBcall");
    //document.getElementById('view-loadingpoi').style.display = "block";
    var db = window.openDatabase("aarescuepoidb", "1.0", "AAPOIdatabase", 4 * 1024 * 1024);
    //alert(db);
    db.transaction(function (tx) {

        var queryAccom = "CREATE TABLE IF NOT EXISTS AAAccommodation(Name varchar(255) NULL,AA_rating INTEGER NULL,Latitude varchar(255) NULL,Longitude varchar(255) NULL,Seopermalink varchar(255) NULL,PhoneNumber varchar(255) NULL,Email varchar(255) NULL)";
        // alert(query);
        tx.executeSql(queryAccom);
        // tx.executeSql("drop table SalesAgent");
        var querySalesAgent = "CREATE TABLE IF NOT EXISTS SalesAgent(Name varchar(255) NULL,Catery varchar(255) NULL,Lat varchar(255) NULL,Long varchar(255) NULL,Tel varchar(255) NULL,Email varchar(255) NULL,Website varchar(255) NULL,AddressStreet varchar(255) NULL,AddressSuburb varchar(255) NULL,AddressCity varchar(255) NULL,AddressPostal varchar(255) NULL)";
        // alert(query);
        tx.executeSql(querySalesAgent);

        var queryFuelStation = "CREATE TABLE IF NOT EXISTS FuelStation(SiteName varchar(255) NULL,SalesAreaName varchar(255) NULL,SalesManager varchar(255) NULL,Latitude varchar(255) NULL,Longitude varchar(255) NULL,DealerName varchar(255) NULL,Telno varchar(255) NULL,StreetNo varchar(255) NULL,StreetName varchar(255) NULL,Suburb varchar(255) NULL,PostCode varchar(255) NULL,AddressLine1 varchar(255) NULL,ProvinceName varchar(255) NULL,CoreArea varchar(255) NULL,LocationType varchar(255) NULL,PricingZone varchar(255) NULL,ExpressShop varchar(255) NULL,ShopSize varchar(255) NULL,WildBean varchar(255) NULL,QSR varchar(255) NULL,CarWash varchar(255) NULL,ATM varchar(255) NULL)";
        // alert(query);
        tx.executeSql(queryFuelStation);
        tx.executeSql("delete from AAAccommodation");
        tx.executeSql("delete from SalesAgent");
        tx.executeSql("delete from FuelStation");
        // jAlert("db" + db,"");
        //Accomodation
        tx.executeSql("INSERT INTO AAAccommodation(Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('1 Marichel', 3, -29.52104, 31.22708, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/1-marichel-PA45854', '+27 83 652-5953', 'djsibbald@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation(Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('1 Neptune Terrace', 2, -34.05541, 24.92225, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/1-neptune-terrace-PA45107', '(042) 2934190', 'henniegiani@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation(Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('11 Simbalina Beach Penthouse', 2, -29.54161, 31.21671, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/11-simbalina-beach-penthouse-PA45099', '+27 82-786-3130', 'accinballito@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('12 Stars', 2, -26.17501, 28.00905, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melville/12-stars-PA42294', '+27 11 482 7979', 'thespace@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('18 on Kloof B&B', 3, -34.16466, 18.86397, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rdon`s-bay/18-on-kloof-b&b-PA1642', '+21 21 856 4556', 'info@18onkloof.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('19 Casablanca Beach Penthouse', 2, -29.53355, 31.2222, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/19-casablanca-beach-penthouse-PA42302', '+27 82 786 3130', 'accinballito@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('2 The End Guest House', 2, -27.72978, 29.92051, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/2-the-end-guest-house-PA45762', '+27 34 315-5942', 'info@2theend.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('224 on Kent', 2, -26.10293, 27.99818, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/224-on-kent-PA42305', '+27 11 781 3166', 'info@224onkent.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('26 Akrotiri', 2, -29.52238, 31.22678, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/26-akrotiri-PA45186', '(032) 525 4636', 'info@ballitobeach.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('26 on Chamberlain Guest House', 3, -31.89462, 26.88976, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/26-on-chamberlain-guest-house-PA42306', '+27 45 838-4759', 'reservations@26onchamberlain.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('28Â° North West B&B', 2, -28.43594, 21.26182, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/28Â°-north-west-b&b-PA44996', NULL, 'info@28nwguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('2Ten Hotel', 3, -22.96108, 30.46871, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/thohoyandou/2ten-hotel-PA44888', '+27 15 963 0210', 'george@pibholdings.co.za /reservations@2tenhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('3 Bronze Beach', 2, -29.71857, 31.09126, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/3-bronze-beach-PA42308', '+27 11 453 6168', 'cantarinma@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('3 Darling Street Guest House', 1, -31.06732, 24.44241, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/hanover/3-darling-street-guest-house-PA44993', NULL, 'darlingst3@icon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('3 Flavours Guest House', 3, -34.34833, 18.85307, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/pringle-bay/3-flavours-guest-house-PA2204', '+27 28 273 8917 ', 'info@3flavours.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('305 On Ipahla', 3, -30.03273, 30.90591, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/305-on-ipahla-PA40964', '+27 31 904 1970', 'ipahla305@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('314 On Clark Guest House', 2, -25.77278, 28.24311, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/314-on-clark-guest-house-PA7732', '+27 12 346 2760', 'info@314onclark.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('35 Duinesig', 2, -34.11946, 18.8318, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/strand/35-duinesig-PA45105', NULL, 'andri@dutoiteiendomme.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('4 Seasons B&B', 2, -31.89412, 26.88781, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/4-seasons-b&b-PA45573', '+27 45 839-7459', 'zizikaziv@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('40 Winks Guest House', 2, -33.90852, 18.40372, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/40-winks-guest-house-PA7735', '214 347 936', '40winks@ct.stormnet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('5 Camp Street Guest House & Self Catering', 9, -33.93432, 18.4102, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/5-camp-street-guest-house-&-self-catering-PA45855', ' +27 21 423 8261', 'info@5campstreet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('505 Les Mouettes', 2, -29.53383, 31.2215, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/505-les-mouettes-PA42531', '+27 12 809-0492', 'makkink@gds.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('51 on Forest Drive Lodge', 3, -33.94009, 18.50114, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/pinelands/51-on-forest-drive-lodge-PA7738', '+27 21 531 4020 ', 'cls@icon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('6 Jakaranda House', 3, -33.95154, 22.45728, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/6-jakaranda-house-PA45518', '+27 82 623 1177', 'info@jakarandahouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('604 Coral Reef', 2, -29.64072, 31.13569, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/la-mercy/604-coral-reef-PA42534', '+27 82 775 3799', '604coralreef@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('64 Amberely', 1, -30.85934, 30.35955, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/64-amberely-PA45749', '(0) 39 312-2998', 'leticia@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('70 Blakeway Bed & Breakfast', 1, -31.58913, 28.77614, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/70-blakeway-bed-&-breakfast-PA45577', '+27 47 532 6690', 'dazana@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('75 on Milner Lodge', 2, -28.75448, 24.76895, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/75-on-milner-lodge-PA45229', NULL, '75onmilnerlodge@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A Grace Walk', 2, -34.01487, 20.45493, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/a-grace-walk-PA8010', '285 143 432', 'estherl@mjvn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A La Fugue Guest House', 2, -28.45746, 21.24265, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/a-la-fugue-guest-house-PA42538', '+27 54 338 0424', 'a-la-fugue@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A Riviera Garden B&B', 3, -28.45546, 21.25172, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/a-riviera-garden-b&b-PA42539', '+27 054 332 6554', 'ariviera@upington.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A Summer Place Boutique Guest House', 3, -29.11954, 26.1843, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/a-summer-place-boutique-guest-house-PA45279', '+27 51 522 2412', 'info@thesummerplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A Tapestry Garden Guest House', 2, -26.72156, 27.09655, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/a-tapestry-garden-guest-house-PA45012', '27 182 974 856', 'tapestry@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A Villa de Mer Guest House', 3, -33.60746, 26.89198, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/a-villa-de-mer-guest-house-PA1301', '466 242 315', 'avillademer@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('A&J Kruger Guest House', 1, -25.09423, 30.45751, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/lydenburg/a&j-kruger-guest-house-PA45760', NULL, 'atkruger@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('AaQtansisi Guest House', 3, -32.2522, 24.53267, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/aaqtansisi-guest-house-PA9143', '498 910 243', 'riadlange@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aat Kanaal B&B', 2, -28.4475, 21.26908, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/aant-kanaal-b&b-PA44768', '+27 54 332-3722', 'estestrauss@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Abalone Guest House', 2, -33.98506, 25.66156, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/abalone-guest-house-PA45831', '+27 41 583 1441', 'cmaguire@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Abalone Lodges', 3, -34.03816, 23.07119, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/abalone-lodges-PA2630', ' +27 44 382 2934', 'info@abalonelodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aber Jetz Guesthouse', 2, -27.37556, 31.6086, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ponla/aber-jetz-guesthouse-PA36122', '+27 83 330 7364', 'herbst@ananzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Abigails B&B', 2, -26.10776, 27.81887, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/parkview/abigails-b&b-PA1080', '+27 11 646 4071', 'stay@abigails.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Absolute Leisure Cottages', 1, -25.66661, 30.24988, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/machadodorp/absolute-leisure-cottages-PA42559', '+27 11 802 8076', 'info@absoluteleisure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acacia Guesthouse', 2, -25.48244, 30.95883, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/acacia-guesthouse-PA45666', '+27 13 741-1897', 'bookings@acaciaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acacia Hof Guest House', 1, -27.92921, 26.80519, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/welkom/acacia-hof-guest-house-PA42561', '+27 57 388 1715', 'acaciaguest@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acacia House Executive Suites', 2, -26.07684, 28.09722, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/acacia-house-executive-suites-PA45032', '+27 82 892 1364', 'info@acaciahousejhb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acondri Guest House', 2, -27.68746, 23.04474, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/acondri-guest-house-PA45780', '(0) 53 723 2079', 'acondri@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acorn & Summit Guest House and Conference', 2, -26.16588, 27.93745, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/acorn-&-summit-guest-house-and-conference-PA42563', '+27 11 672 0198', 'info@summitguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Acorn B&B In Durba', 3, -29.83748, 31.0066, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/berea/acorn-b&b-in-durban-PA7198', '+27 31 208 1884', 'info@acornbandb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Adato Guest House', 2, -26.70942, 27.09379, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/adato-guest-house-PA7474', '+27 18 294 5244', 'adato@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Addis Bed & Breakfast', 3, -29.71842, 31.08069, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/addis-bed-&-breakfast-PA42576', '+27 31 561 7302', 'stay@addisbedandbreakfast.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Addo Afrique', 3, -33.41833, 25.89111, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/addo-afrique-PA2307', '+27 41 468 1903', 'enquiries@addoafrique.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Addo Dung Beetle Guest Farm', 3, -33.44807, 25.68817, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/addo-dung-beetle-guest-farm-PA7436', '+27 83 974 5802', 'addodungbeetle@eezi.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Admirals Lodge Guest House', 2, -33.9961, 25.66691, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/admirals-lodge-guest-house-PA7517', '+2741 583 1894', 'admiralslodge@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Africa on Sea', 2, -29.90985, 31.03003, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/africa-on-sea-PA42580', '+27 31 466 3857', 'info@africaonsea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Diamond Boutique Guest House', 2, -28.74924, 24.78185, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/african-diamond-boutique-guest-house-PA1967', '+27 53 842 1854', 'reception@afridiamond.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Dream', 3, -29.33775, 31.37176, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/stanger/african-dream-PA45672', '+27 32 482-0130', 'craig@pwr.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Dreams', 2, -33.96082, 18.38403, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/camps-bay/african-dreams-PA44994', '27 214 380 901', 'africadream@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Dreams B&B', 3, -33.01345, 27.91756, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/african-dreams-b&b-PA44928', '+27 43 722-4849', 'info@afdreams.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Elephant Guest House', 2, -26.24117, 28.16424, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/germiston/african-elephant-guest-house-PA42205', '738 447 224', 'africanelephant@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Sands - Kingsway', 2, -30.02291, 30.91539, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/african-sands--kingsway-PA5519', '+27 31 904 3230', 'africansands@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Silhouette Guesthouse', 2, -26.08303, 28.32745, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/benoni/african-silhouette-guesthouse-PA9153', '+27 83 297 4533', 'asmitsa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('African Vineyard Guest House', 3, -28.65639, 21.07834, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/african-vineyard-guest-house-PA43970', '+27 54 491 1400', 'elmariedeb@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('AfricaSky Guest House', 2, -26.09667, 28.27968, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kempton-park/africasky-guest-house-PA7770', '+27 82 319 4081', 'africasky@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afrikhaya Guest House', 3, -28.37567, 32.41946, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/afrikhaya-guest-house-PA2200', '+27 35 590 1447', 'info@afrikhaya.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afrique Boutique Hotel Ruimsig', 3, -26.07562, 27.84527, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/afrique-boutique-hotel-ruimsig-PA45126', '+27 11 958 0855', 'info@afriquehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afritemba Group of Destinations', 1, -33.3115, 26.52334, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/afritemba-group-of-destinations-PA45461', '+27 46 6222424', 'eugene@afritemba.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afro-Uluwatu (Ballito Zimbali)', 3, -29.5544, 31.1915, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/afrouluwatu-ballito-zimbali-PA7226', '+27 31 502 2612', 'erae@eca.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afroguide Luxury Beachfront Apartments', 3, -29.86987, 31.04366, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-city/afroguide-luxury-beachfront-apartments-PA42601', '+27 31 266 9200', 'natalies@nerc.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Afton Grove Country Retreat', 3, -34.11833, 18.38944, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/noordhoek/afton-grove-country-retreat-PA7773', '+27 21 785 2992', 'info@afton.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Agape Beach House', 2, -29.22102, 31.50433, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/tugela-mouth/agape-beach-house-PA45350', NULL, 'dimitriades@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Agape Guest House', 2, -26.6934, 27.08505, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/agape-guest-house-PA275', '+27 18 293 1686', 'agapeguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Agape Guest House', 2, -27.98057, 26.75396, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/welkom/agape-guest-house-PA45289', '+27 57 352-2549', 'ababinwelkom@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Agros Guest House', 2, -28.75196, 24.74325, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/agros-guest-house-PA44900', '(053) 861 4061', 'agrosgh@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('AHHA Guest House', 2, -26.18667, 28.1288, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/bedfordview/ahha-guest-house-PA7777', '+27 11 616 3702 / +27 11 616 7811', 'ahhalux@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ahoy Boutique Hotel', 3, -33.97864, 25.64224, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/ahoy-boutique-hotel-PA42602', '+27 41 582 2888', 'sharon@a-hoy.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ailsa Cottage', 1, -31.88939, 26.8859, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/ailsa-cottage-PA42603', '+27 45 839 2761', 'hall@awe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ajalon Guest House', 2, -27.38069, 31.62433, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ponla/ajalon-guest-house-PA42605', '+27 34 413 1864', 'jess01@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Akademie Street Boutique Hotel & Guest Houses', 3, -33.91253, 19.1237, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/akademie-street-boutique-hotel-&-guest-houses-PA7779', '+27 21 876 3027', 'info@aka.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Akido B&B', 2, -30.09023, 30.86109, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/warner-beach/akido-b&b-PA7141', '+27 31 916-5874', 'akido@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Akua-Yaa Boutique Hotel', 3, -31.59694, 28.78154, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/akuayaa-boutique-hotel-PA42606', '+27 47 531 1551', 'info@ayboutiquehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('al Marrakesh', 2, -29.53169, 31.21566, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/al-marrakesh-PA36003', '+27 32 946 0523', 'bookings@almarrakesh.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aladdis Chameleon Overnight Accommodatio', 1, -29.35985, 29.99331, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/estcourt/aladdins-chameleon-overnight-accommodation-PA45761', '332 666 460', 'info@aladdins.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Albany Hotel', 2, -29.8591, 31.02765, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/albany-hotel-PA5531', '+27 31 304 4381', 'info@albanyhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Albatross Guest House', 1, -30.93166, 30.3107, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/southbroom/albatross-guest-house-PA45877', '039 316 65 72', 'wilnev@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Albert House B & B', 2, -32.16654, 25.61415, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/albert-house-b&b-PA42607', '+27 48 881 4624', 'info@alberthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Albion Manor', 3, -29.82523, 31.00963, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/albion-manor-PA43696', '+27 31 313 9700', 'info@albionmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aletheim Guest House Collectio', 3, -28.75402, 24.7712, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/aletheim-guest-house-collection-PA7774', '+27 53 832-1907', 'aletheimguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aletta''s Kuierhuis', 2, -34.4741, 19.8974, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/napier/alettas-kuierhuis-PA42649', '+27 28 423 3857', 'info@alettas.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Alfalfa Verblyf cc', 1, -31.66444, 18.50611, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/vredendal/alfalfa-verblyf-cc-PA45758', '+27 27 213 2499', 'alfalfa@mylan.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ala Guest House', 2, -33.9924, 25.67309, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/ala-guest-house-PA42650', '+27 41 583 3511', 'info@alaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aligeo Guest House', 2, -30.5256, 27.36677, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/sterkspruit/aligeo-guest-house-PA45038', '516 110 260', 'info@aligeo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Alkantmooi Self-catering', 3, -34.00169, 23.40107, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/alkantmooi-selfcatering-PA2696', '+27 44 535 9245', 'info@alkantmooi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aloe Grove Guest Farm', 2, -31.80348, 26.90826, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/aloe-grove-guest-farm-PA42653', '+27 45 839 5910', 'info@aloegrove.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aloe Inn Guest House', 2, -31.05632, 30.22372, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-edward/aloe-inn-guest-house-PA42655', '+27 39 311 3460', 'aloeinn@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aloe Rest B and B', 2, -31.58681, 28.75956, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/aloe-rest-b-and-b-PA43672', '+27 47 532 5011', 'yquma@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aloe View Rock Lodge', 2, -27.91637, 32.27407, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/aloe-view-rock-lodge-PA44955', '+2779 394 1284', 'info@aloeviewlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Alpha and Omega Guest House', 3, -30.54212, 29.41641, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/alpha-and-omega-guest-house-PA43715', '+27 39 727 3822', 'alphaandomega@cybersmart.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Alpha Du Cap Guest House & Conference Centre', 2, -33.81864, 18.48355, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/alpha-du-cap-guest-house-&-conference-centre-PA7789', '+27 21 556 3468', 'info@alphaducap.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Altes Landhaus Country Lodge', 3, -33.59806, 22.18833, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/altes-landhaus-country-lodge-PA1458', '+27 44 272 6112', 'altes.landhaus@pixie.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ama Casa Self Catering Cottages', 3, -28.81664, 29.52962, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/ama-casa-self-catering-cottages-PA45908', '364 681 303', 'ldsworthy@futurenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amafana Guest House', 1, -30.89183, 28.98197, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mount-frere/amafana-guest-house-PA45771', '(0) 83 687 0761', 'ndicks@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amafu Forest Lodge', 2, -24.52241, 30.88617, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/kampersrus/amafu-forest-lodge-PA45304', '+27 78 478 2638', 'trollip@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amakoekoe Guest Lodge & Conference Venue', 3, -26.07879, 27.92502, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/amakoekoe-guest-lodge-&-conference-venue-PA838', '117 953 508', 'info@amakoekoe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amali Guest Houses and Karoo Manor', 2, -32.16479, 25.61859, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/amali-guest-houses-and-karoo-manor-PA43078', '+27 48 881-5185', 'mcoetzee@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amali Self Catering', 2, -32.15856, 25.61764, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/amali-self-catering-PA24425', '+27 48 881-4895', 'mcoetzee@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amanzi Guest House', 3, -26.12631, 28.02439, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/craighall-park/amanzi-guest-house-PA41547', '+27 11 880 0205', 'info@amanziguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amaziah Guest House', 1, -27.45572, 23.42551, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/amaziah-guest-house-PA45214', NULL, 'amaziahbb@yahoo.co.uk')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ambassador Guest House', 3, -26.2664, 28.44123, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/springs/ambassador-guest-house-PA45106', '113 621 228', 'ambassador@saol.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ambassador Lodge', 2, -28.7608, 24.74983, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/ambassador-lodge-PA44890', NULL, 'amb1@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amble Inn Guest House and Conference Centre', 2, -28.74331, 31.89326, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/empangeni/amble-inn-guest-house-and-conference-centre-PA5558', '+27 35 792 4693', 'info@ambleinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ammazulu African Palace', 3, -29.76861, 30.84387, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kloof/ammazulu-african-palace-PA44874', '+2731 764 8000', 'info@ammazulupalace.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amper Bo Guest House', 2, -25.72959, 28.20921, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/amper-bo-guest-house-PA7796', '+27 12 329 2581', 'info@amperbo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amritz Private Lodge', 2, -25.21791, 27.04705, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/sun-city/amritz-private-lodge-PA36128', '+27 83 272 8808', 'amritz@mtnloaded.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Amys Place', 3, -33.22793, 22.02988, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/prince-albert/amys-place-PA2732', '+27 11 483 0502/ +27 23 541 1215', 'steve.winks@swac.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('An Upper Room B&B', 2, -29.86214, 30.98339, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/glenwood/an-upper-room-b&b-PA42707', '+27 31 261 1778', 'upper_room@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('An-Ra Guest House', 1, 41.50306, -71.7151, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/richmond/anra-guest-house-PA45582', NULL, 'anra@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anchors Boutique Lodge', 3, -30.08898, 30.85992, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/anchors-boutique-lodge-PA7170', '+27 31 916 4350', 'info@anchorsguestlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anchors Rest Guest House', 3, -29.72977, 31.08104, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/anchors-rest-guest-house-PA5567', '+27 31 561 7380', 'cilla@anchorsrest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anchorage Guest House', 3, -33.98503, 25.66615, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/anchorage-guest-house-PA749', '+27 41 583 2156', 'info@anchorage.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anchorage Inn Guest House', 2, -33.79393, 20.11942, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/montagu/anchorage-inn-guest-house-PA2736', '+27 23 614 3329', 'anchorage@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Andes Clarens Guest House', 3, -28.324, 28.369, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/andes-clarens-guest-house-PA42710', '+27 82 562 7673', 'andesclarens@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Angasii Game Lodge', 3, -24.54035, 27.2024, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/northam/angasii-game-lodge-PA42755', '+27 14 784 0497', 'info@angasii.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anglers Paradise', 2, -34.08057, 24.25798, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/storms-river/anglers-paradise-PA42756', '+27 84 814 1023', 'anglersparadise@huntessential.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Annelines Gastehuis', 2, -30.71837, 25.0973, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/annelines-gastehuis-PA45452', NULL, 'annelines@colesberginfo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Annies Self-Catering', 1, -29.74549, 31.0588, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/la-lucia/annies-selfcatering-PA42757', '+27 31 562 8056', 'annelienbarnes@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Annies cottage', 3, -29.66078, 17.88554, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/annies-cottage-PA7488', '+2727 7121451', 'annie@springbokinfo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('AnnVilla Guest House', 3, -26.85646, 26.6686, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/klerksdorp/annvilla-guest-house-PA42758', '+27 83 504 2820', 'info@annvilla.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Antoinettes Petit Chalet', 3, -25.74219, 27.84734, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort-dam/antoinettes-petit-chalet-PA42760', '+27 82 376 2373', 'info@stayatantoinettes.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Anwil B&B', 1, -28.46624, 21.2137, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/anwil-b&b-PA45349', NULL, 'anwilbb@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Appledew Guest House', 2, -26.93757, 29.24646, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/standerton/appledew-guest-house-PA42761', '+27 17 719 2543', 'info@appledew.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aquamarine Guest House', 2, -34.18207, 22.13773, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/aquamarine-guest-house-PA45228', '+27 71 373 3136', 'aquamarine.gh@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aquarius Beach House', 1, -30.83249, 30.3839, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/uvon/aquarius-beach-house-PA45148', NULL, 'onthebeach@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aquarius Uvon Main Beach Penthouses', 1, -30.82973, 30.40026, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/uvon/aquarius-uvon-main-beach-penthouses-PA45492', NULL, 'onthebeach@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arcadia Guest House', 2, -27.67347, 27.24129, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/kroonstad/arcadia-guest-house-PA972', '082 9400 715/082 809 2191/082 310 7879 ', 'arcadia@gcs.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arcadia Hotel', 2, -25.74271, 28.20422, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/arcadia-hotel-PA42765', '+27 12 326 9311', 'reservations@arcadiahotel.co.za/ archot@arcadiahotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arch Rock Seaside Accommodatio', 2, -34.05484, 23.37225, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/arch-rock-seaside-accommodation-PA2774', ' +27 44 535 9409', 'info@archrock.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ardeco Knysna Guest House', 2, -34.03649, 23.02597, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/ardeco-knysna-guest-house-PA45250', '+27 44 382 1653', 'info@ardecoknysna.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Areena Riverside Resort & Private Game Reserve', 3, -32.53006, 28.03404, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cintsa/areena-riverside-resort-&-private-game-reserve-PA42787', '+27 43 734 3055', 'info@areenaresort.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arendsig Lodge', 2, -24.77427, 27.88673, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/rooiberg/arendsig-lodge-PA44948', NULL, 'info@arendsiglodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aristo Manor', 3, -28.74046, 32.07613, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/aristo-manor-PA36018', '+27 35 786 1212', 'rmyburgh@satcom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aristocats Guest Lodge', 2, -32.99489, 27.92323, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/aristocats-guest-lodge-PA40920', '+27 43 735 4282', 'aristocats@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aristotle Guest House', 3, -33.97575, 25.63731, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/aristotle-guest-house-PA1517', '415 850 816', 'aristotleguesthouse@telkomsa.net')");
        //Acc may 6th
        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Around the Corner', 2, -32.98651, 27.91011, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/around-the-corner-PA42803', '+27 43 727 0555', 'aroundthecorner@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Artists'' Colony B&B', 2, -30.21488, 26.53615, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/smithfield/artists-colony-b&b-PA44944', '(051) 683 1138', 'colony@global.co.za')")

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arum Cottage', 1, -34.19612, 24.83629, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cape-st-francis/arum-cottage-PA42805', '+27 82 267 2788', 'arumcottage@live.com')")

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Arumvale', 2, -34.01704, 20.42356, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/arumvale-PA44672', '285 143 545', 'george@arumvale.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ashgar Cottages', 1, -28.61305, 28.37631, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/ashgar-cottages-PA42806', '+27 58 256 1176', 'info@ashgarhorses.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Askari Game Lodge & Spa', 2, -25.93613, 27.51801, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/magaliesberg-range/askari-game-lodge-&-spa-PA8257', '+27 14 577-2658/9', 'info@askarilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('At Belurana River Boutique Hotel', 3, -28.46125, 21.24298, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/at-belurana-river-boutique-hotel-PA45260', '+27 54 332 4323', 'belurana@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('At Judys Guest House', 2, -28.74548, 24.73802, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/at-judys-guest-house-PA42809', '+27 53 861 2555', 'info@atjudys.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('At The Rocks', 2, -33.09794, 18.04361, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/langebaan/at-the-rocks-PA7808', '+27 22 772 0999   ', 'stay@therocks.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Athenian Villa', 2, -34.23332, 19.42744, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/caledon/athenian-villa-PA2819', '+27 28 212 3592', 'info@athenianvilla.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Buffelspoort Holiday Resort', 1, -25.45462, 27.29268, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/atkv-buffelspoort-holiday-resort-PA685', '+27 14 572 1000', 'buffelspoort@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Buffelspoort Holiday Resort Magalies Villas', 2, -25.75382, 27.55839, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/atkv-buffelspoort-holiday-resort-magalies-villas-PA45299', NULL, 'tommied@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Drakensville Holiday Resort', 2, -28.61072, 29.12739, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/atkv-drakensville-holiday-resort-PA5596', '+27 36 438 6287', 'drakensville@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Eiland Spa', 2, -23.655, 30.67083, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/letsitele/atkv-eiland-spa-PA42820', '+27 15 386 8000', 'eiland@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV udini Spa Holiday Resort', 1, -33.6786, 19.3002, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rawsonville/atkv-udini-spa-holiday-resort-PA266', '+27 23 349 8100', 'udini@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV udini Spa Holiday Resort - Slanghoek Villas & Boland Chalets', 3, -33.6786, 19.3002, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rawsonville/atkv-udini-spa-holiday-resort--slanghoek-villas-&-boland-chalets-PA43717', '+27 23 349 8100', 'udini@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Hartenbos Beach Resort', 1, -34.12541, 22.1129, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hartenbos/atkv-hartenbos-beach-resort-PA2821', '+27 44 601 7200/19/20', 'hartenbos@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Klein Kariba Holiday Resort', 2, -24.5059, 28.202, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/atkv-klein-kariba-holiday-resort-PA42851', '+27 14 736 9800', 'kariba@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ATKV Natalia Beach Resort', 2, -30.11997, 30.8467, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/illovo-beach/atkv-natalia-beach-resort-PA5597', '+27 31 916 4545', 'natalia@atkv.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Atlantic Guest House', 2, -34.03088, 23.03644, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/atlantic-guest-house-PA45606', NULL, 'info@atlanticaccommodation.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Atlantic View Cape Tow', 3, -33.95957, 18.38533, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/camps-bay/atlantic-view-cape-town-PA2833', '+27 21 438 2254', 'info@atlanticviewcapetown.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Attache Guest Lodge and Health and Beauty Spa', 2, -25.9553, 28.16382, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/midrand/attache-guest-lodge-and-health-and-beauty-spa-PA7810', '+27 11 314 1591', 'info@attachelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Au Jardin Guest House', 2, -27.92573, 26.81275, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/welkom/au-jardin-guest-house-PA944', '+27 57 388 2897', 'pauline@aujardin.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Auberge Hollandaise', 3, -29.78991, 31.0339, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/auberge-hollandaise-PA7811', '+27 31 564 8568  ', 'cheryl@ahguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Audreys Vineyard Cottage & Homestead', 1, -33.3921, 19.36967, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/worcester/audreys-vineyard-cottage-&-homestead-PA42863', '+27 23 347 8717', 'info@audreys.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Augrabies Falls Lodge and Camp', 1, -28.3855, 20.955, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/augrabies-falls/augrabies-falls-lodge-and-camp-PA42874', '+27 54 451 7203', 'augrabiesl.c@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Augusta Kleinbosch Guest Farm', 3, -33.6896, 19.02604, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/augusta-kleinbosch-guest-farm-PA2848', '+27 21 868 2481', 'kleinbos@ezinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Augustine Avenue BnB', 2, -28.53879, 29.77658, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/augustine-avenue-bnb-PA42876', '+27 36 631 2829', 'nickykrugel@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Australian Arms Guest Lodge', 2, -28.73759, 24.75459, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/australian-arms-guest-lodge-PA7812', '+2753 832 1526', 'info@australianarms.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avalon Guest House', 2, -30.06041, 30.87363, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/avalon-guest-house-PA1974', '+27 31 903-2924', 'bookings@avalon-bb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avalon Guest Manor', 3, -27.72325, 29.92011, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/avalon-guest-manor-PA42883', '+27 34 325 0591', 'info@avalonguestmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avalon Springs Hotel', 3, -33.76432, 20.12156, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/montagu/avalon-springs-hotel-PA2853', '+27 23 614 1150', 'reservations@avalonsprings.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avalon Springs Resort', 2, -33.79637, 20.12239, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/montagu/avalon-springs-resort-PA44965', '+27 23 614-1150', 'reservations@avalonsprings.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avalone Guest House', 3, -28.37372, 32.41436, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/avalone-guest-house-PA5600', '+27 35 590-2112', 'info@avalone-guesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avian Leisure', 2, -34.20603, 18.45359, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/simons-town/avian-leisure-PA2858', '+27 21 786 1414', 'enquiries@avianleisure.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Aview - 13 Theresa Avenue', 3, -33.96148, 18.38541, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/aview--13-theresa-avenue-PA45085', NULL, 'aview@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Avon Lodge', 2, -26.65885, 27.99554, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vereeniging/avon-lodge-PA45451', '+27 16 423 3967', 'avonlodge@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Azalea Guest House', 1, -27.44072, 23.43213, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/azalea-guest-house-PA45000', '537 122 240', 'azaleaguesthouse@gmail.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('B.Blessed Self Catering Richmond', 1, -31.41474, 23.94657, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/richmond/b.blessed-self-catering-richmond-PA45650', NULL, 'b.blessed@adsactive.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('B.R.O. Homes and Villas', 2, -33.94924, 25.54828, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/b.r.o.-homes-and-villas-PA43188', '+27 41 365 2477', 'dawn.oppelt@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Badfontein Guest Farm', 2, -30.69913, 26.7232, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/badfontein-guest-farm-PA42894', '+27 51 633 2263', 'badfontein@msn.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Badgerleur Bush Lodge', 2, -26.82652, 28.66535, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/balfour/badgerleur-bush-lodge-PA45164', NULL, 'vivienne@compumail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Badplaas - A Forever Resort', 1, -25.95736, 30.53942, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/badplaas/badplaas--a-forever-resort-PA45481', '+27 17 844-8000', 'badplaasres3@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bains House', 3, -28.45297, 21.25393, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/bains-house-PA7825', '+27 54 332 1333', 'mail@bainshouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bakgatla Resort', 1, -25.23435, 27.04704, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/bakgatla-resort-PA637', '145 551 000', 'marketing@ldenleopardresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bakubung Bush Lodge', 3, -25.2043, 27.0322, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/bakubung-bush-lodge-PA9841', '+27 14 552 6000 ', 'bakubung@legacyhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Balladon Cottage', 2, -27.3246, 30.52385, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/paulpietersburg/balladon-cottage-PA45759', NULL, 'claire@koubad.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ballito Forest Lodge', 2, -29.53728, 31.21862, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/ballito-forest-lodge-PA5615', '+27 32 946 3269', 'ballitoforestlodge@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Balmoral Place', 3, -29.82249, 30.89672, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pinetown/balmoral-place-PA44884', NULL, 'norman@balmoralplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bamburgh Place', 2, -32.99057, 27.92881, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/bamburgh-place-PA42923', '+27 82 661 0657', 'candicemia@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Banana Beach Holiday Resort', 2, -30.66257, 30.51524, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mellville-beach/banana-beach-holiday-resort-PA5617', '+27 39 681 2257', 'reservations@bananabeach.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bankenveld House Bed and Breakfast', 2, -26.06592, 27.79062, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/krugersdorp/bankenveld-house-bed-and-breakfast-PA42924', '+27 11 954 9506', 'karen@bankenveldhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Banksia Boutique', 3, -33.9529, 18.47905, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/banksia-boutique-PA7822', '+27 21 689 2992', 'info@banksiaboutique.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bar-T-Nique Guest House', 3, -34.18584, 22.14623, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/bar-t-nique-guest-house-PA9484', '+2744 690 4554', 'info@bar-t-nique.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Barnacle Bills Beach Cottage', 2, -30.70345, 30.48642, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-shepstone/barnacle-bills-beach-cottage-PA42950', '+27 39 695 2602', 'irven@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Barra Beach Club', 2, -23.89832, 35.3964, 'http://www.aaholidays.co.za/accommodation/mozambique/inhambane/barra-beach-club-PA42522', '25 829 356 076', 'gm@barrabeachclub.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bastion Guest House & Conferencing', 2, -25.86642, 28.21249, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/bastion-guest-house-&-conferencing-PA42957', '+27 12 667 6500', 'frieda@bastionbb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bateleur Guest House', 1, -28.75602, 24.73438, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/bateleur-guest-house-PA44954', '053-8611022', 'info@bateleurguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Battlefields Country Lodge', 2, -28.1315, 30.2838, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/battlefields-country-lodge-PA7135', '+27 34 218 1641', 'stay@battlefieldslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bay View Lodge', 2, -28.79464, 32.09622, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/bay-view-lodge-PA42965', '+27 35 753 3065', 'baylodge@ion.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Baysands Lodge', 2, -33.74094, 18.44552, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/baysands-lodge-PA42966', '+27 21 554 5126', 'info@baysandslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bayview', 2, -30.45903, 30.22519, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umzumbe/bayview-PA45483', NULL, 'trish@beachproperty.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beach Break Holiday Letting', 2, -29.72528, 31.08583, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/beach-break-holiday-letting-PA45836', '(+72) 083-788-2736 ', 'beachbreak@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beach Cabanas', 2, -34.03709, 24.92942, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/beach-cabanas-PA930', NULL, 'lalapanzi@wol.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beach House Accommodatio', 2, -29.28558, 16.87957, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/port-nolloth/beach-house-accommodation-PA45377', NULL, 'beachhouse@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beachwalk Bed and Breakfast', 3, -33.98318, 25.66115, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/beachwalk-bed-and-breakfast-PA42994', '+27 41 583 3594', 'info@beachwalk.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beaufort Manor Guest House', 3, -32.34706, 22.58385, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/beaufort-manor-guest-house-PA42998', '+27 23 415 2175', 'bmanor@internext.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beaufort Manor Self Catering Cottages', 3, -32.34706, 22.58385, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/beaufort-manor-self-catering-cottages-PA43000', '+27 23 415 2175', 'bmanor@internext.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bedrock Lodge', 2, -29.24809, 16.86812, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/port-nolloth/bedrock-lodge-PA1194', '+27 27 851 8865', 'bedrocklodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beethoven Lodge', 2, -30.04348, 30.8933, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/beethoven-lodge-PA45755', '27 319 037 227', 'admin@beethoven.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Beethoven Self Catering', 2, -30.04348, 30.8933, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/beethoven-self-catering-PA45750', '27 319 037 227', 'martinlouw@live.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Belaire Suites', 3, -29.84176, 31.03487, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-city/belaire-suites-PA43054', '+27 31 332 4485', 'info@belairesuites.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bell Rosen Guest House', 1, -33.8695, 18.61681, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/welgemoed/bell-rosen-guest-house-PA2942', ' +27 21 913 4703', 'bellr@bellrosen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bell Street B&B', 3, -26.09821, 27.81739, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/krugersdorp/bell-street-b&b-PA43688', '+27 11 954 5405', 'm-fourie@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bell-Lu Guest House', 1, -28.75423, 24.77071, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/belllu-guest-house-PA43095', '+27 53 833 1098', 'email@bell-lu.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bella''s Guest House', 2, -33.30046, 26.51609, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/bellas-guest-house-PA45798', '827 710 013', 'info@bellas.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bellavista Country Place', 3, -34.51389, 19.44833, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stanford/bellavista-country-place-PA2946', NULL, 'bellavista@hermanus.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Belles Guest House No 1', 2, -32.32252, 28.1854, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/butterworth/belles-guest-house-no-1-PA43056', '+27 47 491 4355', 'bellesguesthouse@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bellstone Guest House', 2, -25.78786, 28.32134, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/bellstone-guest-house-PA43097', '+27 83 458 2764', 'info@bellstone.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bellvista Lodge', 2, -33.88, 18.63176, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bellville/bellvista-lodge-PA9716', '+27 21 918 4444', 'bvista@belpark.sun.ac.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Belvedere Guest House', 2, -28.77151, 20.61604, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kakamas/belvedere-guest-house-PA45714', '+27 54 431-1600', 'belvedere@electronet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Belvidere Manor Hotel', 3, -34.04368, 22.99815, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/belvidere-manor-hotel-PA7843', '+27 44 387 1055', 'manager@belvidere.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Benri Bed and Breakfast', 3, -32.95093, 28.01523, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nubie/benri-bed-and-breakfast-PA9339', '+2743 740-3331 ', 'benri@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Berg en Dal Guest House', 2, -33.98969, 19.28974, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/villiersdorp/berg-en-dal-guest-house-PA43105', '+27 28 840 1442', 'benje@vinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Berghaven Holiday Cottages', 1, -29.0129, 29.4598, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/champagne-valley/berghaven-holiday-cottages-PA5657', '+27 36 468 1212 ', 'berghaven@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bergview', 2, -28.14958, 30.23381, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/bergview-PA2186', '+27 34 218 1203 ', 'aloehouse@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bhotani B&B', 2, -33.95117, 25.54752, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/bhotani-b&b-PA45134', '+27 41 364 0975', 'info@bhotanibnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bibby''s Guest House', 2, -32.99742, 27.92461, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/bibbys-guest-house-PA43110', '+27 43 735 1129', 'info@bibbys.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Big 5 Guest House', 2, -25.86491, 29.23908, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/witbank/big-5-guest-house-PA45635', '+27(0)13 656 4646', 'big5@big5guesthouse.co.za / isabel@big5guesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Big Five Bed and Breakfast', 1, -32.32258, 28.18479, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/butterworth/big-five-bed-and-breakfast-PA45042', NULL, 'baxta@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Big Five Guest House', 1, -31.56741, 28.79395, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/big-five-guest-house-PA44584', '475 341 230', 'enquiries@bigfiveguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bills Best', 2, -30.88762, 30.34712, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/bills-best-PA5668', '393 144 837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - All The Tides', 2, -30.8961, 30.3453, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/billsbest--all-the-tides-PA5540', '+27 39 314 4837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - Boathouse B&B', 2, -30.86426, 30.35652, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/billsbest--boathouse-b&b-PA44260', '+27 39 314-4837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - Claridges', 2, -30.88957, 30.34683, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/billsbest--claridges-PA43111', '+27 39 314 4837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - Greengates Cottage', 2, -31.05179, 30.22751, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-edward/billsbest--greengates-cottage-PA6028', '27-39-3144837:0861-72674283', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - RockIn', 2, -30.89792, 30.34158, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/billsbest--rockinn-PA6656', ' (039) 3144837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - Rosscarbery', 2, -30.84884, 30.36085, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/billsbest--rosscarbery-PA7157', '+27 39 314 4837', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BillsBest - Whaleback Cottage', 2, -30.86216, 30.37145, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/billsbest--whaleback-cottage-PA7082', ' (039) 3144837 / 082 451 6', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bingelela Restaurant Pizzeria Pub Bed & Breakfast', 2, -28.42874, 29.19288, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/bingelela-restaurant-pizzeria-pub-bed-&-breakfast-PA5671', '+27 36 448 1336', 'bingelela@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Birch Bush B&B', 2, -28.24168, 28.31869, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bethlehem/birch-bush-b&b-PA9250', '+27 58 303 7518', 'info@birchbushbb.co.za/ dbosman@farmsecure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Birch Tree Cottage B&B', 2, -26.05376, 27.97409, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/birch-tree-cottage-b&b-PA43112', '+27 11 023 0024', 'birchtreecottage@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Birches Guest House', 2, -25.77121, 29.43992, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/birches-guest-house-PA43126', '+27 13 243 3545', 'belinda@birchesguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Birds Of Paradise BnB', 2, -28.88312, 31.45966, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/eshowe/birds-of-paradise-bnb-PA5672', ' (035) 474 4430/ 082 532 4', 'reservations@birdsofparadise.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bishops Guest House & Conference Centre', 2, -27.7598, 30.79515, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/vryheid/bishops-guest-house-&-conference-centre-PA45560', '+27 34 980-7097', 'williamw@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Biweda Nguni B&B Lodge', 1, -27.70921, 31.79109, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mkuze/biweda-nguni-b&b-lodge-PA45026', '+27 35 573-1060 ', 'admin@biweda.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bizafrika Guest Lodge', 3, -29.77445, 30.85512, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/bizafrika-guest-lodge-PA43131', '+27 31 764 2844', 'information@bizafrika-ltd.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blackwaters River Lodge', 3, -34.03314, 22.93411, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/blackwaters-river-lodge-PA2994', '+27 44 383 0105', 'info@blackwaters.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bloemhoek B&B', 2, -25.8423, 28.17451, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/bloemhoek-b&b-PA43133', '+27 12 654 6302', 'info@bloemhoekbb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blommenberg Guest House', 2, -32.1739, 18.88669, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/clanwilliam/blommenberg-guest-house-PA1424', ' +27 27 4821851', 'blommenberg@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Crane Guest House', 2, -27.98439, 26.74753, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/welkom/blue-crane-guest-house-PA7477', '057-3527511', 'info@bluecraneguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Haze Country Lodge -The Oasis Of The Drakensberg', 2, -29.05528, 29.82417, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/estcourt/blue-haze-country-lodge-the-oasis-of-the-drakensberg-PA5678', '+27 36 352 4688', 'info@bluehaze.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Horizon Guest House', 3, -34.15862, 18.88223, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rdons-bay/blue-horizon-guest-house-PA2239', '218 565 324', 'info@bhorizon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Mountain Guest House', 2, -33.80932, 18.47488, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/blue-mountain-guest-house-PA44262', '+27 21 554 1657 ', 'bluemtn@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Rain Guest House', 2, -28.45746, 21.24265, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/blue-rain-guest-house-PA44902', NULL, 'cjbts123@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blue Waters Hotel', 3, -29.84012, 31.03482, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/blue-waters-hotel-PA8394', '+27 31 327 7000', 'reservations@bluewatershotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bluebells', 2, -34.05487, 19.6047, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/greyton/bluebells-PA45230', '+27 84 941 2678', 'marikevdw@ovi.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bluegum Country Lodge', 2, -26.44712, 29.45964, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/bethal/bluegum-country-lodge-PA43156', '+27 17 647 5970', 'book@bluegumcountrylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blyde Canyon a Forever Resort', 2, -24.58048, 30.77255, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/blyde-canyon-a-forever-resort-PA456', '+27 86 122 6966 / 0861 CANYO', 'blydebanq@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Blyde Lodge', 1, -24.93091, 30.84252, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/blyde-lodge-PA658', '+27 13 767 1535', 'pierre@blydelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bo La Motte Farm Cottages', 2, -33.91686, 19.13329, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/bo-la-motte-farm-cottages-PA3041', '+27 21 876 3067', 'reservations@bolamotte.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Boeretroos Gastehuis', 2, -28.51297, 28.42156, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/boeretroos-gastehuis-PA43168', '+27 58 256 1190', 'janroos12@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bonamanzi Game Reserve', 2, -28.062, 32.30225, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/bonamanzi-game-reserve-PA5688', '+27 35 562 0181', 'info@bonamanzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bonne Esperance Guest Lodge', 2, -33.9367, 18.86832, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/bonne-esperance-guest-lodge-PA2108', '+27 21 887 0225', 'stay@bonneesperance.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bonza Bay Lodge', 2, -32.97408, 27.95837, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/bonza-bay-lodge-PA43169', '+27 43 748 1610', 'edgelodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bornfree Lodge 42', 3, -28.50871, 28.42945, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/bornfree-lodge-42-PA44882', NULL, 'francois@maxigroupschemes.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Botha House', 3, -30.394, 30.6904, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/botha-house-PA43171', '+27 39 975 1227', 'enquiries@bothahouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Boulders Lodge & Spa', 3, -33.5698, 22.21023, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/boulders-lodge-&-spa-PA7866', '+27 44 272 5559 ', 'info@boulderslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Boulevard 44 Boutique Hotel', 3, -29.50781, 31.2005, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlali/boulevard-44-boutique-hotel-PA44784', '+27 32 947 1660', 'confer@boulevard44.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Boutique at 10', 3, -33.95244, 18.38614, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/camps-bay/boutique-at-10-PA43172', '+27 21 438 1234', 'stay@boutique10.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Braemar Guest House', 2, -29.78871, 31.03917, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/braemar-guest-house-PA1158', '+27 31 564 0010', 'braemargh@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Braeside Guest House', 3, -34.01464, 20.44938, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/braeside-guest-house-PA7867', '+27 28 514 3325', 'braeside@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Breakerview Self Catering', 2, -30.80672, 30.41022, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/breakerview-self-catering-PA5468', '+27 39 315 7160', 'info@breakerview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Brenton View', 3, -34.06755, 23.02069, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/brenton-view-PA1177', '+27 83 300 8110', 'info@brentonview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Brookes Hill Suites', 2, -33.97942, 25.64957, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/brookes-hill-suites-PA43189', '+27 41 584 0444', 'brookeshill@legacyhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Brookside Lodge', 2, -26.51766, 31.23756, 'http://www.aaholidays.co.za/accommodation/swaziland/malkerns/brookside-lodge-PA45144', NULL, 'info@brookside-lodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Browns Manor', 3, -28.43375, 21.30646, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/browns-manor-PA2317', '543 380 384', 'heidi@brownsmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buckleigh Guest House', 2, -29.80315, 31.01688, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/buckleigh-guest-house-PA42282', '+27 31 563 6496', 'info@buckleighguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buffalo Hotel', 9, -25.43643, 31.67955, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hectorspruit/buffalo-hotel-PA45800', '137 924 227', 'lizzie@buffalohotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buffalo Thorn Lodge', 3, -25.24353, 27.08705, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/buffalo-thorn-lodge-PA43191', '+27 82 229 1158', 'info@buffalothornlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buffelsdrift Game Lodge', 2, -33.52571, 22.24607, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/buffelsdrift-game-lodge-PA7873', '+27 44 272 0106/0000', 'info@buffelsdrift.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buffelsfontein Game Lodge', 1, -33.27773, 18.22992, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/darling/buffelsfontein-game-lodge-PA3109', '+27 22 451 2824', 'buffontein@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buffelskloof Guest Farm', 1, -33.50576, 21.87507, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/buffelskloof-guest-farm-PA3110', '+27 44 213 3786', 'buffelskloofguestfarm@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bullers Rest Guest Lodge', 2, -28.54953, 29.76594, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/bullers-rest-guest-lodge-PA5713', '+27 36 637 6154', 'info@bullersrestlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Burnham House', 2, -29.74093, 31.07753, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/burnham-house-PA5718', '+27 31 572 3062', 'wotz@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Burrough Place', 2, -33.95203, 22.43862, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/burrough-place-PA3115', '+27 44 874 2026 ', 'burroughplace@telkomsa.ne')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bush Willow Tented Camp', 1, -25.9772, 27.8411, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/muldersdrift/bush-willow-tented-camp-PA43210', '+27 11 668 1600', 'reservations2@glenburn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('BushGlam Luxury Holiday Home', 3, -24.35, 30.96667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/bushglam-luxury-holiday-home-PA44953', '+27 21 790 1699', 'info@lobecotours.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bushmans Nek- First Resort', 2, -29.7923, 29.4938, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/underberg/bushmans-nek-first-resort-PA44858', '334 011 461', 'Bradleyw@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bushmen Inn Guest House', 2, -22.35248, 30.0415, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/musina-(messina)/bushmen-inn-guest-house-PA42207', '+27 15 534 0243', 'gerhardj@limpopo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Buya Futhi B&B', 2, -28.37663, 32.41906, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/buya-futhi-b&b-PA9243', '355 901 138', 'info@buyafuthi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Bydand B & B', 2, -33.54029, 25.68488, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/bydand-b-&-b-PA43212', '+27 42 233 0455', 'info@bydandbnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Caesars Guest House & Conference Centre', 3, -26.78965, 27.81977, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/sasolburg/caesars-guest-house-&-conference-centre-PA45423', '+27 16 976 6333 / +27 16 976 3831', 'caesars@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Calderwood Hall Guest House', 2, -29.66667, 30.06667, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/boston/calderwood-hall-guest-house-PA1708', '+27 33 997 1926', 'info@calderwood.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Calimber Guest House', 1, -31.90764, 26.889, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/calimber-guest-house-PA45757', NULL, 'masoka.funerals@yahoo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Camelia Guest House', 2, -29.09748, 26.16748, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/camelia-guest-house-PA45717', '514 462 181', 'info@camelia.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cape Paradise Lodge', 2, -33.9398, 18.40272, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/higvale/cape-paradise-lodge-PA43232', '+27 21 424 6571', 'info@capeparadise.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cape Vue Guest House', 2, -33.91694, 19.12299, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/cape-vue-guest-house-PA495', '+27 21 876 2312', 'cvguesthouse@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carochalet', 1, -31.4931, 24.99974, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/middelburg/carochalet-PA43267', '+27 49 842 2910', 'marilynn.cavendish-d@aasa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carousel Holiday Resort', 1, -30.58873, 30.56804, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hibberdene/carousel-holiday-resort-PA5743', '+27 39 699 2406', 'carousel@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carrington Guest House', 2, -29.8814, 30.96908, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/carrington-guest-house-PA45261', '+2731 261 4577', 'carrington@polka.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carrington Lodge', 2, -28.75747, 24.76833, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/carrington-lodge-PA1218', '+27 53 831 6448', 'admin@carringtonlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carters Rest Guest House', 3, -28.74867, 24.7399, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/carters-rest-guest-house-PA44873', '+2771 174 9001', 'bookings@cartersrest.co.za  ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Carthews Corner', 3, -31.89727, 26.89475, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/carthews-corner-PA45338', '+27 45 838-1885', 'info@carthewscorner.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Casa Mia Health Spa & Guest House', 2, -33.5417, 25.66497, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/casa-mia-health-spa-&-guest-house-PA7889', '+27 42 233 0075', 'casamiaspa@alanet.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Casart Game Lodge', 2, -24.10931, 31.01504, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/casart-game-lodge-PA36050', '+27 71 636 4323', 'info@casartgamelodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Casta Diva Guest House', 3, -25.68619, 28.14612, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/casta-diva-guest-house-PA1895', '+2712 542 4449 ', 'info@castadiva.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Castelo do Mar', 1, -23.86206, 35.37838, 'http://www.aaholidays.co.za/accommodation/mozambique/inhambane/castelo-do-mar-PA45552', NULL, 'info@castelodomar.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Castleto', 3, -34.06204, 23.36863, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/castleton-PA3201', '+27 44 501-2000', 'reservations@castleton.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cathedral Peak Hotel', 3, -28.94785, 29.20678, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/cathedral-peak-hotel-PA1112', '+27 36 488 1888', 'info@cathedralpeak.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cathkin Cottage B&B', 2, -28.38182, 30.16908, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/champagne-valley/cathkin-cottage-b&b-PA45168', '364 681 513', 'cathkin@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cathys Place Bed and Breakfast', 2, -29.72809, 31.08206, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/cathys-place-bed-and-breakfast-PA5759', '+27 31 561 3286', 'cathysbb@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cecil John Rhodes Guest House', 2, -28.74437, 24.77082, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/cecil-john-rhodes-guest-house-PA43274', '+27 53 830 2500', 'ceciljohnrhodesgh@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cedarberg Guest Farm', 1, -30.548, 29.40834, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cedarville/cedarberg-guest-farm-PA5764', '+27 39 757 5535', 'cedarberg@bergnet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Celtis Country Lodge', 2, -25.7627, 29.45918, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/middelburg/celtis-country-lodge-PA45829', '498 421 051', 'res@celtiscountrylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Centre Court B&B', 3, -29.80135, 31.03153, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/centre-court-b&b-PA1748', '+27 31 573 2484', 'stay@durbanguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chakas Rock Chalets- First Resorts', 1, -29.51649, 31.22839, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/chakas-rock/chakas-rock-chalets-first-resorts-PA5771', '+27 32 525-5008', 'funhols@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chamo Guest House', 9, -33.03859, 27.85312, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/chamo-guest-house-PA45840', '(+27) 043 736 4066', 'info@chamobnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Champagne Castle Hotel', 3, -28.81396, 29.53615, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/champagne-castle-hotel-PA1100', '+27(36) 468 1063', 'info@champagnecastlehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Champagne Sports Resort', 2, -28.91292, 29.53305, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/champagne-sports-resort-PA5778', '+27 36 468 8000', 'reservations@champagnesportsresort.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chantilly Guest House', 2, -33.36724, 19.3003, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ceres/chantilly-guest-house-PA3218', '+2783 441 9532', 'info@chantillyguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chartwell Castle and Guest House', 3, -25.9912, 27.95471, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/chartwell/chartwell-castle-and-guest-house-PA7907', '+27 10 227 0002', 'info@chartwellcastle.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chase Guest House', 2, -28.89045, 31.4712, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/eshowe/chase-guest-house-PA7181', ' (035) 474 5491', 'thechase@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chateau de Carolle', 3, -26.15813, 28.01631, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/greenside/chateau-de-carolle-PA43280', '+27 82 411 2222', 'info@chateaudecarolle.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Check Inn Hotel', 2, -33.90764, 18.40632, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/green-point/check-inn-hotel-PA43282', '+27 21 439 4444', 'checkinn@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cheerio Trout Fishing and Holiday Resort', 1, -23.8963, 29.9527, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/maebaskloof/cheerio-trout-fishing-and-holiday-resort-PA431', '+27 83 272 0353', 'cheerio@cheerio.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chelsea Villa Guest House', 2, -29.8614, 30.9984, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/glenwood/chelsea-villa-guest-house-PA5784', '+27 31 202 3655', 'cvilla@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chez Nous Bed and Breakfast', 2, -28.16988, 30.22964, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/chez-nous-bed-and-breakfast-PA3228', '+27 34 212 1014', 'info@cheznousbb.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chicane B&B', 2, -33.5087, 25.60458, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/chicane-b&b-PA43293', '+27 42 234 0385', 'manager@chicane-addo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chillifields B&B', 2, -29.78447, 30.74774, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/assagay/chillifields-b&b-PA43295', '+27 83 632 7800', 'info@chillifields.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Chislehurst Guest House', 3, -26.04076, 28.05515, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/rivonia/chislehurst-guest-house-PA7912', '+27 11 803 1351', 'jenny@chislehurst.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Claus In', 2, -26.26755, 28.10828, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/alberton/claus-inn-PA43317', '+27 11 907 4290', 'info@clausinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cleopatra Mountain Farmhouse', 3, -29.32444, 29.67139, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kamberg/cleopatra-mountain-farmhouse-PA2019', '+27 33 267 7243', 'cleopatramountain@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cliffhanger Cottages', 2, -33.94906, 22.93418, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/cliffhanger-cottages-PA3247', ' +27 44 388 4696', 'brrt@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Clouds Guest House', 2, -33.85636, 18.65236, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/durbanville/clouds-guest-house-PA1436', '+27 21 975 1250', 'info@clouds.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Club Hacienda- First Resorts', 2, -30.78735, 30.42124, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/club-hacienda-first-resorts-PA5802', '+27 39 315-0251', 'clubhacienda@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Club Mykonos', 2, -33.0911, 18.03331, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/langebaan/club-mykonos-PA3253', '+27 22 707 7000', 'info@clubmykonos.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Club Wild Coast', 2, -32.76476, 28.2431, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/haga-haga/club-wild-coast-PA8030', '043-841 1781', 'info@hagahaga.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Clubview Guest House', 2, -25.83738, 28.17652, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/clubview-guest-house-PA43334', '+27 12 654 6812', 'admin@clubview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coach House Hotel & Spa - Orion Group', 3, -23.82541, 30.1613, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tzaneen/coach-house-hotel-&-spa--orion-group-PA1107', '+27 15 306 8000/27', 'info@coachhouse.co.za/ gmcoach@orion-hotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coco Cabana Guest House', 2, -27.37565, 31.6197, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ponla/coco-cabana-guest-house-PA45301', NULL, 'cococabana@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coco De Mer Boutique Hotel', 3, -29.53896, 31.21841, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/coco-de-mer-boutique-hotel-PA36034', '+27 32 946 1034', 'info@coco-de-mer.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cods View', 3, -30.36773, 30.70619, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/cods-view-PA45799', '+27 84 525 0111', 'bevc12345@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Colesview Guest House', 2, -30.72563, 25.09184, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/colesview-guest-house-PA45262', '+2751 753 0025', 'colesview@megadial.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Collisheen Estate', 2, -29.50121, 31.19188, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/collisheen-estate-PA43338', '+27 32 815 1107', 'admin@collisheen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Colonel Graham Guest House', 2, -33.30489, 26.52804, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/colonel-graham-guest-house-PA792', '+27 42 622 2274', 'info@colonelgrahamguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coniston Guest House', 2, -30.72749, 25.09567, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/coniston-guest-house-PA1782', '517 530 242', 'info@conistonguesthouse.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Constantia Cottages', 2, -34.02755, 18.45394, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/constantia-cottages-PA3261', '+27 21 794 5156', 'property@creacon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coral 107 at Century City', 2, -33.88321, 18.5157, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/coral-107-at-century-city-PA43368', '+27 83 573 8364', 'coral107@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coral Beach Bed & Breakfast', 2, -33.0949, 27.7906, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/coral-beach-bed-&-breakfast-PA43370', '+27 43 736-9526', 'tsishuba@imperialproperties.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cosimi Guest House', 2, -33.8177, 18.65101, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/durbanville/cosimi-guest-house-PA45129', '021 975 50 68', 'info@cosimiguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Costa Smeralda- First Resorts', 2, -30.86303, 30.36967, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/costa-smeralda-first-resorts-PA43377', '+27 39 317-3394', 'costasmeralda@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cosy Posy Guest House', 2, -31.36636, 29.57348, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/lusikisiki/cosy-posy-guest-house-PA43378', '+27 39 253 1208', 'info@cosyposy.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Country Crescent Hotel', 3, -34.06204, 23.36863, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/country-crescent-hotel-PA42289', '+27 44 533-3033', 'crescent.hotels@pixie.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Country Park', 2, -26.03577, 27.84844, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/muldersdrift/country-park-PA44933', NULL, 'countrypark@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Country Village Accommodatio', 1, -32.25172, 24.52947, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/country-village-accommodation-PA43388', '+27 49 891 0820', 'countryvillage@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Court Classique Suite Hotel', 3, -25.74737, 28.21757, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/court-classique-suite-hotel-PA1114', '+27 12 344 4420', 'reservations@courtclassique.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coverside Guest Farm', 2, -32.2946, 27.14412, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cathcart/coverside-guest-farm-PA45092', '+27 45 843-2469', 'coversidefarm@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Coweys Corner', 2, -29.84214, 31.00865, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/coweys-corner-PA40934', '+27 82 568-1635', 'info@coweyscorner.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cozi Corner Self Catering Accommodatio', 2, -31.89832, 26.88461, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/cozi-corner-self-catering-accommodation-PA45039', NULL, 'rasmussen@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crab Apple Cottages', 2, -29.6179, 30.38249, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dargle/crab-apple-cottages-PA45147', NULL, 'info@crabapple.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crane Cottage', 1, -30.72258, 25.09546, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/crane-cottage-PA43402', '+27 72 741 8296', 'cranecottage@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crawfords Beach Lodge and Cabins', 2, -32.827, 28.1189, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cintsa/crawfords-beach-lodge-and-cabins-PA43403', '+27 43 738 5000', 'chintsa@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cremorne Holiday Resort', 2, -31.59897, 29.53254, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-st-johns/cremorne-holiday-resort-PA7462', '+27 47 564 1110', 'info@cremorne.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crimson Views', 2, -34.40868, 19.26294, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/crimson-views-PA42251', NULL, 'reservations@crimsonviews.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crocodile Kruger Safari Lodge', 2, -25.37852, 31.75864, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/crocodile-kruger-safari-lodge-PA1863', ': 082 570 8172', 'stay@crocodilekruger.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Croeso Guest House', 2, -29.78885, 30.83205, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kloof/croeso-guest-house-PA45833', '(+27) (031) 764 6894', 'croesokloof@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crowned Crane', 2, -32.94502, 28.02445, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nubie/crowned-crane-PA42939', '+2743 740 3503', 'clive@crownedcrane.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Crystal Springs Mountain Lodge', 3, -24.8609, 30.7164, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/pilgrims-rest/crystal-springs-mountain-lodge-PA43407', '+27 13 768 5000', 'info@crystalsprings.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Cycad Guest House', 3, -23.91962, 29.45616, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/cycad-guest-house-PA43422', '+27 15 291 2123', 'mariadp@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dan Pienaar Guest House', 2, -29.0899, 26.20915, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/dan-pienaar-guest-house-PA42277', '+27 51 436 2854', 'danpienaar@internext.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dans Country Lodge and Events Centre', 2, -31.42994, 28.86095, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/dans-country-lodge-and-events-centre-PA43427', '+27 47 532 7920', 'reception@danscountryestate.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Days at Sea Beach Lodge', 3, -30.9607, 30.29576, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/trafalgar/days-at-sea-beach-lodge-PA43436', '+27 39 313 0013', 'daysatsea.hotel@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Days End Guesthouse', 3, -32.97136, 27.91414, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/days-end-guesthouse-PA43452', '+27 43 726 2694', 'contact@daysend.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Bakke Terrace- First Resort', 2, -34.17764, 22.13513, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/de-bakke-terrace-first-resort-PA44907', NULL, 'annesta@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Hoek Guest House', 1, -30.96878, 27.59699, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/barkly-east/de-hoek-guest-house-PA45819', NULL, 'japie.greyling7@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Hoek Manor', 3, -33.93797, 18.86356, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/de-hoek-manor-PA41001', '+27 21 886 9988', 'info@dehoekmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Merindol Luxury Apartments And Conference Venue', 3, -34.12063, 18.83092, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/strand/de-merindol-luxury-apartments-and-conference-venue-PA2308', '826 756 266', 'info@demerindolcape.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Molen Guest House', 2, -34.055, 18.84985, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/somerset-west/de-molen-guest-house-PA1855', '+27 21 851 0525', 'info@demolenguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Oude Schole', 1, -31.40474, 23.11354, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/victoria-west/de-oude-scholen-PA44929', '+27 53 621 1043', 'deoudescholen@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Oude Stoor Gastehuis', 2, -28.65144, 20.35909, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/augrabies-falls/de-oude-stoor-gastehuis-PA43467', '+27 54 451 7272/7240', 'acdagab@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Pinna''s Executive Guest House', 3, -26.13243, 28.06211, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/de-pinnas-executive-guest-house-PA43469', '+27 11 447 3081/0586', 'guesthouse@depinnas.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Stallen Guest House', 3, -29.14277, 26.13914, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/de-stallen-guest-house-PA43475', '+27 82 991 0488', 'info@destallen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Voetpadkloof Resort', 2, -25.83859, 29.53712, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/de-voetpadkloof-resort-PA45770', '+27 13 245-8500', 'besprekings@devoetpadkloof.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('De Waterkant Cottages', 2, -33.91553, 18.41656, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/de-waterkant-cottages-PA1545', '+27 21 421 2300', 'book@dewaterkantcottages.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dias Guest House', 2, -29.08341, 26.21236, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/dias-guest-house-PA43492', '+27 51 436 6225', 'diasgh@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dibiki Resort', 2, -34.11529, 22.11629, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hartenbos/dibiki-resort-PA3367', '+27 44 695 1532', 'info@dibiki.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Blou Nartjie', 2, -31.46933, 19.77114, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/calvinia/die-blou-nartjie-PA43499', '+27 27 341 1263', 'herman@nartjie.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Dorps-Akker Gastehuis', 2, -26.50109, 28.35109, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/heidelberg/die-dorpsakker-gastehuis-PA44264', NULL, 'dorpsakker@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Eike Farm Accommodatio', 2, -33.87904, 19.06128, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/die-eike-farm-accommodation-PA3374', NULL, 'info@eikebb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Eike Guest Cottage', 2, -33.92123, 19.13794, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/die-eike-guest-cottage-PA44949', NULL, 'malherbe.corne@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Groen Koei Guest House', 1, -26.46154, 29.47001, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/bethal/die-groen-koei-guest-house-PA43502', '+27 17 647 5970', 'info@diegroenkoei.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Kleipot Guest House', 1, -30.71837, 25.0973, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/die-kleipot-guest-house-PA1130', '829 690 674', 'info@diekleipot.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Kliphuis', 2, -26.94959, 29.2465, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/standerton/die-kliphuis-PA43504', '+27 17 712 7353', 'diekliphuis@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Kraaltjie Guest House and Caravan Park', 1, -33.8246, 23.8428, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/joubertina/die-kraaltjie-guest-house-and-caravan-park-PA43505', '+27 42 273 1516', 'vgreunen@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Olyfhuis', 3, -28.5046, 24.5462, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/barkly-west/die-olyfhuis-PA45719', NULL, 'joy@kelrn.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Ou Pastorie Guest House and Restaurant', 2, -26.39049, 27.61718, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/skeerpoort/die-ou-pastorie-guest-house-and-restaurant-PA45052', '122 071 027', 'susan@dieoupastorie.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Voordeur Guest House and Restaurant', 2, -27.91546, 24.84835, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/jan-kempdorp/die-voordeur-guest-house-and-restaurant-PA44869', '+27 53 456-0220', 'tienusc@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Die Waenhuis', 2, -33.95347, 22.4599, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/die-waenhuis-PA2120', '+27 44 874 0034', 'diewaenhuis@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dieu-Donneè River Lodge', 2, -30.6852, 30.4948, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/southport/dieudonneè-river-lodge-PA5856', '+27 39 681 2733', 'ddrlodge@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ditholo Game Lodge', 2, -24.88333, 28.28333, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/ditholo-game-lodge-PA1859', '+27 14 735 0149', 'crsdit@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dolphin Dance Lodge', 3, -33.84626, 25.64106, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/dolphin-dance-lodge-PA9285', '414 671 469', 'info@dolphindance.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dolphin View Guest House', 2, -34.03384, 24.91809, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/dolphin-view-guest-house-PA7957', '+27 42 296 0594', 'mail@dolphin-view.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dolphin View Guest House (Bluelillies Bush)', 2, -34.02209, 23.94897, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/storms-river/dolphin-view-guest-house-bluelillies-bush-PA43599', '+27 42 280 3818', 'info@dolphinview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dolphi''s Rest Guest House', 2, -29.95316, 30.99024, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/dolphins-rest-guest-house-PA7221', '+27 31 468 8667', 'siva@dolphinrest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dome Inn Parys', 1, -26.90596, 27.42682, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/parys/dome-inn-parys-PA43600', '+27 56 818 1577', 'lodge@domeinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dormio Manor Guest Lodge', 2, -26.51281, 29.20222, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/secunda/dormio-manor-guest-lodge-PA44763', NULL, 'dormio@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dorsland Guest House', 1, -27.96016, 22.70329, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/olifantshoek/dorsland-guest-house-PA45322', NULL, 'marlene1@ggaconnect.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dove Cottages', 2, -26.09533, 27.98804, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/dove-cottages-PA43610', '+27 83 675 4265', 'info@dovecottages.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dran Peaks Mountain Resort', 1, -29.0173, 29.4381, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/dran-peaks-mountain-resort-PA267', '+27 36 468 1031', 'dpp@dranpeaks.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Drakensberg Mountain Retreat', 2, -28.73048, 29.35117, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/drakensberg-mountain-retreat-PA45263', NULL, 'info@drakensbergretreat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dreamers Guest House', 3, -32.88193, 27.39725, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/king-williams-town/dreamers-guest-house-PA43611', '+27 43 624 3012', 'info@dreamersguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Duikerfontein Bed and Breakfast', 2, -29.77195, 31.03718, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/duikerfontein-bed-and-breakfast-PA5882', '+27 82 821 4201', 'duikerfontein@absamail.co')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Duinepos Chalets', 2, -33.09167, 18.03333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/langebaan/duinepos-chalets-PA44923', '+27 22 707 9900', 'info@duinepos.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dundi Lodge', 3, -28.6306, 20.3227, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/augrabies-falls/dundi-lodge-PA43615', '+27 54 451 9200/1', 'info@dundilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dunkeld Place Botique Hotel', 3, -26.13647, 28.03929, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/dunkeld-west/dunkeld-place-botique-hotel-PA43616', '+27 11 442-0439', 'info@dunkeldplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dunwerki', 2, -33.68395, 26.67543, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/kenton-on-sea/dunwerkin-PA43618', '+27 46 648 1173', 'dunwerkin@imaginet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Durban Manor Hotel and Conference Centre', 1, -29.8615, 31.02394, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/durban-manor-hotel-and-conference-centre-PA5887', '+27 31 366 0700', 'reservation@durbanmanorhotel.co.za  ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Durban Sands- First Resorts', 1, -29.85972, 31.03979, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/durban-sands-first-resorts-PA9742', '+2731 464 5885', 'warrin@vanware.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Durban Spa Holiday Resort', 2, -29.85735, 31.03937, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/durban-spa-holiday-resort-PA5889', '+27 31 332-9366', 'info@dbnspa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Durnfords Lodge', 2, -28.55425, 29.77391, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/durnfords-lodge-PA5890', '+27 36 637-2828', 'info@durnfordslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dusk to Daw', 3, -27.19563, 31.0011, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/piet-retief/dusk-to-dawn-PA741', '+27 17 821 0601', 'dtd@ptr.dorea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dutch Manor Antique Hotel', 3, -33.92153, 18.41499, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/dutch-manor-antique-hotel-PA42273', '+27 21 422 4767', 'nobu@dutchmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Dwesa River Mouth Lodge', 1, -32.33414, 28.78143, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/willowvale/dwesa-river-mouth-lodge-PA43620', '+27 11 420 1845/ 2892', 'partum@tekomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eagle''s View B&B', 3, -29.77466, 30.83377, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kloof/eagles-view-b&b-PA5895', '+27 31 764 4192', 'laureengaillard@hotmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Easy Five', 3, -34.07314, 18.85571, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/somerset-west/easy-five-PA3450', '+27 21 852 2413', 'info@easyfive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ebubeleni Guest House', 3, -33.94803, 25.39883, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/ebubeleni-guest-house-PA43640', '+27 41 372 1963', 'info@ebubeleni.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Echo Terrace', 3, -34.1457, 18.43707, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/fish-hoek/echo-terrace-PA43644', '+27 21 782 3313', 'bookings@echoterrace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edelweiss Corporate Guest House', 2, -25.6901, 28.22594, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/edelweiss-corporate-guest-house-PA43645', '+27 12 567 4709', 'info@edelweisscgh.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eden Dunes 61', 2, -30.80671, 30.4102, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/eden-dunes-61-PA43647', '+27 82 374 3702', 'edendunes@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edendale Guest Farm', 1, -30.36991, 28.91876, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/matatiele/edendale-guest-farm-PA5901', '+27 87 151 1812', 'edendaleguest@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edge Lodge One', 2, -32.96778, 27.93986, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/edge-lodge-one-PA45264', NULL, 'edgelodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edgerton Guest House', 2, -28.7487, 24.77892, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/edgerton-guest-house-PA1201', NULL, 'edgerton@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edward Charles Manor', 2, -34.18204, 22.13835, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/edward-charles-manor-PA1120', '+27 44 691 2152', 'enquiries@edwardcharles.co.za/edwardcharles@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edward House', 2, -25.78113, 28.2493, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/edward-house-PA7973', '+27 12 346 0212', 'Jenny@edwardhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Edward the Guest House', 2, -26.16068, 28.15507, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/bedfordview/edward-the-guest-house-PA43654', '+27 11 453 5826', 'enquiries@edwardtheguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eendracht Hotel and Self-Catering', 3, -33.93853, 18.86291, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/eendracht-hotel-and-selfcatering-PA7976', '+2721 883 8843', 'info@eendracht-hotel.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eli Lodge cc', 2, -26.15008, 28.13862, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/eli-lodge-cc-PA43655', '+27 11 453 7722', 'reservations@elilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eikendal Lodge', 3, -34.01433, 18.82835, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/eikendal-lodge-PA3464', '2721 855-3617', 'info@eikendallodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('El Palma Guesthouse', 3, -30.06457, 30.87836, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/el-palma-guesthouse-PA5905', ' (031) 9034727', 'elpalma@cybertrade.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('El-Khaya Guest House', 2, -28.74844, 24.7419, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/elkhaya-guest-house-PA45293', NULL, 'el-khaya@kimberley.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elands Bay Hotel', 1, -32.3135, 18.35046, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/elands-bay/elands-bay-hotel-PA43120', '27 22 972-1640', 'info@elandsbayhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elandsberg Eco Tourism', 1, -32.17861, 18.89111, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/clanwilliam/elandsberg-eco-tourism-PA43122', '+27 27 482-2022', 'eland.eco@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elandsrivier Guest House', 2, -33.98509, 24.03993, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/tsitsikamma/elandsrivier-guest-house-PA43797', '+27 42 280 3505', 'bookings@elandsrivier.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elangeni Lodge', 1, -25.47542, 31.56714, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/malelane/elangeni-lodge-PA44914', '+27 13 780 0117', 'elangenilodge@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eldrew B&B', 2, -34.17284, 22.12456, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/eldrew-b&b-PA3474', ' +27 44 6908299', 'info@eldrew.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elements Private lf Reserve', 3, -24.88246, 28.29463, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/elements-private-lf-reserve-PA43125', '27 11 208 8300', 'dbowes@magicb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephant In', 1, -22.91998, 30.2094, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/musina-(messina)/elephant-inn-PA44895', NULL, 'elephantinn@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephant Lake Hotel', 2, -28.3726, 32.41416, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/elephant-lake-hotel-PA43132', '2735 5901001 ; 2735 5901003 ', 'hotel@elephantlake.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephant Lake In', 2, -28.37772, 32.41059, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/elephant-lake-inn-PA43134', '355 901 001', 'info@elephantlake.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephant Rock In', 1, -27.96016, 22.70329, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/olifantshoek/elephant-rock-inn-PA44960', '533 310 724', 'elephantrockinn@axxess.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephant Rock Private Safari Lodge', 3, -28.57861, 29.7475, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/elephant-rock-private-safari-lodge-PA36272', '+27(0)36 6379604', 'reseervations@elephantrocklodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elephants Eye Lodge', 2, -34.06328, 18.43784, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/elephants-eye-lodge-PA43798', '+27 21 715 2432', 'info@elephantseyelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elgin House', 3, -26.06626, 27.99322, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/bryanston/elgin-house-PA43140', '27 11 462 6862', 'elginhouse@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elizabeth''s Manor', 2, -26.71024, 27.09206, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/elizabeths-manor-PA45213', '182 975 561', 'lizette@elizabethsmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elkoweru Guest House', 1, -29.66081, 17.88562, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/elkoweru-guest-house-PA44877', NULL, 'info@elkoweru.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Elvesida Farm', 2, -29.64727, 30.00685, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/boston/elvesida-farm-PA5916', '+27 33 997 1808', 'bookings@elvesida.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emdoneni Lodge', 2, -28.11696, 32.29188, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/emdoneni-lodge-PA5918', '+2735 562-7000', 'info@emdonenilodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emerald Cove Beachfront Holiday Chalets', 2, -30.81768, 30.40477, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/emerald-cove-beachfront-holiday-chalets-PA5919', '+27 39 315 5284', 'emerald@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emerald Resort and Casino', 2, -26.69306, 27.83524, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vanderbijlpark/emerald-resort-and-casino-PA43152', '+2716 982 8000', 'info@emeraldcasino.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emoya Estate Basotho Village Hotel and Spa', 3, -29.06436, 26.16794, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/emoya-estate-basotho-village-hotel-and-spa-PA43154', '+27 51 436 0065/+27 51 436 8471', 'info@emoya.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emoya Estate Shanty Town Accommodatio', 1, -29.06436, 26.16794, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/emoya-estate-shanty-town-accommodation-PA43155', '+27 51 436 0065/ +27 51 436 8471', 'info@emoya.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Emoyeni Lodge', 2, -25.5043, 31.00016, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/emoyeni-lodge-PA43159', '27 13 744-9551', 'reservations@emoyenilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Endalweni Private Game Reserve', 3, -32.67878, 28.36665, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/kei-mouth/endalweni-private-game-reserve-PA43160', '27 43 841 1526', 'info@endalweni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Endulini Guest House', 2, -30.89183, 28.98197, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mount-frere/endulini-guest-house-PA44934', '392 551 972', 'reservations@enduliniguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Entabeni Safari Conservancy', 2, -24.17432, 28.62144, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/naboomspruit/entabeni-safari-conservancy-PA7980', '+27 11 729 6700', 'reservations@legendlodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Erica Bed & Breakfast', 1, -33.91072, 19.12705, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/erica-bed-&-breakfast-PA1466', '+27 21 876 2825', 'info@ericaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eshowe Hills', 2, -28.89045, 31.4712, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/eshowe/eshowe-hills-PA45303', '+27 35 473-5000 ', 'info@eshowehills.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Esikhotheni Private Game Reserve', 3, -27.34341, 31.88464, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/jozini/esikhotheni-private-game-reserve-PA45265', NULL, 'elin@esikhotheni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Esiweni Lodge', 3, -28.42417, 29.98203, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/nambiti-private-game-reserve/esiweni-lodge-PA7230', ' (036) 636 9002/3', 'reservations@esiweni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Eskulaap Hotel', 2, -23.89937, 29.46575, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/eskulaap-hotel-PA43166', '27 15 297 3288', 'admin@eskulaap.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Evelyn Game Ranch', 2, -22.3704, 29.99954, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/musina-(messina)/evelyn-game-ranch-PA45043', NULL, 'loanda@evelyngameranch.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ex Deo Self Catering Cottage', 2, -25.34505, 31.79741, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/ex-deo-self-catering-cottage-PA43186', '+27 72 556 4508', 'info@exdeo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Excellent Guest House', 2, -33.8944, 18.64233, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bellville/excellent-guest-house-PA3505', '2784 474 4444', 'info@excellentguesthouse.')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Executive Self Catering Unit', 2, -28.74485, 24.77533, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/executive-self-catering-unit-PA45028', NULL, 'dmnel@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Executive Suites @ 555', 3, -29.8337, 31.00428, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/executive-suites--555-PA45236', '(031)208 8527', 'anju1@vnac.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Executive Twelve Apartments', 2, -25.87395, 28.18067, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/executive-twelve-apartments-PA43803', '+27 72 606 2053', 'reservation@executivetwelve.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ezingweni Safari Lodge and Day Bush Spa', 2, -24.7, 28.40611, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/modimolle/ezingweni-safari-lodge-and-day-bush-spa-PA45171', NULL, 'cas@ezingweni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fairview Hotel - Conference Centre and lf Estate', 2, -23.82241, 30.16086, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tzaneen/fairview-hotel--conference-centre-and-lf-estate-PA36040', '+27 15 307 2679', 'reservations@fairviewtzaneen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fairy Knowe Hotel', 1, -33.99562, 22.61705, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/fairy-knowe-hotel-PA3512', '(044) 877-1100', 'reservations@fairyknowe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Falaza Game Park & Spa', 2, -27.99689, 32.34944, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/falaza-game-park-&-spa-PA5940', '+27 35 562 2319', 'reservations@falaza.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Farr Out Guest House', 2, -32.81895, 17.89643, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paternoster/farr-out-guest-house-PA3518', '+27 22 752 2222', 'marion@farrout.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fat Fish B&B', 2, -33.68725, 26.65866, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/bushmans-river-mouth/fat-fish-b&b-PA43190', '27 46 648-1590', 'fatfish@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Felsensicht Holiday Home', 3, -34.20745, 18.45805, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/simons-town/felsensicht-holiday-home-PA3521', '+27 11 786 7271', 'hochreiter@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fernwood Manor Boutique Guest House', 3, -33.97919, 18.4466, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/newlands/fernwood-manor-boutique-guest-house-PA43193', '27 21 674-4406', 'info@fernwoodmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fiddlewood Guest Farm', 3, -29.82556, 31.02228, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/howick/fiddlewood-guest-farm-PA5956', NULL, 'enquiries@fiddlewoodfarm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Finchley Farm Cottage', 2, -33.29994, 23.48138, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/willowmore/finchley-farm-cottage-PA43164', '+27 44 923-1801', 'finchleyfarm@baviaans.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('First Guest House', 1, -25.76518, 28.26424, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/lynnwood/first-guest-house-PA45027', '+27 12 348 8566 / 8071', 'info@firstguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fish Eagle Manor', 3, -32.96076, 27.91267, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/fish-eagle-manor-PA823', '043-726-3748', 'info@fisheaglemanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fish Eagles Self Catering', 1, -28.95571, 31.75489, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mtunzini/fish-eagles-self-catering-PA5963', '+27 31 262-1388', 'fisheagles@tiscali.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Five Acres Guest House', 2, -28.7312, 24.75741, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/five-acres-guest-house-PA45266', '+27 53 8611179', 'info@fiveacres.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Five Assegais Country Estate', 2, -25.81496, 30.37085, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/machadodorp/five-assegais-country-estate-PA305', '+27 13 256 9263', 'info@fiveassegais.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Five Burnham Guest House', 3, -29.74434, 31.07445, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/five-burnham-guest-house-PA5964', ' (031) 572 3019', 'mail@fiveburnham.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fleetwood on Sea', 3, -29.71989, 31.09034, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/fleetwood-on-sea-PA5970', ' (031) 5759850', 'info@fleetwoodonsea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Flintstones Guest House Durba', 2, -29.80493, 31.03067, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/flintstones-guest-house-durban-PA42243', '+27 31 467 1846', 'guesthouse@flintstones.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Florida Park Hotel', 2, -29.83304, 31.01674, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/florida-park-hotel-PA40877', '+2731 303 1146', 'info@floridaparkhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('FlyDeAar Guesthouse', 1, -30.64585, 24.00877, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/de-aar/flydeaar-guesthouse-PA41022', '+27 53 631 1555', 'flydeaar@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fordsburg Inn cc', 2, -26.20266, 28.02042, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/fordsburg-inn-cc-PA36167', '+27 11 838 4414', 'reservations@fordsburginn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forest Edge Nature-lovers Retreat', 2, -33.92951, 22.93945, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rheenendal/forest-edge-naturelovers-retreat-PA7993', '+27 82 456 1338', 'bookings@forestedge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forest Manor Boutique Guest House', 3, -29.7484, 31.0732, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/la-lucia/forest-manor-boutique-guest-house-PA7211', ' (031) 572 5400', 'info@forestmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forest Sandow', 2, -26.09776, 28.0747, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandown/forest-sandown-PA45217', '+27 11 775 1883', 'bookings@sandowncastle.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Hotel @ White River', 1, -25.32052, 31.01217, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/forever-hotel--white-river-PA3546', '445 359 309', 'monica@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Amanzi Mountain Reserve', 1, -25.47621, 29.40132, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-amanzi-mountain-reserve-PA388', '+27 13 262 3075/6/7', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Centurion Hotel', 2, -25.83385, 28.19353, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/forever-resorts-centurion-hotel-PA2351', '+27 12 644-6000', 'centurionres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Gariep', 2, -30.59696, 25.50211, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/gariep-dam/forever-resorts-gariep-PA363', ' +27 51 754 0045', 'gariep@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Isiyala Game Lodge', 1, -25.4827, 29.4574, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-isiyala-game-lodge-PA43197', '+2713 262 3075', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Leopards Trail Guest Farm', 1, -25.43034, 29.32213, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-leopards-trail-guest-farm-PA43200', '+27 13 262 3075/6/7', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Loskopdam', 1, -25.42064, 29.38774, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/loskop-dam-nature-reserve/forever-resorts-loskopdam-PA475', '+2713 262 3075', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Matombu Wild', 3, -25.47567, 29.34071, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-matombu-wild-PA43215', '+2713 262 3075/6/7', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Phalaborwa Safari Park', 2, -23.94471, 31.13938, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/forever-resorts-phalaborwa-safari-park-PA656', '+2715 781 7500', 'safarires@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Plettenberg', 2, -34.00016, 23.3986, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/forever-resorts-plettenberg-PA43225', '+27 44 535 9309', 'plettrooms@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Ramoswe Lodge', 2, -23.85973, 29.38915, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/forever-resorts-ramoswe-lodge-PA43233', '+27 14 736 8500', 'warmbaths@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Rexs Ranch', 1, -25.96238, 30.57836, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/badplaas/forever-resorts-rexs-ranch-PA43235', '+27 17 844-8000', 'badplaas@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Ruby Cliff Horse Ranch', 1, -25.82925, 29.53462, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-ruby-cliff-horse-ranch-PA43236', '+27 13 262 3075/6/7', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Silver Falls', 1, -25.597972, 29.433083, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-silver-falls-PA43237', '+27 13 262 3075/6/7', 'loskopres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Swadini', 2, -24.54027, 30.79792, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/forever-resorts-swadini-PA373', '27 15 795 5141', 'swadinifom@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Tshipise', 1, -22.54231, 30.35909, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tshipise/forever-resorts-tshipise-PA43261', '+27 15 539 0363/4', 'tshipise@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Warmbaths', 2, -24.88994, 28.291511, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/forever-resorts-warmbaths-PA214', '+27 14 736 8500', 'warmbaths@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts Waterfall Safari Lodge', 1, -25.43665, 29.42002, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/forever-resorts-waterfall-safari-lodge-PA387', '+27 13 262 3075', 'info@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Forever Resorts White River Lodge', 1, -25.32907, 31.01266, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/forever-resorts-white-river-lodge-PA43288', '+27 13 751-1100', 'whiteres@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fountain Valley Nature Reserve', 2, -25.610958, 29.849972, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/fountain-valley-nature-reserve-PA43290', '(+27 ) 83 409 7503', 'gary@fountainvalley.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fountains Self-Catering B&B', 2, -29.57674, 30.35518, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/fountains-selfcatering-b&b-PA7240', '(033) 3472835', 'reservations@fountainsbnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fourways Gardens Guest Estate', 2, -26.00249, 27.99877, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/fourways/fourways-gardens-guest-estate-PA1006', '114 655 933', 'jean@fourwaysgardens.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Friesland Cottage', 3, -33.96895, 18.85437, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/friesland-cottage-PA45165', ' +2721 880 1166', 'mail@frieslandfarm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Fusion Boutique Hotel', 3, -23.91945, 29.45631, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/fusion-boutique-hotel-PA43291', '152 914 042', 'reservations@fusionhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gable Manor', 3, -33.90217, 19.11787, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/gable-manor-PA510', '+2721 876 3833', 'info@gablemanor.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gaikou Lodge', 2, -34.01266, 20.45728, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/gaikou-lodge-PA42268', '+27 28 514 1133', 'reservations@gaikoulodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Galas Lodge', 3, -25.7423, 27.84368, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartebeespoortdam/galas-lodge-PA9721', '+27 12 253 5002', 'sue@galaslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gamagara Lodge', 2, -27.69972, 23.04718, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/gamagara-lodge-PA45075', NULL, 'gamagaralodg@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gamamadi Guest Farm', 2, -31.88417, 23.09222, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/three-sisters/gamamadi-guest-farm-PA3585', NULL, 'gamamadi@mtnloaded.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gariep Country Lodge', 1, -29.66199, 22.74796, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/prieska/gariep-country-lodge-PA44930', '+2753 353 2552', 'garieplodge@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gateway Country Lodge', 3, -29.424622, 31.4588, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/gateway-country-lodge-PA2014', '270 315 661 206', 'info@gatewaycountrylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gecko Cottage Guest House', 2, -29.66854, 22.75202, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/prieska/gecko-cottage-guest-house-PA45031', NULL, 'geckocottage@vodamail.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Genesis Suites & Conferencing', 3, -26.14758, 28.09862, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/genesis-suites-&-conferencing-PA40913', '+27 11 274 5300', 'res@genesissuites.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Getaway Gateway - Polokwane Place', 2, -23.90628, 29.46225, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/getaway-gateway--polokwane-place-PA43359', '+2715 295 8420', 'info@polokwaneplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gethlane Lodge', 2, -24.75197, 30.35886, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/burgersfort/gethlane-lodge-PA44853', '013 231 7316/7/8', 'gethlane@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gewel Guest House', 2, -28.87168, 27.87323, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/ficksburg/gewel-guest-house-PA43364', '519 336 119', 'bookings@gewelgastehuis.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ghost Mountain In', 3, -27.61408, 32.035, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mkuze/ghost-mountain-inn-PA5999', '+27 35 573-1025', 'gmi@ghostmountaininn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gink Spa at Arniston Hotel', 2, -34.17987, 22.09787, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/arniston/gink-spa-at-arniston-hotel-PA2789', '284 459 000', 'spa@arnistonhotel.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Glenalmond Hotel', 2, -26.10223, 28.06299, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/glenalmond-hotel-PA44966', '117 837 127', 'frank@glenalmondhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Glenburn Lodge', 2, -26.03122, 27.75596, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/muldersdrift/glenburn-lodge-PA1328', '116 681 600', 'reservations2@glenburn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Glenshiel Hotel', 3, -23.93676, 29.95367, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/maebaskloof/glenshiel-hotel-PA449', '013 737-9700', 'reservations@thehazyviewhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Glenview Guest House', 2, -29.76001, 31.03694, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/glenview-guest-house-PA45245', '315 631 770', 'info@glenviewguesthouse.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Global Village Guest House', 2, -25.48573, 30.96427, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/global-village-guest-house-PA36185', '+27 13 741 2076/8', 'bookings@globalguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('GNU Ranch', 2, -24.00884, 27.6059, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/ellisras/gnu-ranch-PA44947', NULL, 'gnuranch@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('lden Feathers Lodge', 2, -33.97948, 18.49873, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/lden-feathers-lodge-PA8013', '+27 21 696 8972', 'info@ldenfeatherslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('lden Pillow', 2, -23.90823, 29.46959, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/lden-pillow-PA44940', '+27 (15) 295 2970', 'adele@ldenpillow.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('lf View Bed and Breakfast', 1, -33.19462, 20.85829, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/laingsburg/lf-view-bed-and-breakfast-PA3627', ' +27 23 551 1055', 'lfviewbb@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('lf View Lodge', 2, -28.58661, 31.40208, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/melmoth/lf-view-lodge-PA43409', '035 450-7779', 'christina@lfviewlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('mo mo Game Lodge', 2, -24.23333, 31.35, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/timbavati/mo-mo-game-lodge-PA8981', '+27 13 752 3954', 'mo@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('nubie Hotel', 1, -32.94004, 28.03045, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nubie/nubie-hotel-PA43413', '27 43 740 4010 ', 'adminnubiehotel@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('nubie Manor', 1, -32.94206, 28.00037, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nubie/nubie-manor-PA45571', '+2743-732 1775', 'hosts@nubie-manor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('od Hope Farm B&B', 2, -33.52494, 25.67539, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/od-hope-farm-b&b-PA45828', '+27 42- 234 0357', 'info@addo-odhope.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('odey''s Guest House', 2, -25.73947, 28.23852, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/odeys-guest-house-PA36286', '123 429 524', 'sleep@odeysguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('GPS Hotel', 2, -23.68019, 27.72327, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/lephalale/gps-hotel-PA43444', '+27 14 763-1155', 'gpshotel@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Graceland Guest House', 1, -30.05954, 30.87093, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/graceland-guest-house-PA6017', '2731 903 5830', 'info@gracelandguesthouse.')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Graceland Guesthouse and Country Cottages', 2, -28.99321, 29.45956, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/champagne-valley/graceland-guesthouse-and-country-cottages-PA43447', '+27 36 468-1011 ', 'reservations@gracelandsa.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gracelands Guest Lodge', 1, -30.88156, 30.35456, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/gracelands-guest-lodge-PA6018', '+27 39 314 9022', 'sportschool@worldonline.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gracias Guest House', 2, -26.71582, 27.09493, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/gracias-guest-house-PA1368', '(018) 297 5040', 'gracias@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Grand Kruger Lodge', 2, -25.34337, 31.78687, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/grand-kruger-lodge-PA2041', '+27 82 651 4567', 'info@grandkrugerlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Grand View B&B', 2, -26.19099, 28.00063, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/grand-view-b&b-PA44160', '+27 11 837-1724', 'info@grandbnb.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Granny Dots Country Spot', 2, -23.93344, 30.11667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tzaneen/granny-dots-country-spot-PA43487', '+27 15 307 5149', 'mwbisset@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Granny Mouse Country House & Spa', 3, -29.42263, 30.0976, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/lidgetton/granny-mouse-country-house-&-spa-PA6021', '+27 33 234 4071', 'reservations@grannymouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Graskop Hotel', 2, -24.93215, 30.84014, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/graskop-hotel-PA8922', '+ 27 13 767 1244 ', 'graskophotel@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Green Gables', 2, -26.05408, 28.06476, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/green-gables-PA43973', '+27 11 803 6925', 'green-gables@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Green Haven Guest House', 2, -25.67765, 28.11609, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/green-haven-guest-house-PA43489', '27 12 549 2252', 'ghaven@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Green Lantern In', 9, -28.37441, 29.37984, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/van-reenen/green-lantern-inn-PA45316', '586 710 027', 'stay@greenlantern.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Green Park Lodge', 2, -31.59143, 28.77871, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/green-park-lodge-PA8015', '+27 47 531 4746', 'bookings@greenparklodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Greenlands', 2, -29.59037, 30.35808, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/greenlands-PA6029', ' (033) 342 6233 ', 'info@greenlands.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Greenwood Manor Guest House & Conference Centre', 2, -26.12791, 27.99868, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/greenwood-manor-guest-house-&-conference-centre-PA42221', '+27 11 888 1747', 'info@greenwoodmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Greystone Lodge', 1, -25.34386, 30.10082, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/belfast/greystone-lodge-PA44892', NULL, 'info@greystonelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Guesthouse 4 Carringto', 2, -28.74982, 24.77721, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/guesthouse-4-carrington-PA43816', '+27 53 831 1674', 'info@guesthouse4carrington.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Guinea Feather Country Lodge', 1, -25.21923, 29.2535, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/groblersdal/guinea-feather-country-lodge-PA45371', '823 301 916', 'gfeather@ctecg.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Guinea-Fowl Guest House', 1, -30.72165, 25.09491, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/guineafowl-guest-house-PA45222', '+27 51 753 0197', 'guineafowlrock@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gum Tree Lodge', 2, -28.73925, 24.80691, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/gum-tree-lodge-PA45006', '+27 53 832-8577', 'gumtreelodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gum Tree Manor', 3, -25.96626, 28.14242, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/midrand/gum-tree-manor-PA43062', '878 061 406', 'info@thegumtreemanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gumtree Lodge', 3, -29.72205, 31.04454, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/gumtree-lodge-PA43497', '+27 31 539-1360', 'info@gumtree-lodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gunthers Country House', 1, -22.35269, 30.04168, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/musina-(messina)/gunthers-country-house-PA43500', '+27 15 534-1019 ', 'guntherscountryhouse@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Gwahumbe Game & Spa', 3, -29.97271, 30.53023, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/gwahumbe-game-&-spa-PA6041', '317 811 082', 'info@gwahumbe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ha''Louw Guest Cottage', 2, -25.28335, 31.00794, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/halouw-guest-cottage-PA44898', NULL, 'HennievdnL@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hadida Guest House', 2, -28.74046, 24.7355, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/hadida-guest-house-PA338', '538 612 323', 'guesthouse@hadida.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Haga-Haga Resort and Self Catering Cabanas', 2, -32.75912, 28.25071, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/haga-haga/hagahaga-resort-and-self-catering-cabanas-PA45053', NULL, 'haga@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Halfway House Hotel', 3, -28.74904, 24.77813, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/halfway-house-hotel-PA44883', '538 316 324', 'info@halfwayhousehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hampton House Guest House', 2, -25.83758, 28.17809, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/hampton-house-guest-house-PA967', '+2712 654 1047', 'hamptonhouse@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hands On Retreat', 2, -26.11491, 28.02801, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/hands-on-retreat-PA42259', '113 260 066', 'info@handsonretreat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hanekraai Bed and Breakfast', 1, -26.95843, 24.72976, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/vryburg/hanekraai-bed-and-breakfast-PA43510', '+27 53 927-2789', 'hanekraai@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hanover Lodge Hotel', 1, -31.04509, 24.4411, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/hanover/hanover-lodge-hotel-PA45056', '+27 53 643 0019', 'hanoverlodge@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Happy Wanderers Holiday Resort', 1, -30.35469, 30.7173, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kelso/happy-wanderers-holiday-resort-PA6049', '+27 39 975-1104', 'happywanderers@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Harkerville Forest Lodge', 1, -34.03333, 23.23333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/harkerville/harkerville-forest-lodge-PA9261', '445 327 777', 'info@harkerville.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Harmony Estate Guest Lodge', 1, -29.65167, 17.88418, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/harmony-estate-guest-lodge-PA45323', NULL, 'harmonyestategl@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hastings Hall- First Resort', 2, -33.93097, 18.40334, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/tamboerskloof/hastings-hall-first-resort-PA44848', '+27 21 424 2732', 'hastings@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Haswell Guest House', 3, -26.14862, 28.06526, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/haswell-guest-house-PA42265', '+27 11 483 0993', 'reservations@haswellguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Haus Holzapfel', 2, -32.34862, 22.58962, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/haus-holzapfel-PA36282', '+27 23 414 4434 ', 'info@hausholzapfel.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hawane Resort', 2, -26.13325, 31.09886, 'http://www.aaholidays.co.za/accommodation/swaziland/northern-highlands/hawane-resort-PA1866', '325 255 316', 'infohawane@realnet.co.sz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hawthorn Towers', 2, -25.84827, 29.2394, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/witbank/hawthorn-towers-PA43586', '+27 13 650 5047', 'hawthorntowers@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hazelmere Country Lodge', 2, -31.60076, 26.64185, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/hazelmere-country-lodge-PA43590', '459 669 622', 'mortlock@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heathers B&B Self Catering', 2, -32.24799, 24.52998, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/heathers-b&b-self-catering-PA43587', '+27 49 892-4000', 'heathersbb@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heidelberg Guest House', 1, -26.21005, 28.05595, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/heidelberg/heidelberg-guest-house-PA45057', '163 495 387', 'info@heidelbergguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Herambi and Swartberg Street Guest Houses', 1, -33.19462, 20.85829, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/laingsburg/herambi-and-swartberg-street-guest-houses-PA3731', ' +27 23 551 1913', 'duptheron@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heritage Guest House', 2, -29.60667, 30.38644, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/heritage-guest-house-PA6062', NULL, 'foodwithfinesse@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heritage Guest House', 2, -31.89057, 26.87509, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/heritage-guest-house-PA45046', '458 394 927', 'hgh@isat.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heritage House', 3, -27.73904, 29.93455, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/heritage-house-PA6064', '(034) 315 1767 ', 'bookings@heritagehouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heritage House B&B', 2, -32.17306, 25.61606, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/heritage-house-b&b-PA263', '(+27) 48 881 3210', 'heritagehouse@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hermanus Guest House', 3, -34.42174, 19.23535, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/hermanus-guest-house-PA3738', '+27 28 313 1433', 'reservations@hermanusguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Heuwelsig Plaashuis', 3, -34.06481, 18.45895, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/heuwelsig-plaashuis-PA43608', '+27 82 959 5836', 'heuwelsig@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Highgrove House Country Hotel', 3, -25.12925, 31.02754, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/kiepersol/highgrove-house-country-hotel-PA8973', '+27 13 764 1844', 'house@highgrove.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Highveld Splendour Boutique Hotel', 3, -26.5028, 30.00993, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/ermelo/highveld-splendour-boutique-hotel-PA45753', '178 197 840', 'info@highveldsplendour.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hildesheim Guest House', 2, -33.97511, 22.62499, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/hildesheim-guest-house-PA935', '270 448 501 115', 'info@hildesheim.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hill Street Manor', 3, -33.31162, 26.52773, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/hill-street-manor-PA2349', '466 225 678', 'infor@hillstreetmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hillbillion Estate Guest Lodge', 2, -30.77907, 30.42815, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/oslo-beach/hillbillion-estate-guest-lodge-PA43625', '396 856 080', 'info@hillbillion.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hillcrest Berry Orchards', 2, -33.91843, 18.92386, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/hillcrest-berry-orchards-PA3755', ' +27 21 8851629', 'info@hillcrestberries.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hillcrest Manor Guest House', 1, -33.92769, 18.40504, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/hillcrest-manor-guest-house-PA3756', ' +27 21 423 7459', 'hilcres@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hilldrop B&B', 3, -27.70447, 29.97821, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/hilldrop-b&b-PA6070', ' (034) 3124263', 'julie@hilldrop.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hillston Farm', 2, -31.30789, 25.44846, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/middelburg/hillston-farm-PA43380', '+27 49 842 1627 ', 'info@hillstonfarm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hilltop Manor', 3, -29.76595, 31.03925, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/hilltop-manor-PA6073', '315 630 276', 'cheeky@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hilton Manor Guest House', 3, -28.7629, 32.11971, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/hilton-manor-guest-house-PA45007', '+2735 753 2179', 'info@hilltonmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hippo Hideaway', 2, -28.37631, 32.41123, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/hippo-hideaway-PA7408', '+27 35 590 1025/ +27 31 764 4553', 'reservations@hippohideaway.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Historic Cottages', 2, -33.31109, 26.52249, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/historic-cottages-PA45054', '+27 46 622 8936 ', 'historic@imaginet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hluhluwe Guest House', 2, -28.02611, 32.28446, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/hluhluwe-guest-house-PA6086', '(+27)035 562 0838', 'hluguest@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hlutankungu B&B', 2, -30.28279, 30.32776, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ixopo/hlutankungu-b&b-PA43323', '+27 39 835-9022', 'hlutankungu.bnb@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hobie Beach Guest House', 2, -33.9847, 25.66117, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/hobie-beach-guest-house-PA939', '415 832 227', 'hobiebeach@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hogsback Arminel Self Catering Forest Lodges', 2, -32.59543, 26.92703, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/hogsback/hogsback-arminel-self-catering-forest-lodges-PA43312', '800 422 433', 'reservations@katleisure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hole In One Guest House & Conference Centre', 2, -26.08286, 27.86453, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/hole-in-one-guest-house-&-conference-centre-PA43311', '+27 11 958 0236', 'info@holeinone.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hole in the Wall Hotel & Holiday Village - First Resorts', 1, -31.98751, 29.14907, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/coffee-bay/hole-in-the-wall-hotel-&-holiday-village--first-resorts-PA45387', '+27 47 575-0009', 'reservations@holeinthewall.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Home and Away Guest House', 2, -27.73604, 29.93289, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/home-and-away-guest-house-PA43305', '343 129 075', 'homeawaybb@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Home at last Lodge', 2, -31.59052, 28.75935, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/home-at-last-lodge-PA43299', '+27 47 531-2208', 'willingbuddies@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Homestead B&B', 2, -33.54451, 25.68708, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/homestead-b&b-PA43296', NULL, 'homestead@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Homestead Guesthouse and Coffee Shoppe', 2, -26.76819, 27.85279, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/sasolburg/homestead-guesthouse-and-coffee-shoppe-PA43066', '+27 16 971-2790', 'homestead@lantic.net  ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Homtini Guest Farm', 2, -33.94507, 22.93482, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/homtini-guest-farm-PA3778', ' 27 44 3890029', 'bookings@homtini.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Honeywood', 2, -30.69751, 30.48353, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-shepstone/honeywood-PA43315', '396 951 036', 'honeywood@honeywoodsa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hoopoe Haven Guest House', 2, -25.99438, 27.97096, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/fourways/hoopoe-haven-guest-house-PA8057', '+27 11 708 1864', 'info@hoopoehavenlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hoopoe House', 3, -33.96627, 18.38108, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/camps-bay/hoopoe-house-PA3782', '(+27)21 438 4416', 'info@hoopoehouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Horizon Cottages', 2, -34.11475, 18.3848, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/noordhoek/horizon-cottages-PA2158', '+27 21 785 1604', 'info@horizoncottages.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hornbill House', 1, -28.3791, 32.41454, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/hornbill-house-PA6102', ' (035) 590 1162', 'info@shakabarker.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Horse & Mill', 2, -30.71837, 25.0973, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/horse-&-mill-PA45223', '(051) 753 0406', 'horseandmill@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Horseback Africa', 1, -25.67516, 28.5245, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/cullinan/horseback-africa-PA45756', '(0)12 735 9909 ', 'horsebackafrica@colin.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hotel 224', 2, -25.74798, 28.20919, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/hotel-224-PA43318', '+27 12 440 5281 ', 'hotel224@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hotel Casa do Capitao', 2, -23.86221, 35.37837, 'http://www.aaholidays.co.za/accommodation/mozambique/inhambane/hotel-casa-do-capitao-PA42450', '+29 321 408/ 12', 'reservations@hotelcasadocapitao.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hotel Graeme', 2, -34.10609, 18.46815, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/green-point/hotel-graeme-PA43354', '0027 - 21 - 434 92 82', 'info@hotelgraeme.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hotel Numbi and Garden Suites', 2, -25.04792, 31.13094, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/hotel-numbi-and-garden-suites-PA43355', '+27 13 737 7301', 'info@hotelnumbi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hotel Savoy and Conference Centre', 3, -31.58825, 28.77728, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/hotel-savoy-and-conference-centre-PA44967', '+2747 531 0791', 'hotelsavoy@jhgroup.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House Beautiful', 2, -28.50393, 27.93077, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/rosendal/house-beautiful-PA43809', NULL, 'info@housebeautiful.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House Hig', 3, -26.14008, 27.96701, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/house-hig-PA45270', '116 781 939', 'info@househig.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House No 1', 2, -31.86498, 24.55342, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nieu-bethesda/house-no-1-PA45055', NULL, 'aasvoelkrans@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House of House Guest House', 3, -33.93531, 18.87836, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/house-of-house-guest-house-PA42278', '+27 21 886 8379', 'john@houseofhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House Pinnaqui', 3, -34.07758, 24.91662, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/house-pinnaquin-PA827', '+27 42 296-0008', 'info@housepinnaquin.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House Purfikt @ Kleinemonde', 3, -33.59275, 26.89904, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/house-purfikt--kleinemonde-PA43814', '+2746 6751156 ', 'marlene@housepurfikt.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('House Yada', 2, -28.75402, 24.7712, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/house-yada-PA45269', NULL, 'aletheimguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hout Bay View', 2, -34.03946, 18.34755, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hout-bay/hout-bay-view-PA36121', '270 722 900 729', 'stay@houtbayview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Howick Falls Hotel', 2, -29.47731, 30.21438, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/howick/howick-falls-hotel-PA6108', '(033) 330 2809', 'bookings@howickfallshotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hunters Lodge Ladysmith', 2, -28.55518, 29.77233, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/hunters-lodge-ladysmith-PA45440', '+27 36 637-2359', 'hunterslodge@futurenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hunters Rest Mountain Resort', 2, -26.03681, 27.62499, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/hunters-rest-mountain-resort-PA1394', '+27 14 537 8300', 'pieter@mountamanzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Hydeaway Country Lodge', 2, -33.96722, 25.48583, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/hydeaway-country-lodge-PA40957', NULL, 'info@hydeawaycountrylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('I Lollo Lodge', 2, -34.14667, 24.83749, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/st-francis-bay/i-lollo-lodge-PA43366', '+2742 294 0799', 'reservations@ilollo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ibis lodge', 3, -29.78443, 31.02753, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/ibis-lodge-PA1354', '270 315 633 586', 'info@ibislodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ibis Place Guest House', 2, -33.961, 22.3699, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/ibis-place-guest-house-PA42410', '+27 44 870 0264', 'info@ibisplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Idemvelle Guest Rooms And Flats', 2, -28.444072, 21.27449, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/idemvelle-guest-rooms-and-flats-PA43914', '+27 54 331 3880', 'ijjlange@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Idube BnB', 3, -29.78618, 31.0426, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/idube-bnb-PA7145', ' (031)5638083', 'idubebandb@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Idwala Lodge', 3, -28.42464, 29.98269, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/idwala-lodge-PA43367', NULL, 'info@idwalalodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Imbali Boutique Hotel', 3, -30.54089, 29.41896, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/imbali-boutique-hotel-PA43927', '+2739 727 1162 ', 'res@imbaligh.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Imbali Guest House', 3, -30.54089, 29.41896, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/imbali-guest-house-PA43371', '+2739 727 1162 ', 'res@imbaligh.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Indaba Hotel And Conference Centre', 3, -26.06394, 28.02431, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/fourways/indaba-hotel-and-conference-centre-PA43930', '+27 11 840 6600 ', 'indaba@indabahotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Indlovu River Lodge', 3, -24.17868, 30.56245, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/indlovu-river-lodge-PA42283', '+27 15 383 9918', 'reservations@irl.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ingeli Forest Lodge', 2, -30.55393, 29.42676, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/ingeli-forest-lodge-PA43952', '+27 39 553 0600', 'admin@ingeliforest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ingudlane Lodge', 3, -28.1725, 30.23139, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/ingudlane-lodge-PA43953', NULL, 'bookings@ingudlane.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ingwe Guest House & Spa', 3, -30.86164, 30.36853, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/ingwe-guest-house-&-spa-PA6132', '(039) 317 1914', 'info@ingwemanor.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ingwenya Lodge', 2, -28.37932, 32.41439, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/ingwenya-lodge-PA1908', '+27 82 782 8172', 'grootkrokodil@ingwenyalodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Inkwenkwezi Private Game Reserve', 2, -32.88831, 28.05376, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/inkwenkwezi-private-game-reserve-PA1959', '+2743 734 3234', 'pgr@inkwenkwezi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('InnJoy Boutique Hotel', 3, -25.84315, 28.16153, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/innjoy-boutique-hotel-PA40961', NULL, 'book@innjoy.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Innzululand Guest Lodge', 2, -28.89495, 31.46051, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/eshowe/innzululand-guest-lodge-PA43955', '+27 35 474 4481', 'post@innzululand.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Intaba Thulile', 2, -25.88154, 27.44634, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/intaba-thulile-PA2361', '145 772 644', 'info@intabathulile.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Intibane Game Lodge', 2, -28.17802, 31.2535, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ulundi/intibane-game-lodge-PA36144', '+27 82 920 7996 ', 'opsulundi@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Inverdoorn Game Reserve And Safari Lodge', 3, -33.11088, 19.81074, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ceres/inverdoorn-game-reserve-and-safari-lodge-PA43956', '+27214 344 639 ', 'info@inverdoorn.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('isiLimela Lodge', 2, -24.35, 30.96667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/isilimela-lodge-PA45239', '+27 82 783 8594', 'miles.w@zanet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Itaga Private Game Lodge', 3, -24.81804, 28.05374, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mabalingwe-nature-reserve/itaga-private-game-lodge-PA8072', '+27 14 736 6900/ +27 11 289 8020', 'itaga@holidayholdings.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Izimbali Lodge And Restaurant', 2, -26.51398, 29.98796, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/ermelo/izimbali-lodge-and-restaurant-PA43960', '179 894 002', 'izimbalilodge@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('iZungla Lodge', 3, -28.03333, 32.28333, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/izungla-lodge-PA6147', '(031)3352420', 'info@izungla.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jackalberry Lodge', 2, -24.50619, 31.11409, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/jackalberry-lodge-PA2331', '+27 11 729 6700', 'reservations@legendlodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jakaranda Lodge', 2, -25.71433, 28.21998, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/jakaranda-lodge-PA850', '+27 12 330 2424', 'bookings@jaklodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jambo Guest House', 3, -33.90825, 18.40563, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/jambo-guest-house-PA7413', '+27 21 439 4219', 'jamb@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jameson In', 1, -33.01945, 27.91522, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/jameson-inn-PA43965', '+27 43 722-8900', 'info@jamesoninn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Janets of Knysna Guest House', 1, -34.03758, 23.06125, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/janets-of-knysna-guest-house-PA228', '(044) 382 3401 ', 'janetsofknysna@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jax Place Guest House', 2, -26.14558, 28.14921, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/jax-place-guest-house-PA2116', '+27 11 454 3305  ', 'bookings@jaxplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jemima''s Hospitality Bunker on Bailie Guest Lodge', 3, -32.9967, 27.92504, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/jemimas-hospitality-bunker-on-bailie-guest-lodge-PA8086', NULL, 'info@jemimas.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jewel Of The Valley', 1, -25.88333, 27.61667, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/hekpoort/jewel-of-the-valley-PA43514', '+27 14 576-2364', 'affs.safrica@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Joburg Luxury Suites', 2, -26.15743, 27.94951, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/northcliff/joburg-luxury-suites-PA43503', '+27 11 477-2291', 'anne@joburgluxurysuites.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jock Sabie Lodge', 1, -25.09336, 30.77854, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/sabie/jock-sabie-lodge-PA171', '+2713 764 2178', 'info@jock.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Johannesburg Suites', 2, -26.17501, 28.00905, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melville/johannesburg-suites-PA44712', '117 266 646', 'info@saffronguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jolo Guest Farm', 3, 5.43448, -66.13763, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/rosetta/jolo-guest-farm-PA43967', NULL, 'lorraine@stuartbromfield.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jolyne B&B', 1, -24.51855, 30.88828, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/kampersrus/jolyne-b&b-PA43968', '+27 83 388 0432', 'jolyne@tiscali.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jozi Apartments', 1, -26.09922, 27.92403, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/jozi-apartments-PA9274', '+2778 106 2231', 'info@joziapartments.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jozini Tiger Lodge and Spa', 3, -27.43333, 32.06667, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/jozini/jozini-tiger-lodge-and-spa-PA36291', '+27 35 572 1020', 'reservatiosn@jozintigerlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Jungnickel Guest House', 2, -28.74385, 24.77215, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/jungnickel-guest-house-PA44925', '(+27) (0)53 832 5630', 'jungnickel@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ka-Ma Lodge', 1, -31.36448, 23.91796, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/richmond/kama-lodge-PA45508', '053-693-0138', 'info@kamalodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kadie Cottage', 2, -34.01749, 20.44781, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/kadie-cottage-PA9166', NULL, 'kadie@sdm.dorea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kalahari Lodge', 2, -27.4608, 23.44029, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/kalahari-lodge-PA45211', '537 121 666', 'kalaharilodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kalahari Lodge Kimberley', 2, -28.78112, 24.73489, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/kalahari-lodge-kimberley-PA43976', '+27 53 831 5085', 'kalaharilodge@kimberley.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kalahari Monate Lodge', 1, -28.36692, 21.14831, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/kalahari-monate-lodge-PA44995', '+27 54 332 1336 ', 'teuns@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kalahari Rangers Lodge', 9, -26.19934, 22.57656, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/mccarthys-rest/kalahari-rangers-lodge-PA45781', '(0)79 5804199 ', 'kalaharicc@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kalahari Water Holiday and Adventure', 1, -28.72145, 20.9797, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/keimoes/kalahari-water-holiday-and-adventure-PA43977', '+27 54 461-2404', 'info@kalahariwater.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kamogelo Guest House', 2, -25.22938, 27.03233, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/mogwase/kamogelo-guest-house-PA1338', '145 372 140', 'kadi@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kangelani lodge', 2, -29.78118, 30.735, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hillcrest/kangelani-lodge-PA44941', '+27 31 768 1342', 'thelodge@kangelani.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Karkloof Safari Spa', 3, -29.56774, 30.38214, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/karkloof-safari-spa-PA43007', '335 691 321', 'reservations@karkloofsafarispa.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Karoo Koelte Bed and Breakfast', 1, -31.47932, 22.354, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/victoria-west/karoo-koelte-bed-and-breakfast-PA44915', ' (+27 53) 621 1219', 'info@karookoelte.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Karrad Guest House', 2, -34.01796, 18.35234, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hout-bay/karrad-guest-house-PA3906', ' +27 21 790 2798', 'ettienne@karrad.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Karula Hotel', 2, -25.3222, 31.02135, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/karula-hotel-PA43979', '+27 13 751 2277/8/9', 'email@Karulahotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kassaboera Lodge', 2, -25.73363, 27.87371, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartebeespoortdam/kassaboera-lodge-PA43463', '+27 12 253 1685 ', 'info@kassaboera.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kasteelkop Guest Farm', 2, -27.28333, 28.51667, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/frankfort/kasteelkop-guest-farm-PA45663', NULL, 'erikal@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Katberg Luxury Self Catering lf Villas', 3, -32.77406, 26.6329, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/fort-beaufort/katberg-luxury-self-catering-lf-villas-PA44171', '+(27)43 743 3433', 'reservations@katleisure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kathuhari Guest House', 3, -27.69956, 23.0512, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/kathuhari-guest-house-PA45224', NULL, 'reservations@kathuhari.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('KATHUMZI B&B', 3, -27.69968, 23.05089, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/kathumzi-b&b-PA45906', '820 800 014', 'info@kathumzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Katse Lodge', 1, -29.33694, 28.50611, 'http://www.aaholidays.co.za/accommodation/lesotho/lebakeng/katse-lodge-PA43995', NULL, 'crskat@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kaya Selati Guest House', 2, -26.35604, 27.37858, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/carletonville/kaya-selati-guest-house-PA43980', '+27 18 788-3204', 'kayaselati@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('KB Lodge cc', 2, -25.84211, 29.25647, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/witbank/kb-lodge-cc-PA43464', '136 500 712', 'bookings@kblodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('KBs Exclusive Bed and Breakfast', 1, -31.8911, 26.87644, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/kbs-exclusive-bed-and-breakfast-PA43983', '+27 45 839-6203', 'kbsbnb@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ke Nako Lodges', 2, -33.9796, 22.69518, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/ke-nako-lodges-PA45247', '+2744 004 2319', 'itistime@kenakolodges.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kelbricks Bed and Breakfast', 1, -31.87886, 26.87138, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/kelbricks-bed-and-breakfast-PA43985', '+27 45 838-1049', 'kofi@eci.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ken''s Guest House', 2, -32.84658, 27.44077, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/bhisho/kenns-guest-house-PA43988', '406 369 119', 'resevations@kennsguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kenridge Guest House', 2, -33.8325, 18.6475, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/kenridge-guest-house-PA42228', '27 (021) 914-6836 ', 'kenridge@xenium.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Khaya Ndlovu Manor House', 3, -24.2212, 30.5814, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/khaya-ndlovu-manor-house-PA42281', '+27 15 793 0605/ +27 15 793 0471', 'reservations@jordanprops.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Khokmoya Guest House', 1, -26.23272, 28.16808, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/germiston/khokmoya-guest-house-PA44878', '+27 11 827-6309', 'khokumoya@yahoo.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Khol Newman Bed and Breakfast', 1, -31.9, 26.88333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/khol-newman-bed-and-breakfast-PA43989', ' +27 45 857-0046', 'kvsign@yahoo.co.uk')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kimberley Rose Guest House', 2, -28.75067, 24.73387, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/kimberley-rose-guest-house-PA45616', '+27(0)53 861 3748', 'kbyroseguest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kingfisher Guest House', 3, -33.99135, 25.67118, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/kingfisher-guest-house-PA44007', '+2741 583 2150', 'accommodation@kingfisherpe.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kingfisher Hollow', 1, -34.14129, 18.89833, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rdon`s-bay/kingfisher-hollow-PA3927', ' +27 21 8560104', 'info@kingfisherhollow.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kingfisher Lodge', 2, -31.59643, 28.77351, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/kingfisher-lodge-PA45029', '+27 79 072 4200', 'kingfisher@mthatha.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kings Cottages', 1, -30.81553, 30.40395, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/kings-cottages-PA43982', '393 150 423', 'info@kingscottages.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kings Grant Country Retreat', 2, -30.15124, 30.07464, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ixopo/kings-grant-country-retreat-PA6184', '+27 39 834-2730', 'reservations@kingsgrant.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kings Guest House', 2, -29.83671, 30.93094, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/westville/kings-guest-house-PA43515', '312 669 815', 'info@kingsaccommodation.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kingslyn Boutique Guest House', 3, -33.90885, 18.40201, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/kingslyn-boutique-guest-house-PA8092', '+27 21 4399305 ', 'kingslyn@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kingston House', 3, -29.72106, 31.08464, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/kingston-house-PA6187', ' (031) 561 4160', 'info@kingstonhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Klaasvoogds Cottage', 3, -33.81752, 19.97495, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/robertson/klaasvoogds-cottage-PA43919', '+27 23 626-3200', 'pbnsqs@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Klein Kunkura Game Lodge', 2, -24.66527, 28.47536, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/modimolle/klein-kunkura-game-lodge-PA43818', '270 147 179 838', 'admin@kunkura.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kleine Eden Guest House', 3, -29.14122, 26.17671, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/kleine-eden-guest-house-PA8096', '+27 51 525 2633', 'info@kleine-eden.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kleinkaap Boutique Hotel', 3, -25.84101, 28.17746, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/kleinkaap-boutique-hotel-PA45184', '+27 12 654 9878', 'info@kleinkaap.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kleinplaas Holiday Resort', 2, -33.57654, 22.20534, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/kleinplaas-holiday-resort-PA489', '+27 44 272 5811', 'kleinpls@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Klip en Kristal Guest House', 2, -24.88346, 28.28492, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/klip-en-kristal-guest-house-PA42411', '+27 14 736 5274', 'bookings@klipenkristal.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Klip River Country Estate', 3, -26.61398, 28.00147, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vereeniging/klip-river-country-estate-PA43817', NULL, 'info@krce.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kliprand Guest House', 2, -28.27679, 29.14576, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/kliprand-guest-house-PA45790', '277 122 604', 'kliprandgastehuis@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kloofzicht Lodge', 3, -26.03122, 27.75596, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/muldersdrift/kloofzicht-lodge-PA647', NULL, 'info@kloofzicht.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Knorhoek Country Guesthouse', 2, -33.88019, 18.8717, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/knorhoek-country-guesthouse-PA35968', '+27 21 865 2114/5', 'guesthouse@knorhoek.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Knysna Chalets- First Resort', 2, -34.03333, 23.06667, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/knysna-chalets-first-resort-PA44859', '443 860 013', 'knysnachalets@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Knysna Manor House', 2, -34.03413, 23.04537, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/knysna-manor-house-PA1605', '+27 44 382 5440  ', 'knysnamanor@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Knysna River Club', 3, -34.03862, 23.06105, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/knysna-river-club-PA3976', '443 826 483', 'info@knysnariverclub.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Knysna Tonquani Lodge & Spa', 3, -34.03171, 23.01374, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/knysna-tonquani-lodge-&-spa-PA3978', '+27 44 382-4355', 'tonquani@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kob Inn Beach Resort', 2, -32.47422, 28.64161, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/qora-mouth/kob-inn-beach-resort-PA43815', '474 990 011', 'info@kobinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kololo Game Reserve', 2, -24.38917, 27.85417, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/kololo-game-reserve-PA8098', '+27 11 826 2389', 'info@kololo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kolping Guest House & Conference Facilities', 3, -33.8286, 18.64619, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/kolping-guest-house-&-conference-facilities-PA1200', '+27 21 970-2900', 'info@kolpingguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Komati rge Lodge Fly Fishing and Wildlife Reserve', 2, -26.09477, 29.46001, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/machadodorp/komati-rge-lodge-fly-fishing-and-wildlife-reserve-PA470', '+27 17 843 3920', 'komatirge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Komati River Chalets', 2, -25.43629, 31.95562, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/komatipoort/komati-river-chalets-PA483', '+27 13 793-7623', 'info@komatiriverchalets.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kondowe Game Reserve', 3, -23.56234, 31.07937, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/gravelotte/kondowe-game-reserve-PA43494', '+27 12 361-0941', 'belinda@kondowe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Koorsboom Cottage Guesthouse', 2, -26.17717, 28.12551, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/bedfordview/koorsboom-cottage-guesthouse-PA40983', '+27 11 622-1292 ', 'anemari@koorsboomcottage.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kopano Nokeng Country Lodge', 2, -29.11835, 26.22492, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/kopano-nokeng-country-lodge-PA45069', '+27 51 441 7819', 'info@kopanonokeng.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Koppie Alleen Guest House', 2, -27.39501, 31.62423, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ponla/koppie-alleen-guest-house-PA43777', '+27 34 413-1281', 'koppie.alleen@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Koppisol Klub', 2, -26.55613, 27.93617, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vereeniging/koppisol-klub-PA43778', '+27(0) 16 556-6125', 'koppisol@cyberserv.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kosmos Guest House', 2, -28.75836, 24.74743, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/kosmos-guest-house-PA44945', '053-8613795', 'kosmosguesthouse@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Koubad Farm Lodge', 3, -27.42225, 30.81741, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/paulpietersburg/koubad-farm-lodge-PA45183', '+27 83 233 6617', 'claire@koubad.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kowie River Chalets - First Resorts', 2, -33.6, 26.88333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/kowie-river-chalets--first-resorts-PA44847', '466 244 182', 'kowieriver@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Krige Lodge', 2, -29.11813, 26.22309, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/krige-lodge-PA43780', '+27 51 451-1345', 'adri.gvr@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kronenhoff Guest House', 3, -33.40082, 25.44661, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/kirkwood/kronenhoff-guest-house-PA8100', '+27 42 230 1448', 'info@kronenhoff.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kruger Cottage', 1, -25.44697, 31.17769, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/kruger-cottage-PA35948', NULL, 'joanmarydemont@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kruger Park Lodge - ld Safari SA', 2, -25.03333, 31.11667, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/kruger-park-lodge--ld-safari-sa-PA38927', NULL, 'renato@bulktechnik.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kududu Guest House', 3, -33.51667, 25.61667, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/kududu-guest-house-PA42256', '+27 42 234 0177', 'anri@kududu.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kudusrus Game Lodge', 1, -25.62922, 27.26309, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/kudusrus-game-lodge-PA43781', '+27 82 441 3396', 'andries@kudusrus.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kumkani Country Lodge', 2, -26.71571, 27.11336, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/kumkani-country-lodge-PA44988', '+27 18 290 7387/9', 'kumkani@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kurhula Lodge', 2, -24.16158, 30.9354, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/kurhula-lodge-PA42255', '+27 79 251 8487', 'info@kurhulalodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kuru Kuru Guest House', 1, -27.45189, 23.43076, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/kuru-kuru-guest-house-PA43782', '+27 53 712 0319', 'kurukuru@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwa Mahlangu Guest House', 1, -25.12722, 28.98694, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/siyabuswa/kwa-mahlangu-guest-house-PA43787', NULL, 'kwamahlangu@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwa Maritane Bush Lodge', 2, -25.33557, 27.14503, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/kwa-maritane-bush-lodge-PA9842', ':+27(0)14 552 5100', 'kwamaritane@legacyhotels.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwaggashoek Game Ranch', 3, -28.73033, 29.3486, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/kwaggashoek-game-ranch-PA43785', '+27 82 561 2001', 'kwaggashoek@shisas.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwambali Riverside Lodge', 2, -25.04278, 31.09886, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/kwambali-riverside-lodge-PA45252', NULL, 'peter@tomahawk.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwantu private game reserve', 3, -33.31756, 26.08472, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/alicedale/kwantu-private-game-reserve-PA42155', '+27 42 203 1400', 'shakir@kwantu.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwela B&B', 2, -30.69931, 26.71251, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/kwela-b&b-PA45249', '516 347 934', 'kwela@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwena Chalets at Sun City', 2, -25.34028, 27.09083, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/sun-city/kwena-chalets-at-sun-city-PA36218', '+27 14 552 1262', 'kwenachalets@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Kwindla Bed and Breakfast', 2, -32.93716, 27.74817, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/kwindla-bed-and-breakfast-PA45234', '+27 78 193 1615', 'kwindlabnb@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Bastide', 1, -25.81459, 27.75902, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/skeerpoort/la-bastide-PA45309', NULL, 'pauline@labastide.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Cabriere Country House', 3, -33.90163, 19.14813, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/la-cabriere-country-house-PA4003', '+27 21 876 4780', 'lacabriere@icon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Cigale', 3, -34.01473, 25.43337, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/la-cigale-PA837', '+27 41 368-8235', 'info@la-cigale.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Cote D''Azur - First Resorts', 3, -30.85335, 30.37818, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/la-cote-dazur--first-resorts-PA6256', '+27 39 312-1521', 'dianneu@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Galiniere Guest Cottages', 2, -33.90137, 19.1066, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/la-galiniere-guest-cottages-PA40989', '+2721 876 2579', 'Info@lagaliniere.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La La Nathi', 3, -28.30374, 29.14703, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/la-la-nathi-PA399', '(058) 623 - 0282', 'lalanati@internext.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Loggia Bed and Breakfast', 2, -29.7225, 31.07481, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/la-loggia-bed-and-breakfast-PA9235', '+27 31 561 2411', 'laloggia@saol.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Loggia on Portland', 2, -29.71241, 31.08953, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/la-loggia-on-portland-PA35997', NULL, 'laloggia@saol.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Lot Gastehuis', 1, -27.45605, 23.42937, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/la-lot-gastehuis-PA45580', NULL, 'laloterasmus@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Maison Bleue', 2, -34.10261, 24.88988, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/la-maison-bleue-PA43795', '+27 11 803-4645', 'marieannehavart@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Maison du Soleil', 2, -30.37173, 30.70338, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/la-maison-du-soleil-PA45545', NULL, 'maurel.pe@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Maison Guest House', 1, -31.58636, 28.79062, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/la-maison-guest-house-PA45501', '+27 47 532-1220', 'lamaison@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Mercy Beach Hotel', 2, -29.64458, 31.13219, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/la-mercy/la-mercy-beach-hotel-PA43796', '+27 32 941-6221/2/3/4/5', 'info@lamercybeachhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Mercy Hotel', 2, -29.64415, 31.13202, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/la-mercy-hotel-PA43474', '329 416 221', 'info@lamercybeachhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Montagne Resort No 611', 2, -29.53325, 31.22224, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/la-montagne-resort-no-611-PA43804', '+27 82 786 3130', 'accinballito@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Montagne-First Resorts', 1, -29.53305, 31.22245, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/la-montagnefirst-resorts-PA4011', '+27 32 946-2121 ', 'paulg@firstresorts.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Paix Guest House', 1, -32.35335, 22.58976, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/la-paix-guest-house-PA1475', NULL, 'mekritzinger@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Pension Guest House', 3, -33.58707, 22.19349, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/la-pension-guest-house-PA4013', '442 792 445', 'info@lapension.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Petit Maiso', 2, -26.28573, 28.44194, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/springs/la-petit-maison-PA44855', '118 184 467', 'bookings@1pm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Picasso Guest House', 2, -26.53394, 29.99563, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/ermelo/la-picasso-guest-house-PA43996', '+27 17 819 4082', 'lapicassoguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Plume Guest House', 3, -33.65487, 22.08462, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/la-plume-guest-house-PA1192', '+27 44 272 7516', 'laplume@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Rochelle Guest Ranch', 2, -25.81519, 29.37263, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/la-rochelle-guest-ranch-PA45070', '975 061 858', 'lrguestranch@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Teranga Bed & Breakfast', 1, -30.54187, 29.42339, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/la-teranga-bed-&-breakfast-PA45242', '397 272 367', 'ousseynu@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('La Terra de Luc', 3, -33.91667, 19.13333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/la-terra-de-luc-PA43473', '+27 21 876-2416', 'lois@laviedeluc.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ladybrand Guest House', 2, -29.19319, 27.45114, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/ladybrand/ladybrand-guest-house-PA43922', '+27 51 924-1155', 'ladyguest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Laon View Lodge', 3, -32.96641, 27.94798, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/laon-view-lodge-PA43923', '+27 43 748 1980', 'info@laonview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Laona In', 2, -34.04062, 23.06805, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/laona-inn-PA4036', '+27 44 382 4656', 'info@laona.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Laingsburg Country Hotel', 1, -33.1955, 20.85339, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/laingsburg/laingsburg-country-hotel-PA4039', '+27 23 551 1009', 'hotel@laingsburg.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lake Grappa Guest Farm', 2, -28.60858, 20.34464, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/augrabies-falls/lake-grappa-guest-farm-PA45536', '+27 82 429 4811', 'lakegrappa@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lakeside Lodge', 3, -33.99214, 22.73616, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/sedgefield/lakeside-lodge-PA4046', '+27 44 343 1844', 'stay@lakesidelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lakeview Cabanas', 2, -28.37773, 32.41065, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/lakeview-cabanas-PA44846', '355 901 350', 'lakeview@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lala Khona Lodge', 1, -30.26257, 29.92192, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umzimkulu/lala-khona-lodge-PA43617', '+27 39 259 0330', 'busi@lalakhona.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lalakamnandi Guest House', 2, -25.74203, 28.29477, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/lalakamnandi-guest-house-PA43926', '+27 12 804 1214', 'lalakamnandi@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lalapanzi Guest Lodge', 2, -33.97639, 25.64081, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/lalapanzi-guest-lodge-PA9194', '+27 41 585 5988', 'info@lalapanzi-lodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lalapanzi Hotel & Conference Centre', 2, -23.19674, 29.48288, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/louis-trichardt/lalapanzi-hotel-&-conference-centre-PA42238', '+27 15 516 5455', 'ingagilf@yebo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lalaphansi', 2, -29.67528, 31.11529, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umdloti-beach/lalaphansi-PA1796', '+27 31 568 1565', 'lalaphan@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Laletsa Lodge', 2, -29.85134, 30.98997, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/berea/laletsa-lodge-PA1244', '+27 31 201 0785/6 ', 'laletsa@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lambour''s Self Catering Victorian Cottage', 2, -25.59107, 30.76588, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/kaapsehoop/lambourns-self-catering-victorian-cottage-PA44924', NULL, 'wartan@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lamor Guest House', 2, -25.75421, 29.47683, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/lamor-guest-house-PA43928', '+27 13 245 2637', 'stay@lamor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Langberg Guest Farm', 2, -28.75769, 24.76305, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/langberg-guest-farm-PA9196', '+27 53 832-1001', 'admin@langberg.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Langrietvlei Chalets', 1, -33.02817, 18.31487, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hopefield/langrietvlei-chalets-PA4062', '+27 22 783 0856', 'langriet@new.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lapeng Guest Lodge', 2, -24.77649, 30.16073, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/burgersfort/lapeng-guest-lodge-PA43931', '+27 13 231 8421', 'ansie@lapenglodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Laughing Waters Guest House', 2, -25.02793, 31.07852, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/laughing-waters-guest-house-PA2078', '137 378 063', 'info@laughingwaters.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lavender Lady Cottages', 1, -26.54747, 28.06976, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/henley-on-klip/lavender-lady-cottages-PA43934', '+27 16 366 0465', 'jilko@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lavender Lake Farm', 2, -25.9592, 27.52238, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/lavender-lake-farm-PA45933', '+27 83 289 6641', 'info@lavenderlakefarm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lavender Lane Bed and Breakfast', 1, -28.55402, 29.78128, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/lavender-lane-bed-and-breakfast-PA44885', NULL, 'lavenderlbb@telkomsa.net  ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lavender Lane Luxury', 2, -31.89226, 26.88695, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/lavender-lane-luxury-PA43935', '+27 82 455 1197', 'lavenderlaneqtn@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lavender Leisure Country House', 2, -32.56052, 27.41669, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/stutterheim/lavender-leisure-country-house-PA45125', '+27 (043) 683 2557', 'info@lavenderleisure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Le Bac Estates', 2, -33.64736, 18.99858, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/le-bac-estates-PA36251', '+27 21 864 2960 ', 'carla@lebac.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Le Bac Stay', 2, -33.6569, 18.96182, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/le-bac-stay-PA42270', '+27 21 864 2960', 'stay@lebac.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Le Chef B&B', 2, -31.60745, 28.74521, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/le-chef-b&b-PA45867', '+27 47 537 0444', 'lechef.bnb@gmail.com''')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leeuwenvoet House', 2, -33.92978, 18.40884, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/leeuwenvoet-house-PA1203', '27 21 424 1133', 'stay@leeuwenvoet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Legend lf & Safari Resort', 2, -24.22575, 28.75388, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mokopane/legend-lf-&-safari-resort-PA43458', '+27 11 729 6700', 'reservations@legendlodges.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leisure Isle Lodge', 3, -34.06626, 23.05572, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/leisure-isle-lodge-PA44975', '443 840 462', 'lilodge@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leopard Corner', 3, -28.37736, 32.41855, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/leopard-corner-PA8133', '+27 35 590 1667', 'info@leopardcorner.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leopard Mountain Game Lodge', 3, -27.81251, 32.03201, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mkuze/leopard-mountain-game-lodge-PA2203', '355 958 218', 'info@leopardmountain.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leriba Coastal lf Lodge', 3, -29.34336, 31.37418, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/princes-grant/leriba-coastal-lf-lodge-PA43439', '+27 12 660 3300 ', 'marketing@leriba.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leriba lf Lodge', 3, -23.97057, 31.16923, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/leriba-lf-lodge-PA43437', '+2712 660 3300', 'marketing@leriba.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leriba Hotel and Spa', 3, -25.84481, 28.17769, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/leriba-hotel-and-spa-PA1009', '+27 12 660-3300', 'sales@leriba.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Leshiba Wilderness', 3, -23.0066, 29.5774, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/louis-trichardt/leshiba-wilderness-PA9319', '+27 15 593 0076/ +27 11 483 1841', 'lodge@leshiba.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Liabela Bed & Breakfast', 9, -29.82803, 30.86537, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pinetown/liabela-bed-&-breakfast-PA45547', '+2731 702  2161', 'reception@liabela.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Liapolis Guest House', 2, -29.8326, 30.85528, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pinetown/liapolis-guest-house-PA7151', '+27 31 709 5013', 'hazel.bond@liapolis.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Libby''s Lodge', 2, -28.45864, 21.24411, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/libbys-lodge-PA1210', '+27 54 332-2661', 'lgerber@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Libertas Guest House', 2, -25.85109, 25.64376, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/mafikeng/libertas-guest-house-PA7487', NULL, 'info@lgh.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Licorna Holiday Apartments', 2, -29.71578, 31.09217, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/licorna-holiday-apartments-PA43939', '+27 31 561 2344/2973', 'licorna@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Life & Leisure', 3, -33.93635, 18.86717, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/life-&-leisure-PA8143', '+27 21 886 6955', 'info@lifeandleisure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lighthouse In', 2, -26.16158, 28.25491, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/boksburg/lighthouse-inn-PA45820', NULL, 'info@lighthouse-inn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ligtoring Gastehuis', 1, -28.7318, 32.06476, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/ligtoring-gastehuis-PA6304', '+27 35 786 0479', 'ligtoringjohan@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lilitha Guest House and Conferencing', 2, -32.33005, 28.14099, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/butterworth/lilitha-guest-house-and-conferencing-PA43443', '+27 47 491 0381', 'lilithaguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lilliz Guest House', 2, -31.58167, 28.76322, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/lilliz-guest-house-PA45581', '+2747 5314757', 'lilliz@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lily Lo Guest House', 1, -23.91785, 29.53064, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/lily-lo-guest-house-PA43442', '+27 15 263 6013', 'cdrooftrusses@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lions Rest Guest House', 3, -25.85109, 25.64376, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/mafikeng/lions-rest-guest-house-PA1376', '+27 18 381 7330', 'info@mafikeng-accommodation.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lions River Country Cottages', 3, -29.43453, 30.14725, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/lions-river/lions-river-country-cottages-PA6314', '+27 33 234 4543', 'info@lrcc.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Eden Guest Lodge', 3, -26.73192, 27.84502, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vanderbijlpark/little-eden-guest-lodge-PA36109', '+27 16 932 2124', 'bookings@littleedenguestlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Eden St Lucia', 2, -28.37909, 32.41457, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/little-eden-st-lucia-PA45465', '+27 35 590 1527', 'info@littleedensaintlucia.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Farm Lodge', 1, -29.25307, 24.49711, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/little-farm-lodge-PA45909', '+27 83 225 8275', 'llittlefarm@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Orchard B&B', 2, -34.01756, 18.45861, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/little-orchard-b&b-PA43432', '+27 21 794 1280', 'little-orchard@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Rock Accommodatio', 2, -26.12946, 27.84656, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/little-rock-accommodation-PA43429', '+27 11 764 4623', 'littlerock@eaglemail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Little Swift Chalets', 2, -25.82075, 27.74082, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/skeerpoort/little-swift-chalets-PA206', NULL, 'damsig@swiftchalets.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Liz at Lancaster Guest House', 3, -26.12782, 28.02445, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/rosebank/liz-at-lancaster-guest-house-PA1025', '+27 11 442-8083', 'info@lizatlancaster.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lodge on The Lake', 2, -34.00018, 22.63654, 'http://www.aaholidays.co.za/accommodation/0/0/lodge-on-the-lake-PA1897', '+27 44 877 1097', 'info@lodgeonthelake.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lodge on the Lake', 4, -33.99222, 22.58333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/lodge-on-the-lake-PA45910', '448 771 097', 'info@lodgeonthelake.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Loerie Lodge Corporate Guest House', 3, -23.92836, 31.12809, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/loerie-lodge-corporate-guest-house-PA943', '+27 15 781 7237', 'info@loerielodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Log Cabin and Settlers Village', 2, -24.93213, 30.84206, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/log-cabin-and-settlers-village-PA321', '+27 13 767 1974', 'llprod@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lombardy Estate Boutique Hotel and Conference Venue', 3, -25.79099, 28.36084, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/lombardy-estate-boutique-hotel-and-conference-venue-PA678', '+27 87 725 5591', 'frontoffice@lombardy.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Longtom Farm Guest House', 3, -25.12221, 30.47341, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/lydenburg/longtom-farm-guest-house-PA43423', '+2713 235 2749 ', 'longfarm@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Loodswaai Game Lodge', 2, -25.30076, 28.59214, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/dinokeng-game-reserve/loodswaai-game-lodge-PA43421', '+27 82 083 9424', 'loodswaai@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lord Fraser Guest House', 1, -29.72837, 27.03669, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/wepener/lord-fraser-guest-house-PA43418', '+27 82 579 1822', 'info@lordfraser.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lotus Blossom', 1, -25.84011, 28.23623, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/lotus-blossom-PA2087', '+27 12 662 0404', 'lotusblossomaccommodation@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lotz of Joy Guest House', 2, -33.87994, 18.57452, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/lotz-of-joy-guest-house-PA4168', ' +27 21 930 0180', 'info@lotzofjoy.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lowestoffe Country Lodge (Hogsback Area)', 2, -32.59517, 26.93226, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/hogsback/lowestoffe-country-lodge-hogsback-area-PA45082', '+27 45 843-1716', 'lowestoffe@hogsback.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lowveld Lodge- First Resorts', 2, -25.32563, 31.01967, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/lowveld-lodge-first-resorts-PA44905', '137 500 206', 'lowveld@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lupus Den Country House', 3, -33.4462, 25.56622, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/lupus-den-country-house-PA857', '+27 72 181 4750', 'lupusden@srvalley.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lydenburg Manor Guest House', 3, -25.09788, 30.4543, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/lydenburg/lydenburg-manor-guest-house-PA42316', '27 13 235 2099', 'manorgh@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Lynnsview Guest House', 2, -34.16278, 18.43148, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/simons-town/lynnsview-guest-house-PA42400', '+27 21 786 1966', 'lynnsview@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mabalingwe Nature Reserve', 2, -24.89752, 28.28107, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mabalingwe-nature-reserve/mabalingwe-nature-reserve-PA988', '+ 27 (014) 736 9000 ', 'info@mabalingwe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mac Dougall Lodge', 1, -28.76445, 24.75451, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/mac-dougall-lodge-PA45748', '538 318 777', 'macdougall.lodge@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Maccauvlei on Vaal Country Lodge & Conference Centre', 2, -26.68196, 27.94295, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/viljoensdrift/maccauvlei-on-vaal-country-lodge-&-conference-centre-PA45535', '+27 16 420-2000', 'res@maccauvleionvaal.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Machauka Lodge', 2, -23.668, 27.74883, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/lephalale/machauka-lodge-PA42317', '27 83 230 8600', 'info@machaukalodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mackaya Bella Guest House', 2, -29.87355, 30.98502, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/glenwood/mackaya-bella-guest-house-PA6335', '+27 31 205-8790', 'info@mackayabella.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Madi a Thavha Mountain Lodge', 2, -23.05, 29.9, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/louis-trichardt/madi-a-thavha-mountain-lodge-PA36025', NULL, 'info@madiathavha.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Madrid Farm Cottages', 2, -28.53303, 28.51536, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/madrid-farm-cottages-PA42318', '2758 256-1098', 'info@madridfarm.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magadzavane Lodge- Mlawula Nature Reserve', 1, -26.20765, 32.00281, 'http://www.aaholidays.co.za/accommodation/swaziland/mlawula-nature-reserve/magadzavane-lodge-mlawula-nature-reserve-PA45852', '+(268) 2415 0178', 'mnr@africaonline.co.sz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magalies Park', 2, -25.81088, 27.76647, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort/magalies-park-PA36204', '(012) 207 9000', 'info@magaliespark.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magalies Tranquil Have', 2, -25.90778, 27.59, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/hekpoort/magalies-tranquil-haven-PA45533', '+27 14 576-1143', 'info@tranquilhaven.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magaliqua Guest House', 2, -26.08661, 27.79368, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/krugersdorp/magaliqua-guest-house-PA36037', '+27 86 111 5369/ +27 11 954 3129', 'info@magaliqua.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magellans Passage Guest House', 3, -34.20024, 18.44707, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/simons-town/magellans-passage-guest-house-PA42322', '27 21 786-5291', 'manager@magellanspassage.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Magic Camps Bay', 3, -33.9571, 18.38778, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/camps-bay/magic-camps-bay-PA2610', ' +27 21 438 9805', 'info@magic-camps-bay.de')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Maebaskloof Hotel - Orion Group', 2, -23.85, 30.03333, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/maebaskloof/maebaskloof-hotel--orion-group-PA42597', NULL, 'gmmaebas@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mahikeng Lodge', 2, -25.99678, 27.31544, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/syferbult/mahikeng-lodge-PA42336', NULL, 'byron@mahikeng.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mahlakapese Guest House', 1, -28.87804, 28.05566, 'http://www.aaholidays.co.za/accommodation/lesotho/leribe/mahlakapese-guest-house-PA45480', '+(266) 5252-0000 ', 'mahlakapese@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Maison Sur Le Parc', 2, -25.78973, 28.24585, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/maison-sur-le-parc-PA42339', '27(0)12 346 8826', 'enquiries@maisonsurleparc.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Majuba Lodge', 2, -27.73769, 29.93381, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/newcastle/majuba-lodge-PA42340', '(034) 315 5011', 'majuba@newcastle.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Makarios on Sea', 3, -33.99303, 22.56058, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/makarios-on-sea-PA4199', '448 729 019', 'info@makariosonsea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Makro Lodge', 2, -26.21012, 24.92824, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/setlale/makro-lodge-PA42342', '+27 82 789 5575', 'makrolodge@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Makhaya Guest House', 2, -26.17905, 27.99766, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melville/makhaya-guest-house-PA35972', '114 826 036', 'makhaya@live.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mamagalie Mountain Lodge', 2, -25.81318, 27.52487, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/magaliesberg-range/mamagalie-mountain-lodge-PA1426', '27 72 568 080627 84 513 9480', 'info@mamagalie.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mams Megatow', 1, -31.06907, 24.44392, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/hanover/mams-megatown-PA45911', '536 430 333', 'mams-mega@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mandalay B&B and Conference Centre', 2, -29.8, 31.02834, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/mandalay-b&b-and-conference-centre-PA8168', '+27 31 563-9706', 'enquiries@mandalay.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Manora Guest House', 2, -30.54094, 29.41367, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/manora-guest-house-PA44016', '+27 39 727-2963', 'bonnieauret@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mantenga Cultural Village - Mantenga Nature Reserve', 1, -26.4, 31.16667, 'http://www.aaholidays.co.za/accommodation/swaziland/ezulwini/mantenga-cultural-village--mantenga-nature-reserve-PA45853', NULL, 'mnr@africaonline.co.sz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mantenga Lodge', 2, -26.43019, 31.18077, 'http://www.aaholidays.co.za/accommodation/swaziland/ezulwini/mantenga-lodge-PA8872', '00268 2416-1049', 'reservations@mantengalodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mantiteng Guest House', 1, -24.83984, 31.04641, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/bushbuckridge/mantiteng-guest-house-PA45876', '+27 13 799 1066', 'mantiteng@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Manyane Resort', 2, -25.16667, 27.05, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/manyane-resort-PA640', '145 551 000', 'marketing@ldenleopardresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Margaret''s Place', 2, -26.19299, 28.10648, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kensington/margarets-place-PA42195', '+27 11 616 0326', 'mea@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Margate Place Guest House', 3, -33.98541, 25.66586, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/margate-place-guest-house-PA45083', '415 835 799', 'mplace@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Margate Sands- First Resort', 3, -30.86234, 30.37018, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/margate-sands-first-resort-PA44107', '+27 39 312 8100', 'faniec@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marichel 4', 3, -29.52104, 31.22708, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/marichel-4-PA44901', NULL, 'olbean@cluesnet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marina Martinique B&B', 2, -34.0783, 24.91231, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/marina-martinique-b&b-PA44105', '+27 42 292 0000', 'info@mmbnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marinas Guest House', 2, -31.41383, 23.94288, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/richmond/marinas-guest-house-PA8172', NULL, 'marinasguest@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marita''s Guest House', 2, -25.76267, 28.20019, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/maritas-guest-house-PA42391', '27 123 419 976', 'maritas@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marlicht Holiday Resort', 2, -30.8561, 30.37646, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/marlicht-holiday-resort-PA42392', '27-39-3121052', 'marlicht@uasa-ops.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marmalade Boutique Hotel', 3, -29.78536, 31.03546, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/marmalade-boutique-hotel-PA45200', '+2731 563 8630', 'res@marmaladebh.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Marren House', 2, -33.99631, 25.66619, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/marren-house-PA44019', '27 415 834 384', 'info@marrenhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mashudu Lodge', 2, -24.38075, 28.13826, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/mashudu-lodge-PA44025', '+27 14 721-9912 ', 'info@smartearthmoving.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Masibambane Guest House', 2, -25.74919, 27.26149, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/masibambane-guest-house-PA44028', '+27 14 537 2046 ', 'masibam@mweb.co.za0')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Masorini Bush Lodge', 2, -23.88066, 31.1284, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/masorini-bush-lodge-PA44029', '+27 15 781-3579', 'info@masorini.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Massinga Beach Lodge', 2, -23.87354, 35.38826, 'http://www.aaholidays.co.za/accommodation/mozambique/inhambane/massinga-beach-lodge-PA45802', NULL, 'gm@massingabeach.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Matoppo In', 3, -32.35164, 22.58433, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/matoppo-inn-PA4235', '+27 23 415 1055', 'matoppoinn@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mattanu Private Game Reserve', 3, -28.339923, 24.47739, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/mattanu-private-game-reserve-PA44030', '27 538 313 036', 'info@mattanu.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Maylodge Country Cottages', 2, -32.59301, 26.9294, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/hogsback/maylodge-country-cottages-PA44082', '+27 45 962 1016', 'info@maylodge.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mazeppa Bay Hotel', 2, -32.47762, 28.65101, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mazeppa-bay/mazeppa-bay-hotel-PA44154', '+27 47 498 0033', 'mazeppabayhotel@sainet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mbazwana In', 1, -27.49499, 32.58098, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/sodwana-bay/mbazwana-inn-PA6383', '(035) 5710471 / 5710473', 'sebe.nzuza@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mbingu Lodge', 1, -25.34275, 31.78305, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/mbingu-lodge-PA42406', '+27 11 849 9026', 'ksnell@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mbotyi River Lodge', 1, -31.45964, 29.73467, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mbotyi/mbotyi-river-lodge-PA41020', '+2782 674 1064', 'info@mbotyi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mcallisters Guest House', 3, -29.83435, 31.01681, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-city/mcallisters-guest-house-PA42407', ' (031) 303 4991/2', 'liza@mcallisters.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mdoni House Guest Lodge', 2, -30.72236, 30.46148, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-shepstone/mdoni-house-guest-lodge-PA6387', '+27 39 695 1215', 'stay@mdoni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Me Casa Guest House', 2, -33.84527, 25.63938, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/me-casa-guest-house-PA44031', '+27 41 466-9891', 'info@mecasa.biz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Meander In', 2, -32.98913, 27.89635, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/meander-inn-PA8185', '437 262 310', 'meanderinn@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Meander Manor Exclusive Guest Lodge', 3, -29.5129, 31.17124, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shakas-rock/meander-manor-exclusive-guest-lodge-PA43100', '+27 32 525 8107', 'info@meandermanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Medindi Manor', 2, -33.95009, 18.48164, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/medindi-manor-PA44088', '+27 21 686 3563', 'reservations@medindimanor.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Meerkat Manor', 1, -30.7275, 25.09568, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/meerkat-manor-PA45716', '+27 51 753-0511', 'meerkatmanor1@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mein Heim Estate', 1, -28.79534, 24.6104, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/mein-heim-estate-PA45772', '+27 83 281 4062', 'meinheimestate@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Melrose Guest Farm', 2, -32.19014, 24.54852, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/melrose-guest-farm-PA44032', '+27 49 891 0532', 'melroseguestfarm@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Melville International Backpackers', 2, -26.17837, 28.00249, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melville/melville-international-backpackers-PA45111', '+27 11 482 5797', 'm-i-b@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mentor Guest House', 1, -31.88782, 26.88667, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/mentor-guest-house-PA45044', NULL, 'info@mentorguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Meridian Hospitality Guest House', 3, -26.1481, 28.15414, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/meridian-hospitality-guest-house-PA44033', '+ 27 11 609 5574', 'info@meridianhospitality.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Merino Inn Hotel', 1, -30.7076, 25.09964, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/merino-inn-hotel-PA2107', '051 753 0781/2/3', 'merinoinnhotel@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mermaid Guest House', 2, -34.80149, 20.049, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/struisbaai/mermaid-guest-house-PA44090', '+27 28 435 7767', 'info@mermaidguesthouse.com   ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Merry Pebbles Resort', 2, -25.09539, 30.76597, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/sabie/merry-pebbles-resort-PA35931', '+27 13 764 2266/ 7641502', 'info@merrypebbles.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Merwehuis B&B', 2, -26.18976, 27.99683, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/merwehuis-b&b-PA45579', '+2711 837 3887', 'hans@merwehuis.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mhlangeni Lodge Bed and Breakfast', 2, -30.81542, 30.39801, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/uvon/mhlangeni-lodge-bed-and-breakfast-PA44034', '+27 39 315 0628', 'mhlangeni@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Midlands Saddle & Trout - First Resorts', 2, -29.21925, 30.00007, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mooi-river/midlands-saddle-&-trout--first-resorts-PA44911', '332 632 758', 'midsaddletrout@firstresorts.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mikasa Guest House', 1, -33.00301, 27.92378, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/mikasa-guest-house-PA45185', '437 211 643', 'info@mikasaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Millard Crescent B&B', 2, -33.98964, 25.64818, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/millard-crescent-b&b-PA8187', NULL, 'johann.v@remaxbay.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Millbury Guest House', 3, -33.96158, 25.59017, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/millbury-guest-house-PA44037', '+27 41 374 2546', 'info@millbury.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Milner House', 2, -28.75149, 24.7741, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/milner-house-PA45084', '+27 53 831 6405', 'milner@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Minivillas', 1, -29.366, 31.34601, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/blythedale-beach/minivillas-PA6407', ' (032) 551 1277', 'minivillas@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Misty Peaks', 3, -28.81396, 29.53615, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/misty-peaks-PA44038', '+27 36 468 1158', 'kevin@mistypeaks.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Misty River', 2, -26.33709, 27.92467, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/misty-river-PA42447', NULL, 'bookings@mistyriver.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mkhaya Game Reserve', 2, -26.60474, 31.73095, 'http://www.aaholidays.co.za/accommodation/swaziland/big-bend/mkhaya-game-reserve-PA41639', '(+268) 528 3943 / 4 ', 'reservations@giggameparks.org')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mmakosha Lodge', 9, -25.40672, 28.28628, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/hammanskraal/mmakosha-lodge-PA45583', '+27(0)12 545 4086', 'benboy@b2properties.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mohale Lodge', 1, -29.30832, 27.4916, 'http://www.aaholidays.co.za/accommodation/lesotho/maseru/mohale-lodge-PA43992', '26 622 936 432', 'crsmoh@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mohatjane Lodge', 3, -23.36444, 29.32263, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/dendron/mohatjane-lodge-PA42455', '27 76 392 4999', 'info@mohatjane.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Monate Game Lodge', 2, -24.70331, 28.38845, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/modimolle/monate-game-lodge-PA36028', '+27 14 718-7000', 'info@monatelodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mondior Manor Guest Accommodatio', 2, -28.75702, 24.7655, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/mondior-manor-guest-accommodation-PA42457', '538 321 971', 'info@mondiormanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Monose Guest House', 3, -27.68767, 23.05743, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/monose-guest-house-PA42458', '537 231 901', 'reservations@monoseguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mont Fleur - Wilderness', 2, -33.99174, 22.58269, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/mont-fleur--wilderness-PA1638', '+27 44 877 0750', 'montfleur@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mont-Aux-Sources-Hotel', 2, -30.7, 30.28333, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/montauxsourceshotel-PA6528', NULL, 'gmmas@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Monte Video Guest House| Conference and Function Venue', 2, -33.63799, 19.02386, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wellington/monte-video-guest-house', NULL, '(+ 27) 21 873 4765')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Monte Vista Guest House', 3, -29.01733, 29.87607, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/estcourt/monte-vista-guest-house-PA42460', '2736 352-6471', 'montevista@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mooidraai Guest House', 2, -30.5511, 29.42595, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/mooidraai-guest-house-PA6423', ' (039) 727 3617', 'mooidraai@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Moolmanshoek Private Game Reserve', 2, -28.87369, 27.87811, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/ficksburg/moolmanshoek-private-game-reserve-PA42463', '27 51 933 2220 / +27 51 933 3729', 'info@moolmanshoek.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Moon River Guest House', 2, -28.4577, 21.24814, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/moon-river-guest-house-PA42464', '(+27) 54 332 1847', 'info@moonriverguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Moontide Guest Lodge', 3, -33.99393, 22.58479, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/moontide-guest-lodge-PA9192', NULL, 'moontide@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Moorcroft Manor', 3, NULL, NULL, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/himeville/moorcroft-manor-PA42465', ' 27 33 702 1967', 'info@moorcroft.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mopane Bush Lodge', 3, -22.34398, 30.04195, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mapungubwe-national-park/mopane-bush-lodge-PA42466', '27 15 534 7906 ', 'mopanebushlodge@limpopo.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mopanie Guest House', 1, -27.69162, 23.04264, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/mopanie-guest-house-PA45385', '+27 53 723 2519', 'karinkalp@polka.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mopipi B&B', 1, -25.35, 26.53333, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/madikwe-game-reserve/mopipi-b&b-PA42507', '27 83 451 6096', 'mopipi@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Morgan Bay Hotel', 3, -32.71412, 28.32964, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/morgans-bay/morgan-bay-hotel-PA42508', '2743 841 1062', 'morganbay@telkomsa.net ; info@morganbayhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Morning Star Express Hotel', 2, -25.75233, 28.19479, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/morning-star-express-hotel-PA35938', '+27(0) 12 442 0600', 'info@morningstarhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Morulana Guest House', 1, -26.07613, 28.23907, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kempton-park/morulana-guest-house-PA45478', '+27 11 391 4952', 'morulana@imaginet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Motozi Lodge', 1, -25.80855, 27.97119, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/motozi-lodge-PA45407', '012-371-3810', 'info@motozi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mount Ceder', 2, -33.3706, 19.30741, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ceres/mount-ceder-PA4312', ' +27 23 3170848', 'info@mountceder.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mount Currie In', 2, -30.54665, 29.42399, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/mount-currie-inn-PA6441', '(039) 727 2178', 'reservations@mountcurrie.')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mount Edgecombe lf Lodge', 3, -29.7144, 31.04761, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/mount-edgecombe-lf-lodge-PA6426', '(031) 502 1555', 'info@afrolf.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mount Sheba A Forever Lodge', 2, -24.93985, 30.71478, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/pilgrims-rest/mount-sheba-a-forever-lodge-PA385', '+27 13 768 1241', 'shebares@foreversa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mount Sierra - First Resorts', 2, -33.93392, 18.41076, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/mount-sierra--first-resorts-PA44851', '+27 21 422 0602', 'info@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain Inn Hotel', 2, -26.34082, 31.15212, 'http://www.aaholidays.co.za/accommodation/swaziland/mbabane/mountain-inn-hotel-PA43921', '+(268) 2404 2781', 'info@mountaininn.sz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain Manor Guest House & Self Catering', 2, -33.93525, 18.41655, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/gardens/mountain-manor-guest-house-&-self-catering-PA8203', '+27 21 461 7200 ', 'info@mountainmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain Shadows Country Manor', 2, -33.72429, 18.95591, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/mountain-shadows-country-manor-PA4320', ' +27 21 862 3192', 'enquiries@mountainshadows.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain Shadows Hotel', 2, -31.23333, 27.83333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/elliot/mountain-shadows-hotel-PA44939', '(045) 931 2233', 'ria1@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain View B&B', 2, -27.76544, 30.78062, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/vryheid/mountain-view-b&b-PA45308', '(034) 980 1199', 'mountainview@vryheid.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountain View Swellendam', 1, -34.01667, 20.43333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/mountain-view-swellendam-PA45576', '+2728 5143799', 'mountainview@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mountainview In', 2, -28.27414, 29.12846, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/mountainview-inn-PA42515', '27 58 623-0255', 'bookings@bergviewpringles.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mpekweni Beach Resort', 2, -33.6, 26.88333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/mpekweni-beach-resort-PA42523', '27 40 676-1026', 'info@mpekweni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mt Bijoux Preferred Accommodatio', 3, -33.80253, 18.46178, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/mt-bijoux-preferred-accommodation-PA44175', '+21 21 554 1150', 'info@mtbijoux.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mthatha Rest Guest House', 1, -31.58173, 28.76425, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/mthatha-rest-guest-house-PA45314', '475 310 837', 'mthatharest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Muckleneuk Lodge', 2, -25.76277, 28.2024, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/muckleneuk-lodge-PA42525', '2712 4405691', 'info@mlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mufasa Lodge', 2, -23.95, 31.11667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/mufasa-lodge-PA745', '2715 781-5514', 'MufasaLodge@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mulberry Lane Suites', 2, -24.93333, 30.83333, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/mulberry-lane-suites-PA45212', '+27 13 767 1950', 'africasilksfarm@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Muzuri', 2, -34.03771, 24.92274, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/muzuri-PA45118', '+27 42 293 4190 ', 'MuzuriTourism@cs.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Mvula House Bed & Breakfast', 2, -28.76756, 32.12282, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/mvula-house-bed-&-breakfast-PA41030', '+27 35 753 5656', 'mvulahouse@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('My Den Beachfront B&B and Self-Catering', 2, -30.72153, 30.4636, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-shepstone/my-den-beachfront-b&b-and-selfcatering-PA2051', '27 39 682 6096', 'myden@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('N6 Road Lodge', 2, -30.72381, 26.70814, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/n6-road-lodge-PA45067', '516 333 383', 'info@n6roadlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nababeep Hills Guest House', 1, -29.59167, 17.78565, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/nababeep/nababeep-hills-guest-house-PA44767', '+27 27 713-8083', 'nababeephills@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nahoon Mouth Guest House', 2, -32.98333, 27.86667, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/nahoon-mouth-guest-house-PA42527', '(043) 735 1294', 'nahoonmouth@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Naleli Guest House', 1, -28.87804, 28.05566, 'http://www.aaholidays.co.za/accommodation/lesotho/leribe/naleli-guest-house-PA45209', '(+266) 2240 0409', 'mathafengm@stellar.co.ls')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Namakwari Lodge', 2, -27.69968, 23.05088, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/namakwari-lodge-PA45207', '+2753 723 2987', 'reservations@namakwari.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Namkelekile Accommodatio', 1, -31.63261, 29.54223, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-st-johns/namkelekile-accommodation-PA42529', '047-5641945', 'yquma@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nanna Rous Town House', 2, -30.71735, 25.09799, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/nanna-rous-town-house-PA45240', '051-753 0985', 'nannarous@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Natalia Lodge', 1, -30.54555, 29.42652, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/natalia-lodge-PA45208', '397 274 657', 'info@natalialodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Natanja Guest House B&B', 3, -25.83221, 28.1921, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/natanja-guest-house-b&b-PA1026', '2712 6644618', 'natanja@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ndaba Guest Lodge', 2, -28.55714, 29.77025, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/ndaba-guest-lodge-PA45317', '+27 36 631-1969', 'ndabaguestlodge@yahoo.co.uk')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ndabushi Bushveld Retreat', 1, -24.22133, 30.80395, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/ndabushi-bushveld-retreat-PA42543', '27 15 7933195', 'info@ndabushi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ndalo Hotel and Conferencing', 2, -25.95623, 30.56547, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/badplaas/ndalo-hotel-and-conferencing-PA45307', '178 441 354', 'hloni.thabethe@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ndiza Lodge & Cabanas', 3, -28.37913, 32.41463, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/ndiza-lodge-&-cabanas-PA6468', '(035) 590 1113/ 082 92028', 'info@ndizastlucia.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nedile Lodge', 3, -27.43229, NULL, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/nedile-lodge-PA722', '828 548 841', 'info@nedile.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nelson Mandela Museum', 2, -31.59283, 28.78696, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/nelson-mandela-museum-PA45476', '+27(0) 47 532 5110', 'mandelamuseum2@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nelspoortjie Karoo Guest Farm', 1, -29.66833, 22.74389, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/prieska/nelspoortjie-karoo-guest-farm-PA45745', '2753 353 3163', 'nelspoortjie@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Neptune''s Rest', 3, -34.14252, 18.42528, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/fish-hoek/neptunes-rest-PA44059', '+27 21 782 1981', 'pdnepres@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('New Life Bed and Breakfast', 1, -26.14764, 28.15754, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/new-life-bed-and-breakfast-PA44942', '+2711 453-9700', 'serena530@hotmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nexbed Hotel', 2, -25.7685, 29.45504, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/nexbed-hotel-PA42545', '+27 13 282 1011', 'info@nexbed.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ngena Guest House', 2, -25.85918, 28.15752, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/ngena-guest-house-PA42546', '+27)12 653 0673', 'info@ngena.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nibela Lodge', 2, -27.97136, 32.4361, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/nibela-lodge-PA6475', '27 11 267-8500', 'info@dreamvacs.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nicorene Bed & Breakfast Self-Catering Backpacker', 1, -29.91269, 30.94551, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/nicorene-bed-&-breakfast-selfcatering-backpacker-PA35959', '+27 31 469 3017', 'klopperi@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('NiederHeim B&B', 2, -33.88562, 18.61532, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bellville/niederheim-b&b-PA43592', '+27 21 913 2899', 'info@niederheim.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nkosi Sikelela iAfrica Guest Houses', 2, -33.81536, 18.47371, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/nkosi-sikelela-iafrica-guest-houses-PA44886', '+2787 807 8362', 'dwayne@dtioffice.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nolangeni Hotel', 2, -30.55175, 29.42515, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/nolangeni-hotel-PA42553', '397 271 252', 'info@nolangeni.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nolapeace Bed and Breakfast', 1, -32.99796, 27.86707, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/nolapeace-bed-and-breakfast-PA44913', '437 414 485', 'info@nolapeace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nolas Bed and Breakfast', 2, -31.9072, 26.89131, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/nolas-bed-and-breakfast-PA42557', '27 45 838-2391', 'nolasbb@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nomndeni Fumanekile Lodge', 2, -25.48311, 30.98612, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/nomndeni-fumanekile-lodge-PA9803', NULL, 'stephan@nomndeni.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nonma In', 1, -27.89883, 31.64795, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/nonma/nonma-inn-PA45194', '+27 35 831 0062', 'reservations@nonmainn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nonma Lodge', 1, -27.6167, 32.0333, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/nonma/nonma-lodge-PA1267', NULL, 'sebe.nzuza@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nsele Safaris', 2, -24.46259, 31.11286, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/nsele-safaris-PA44756', '(+27) 15 793 2443', 'reservations@nsele.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nthatuoa Guest House', 2, -31.58601, 28.75993, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/nthatuoa-guest-house-PA42571', '27 47 532-4691', 'nthatuoaguesthouse@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nutmeg Guest House', 1, -29.48311, 30.22934, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/howick/nutmeg-guest-house-PA44153', '+27 33 3305497', 'info@nutmegbnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Nyl Retreat', 2, -24.7, 28.40611, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/modimolle/nyl-retreat-PA44938', NULL, 'nylretreat@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('O''Hannas Guest House', 2, -27.91792, 24.83894, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/jan-kempdorp/ohannas-guest-house-PA44935', NULL, 'ohannas@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oak Park Guest House', 3, -30.54075, 29.41465, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/oak-park-guest-house-PA6505', ' (039) 727 2453/0828244392', 'oakpark@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oak Rest B&B', 2, -28.74583, 24.78272, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/oak-rest-b&b-PA44738', '(0)53842-0653', 'oakrest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oakelands Studio Apartments', 2, -25.78103, 28.36232, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/oakelands-studio-apartments-PA45112', NULL, 'stay@pixa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oakhampton B&B', 2, -32.99137, 27.91785, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/oakhampton-b&b-PA1729', '+27 43 726 9963', 'emslieco@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oakhurst Hotel', 2, -33.95817, 22.46155, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/oakhurst-hotel-PA9204', '448 747 130', 'reservations@oakhursthotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oasis Country Lodge', 1, -31.78079, 18.62401, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/klawer/oasis-country-lodge-PA4388', '+27 27 216 1520', 'info@oasiscountrylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ocean Blue Accommodatio', 2, -29.54069, 31.21448, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/ocean-blue-accommodation-PA42577', '2772 062-5543 ', 'admin@oblue.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ocean Hideaway', 3, -30.03427, 30.90351, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/ocean-hideaway-PA6513', '(031) 904 1994', 'reception@oceanhideaway.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ocean Park Guest House', 3, -30.20777, 30.7944, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umkomaas/ocean-park-guest-house-PA7137', '+27 39 973 2657', 'info@oceanpark.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ocean Reef Hotel', 3, -29.29261, 31.43471, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/zinkwazi-beach/ocean-reef-hotel-PA36290', '+27 32 485 3776', 'gm@oceanreefhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ocean View Hotel', 1, -31.9849, 29.14924, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/coffee-bay/ocean-view-hotel-PA44459', '047-5752005', 'info@oceanview.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oceansnest Guest House', 2, -33.80537, 18.46606, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/oceansnest-guest-house-PA44974', '021 554 3191/93', 'oceansnest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oceanview BnB', 2, -34.81094, 20.04476, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/struisbaai/oceanview-bnb-PA4401', '+27 28 435 6254', 'oceanviewbb@vodacomail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Okiep Country Hotel', 1, -29.59753, 17.88149, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/okiep/okiep-country-hotel-PA2385', '+ 2727 744 1000 ', 'okiep@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Old Mill Guest House', 2, -29.79191, 31.03396, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/old-mill-guest-house-PA45337', '2731 563-9296', 'deana@bluemoon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Old Oak Guest House', 2, -33.88909, 18.65734, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bellville/old-oak-guest-house-PA42586', '27 21 910 0703', 'info@oldoakguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oleander Guest House', 3, -28.75222, 24.77427, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/oleander-guest-house-PA45773', '538 327 088', 'info@oleander.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Olievenfontein Private Game Reserve', 3, -24.29715, 28.11519, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/olievenfontein-private-game-reserve-PA40981', NULL, 'olievenfontein@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Olive Grove Country Lodge and Wedding Venue', 1, -26.65606, 28.58937, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/balfour/olive-grove-country-lodge-and-wedding-venue-PA42587', '27 17 779-0346 ', 'olivegrovelodge@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Olive Grove Guest Farm', 2, -32.30226, 22.34567, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/beaufort-west/olive-grove-guest-farm-PA1802', '+27 23 414 3397', 'info@olivegrove.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Olive House', 2, -25.8488, 28.17141, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/olive-house-PA42588', '27-12-6602208 ;082-8940735 ', 'olivehouse236@gmail.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('On The Spot B&B at St Francis Bay', 3, -34.17392, 24.83616, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/st-francis-bay/on-the-spot-b&b-at-st-francis-bay-PA36143', '042-294 0846', 'onthespot@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('On The Vermont Guest House', 3, -34.41645, 19.14741, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/on-the-vermont-guest-house-PA42590', '2728 316 2873 ', 'info@onthevermont.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('One Fountain B&B', 1, -28.53487, 24.52485, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/barkley-west/one-fountain-b&b-PA8235', NULL, 'onefountainBB@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Onze Rust Guest House', 1, -30.72898, 25.09191, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/onze-rust-guest-house-PA45634', '828 893 057', 'prvj1@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Opikopi Guest House', 3, -25.80971, 28.27273, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/opikopi-guest-house-PA1765', '+27 833 80 40 50 ', 'info@opikopi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Orange Grove Farm', 3, -33.74272, 19.78857, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/robertson/orange-grove-farm-PA45034', '(023) 626 6442', 'info@ogf1812.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Orange Valley Guest Farm And Adventures', 2, -30.6486, 25.48261, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/orange-valley-guest-farm-and-adventures-PA8238', '+27 51 755 5057 ', 'orangevalley@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Orchards Farm Cottages', 2, -25.45287, 31.95513, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/komatipoort/orchards-farm-cottages-PA7410', '+27 13 793 8417 ', 'info@orchardsfarmcottages.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oryx Trail Game Lodge', 3, -27.49906, 23.40199, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/oryx-trail-game-lodge-PA45113', '537 124 926', 'office@oryxtrail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ou Skool Guest House', 2, -28.75218, 20.99612, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/keimoes/ou-skool-guest-house-PA42600', '544 640 125', 'info@ouskoolguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oude Pastorie Kothuise', 2, -32.17062, 25.6155, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/oude-pastorie-kothuise-PA42610', '27 48 881-3011', 'bruweri@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ouplaas Country House Wedding and Conference Centre', 3, -25.98476, 25.73385, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/ottosdal/ouplaas-country-house-wedding-and-conference-centre-PA42611', '27 18 571-1388', 'ouplaas@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Oyster Creek Lodge', 3, -34.039, 23.0175, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/oyster-creek-lodge-PA4466', '+27 44 382 0808', 'oystercreek@jhgroup.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palapa Place Self Catering Accommodatio', 2, -29.68186, 31.11099, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umdloti-beach/palapa-place-self-catering-accommodation-PA42613', '27 31 568-2149', 'palapaplace@telkomsa.net.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Beach Guest House', 3, -33.98975, 25.67303, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/palm-beach-guest-house-PA42616', '(0)	41	 583 2493', 'palmbeachguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Court Guest Villa', 3, -25.42859, 31.95238, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/komatipoort/palm-court-guest-villa-PA45572', '+27 13 793 7308', 'palmcourt@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Haven Lodge', 1, -23.04624, 29.90466, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/louis-trichardt/palm-haven-lodge-PA45318', NULL, 'palmhaven@xnets.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm House', 3, -34.00008, 18.46506, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/palm-house-PA440', '+2721 761 5009', 'info@palmhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm House B&B', 1, -33.31385, 26.53269, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/palm-house-b&b-PA45747', '+27 48 881-4229', 'marilynn.cavendish-d@aasa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Lodge', 2, -31.58913, 28.77614, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/palm-lodge-PA45115', '475 312 079', 'palm@mthatha.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Park- First Resort', 2, -30.86303, 30.36967, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/palm-park-first-resort-PA42619', NULL, 'palmpark@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palm Springs B&B and Self Catering', 1, -32.33272, 28.14381, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/butterworth/palm-springs-b&b-and-self-catering-PA42621', '27 31 572-5855', 'laks@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palmhof Chalets', 1, -28.7745, 20.61297, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kakamas/palmhof-chalets-PA45142', '544 311 111', 'admin@palmhof.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Palmietfontein Guest House', 1, -30.71948, 25.09672, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/palmietfontein-guest-house-PA45475', '+27 51 753 0101', 'palmietfontein1@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pangaea Manor Guest House', 2, -26.07767, 28.0528, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/pangaea-manor-guest-house-PA42641', '27 11 783-2287', 'pangaea@worldonline.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Panorama Guest Farm', 2, -25.36446, 30.83789, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/panorama-guest-farm-PA1433', '+27 13 755-2398', 'panorama@xwi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Panorama Guest House', 2, -33.59847, 26.89068, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/panorama-guest-house-PA44997', '466 245 853', 'marianne.rob@portalfredpanorama.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Papkuil Safari Lodge', 3, -28.18467, 23.53011, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/danielskuil/papkuil-safari-lodge-PA45008', NULL, 'gers@netralink.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Papkuilsfontein Guest Farm', 2, -29.97866, 19.37832, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/nieuwoudtville/papkuilsfontein-guest-farm-PA42642', '2727 218 1246', 'info@papkuilsfontein.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Parade Hotel', 1, -29.85306, 31.03798, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/parade-hotel-PA6552', ' (031) 337 4565', 'paradehotel@eca.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Paradise', 2, -30.98166, 30.27562, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/palm-beach/paradise-PA45821', NULL, 'joan@primeleather.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Paradise Found', 2, -34.033986, 23.032923, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/paradise-found-PA1566', '+2744 382 5955', 'info@paradisefound.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Paradise Holiday Resort', 2, -30.97606, 30.27454, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/southbroom/paradise-holiday-resort-PA6553', ' (039) 313 0655', 'paradise@megadial.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Parkers Cottages', 3, -28.3793, 32.41435, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/parkers-cottages-PA42742', '2735 590 1576', 'info@parkerscottages.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Parkmore Lodge B&B', 2, -26.0945, 28.03987, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/parkmore-lodge-b&b-PA42743', '27 11 884 1180 ', 'karen@parkmorelodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Patrys Paradys', 1, -26, 27.54583, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/patrys-paradys-PA42744', '2782 905-6101', NULL)");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Peacehaven Guest House', 2, -30.50963, 29.40632, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kokstad/peacehaven-guest-house-PA6561', ' (039) 7273312/ 0828558663', 'peacehavenguesthouse@telk')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pearl Valley lf Lodge', 1, -33.90839, 19.11724, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/pearl-valley-lf-lodge-PA2266', '+27 82 558 5070', 'lfsafarisa@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pearly Shells', 2, -30.28572, 30.75379, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/scottburgh/pearly-shells-PA4510', '+27 39) 976 2065', 'pearly.shells@eastcoast.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pecanwood Estate- No 9 Lakeview', 2, -25.76936, 27.85721, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort/pecanwood-estate-no-9-lakeview-PA45335', '+27 82 533 6687', 'foundersportfolio@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pegasus Equestrian Estate', 2, -33.59137, 26.89521, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/pegasus-equestrian-estate-PA45231', NULL, 'pegasusregina@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pelenechi Manor', 3, -25.3222, 31.02135, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/pelenechi-manor-PA42799', '27-13-751-1418', 'info@pelenechi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pennington Beach Cottage', 2, -30.37708, 30.69885, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/pennington-beach-cottage-PA42800', '2739 975-1248', 'farland@scottnet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Penny Farthing Country House', 2, -28.39231, 30.36587, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/penny-farthing-country-house-PA42801', '2734 642-1925', NULL)");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Penryn Bed & Breakfast', 3, -28.15844, 30.23239, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/penryn-bed-&-breakfast-PA7136', '+27 34 218 2269', 'jean@trustnet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Penwarn Country Estate', 2, -29.79372, 29.49884, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/underberg/penwarn-country-estate-PA6571', '(033) 701 1777-368 / 083 ', 'info@penwarn.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Perna Perna Mossel Bay', 2, -34.18368, 22.15375, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/perna-perna-mossel-bay-PA44908', NULL, 'pernamossel@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Perna Perna St Lucia', 5, -28.37773, 32.41065, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/perna-perna-st-lucia-PA44909', NULL, 'pernastlucia@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Peter B Self Catering Accommodatio', 2, -31.89828, 26.8851, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/peter-b-self-catering-accommodation-PA42815', '27 45 838-9702', 'peterbacela@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Petite Provence B&B', 3, -29.5061, 31.23265, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/petite-provence-b&b-PA2173', NULL, 'info@petiteprovence.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Phefumula Luxury Self Catering Cottages', 3, -25.87374, 27.41861, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/maanhaarrand/phefumula-luxury-self-catering-cottages-PA42817', '27 82 550 8965', 'phefumula@iburst.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Phomolo Guest House', 1, -29.375, 27.54778, 'http://www.aaholidays.co.za/accommodation/lesotho/maseru/phomolo-guest-house-PA45135', '+(266) 580 50012', 'phomolo.guesthouse@ilesotho.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Phumula Kruger Lodge and Safaris', 2, -25.34794, 31.77735, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/marloth-park/phumula-kruger-lodge-and-safaris-PA2146', '+27 13 792 4215', 'info@phumulakruger.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Piggs Peak Hotel and Casino', 1, -25.72768, 31.48039, 'http://www.aaholidays.co.za/accommodation/swaziland/piggs-peak/piggs-peak-hotel-and-casino-PA43994', '+(268) 2431-3104/5', 'gm@piggspeakhotelandcasino.co.sz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pillow and Spoon Guest House', 2, -25.79803, 28.30628, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/pillow-and-spoon-guest-house-PA44998', '129 933 124', 'info@pillowandspoon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pine Lodge Resort', 2, -33.96879, 22.48733, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/pine-lodge-resort-PA40919', '+2744 871 1974', 'info@pinelodgegeorge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pinnacle Point - lf Safari SA', 2, -34.19867, 22.09509, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/pinnacle-point---lf-safari-sa-PA40847', NULL, 'lfsafarisa@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pinnacle Point Beach & lf Resort -  Lodge No 2', 3, -34.18333, 22.13333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/pinnacle-point-beach-&-lf-resort---lodge-no-2-PA42828', '27 11 234-0991', 'info@pinnaclepointlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pinnaquin Holiday Apartments', 2, -34.03407, 24.92824, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/pinnaquin-holiday-apartments-PA42829', '27 42 296-1111', 'pinnaquin@pinnaquin.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Plover Cottages', 1, -29.11253, 26.23156, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/plover-cottages-PA42831', '2783 262-0861', 'info@plovergroup.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Plumba Guest House', 3, -25.11278, 31.06917, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/plumba-guest-house-PA273', '+27 13 737 8806', 'plumbaguesthouse@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Plumwood In', 3, -33.91002, 19.11694, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/plumwood-inn-PA4554', '+27 21 876 3883', 'email@plumwoodinn.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Point B Guest House', 2, -33.90894, 18.40588, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/point-b-guest-house-PA1827', '214 340 902', 'res@pointb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Point of View Luxury Accommodatio', 2, -25.72943, 27.86485, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort-dam/point-of-view-luxury-accommodation-PA41543', '+27 12 253 2263', 'pointofview@c-all.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Point Village Hotel', 2, -34.18287, 22.15652, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/mossel-bay/point-village-hotel-PA9911', '+2744 690 3156', 'stay@pointvillagehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ponciana Guest House', 3, -25.74771, 27.89554, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort/ponciana-guest-house-PA8021', '270 122 591 310', 'guesthouseponciana@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Port Indi Guest House', 2, -29.25092, 16.86919, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/port-nolloth/port-indi-guest-house-PA1223', '+2727 851 8012', 'portindi@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Port Owen Marina- First Resort', 2, -32.78529, 18.14646, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/velddrift/port-owen-marina-first-resort-PA4561', ' 27 39 312-8190', 'info@portowenmarina.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Porter House Eleve', 1, -33.36552, 19.31045, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ceres/porter-house-eleven-PA4562', '+27 23 3121278', 'dubarry@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Positano Guest House', 3, -31.89014, 26.88335, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/positano-guest-house-PA42841', '27 45 839-4956', 'pos@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Premier Hotel Edwardia', 2, -31.05836, 30.21769, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-edward/premier-hotel-edwardian-PA7219', '393 113 618', 'edwardian@premierhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Premier Hotel OR Tambo', 2, -26.12229, 28.23222, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kempton-park/premier-hotel-or-tambo-PA44797', '+2711 393 8000', 'ortambo@premierhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Premier Hotel Pinetow', 2, -29.81466, 30.86584, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pinetown/premier-hotel-pinetown-PA42845', '+27 31 701-0130', 'info@premierhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Profcon Country Cottages', 2, -32.25228, 24.53095, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/profcon-country-cottages-PA8265', '+2749 892 3185', 'profconresort@gmail.com ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Promenade Hotel - Orion Group', 2, -25.47108, 30.98149, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/promenade-hotel--orion-group-PA42598', NULL, 'gmprom@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Protea Hotel Cape Castle', 2, -33.91138, 18.41506, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/protea-hotel-cape-castle-PA9076', '+27 21 4391016', 'reservations@castles.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Protea Hotel Hluhluwe - Self-Catering Lodge', 3, -28.0292, 32.28123, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/protea-hotel-hluhluwe--selfcatering-lodge-PA42850', '27 35 562-4000', 'gm@hluhluwehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Protea Hotel Hluhluwe and Safaris', 2, -28.0292, 32.28123, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/protea-hotel-hluhluwe-and-safaris-PA50', '27 35 5624000', 'reservations@hluhluwehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Protea Ridge Guest Cottages and Conference Centre', 3, -26.07777, 27.92912, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/protea-ridge-guest-cottages-and-conference-centre-PA42869', '27 10 220 5556', 'amkel@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Psa Holiday Resort', 2, -32.9672, 27.95462, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/psa-holiday-resort-PA42870', '(043) 732 1022', 'info@psaresort.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Pumula Beach Hotel', 3, -30.62256, 30.54357, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umzumbe/pumula-beach-hotel-PA6611', '(039) 684 6717', 'reservations@pumulabeachhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Purple Gecko Guest House', 2, -25.10403, 30.47407, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/lydenburg/purple-gecko-guest-house-PA42872', '27 13 235-4486', 'nfo@purplegecko.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Purple Plum Guest House', 2, -28.45411, 26.79678, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/purple-plum-guest-house-PA42900', '27 58 622-2290', 'info@purpleplumguest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Purple Trumpet Guest House', 2, -25.77853, 28.25131, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/purple-trumpet-guest-house-PA45315', '+27 12 346 5121', 'millie21young@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Q on First', 2, -26.14317, 28.03322, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/parktown-north/q-on-first-PA45071', '+27 11­ 447-5767', 'info@quartersonfirst.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Quarry Lake In', 3, -32.99562, 27.90684, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/quarry-lake-inn-PA8269', '+2743 707 5400', 'info@quarrylakeinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Queens Casino & Hotel', 2, -31.89826, 26.88119, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/queens-casino-&-hotel-PA44990', '458 079 777', 'reservations@queenscasino.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Queens Place', 2, -26.19314, 28.1105, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/queens-place-PA9133', '116 157 974', 'queensplace@megaweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Queens Terrace B&B', 2, -30.68641, 26.70975, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/queens-terrace-b&b-PA45578', '+27 51 634-2291', 'nff@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Queenstown Mountainview B&B', 2, -31.88069, 26.87908, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/queenstown-mountainview-b&b-PA45912', '458 383 993', 'mercymountainviewbbqtn@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Quinlands Farm Cottages', 2, -34.01667, 20.43333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/quinlands-farm-cottages-PA42944', '27 28 512-3014', 'lyn@swellendam.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Qwantani Berg and Bush Resort', 2, -28.27294, 29.12453, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/qwantani-berg-and-bush-resort-PA44845', '586 230 882', 'gm@qwantani-resort.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Raaswater River Lodge', 1, -26.9335, 27.05917, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/potchefstroom/raaswater-river-lodge-PA1012', '(018) 291 1758', 'raaswater@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Radloff Nine Lodge', 2, -26.83792, 26.67304, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/klerksdorp/radloff-nine-lodge-PA42981', '27 18 468 7830', 'radloff9@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rain Farm Game and Lodge', 3, -29.48333, 31.23333, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlali/rain-farm-game-and-lodge-PA42982', '27-32-8151050 ; 27-32-8151051', 'info@rainfarmgameandlodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Raintree Guest House', 2, -26.19468, 28.24935, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/boksburg/raintree-guest-house-PA36046', '+27 82 497 6460', 'info@hfguestaccommodation.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ramasibi Guest Services', 2, -33.88382, 18.57862, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/parow/ramasibi-guest-services-PA8268', NULL, 'jj@ramasibi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Raptor Retreat Game Lodge', 3, -24.35, 30.96667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/raptor-retreat-game-lodge-PA45238', NULL, 'keith@raptorretreat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ratanang Bed and Breakfast', 1, -25.85007, 25.64368, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/mafikeng/ratanang-bed-and-breakfast-PA43014', '(+27) (018) 381 5137', 'apolus@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Re Etile Family House B&B', 2, -25.69841, 28.30976, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/re-etile-family-house-b&b-PA43016', '27 12 806-8182', 'info@reetiledand.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Redcliffe', 2, -32.00645, 26.26021, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/tarkastad/redcliffe-PA43027', '2745 848-0152', 'info@dtours.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Reilly''s Rock Hilltop Lodge', 2, -26.48014, 31.19495, 'http://www.aaholidays.co.za/accommodation/swaziland/ezulwini/reillys-rock-hilltop-lodge-PA8756', NULL, 'tourism@biggameparks.org')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Renaissance Guest Farm', 2, -31.9, 26.88333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/renaissance-guest-farm-PA45273', NULL, 'moodleyvasu@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rendezvous Guest House', 1, -29.66652, 17.88218, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/rendezvous-guest-house-PA45087', NULL, 'rendezvous.ritha@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rene''s Guest House', 2, -29.05339, 23.77692, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/douglas/renes-guest-house-PA9324', NULL, 'renegastehuis@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Repa Guest House', 2, -28.75912, 24.74182, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/repa-guest-house-PA7491', '053-861 3132', 'info@repa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Resthaven Guest House', 1, -31.58637, 28.79002, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/resthaven-guest-house-PA45816', NULL, 'info@resthavenmthatha.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rethabise Premium Guest Lodge', 2, -27.62787, 27.24283, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/kroonstad/rethabise-premium-guest-lodge-PA45294', '056 212 2151 / 056 212 5438', 'info@rethabise.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rhino River Lodge', 2, -27.88648, 32.06673, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hluhluwe/rhino-river-lodge-PA6640', '+27 83 781 4924', 'info@rhinoriverlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Richterhuyz Lifestyle Guest House', 3, -25.76717, 28.24765, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/richterhuyz-lifestyle-guest-house-PA42879', '+27 12 346-2025', 'info@richtershuyz.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Riders Rest B&B', 2, -33.59361, 26.89885, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/riders-rest-b&b-PA45225', '+27 46 624 5471', 'estelle@ridersrestbandb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ridgeback House', 3, -33.67534, 18.91209, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/ridgeback-house-PA1965', '+27 21 869 8988', 'guesthouse@ridgeback.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rietfontein Guest Farm', 2, -33.63055, 20.94633, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ladismith/rietfontein-guest-farm-PA4621', ' +27 28 551 2128', 'sandra1@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rietpoort Guest Farm (Britstown)', 2, -30.59974, 23.51333, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/britstown/rietpoort-guest-farm-britstown-PA44879', '+27 53) 004-0150', 'rietpoortguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rietvlei Country Estate', 3, -34.0222, 23.38038, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/rietvlei-country-estate-PA42880', '+2782 969 3600', 'info@plettrietvleiaccom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rio Vista Lodge', 2, -25.48632, 31.50458, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/malelane/rio-vista-lodge-PA42881', '+27 13 790 1246', 'riovista@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('River Bank Lodge', 2, -28.45511, 21.25212, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/river-bank-lodge-PA42882', '+2754 331 3015', 'info@riverbanklodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('River Club Villas- First Resort', 2, -34.05, 23.36667, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/river-club-villas-first-resort-PA44844', '315 612 255', 'salamander@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('River Crossing B&B & Self Catering', 3, -28.57236, 29.28324, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/drakensberg-central/river-crossing-b&b-&-self-catering-PA6650', ' (082) 4950912', 'rivercrossing@absamail.co')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('River Road Guest House', 2, -33.97091, 25.58883, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/river-road-guest-house-PA8279', '+27 41 581 5995', 'info@riverroad.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('River Valley Nature Reserve', 2, -30.83567, 30.3582, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/river-valley-nature-reserve-PA6651', '(039) 317 3474', 'ajlewis@mtnloaded.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rivers Rest', 1, -33.68462, 26.65545, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/bushmans-river-mouth/rivers-rest-PA42687', NULL, 'info@riversrest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Riverside Cottages', 2, -33.92328, 19.12123, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/riverside-cottages-PA156', ' +27 21 876 3245', 'info@labourgne.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Riversong Guest House', 3, -33.97468, 18.46219, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/newlands/riversong-guest-house-PA8286', '+27 21 683 8394', 'inrimc@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Riverview B&B', 1, -28.28748, 31.41396, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ulundi/riverview-b&b-PA45834', NULL, 'riverviewbb@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Riverwalk B&B', 2, -28.51423, 28.42027, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/riverwalk-b&b-PA42896', '+27 58 256-1420', 'riverwalk.clarens@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rivonia Bed & Breakfast', 3, -26.05046, 28.06528, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/rivonia/rivonia-bed-&-breakfast-PA8290', '+27 11 803 2790', 'info@rivoniabb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rockwood', 3, -29.29998, 30.28012, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/howick/rockwood-PA45047', '+27 31 502 4043 ', 'info@rockwood.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rolbos', 2, -30.95656, 19.44348, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/calvinia/rolbos-PA45088', '+27 27 341 1666', 'joey@rolbos.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rondawel Guest Farm', 1, -31.36448, 23.91796, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/richmond/rondawel-guest-farm-PA45477', NULL, 'rondawel@wam.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rondebosch Guest Cottages', 2, -33.96756, 18.465, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/rondebosch/rondebosch-guest-cottages-PA42705', NULL, 'jillamb@netpoint.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rondekuil Estate', 2, -33.7818, 18.64315, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/durbanville/rondekuil-estate-PA4659', '+27 21 972 1031', 'richard@rondekuil.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rooftop B&B', 1, -28.53799, 24.52365, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/barkley-west/rooftop-b&b-PA8289', '+27 53 531 0116', 'rooftop@sanpaul.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rooiland Self Catering', 2, -28.5145, 28.41846, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/rooiland-self-catering-PA45132', '582 561 558', 'info@clarensrooiland.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Roosfontein B&B and Conference Centre', 2, -29.86773, 30.91207, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/queensburgh/roosfontein-b&b-and-conference-centre-PA6666', ' (031) 464 2785', 'info@roosfontein.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Roosje van de Kaap', 2, -34.01667, 20.43333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/roosje-van-de-kaap-PA4665', '+27(0)285143001', 'info@roosjevandekaap.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rose Cottage', 1, -30.58416, 25.50397, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/gariep-dam/rose-cottage-PA44897', '+27 82 822 6847', 'booking@rose-cottage.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rose Petals Guest House', 2, -32.97339, 27.90588, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/rose-petals-guest-house-PA45237', '+27 43 726 5115', 'info@rosepetals.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rose Villa Guest House', 2, -27.66013, 27.23886, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/kroonstad/rose-villa-guest-house-PA44989', '+27 56 212 5220', 'rosevilla@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rose Well Spa Guest House', 2, -25.99863, 27.54157, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/rose-well-spa-guest-house-PA1678', '+27 82 400 3993', 'guesthouse@mwebbiz.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rosebank Lodge Guest House', 2, -26.15143, 28.04445, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/rosebank-lodge-guest-house-PA8294', '+27 11 880 1747', 'info@rosebanklodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rosedale Organic Farm Bed and Breakfast and Self Catering', 2, -33.55781, 25.69086, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/rosedale-organic-farm-bed-and-breakfast-and-self-catering-PA42864', '(+27) 42 2330404', 'info@rosedalebnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rosenheim Guest House', 2, -30.69877, 26.71044, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/rosenheim-guest-house-PA36062', '+27 79 891 6196', 'rosenheim@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Route 62 B&B', 1, -33.80578, 19.87827, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/robertson/route-62-b&b-PA4679', ' +27 23 6265988', 'joub@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rouxwil Country House', 3, -34.1236, 19.31053, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/caledon/rouxwil-country-house-PA42940', '+27 28 215-8922', 'rouxwil@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Royal Country In', 2, -28.16466, 30.23505, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/royal-country-inn-PA6673', '+27 34 212 2147', 'reservations@royalcountryinn.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Roydon Private Nature Reserve', 2, -31.96271, 26.92338, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/roydon-private-nature-reserve-PA42941', '+27 45 838-3338', 'reservations@roydon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Royl Court Guest House', 3, -28.76054, 24.75735, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/royl-court-guest-house-PA43030', '+27 82 564 9343', 'roylcourt@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Royston Hall', 2, -30.71206, 30.45164, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umtentweni/royston-hall-PA45166', '396 950 083', 'info@roystonhall.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rus n Bietjie Gaste Huis', 1, -28.18467, 23.53011, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/danielskuil/rus-n-bietjie-gaste-huis-PA45386', NULL, 'restawhile01@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rustenburg Guest House', 2, -25.69417, 27.22481, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/rustenburg-guest-house-PA43032', '145 334 155', 'booking@rustenburgguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rusticana Bed and Breakfast', 2, -34.09213, 21.25497, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/riversdale/rusticana-bed-and-breakfast-PA43055', '+27 28 713-3366', 'rusticana@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Rustpunt', 2, -31.86364, 24.55316, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nieu-bethesda/rustpunt-PA43033', '+27 49 841-1667', 'amschep@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Saffron Guest House', 2, -26.1752, 28.00924, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/saffron-guest-house-PA44730', '+27(0)117266646', 'info@saffronguesthouse.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sak n Pak Luxury Guest House', 3, -29.54087, 31.21617, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/sak-n-pak-luxury-guest-house-PA375', '+27 32 946 1585', 'info@saknpak.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Salamander Resort', 1, -29.718, 31.091, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/salamander-resort-PA44910', '315 612 255', 'salamander@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Salt Rock Hotel and Beach Resort', 2, -29.4992, 31.23783, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/salt-rock-hotel-and-beach-resort-PA6684', '(032) 525 5025', 'hotel@saltrockbeach.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Samburu Cottage', 2, -33.91544, 18.93554, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/samburu-cottage-PA4710', ' +27 21 8851625', 'bertram@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sanambo Guest House', 2, -26.09956, 28.19857, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kempton-park/sanambo-guest-house-PA43034', '+27 11 976-5486', 'monika@sanamboguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sand Castle Beach House', 2, -33.61352, 26.88102, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/sand-castle-beach-house-PA45300', '+27 31 267 2139', 'fitzfam@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sand River Guest House', 2, -26.05391, 28.06742, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/rivonia/sand-river-guest-house-PA1776', '112 341 666', 'reservations@sandriverguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandals Guest House', 3, -34.16821, 24.83028, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/st-francis-bay/sandals-guest-house-PA36257', '+27 42 294 0551', 'enquiries@sandalsguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandkasteel', 1, -34.05323, 24.923, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/sandkasteel-PA42832', '+ 27 42 293 1585', 'info@sandkasteel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandringham Bed & Breakfast', 2, -31.90679, 26.8879, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/sandringham-bed-&-breakfast-PA45045', NULL, 'mariuscoetzer48@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandriver Lodge', 2, -34.171, 24.82975, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/st-francis-bay/sandriver-lodge-PA43035', '+27 42 294-1052', 'info@sandriverlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandstone Chameleon Guest House', 2, -28.61772, 28.20939, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/fouriesburg/sandstone-chameleon-guest-house-PA42666', '+27 58 223-0038', 'sandstonechameleon@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sandton Lodge Inanda', 2, -26.11972, 28.05787, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/sandton/sandton-lodge-inanda-PA45010', '+ 27 11 788 4169 ', 'info@sandtonlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sangweni Lodge B and B and Conference Centre', 1, -32.79306, 26.83111, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/alice/sangweni-lodge-b-and-b-and-conference-centre-PA42835', '+27 40 653-0183', 'sangwenilodge@sainet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sani Top Chalet', 2, -29.79455, 29.49344, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/sani-pass/sani-top-chalet-PA1870', '(033)7021313', 'sanitop@futurenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sani Valley Fly-Fishing and Game Lodge', 3, -29.65, 29.45, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/himeville/sani-valley-flyfishing-and-game-lodge-PA6691', '+27 33 702 0203', 'info@sanivalley.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Santa Lucia Guest House', 3, -28.37691, 32.41352, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/santa-lucia-guest-house-PA6692', '+27 35 590 1151', 'rika@santalucia.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Santana Holiday Resort', 2, -30.85876, 30.37467, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/santana-holiday-resort-PA42855', '+27 39 312-2443', 'admin@santana.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sante Hotel & Spa', 3, -33.72429, 18.95591, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/paarl/sante-hotel-&-spa-PA8711', '+27 21 875 8100', 'res@santesa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Santorini Guest House', 3, -32.99725, 27.92534, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/santorini-guest-house-PA42842', '437 351 598', 'santoriniguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Santorini- Ballito', 1, -29.52238, 31.22678, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/santorini-ballito-PA42836', '+27 12 348-1891', 'jj@maranatha.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sanyati Guest House', 2, -27.7, 23.05, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kathu/sanyati-guest-house-PA45206', '537 231 666', 'annette@sanyatibb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sarah''s Dynasty', 3, -28.37931, 32.41436, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/sarahs-dynasty-PA45256', NULL, 'sarahs.dynasty@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Savanna Private Game Reserve', 3, -24.51483, 31.24206, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/sabi-sabi/savanna-private-game-reserve-PA8713', '+27 11 883-7819', 'res@savannalodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Schneider''s Guesthouse', 3, -25.28965, 30.99924, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/white-river/schneiders-guesthouse-PA8309', NULL, 'info@schneidersguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Schoongezich Boutique Hotel and Spa', 3, -25.81578, 28.25486, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/schoongezich-boutique-hotel-and-spa-PA45011', '+2712 347 2233', 'guesthouse@schoongezich.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Scotia Inn Hotel', 2, -29.24805, 16.86791, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/port-nolloth/scotia-inn-hotel-PA42875', '+27 27 851 8353 ', 'infoscotia@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Scotts Manor Guest House and Conference Centre', 3, -26.1455, 26.1598, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/lichtenburg/scotts-manor-guest-house-and-conference-centre-PA283', '+27 18 632-0255', 'scottsmanor@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sea Cottages| Salt Rock', 2, -29.50183, 31.23972, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/sea-cottages', NULL, '+27 32 525 5446')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sea Side Villa', 1, -29.65701, 31.12539, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umdloti-beach/sea-side-villa-PA42857', '+27 31 303-2590', 'padmini@sncanvas.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sea Whisper Bed And Breakfast', 3, -34.04212, 24.92431, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/sea-whisper-bed-and-breakfast-PA42861', '+27 42 293-3917', 'seawhisper@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seabreeze Cabanas', 2, -34.003, 22.54523, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/victoria-bay/seabreeze-cabanas-PA1900', '+27 44 889-0098', 'seabreeze@pixie.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seagull Holiday Apartments- Main Beach', 2, -30.861, 30.3706, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/seagull-holiday-apartments-main-beach-PA6713', ' (039) 3121563', 'seagull@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seashells', 3, -34.03531, 24.93176, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/seashells-PA42856', '+27 42 293-1104', 'info@seashell.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seaside Lodge', 1, -29.49986, 31.23862, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/seaside-lodge-PA6722', ' (032) 525 4103/072 240 52', 'seasidelodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seaview Manor', 2, -29.74647, 31.05843, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/la-lucia/seaview-manor-PA45181', '315 620 799', 'eflinner@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sea`Ya', 1, -29.51439, 31.23085, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shakas-rock/seaya-PA45775', '082-591-9360', 'penny.dickson1@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('See More Guest House', 3, -32.9968, 27.92219, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/see-more-guest-house-PA2295', '437 351 070', 'info@see-more.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Selati 103 Guest Cottages', 2, -25.46962, 31.54981, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/malelane/selati-103-guest-cottages-PA42843', '+27(0)13 790 0978', 'info@selati103.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Selborne Hotel Spa & lf Estate - Orion Group', 3, -30.36547, 30.7043, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/selborne-hotel-spa-&-lf-estate--orion-group-PA40156', NULL, 'gmsel@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Seldre Guest House', 2, -26.42975, 28.48315, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/nigel/seldre-guest-house-PA1637', NULL, 'seldre@seldre.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Selkirk House', 3, -34.40408, 19.24842, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/selkirk-house-PA35952', NULL, 'info@selkirkhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shad Palm Beach', 3, -30.97849, 30.27146, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-edward/shad-palm-beach-PA43057', '+27 12 667-4271 ', 'corarobberts@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shady Pines', 3, -28.27332, 29.12971, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/shady-pines-PA406', '(058) 622 3020', 'info@shadypines.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shalimar Gardens Hotel', 1, -33.96993, 18.54564, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/shalimar-gardens-hotel-PA43059', '+27 21 637-5552', 'kaskar@shalimar.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shalom Bed and Breakfast', 2, -28.54866, 29.77121, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/shalom-bed-and-breakfast-PA45320', '036-637-4148', 'info@shalombnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shandon Lodge', 3, -25.5029, 31.00023, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/shandon-lodge-PA35939', '+2713 744 9934       ', 'info@shandon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shenindor B&B', 2, -29.76583, 30.73083, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hillcrest/shenindor-b&b-PA35961', '+27 31 777 1168', 'bridget@shenindor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shepherds Fold Bed & Breakfast', 1, -29.81892, 30.92885, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/westville/shepherds-fold-bed-&-breakfast-PA6743', '(031) 262 7257/ 083 708 7', 'shepherdn@mjvn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sherewood Lodge', 3, -25.79799, 28.35696, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/sherewood-lodge-PA9705', NULL, 'info@sherewoodlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shibula Lodge and Bush Spa', 3, -24.19562, 27.87231, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/vaalwater/shibula-lodge-and-bush-spa-PA8679', NULL, 'shibula2_at_iafrica.com talis@galaxy.za.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shikwaru Lodge', 5, -24.15, 28.73333, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mokopane/shikwaru-lodge-PA45117', '+27 15 491 1174 ', 'shikwaru@rag.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shiluvari Lakeside Lodge', 2, -23.10009, 30.08346, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/louis-trichardt/shiluvari-lakeside-lodge-PA7522', '+27 15 556-3406', 'info@shiluvari.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Shining Waters Guest House', 2, -34.00021, 22.61949, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/shining-waters-guest-house-PA4773', ' +27 44 877 1958', 'info@shiningwaters.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sibuya Game ReserveLodge PtyLtd', 2, -33.67811, 26.6772, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/kenton-on-sea/sibuya-game-reservelodge-ptyltd-PA7524', '270 466 481 040', 'reservations@sibuya.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sidwell B&B', 1, -31.90091, 26.8792, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/sidwell-b&b-PA45575', '+27 45 839-6844', 'sidwell.noni@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Siesta Guest House & Wedding Venue', 2, -27.2582, 28.52551, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/frankfort/siesta-guest-house-&-wedding-venue-PA45463', '+27 58 813-1382', 'info@siestaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Silonque Bush Estate', 2, -23.93333, 31.11667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/phalaborwa/silonque-bush-estate-PA670', '+27 15 781-0399', 'info@silonque.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Silver Hill Lodge', 3, -29.18888, 30.11301, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/kamberg/silver-hill-lodge-PA6756', '+2733 267 7430', 'silverhill@icon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Silver Mist Country In', 2, -25.5898, 30.76801, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/kaapsehoop/silver-mist-country-inn-PA8682', NULL, 'silmist_at_mweb.co.za talis@galaxy.za.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Silver Oaks Boutique Hotel', 2, -29.84993, 30.99915, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/silver-oaks-boutique-hotel-PA6757', ' (031) 201 1614', 'info@silveroaks.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Silverdawn Bed and Breakfast', 1, -33.00213, 27.92205, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/silverdawn-bed-and-breakfast-PA45030', '+2743 726 2128', 'silverdawn@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sir Henry Barkly Guest House', 2, -30.96876, 27.59608, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/barkly-east/sir-henry-barkly-guest-house-PA42782', '+27 45 971 0302', 'sirhenrybarkly@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sir Henry''s Guest House - Clarens', 2, -28.51085, 28.42085, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/sir-henrys-guest-house--clarens-PA42783', '+27 58 256-1194', 'sirhenry@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Six Liliez Bed and Breakfast', 1, -25.85598, 25.64031, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/mafikeng/six-liliez-bed-and-breakfast-PA45321', '+27 18 381 1468', 'sixliliezbnb@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Siza''s Guest house & Spa', 1, -32.87706, 27.40634, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/king-williams-town/sizas-guest-house-&-spa-PA45698', '436 433 223', 'info@sizasguesthouseandspa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('SkipSkop', 1, -25.99782, 27.53487, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/skipskop-PA45668', NULL, 'gpscheepers@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sleep And Dream Guest House', 2, -31.59533, 28.74862, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/sleep-and-dream-guest-house-PA42786', '+27 47 537-8003', 'sleepanddream@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sneezewood Farm', 2, -28.19793, 30.2009, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dundee/sneezewood-farm-PA40965', NULL, 'info@sneezewood.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Soli Deo Gloria Boutique Hotel', 3, -26.05835, 27.92702, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/soli-deo-gloria-boutique-hotel-PA4806', ' +27 71 132 1440', 'quintus@sdghotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Somabula Nature Reserve', 2, -25.71037, 28.51727, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/cullinan/somabula-nature-reserve-PA42877', '+2782 550 1892 ', 'info@somabula.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Somer Place B&B', 2, -34.07694, 18.83465, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/somerset-west/somer-place-b&b-PA4807', ' +27 21 8517992', 'info@somerplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sondel Beach House', 3, -34.05, 23.36667, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/sondel-beach-house-PA45227', '+27 11 463 4030', 'dleggers@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sontyger Guest House', 2, -33.87553, 18.63812, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bellville/sontyger-guest-house-PA4814', ' +27 21 919 0711', 'reception@sontyger.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('South Point Self-Catering and B&B', 2, -34.8235, 20.01873, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/l`agulhas/south-point-selfcatering-and-b&b-PA4819', ' +27 28 435 7402', 'southpoint@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Southern Comfort', 2, -30.90351, 30.34055, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/southern-comfort-PA5669', ' (039) 3144837 / 082451610', 'bbinfo@billsbest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Southern Right Lodge', 3, -34.40212, 19.25423, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/southern-right-lodge-PA42854', '+27 (28) 312 2031', 'southern-right-lodge@hermanus.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Southview Lodge', 2, -26.20509, 28.09738, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/southview-lodge-PA1936', NULL, 'info@southviewlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Soverby Guest House', 3, -33.9368, 18.85969, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/soverby-guest-house-PA4829', ' +27 21 8813838', 'soverby@adept.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sparkling Waters Hotel & Spa', 2, -25.65969, 27.24319, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/sparkling-waters-hotel-&-spa-PA276', '+27 14 535-0000/6', 'info@sparklingwaters.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Speshi''s Guesthouse', 2, -33.99962, 25.65154, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/speshis-guesthouse-PA45244', '+27 41 583 6649', 'paula.kali@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Springbuck Lodge', 2, -32.48776, 24.6492, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/springbuck-lodge-PA42452', '+27 49 891-0433', 'parkes@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('St  Aidans Guest Cottage', 3, -33.30553, 26.52228, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/st--aidans-guest-cottage-PA7543', '466 223 077', 'reservations@staidansacc.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('St James OF Knysna', 3, -34.03545, 23.05127, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/st-james-of-knysna-PA4844', '(044) 3826750', 'info@stjames.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('St Lucia @ The Bridge', 2, -28.37773, 32.41065, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/st-lucia--the-bridge-PA45255', NULL, 'sayunet@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('St Lucia Wilds', 1, -28.38264, 32.40823, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/st-lucia-wilds-PA6788', '+27 35 590 1033', 'info@stluciawilds.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('St Peter''s Place Boutique Hotel', 2, -26.1729, 28.07377, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/st-peters-place-boutique-hotel-PA9563', '+27 114872305', 'reservation@stpetersplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stanford Lake Lodge', 2, -23.91522, 29.97475, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/haenertsburg/stanford-lake-lodge-PA435', '+27 82 322 9729', 'mail@stanfordlake.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stay-a-While Guest House', 2, -26.13792, 28.14434, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/stayawhile-guest-house-PA45091', '+27(0)11 452 8049', 'bookings@stay-a-while.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stirling Manor Boutique Guest House', 3, -25.72917, 27.86299, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeespoort/stirling-manor-boutique-guest-house-PA42542', '+27 12 253 2532 ', 'info@stirling-manor.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stokkiesdraai Holiday Flats', 1, -28.37773, 32.41065, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/stokkiesdraai-holiday-flats-PA6799', '(035) 590 1216', 'info@stokkiesdraai.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stone Hill', 2, -25.99883, 27.56516, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/stone-hill-PA7549', '+2782 447 6893', 'info@stone-hill.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stone House', 1, -31.89105, 26.8755, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/stone-house-PA45275', '+27 45 838-3819', 'stonehousegh@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stoneridge Guest House', 3, -30.6009, 25.49226, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/gariep-dam/stoneridge-guest-house-PA43490', '+27 51 754 0362', 'stay@stoneridgesa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stones Throw', 2, -34.12354, 18.45266, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/kalk-bay/stones-throw-PA44876', NULL, 'mark@groundscare.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Storms River Guest Lodge', 1, -33.58167, 23.53155, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/storms-river/storms-river-guest-lodge-PA36066', '+27 42 281 1703', 'enquiries@stormsriverguestlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Strandfontein Accommodatio', 1, -31.75331, 18.22821, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/strandfontein/strandfontein-accommodation-PA4872', '+27 27 215 1727', 'info@strandfontein.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stratfords Guest House', 3, -32.98564, 27.9026, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/stratfords-guest-house-PA877', '+27 43 726 9765', 'reservations@stratfordsgueshouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stratos Guest House', 2, -34.04671, 24.92593, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/stratos-guest-house-PA44732', NULL, 'info@stratosjbay.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Stumble Inn B&B', 3, -32.98536, 27.93379, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/stumble-inn-b&b-PA45830', NULL, 'mharder@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Suburbian Lodge', 1, -26.17431, 28.08512, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/suburbian-lodge-PA7548', '(0027)11 042 7781', 'suburbian@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Summer Blue Guest House', 3, -33.99484, 25.64685, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/summer-blue-guest-house-PA45276', '041 - 5832737', 'info@summerblue.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Summer Garden Guest House', 2, -26.16484, 28.30675, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/benoni/summer-garden-guest-house-PA45302', '118 495 359', 'bookings@summergarden.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Summerstrand Beach Lodge', 2, -33.9876, 25.66973, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/summerstrand-beach-lodge-PA42592', '+27 41 583 2786', 'summerstrandbeachlodge@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Summerwood Guest House', 3, -33.93482, 18.8843, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/summerwood-guest-house-PA7550', '+2721 887-4112', 'info@summerwood.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sun River Kalahari Lodge', 2, -28.45746, 21.24265, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/sun-river-kalahari-lodge-PA44946', '(+27) 54 332 2210', 'info@sunriverlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sundays River Mouth Guest House', 3, -33.69352, 25.82233, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/colchester/sundays-river-mouth-guest-house-PA7552', '270 828 226 847', 'booking@sundays-mouth.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sundowner Lodge', 2, -28.74918, 24.76587, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/sundowner-lodge-PA45843', '053 831 1145/6', 'sundowner@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sunnyside Suites', 2, -33.94767, 25.58769, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/sunnyside-suites-PA42647', '+27 41 373-4567', 'audrey@sunnysidesuites.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sunset Lodge', 1, -28.37773, 32.41065, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/st-lucia/sunset-lodge-PA45462', '+2735 590 1197', 'info@sunsetstlucia.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sunset View', 1, -29.06962, 23.74041, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/douglas/sunset-view-PA44919', NULL, 'sunsetviewdouglas@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sunset View B&B Guest House', 2, -29.7572, 31.03786, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/sunset-view-b&b-guest-house-PA4911', '315 644 401', 'info@sunset-view.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sunshowers Plett', 3, -34.043, 23.37574, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/sunshowers-plett-PA4913', '270 825 750 663', 'info@plettafrica.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Surfers Corner Apartments', 2, -34.10744, 18.4695, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/muizenberg/surfers-corner-apartments-PA45013', NULL, 'info@surferscorner.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Swallows Nest Country Cottages', 2, -33.87211, 25.47887, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/storms-river/swallows-nest-country-cottages-PA42657', '+27 42 281-1701', 'info@swallowsnest-tsitsikamma.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Swellendam Country Lodge', 3, -34.03624, 20.42647, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/swellendam-country-lodge-PA41555', '+27 28 514 3629', 'info@swellendamlodge.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Swellengrebel Hotel', 1, -34.14818, 19.91416, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/swellengrebel-hotel-PA4928', '+27 28 514 1144', 'reservations@swellengrebelhotel.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Swiss Villa Guest House', 2, -31.37854, 19.11358, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/nieuwoudtville/swiss-villa-guest-house-PA45319', '+27 27 218 1347', 'jacobschris@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Sylvan Grove Guest House', 3, -29.7462, 31.07449, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/sylvan-grove-guest-house-PA1226', '270 315 615 137', 'info@sylvangrove.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tamboti Lodge Guest House', 2, -25.75022, 28.28917, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/tamboti-lodge-guest-house-PA45506', '(012) 804 8263', 'info@tambotilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tambuti Lodge', 3, -25.16704, 26.98242, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/pilanesberg-national-park/tambuti-lodge-PA45123', NULL, 'info@tambutilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tapama Lodge', 1, -25.45775, 23.71519, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/brits/tapama-lodge-PA42695', '+27 53 937-0020', 'tapama@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tarentaal Oorslaap', 2, -25.46583, 30.98528, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/tarentaal-oorslaap-PA45679', NULL, 'laurenta@sonpark.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tatenda Guest House', 1, -30.89569, 28.99632, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mount-frere/tatenda-guest-house-PA2297', '+27 39 255-1821', 'info@tatendabnb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tau Game Lodge', 2, -24.6869, 26.238, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/madikwe-game-reserve/tau-game-lodge-PA1391', '+27 11 314 4350', 'taugame@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('TeBeacon Guest House', 2, -32.97121, 27.94049, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/tebeacon-guest-house-PA45232', NULL, 'fanie@net4u.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tesorino B&B', 2, -29.72977, 31.08104, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/tesorino-b&b-PA1752', '+27 31 561 2719', 'info@tesorino.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thaba Tshwene Game Lodge', 2, -26.75741, 26.44289, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartbeesfontein/thaba-tshwene-game-lodge-PA42772', NULL, 'info@thabatshwene.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thaba Tsweni Lodge & Safaris', 2, -24.85373, 30.84824, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/thaba-tsweni-lodge-&-safaris-PA42774', '+27 13 767-1380', 'thabatsweni@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thaba Ya Batswana', 3, -26.29391, 28.01568, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/thaba-ya-batswana-PA42796', '27 11 959 0777', 'info@tyb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thali Thali Game Lodge', 1, -33.09167, 18.03333, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/langebaan/thali-thali-game-lodge-PA45439', '227 661 626', 'bookings@thalithali.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thanda Vista', 3, -34.04219, 23.37311, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/thanda-vista-PA7572', '+27 44 533-1796', 'info@thandavista.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thandulula Luxury Safari Tented Accommodatio', 2, -30.67974, 30.502, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/port-shepstone/thandulula-luxury-safari-tented-accommodation-PA6846', ' (039) 681 3755', 'info@thandulula.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thatchers Guest House', 2, -25.87343, 29.22253, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/witbank/thatchers-guest-house-PA42797', '136 558 300', 'enquiries@thatchers-bb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thatches Of Bryanston', 3, -26.05035, 28.03455, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/bryanston/thatches-of-bryanston-PA1043', '2711 706 5001 ', 'info@thatches-of-bryanston.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Albatros Guest House', 3, -30.86766, 30.3674, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/the-albatros-guest-house-PA6851', '393 174 446', 'info@thealbatros.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Angler and Antelope', 3, -32.72151, 25.58717, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/somerset-east/the-angler-and-antelope-PA7573', '+27 42 243 3440', 'anglerandantelope@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Ascot Boutique Hotel', 2, -26.15855, 28.07625, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/the-ascot-boutique-hotel-PA42814', '+27 11 483 3371', 'info@ascothotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Ballito House', 3, -29.5281, 31.2229, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/the-ballito-house-PA44991', '+27 32 586 1021', 'info@theballitohouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Bantry Bay', 3, -33.92809, 18.38033, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bantry-bay/the-bantry-bay-PA45814', '+27 21 434-4311', 'olga_odman@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Barracks Guest House', 3, -30.73209, 25.06661, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/the-barracks-guest-house-PA42860', '+27 (051) 753 2286', 'thebarracks@mtnloaded.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Bayshore In', 1, -28.79106, 32.0941, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/the-bayshore-inn-PA7', '+27 (035) 753 1246', 'gm@bayshoreinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Beach House', 3, -30.68166, 30.50358, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/southport/the-beach-house-PA45014', NULL, 'mandy@mmint.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Beach House', 2, -29.24313, 16.88054, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/port-nolloth/the-beach-house-PA45219', NULL, 'beachhouse.portnolloth@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Beach House Lodge', 3, -29.50255, 31.23898, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/the-beach-house-lodge-PA42862', '+27 32 525-8865', 'beachhouselodge@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Beach House Port Alfred', 3, -33.61356, 26.88704, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/the-beach-house-port-alfred-PA43158', '+27 46 624 1920', 'info@thebeachhouseportalfred.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Boathouse In Ballito', 3, -29.54568, 31.21292, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/the-boathouse-in-ballito-PA6862', '+27 32 946 0300', 'reservations@boathouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Canelands Beach Club and Spa', 3, -29.50255, 31.23898, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/the-canelands-beach-club-and-spa-PA42904', '+27 32 525-2300', 'info@thecanelands.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Caver', 3, -28.73393, 29.35038, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/the-cavern-PA1365', '+27 36 438 6270', 'info@cavern.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Clarens Country House', 2, -28.50871, 28.42945, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/clarens/the-clarens-country-house-PA45073', NULL, 'tonibw@eastcoast.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Cock House', 2, -33.31292, 26.53417, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/grahamstown/the-cock-house-PA760', '+27 46 636 1287/95 ', 'reservations@thecockhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Cock Inn Guest House', 3, -32.67878, 28.36665, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/kei-mouth/the-cock-inn-guest-house-PA45049', '438 411 527', 'cockin@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Colonial Guest House', 2, -25.86799, 28.22107, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/the-colonial-guest-house-PA44250', '+27 12 667-5877', 'colonialguesthouse@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Copper Pot Guest House', 2, -33.95484, 25.57234, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/the-copper-pot-guest-house-PA42901', '827 827 090', 'reservations@copperpotguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Docklands Hotel', 2, -29.87238, 31.04809, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/the-docklands-hotel-PA36271', '+27(0)313328190', 'moses.gama@thedocklands.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Fairway Hotel and Spa', 3, -26.11434, 27.96673, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/the-fairway-hotel-and-spa-PA44637', '+2711 478 8000', 'reservations@thefairway.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Falls Guest House', 3, -28.60859, 20.34477, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/augrabies-falls/the-falls-guest-house-PA596', '+2782 928 7938 ', 'info@thefallsaugrabies.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Feathered Nest Guest Farm', 2, -25.9994, 27.22618, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/the-feathered-nest-guest-farm-PA42983', NULL, 'info@featherednest.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Front House', 2, -29.50873, 31.23421, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/the-front-house-PA44856', '329 470 337', 'alicemay@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Gardens Guest House - Uxolo', 2, -26.14835, 28.07656, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/the-gardens-guest-house--uxolo-PA42985', '+27 83 673 6687', 'info@gardensguesthouse.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Getaway Guest House', 3, -30.04143, 30.89516, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/the-getaway-guest-house-PA6890', '319 036 766', 'thegetaway@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Glen Bed & Breakfast', 2, -32.48302, 24.04918, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/the-glen-bed-&-breakfast-PA43015', '498 400 300', 'theglenbb@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The lden Grape Bed and Breakfast', 2, -31.5556, 18.34888, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/lutzville/the-lden-grape-bed-and-breakfast-PA5003', ' +27 27 217 1099', 'debthom@theldengrape.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The oses Nest Guest House', 1, -26.15578, 27.92058, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/roodepoort/the-oses-nest-guest-house-PA43005', '+27 11 472 2150', 'osesnest@iburst.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The rge Private Game Lodge and Spa', 3, -30.71793, 30.21086, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/oribi-flats/the-rge-private-game-lodge-and-spa-PA43013', '+27 39 687 0378', 'juliette@therge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The rgez View', 1, -30.29944, 30.29139, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/paddock/the-rgez-view-PA44896', NULL, 'rgezview@paddock.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Grange Guest House', 3, -29.78472, 31.03378, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/the-grange-guest-house-PA41561', '+27 31 563 6826/6829', 'agrange@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Green Perridot', 2, -28.442, 21.27183, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/the-green-perridot-PA45570', '+27 54 338-0920', 'thegreenperridot@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Guesthouse (Dolphin-North Coast)', 3, -29.51168, 31.22903, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shakas-rock/the-guesthouse-dolphinnorth-coast-PA7459', '+2732-5255683', 'info@theguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Herb Garden Guest House', 1, -31.19462, 24.95281, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/the-herb-garden-guest-house-PA45268', '051-7530245', 'stay@herbguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Hideaway', 3, -34.01914, 20.45087, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/swellendam/the-hideaway-PA1911', '+2728 514-3316', 'info@hideawaybb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Highlander', 3, -25.42157, 30.09499, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/dullstroom/the-highlander-PA372', '+27 13 254-8000', 'highlanderres@urbanhiphotels.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Hogsback In', 1, -32.59517, 26.93226, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/hogsback/the-hogsback-inn-PA9256', NULL, 'manager@hogsbackinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Holy Hill B&B and Conference Venue', 1, -33.01887, 27.91694, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/the-holy-hill-b&b-and-conference-venue-PA45534', '+27 43 722-5017', 'theholyhill@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Homestead', 2, -29.62506, 30.39925, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/the-homestead-PA5019', ' +27 44 384 0764', 'kea@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Humewood Hotel', 2, -33.97468, 25.64413, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/the-humewood-hotel-PA43362', '+2741 585 8961', 'reservations@humewoodhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lodge At Atlantic Beach', 3, -33.73907, 18.45273, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/melkbosstrand/the-lodge-at-atlantic-beach-PA5031', ' +27 21 553 4653', 'enquiries@thelodgeAB.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lodge At Princes Grant', 2, -29.3431, 31.3753, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/princes-grant/the-lodge-at-princes-grant-PA6904', ' (032) 482 0005', 'pllodge@saol.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lodge Stay-In Style', 3, -26.45482, 29.46748, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/bethal/the-lodge-stayin-style-PA43088', '+27 17 647 2173', 'thelodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lofts Boutique Hotel', 3, -34.04708, 23.04769, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/the-lofts-boutique-hotel-PA5036', '+2744 302-5710', 'thelofts@theboatshed.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Longhouse Guest House', 2, -32.18102, 18.89457, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/clanwilliam/the-longhouse-guest-house-PA43098', '274 821 240', 'info@thelonghouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lookout at Whale Cove', 2, -34.58357, 19.34934, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/gansbaai/the-lookout-at-whale-cove-PA43099', '116 463 347', 'mailie@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Lookout Guest House', 3, -33.5915, 26.89519, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/the-lookout-guest-house-PA1342', '+27 (46) 6244564', 'info@thelookout.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Margate Hotel', 2, -30.86303, 30.36967, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/the-margate-hotel-PA6362', '393 121 410', 'lawrence@margatehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Nest Bed & Breakfast Lodge', 2, -30.70353, 26.70903, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/the-nest-bed-&-breakfast-lodge-PA45093', '516 341 859', 'info@thenestbb.co.za / jawa2@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Nook B&B', 2, -28.75509, 24.76363, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/the-nook-b&b-PA45005', NULL, 'rob.gibson@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Oak and Vine Luxury Guest House', 2, -33.97314, 18.47569, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/newlands/the-oak-and-vine-luxury-guest-house-PA36313', '021-6853553', 'info@theoakandvine.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Oaktree Lodge Guest House', 2, -31.58913, 28.77614, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/the-oaktree-lodge-guest-house-PA45157', '475 325 048', 'springy@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Old Berkshire', 2, -29.5422, 30.2799, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/hilton/the-old-berkshire-PA43117', '+27 33 343-4239', 'theoldberkshire@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Orange Apple Guest House', 2, -28.43907, 21.29153, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/the-orange-apple-guest-house-PA43119', NULL, 'orangeapple@live.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Overlook', 2, -28.7098, 20.9771, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/keimoes/the-overlook-PA43124', '+27 54 461-1235', 'overlook@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Palace Guest House', 2, -33.98431, 25.6615, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/the-palace-guest-house-PA43143', '+27 41 583-3170', 'reservations@thepalacepe.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Palace- First Resorts', 1, -29.852, 31.03789, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/the-palace-first-resorts-PA44906', '313 328 351', 'palace@firstresorts.co.za / warrenj@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Palms B and B', 2, -29.79375, 31.04007, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/the-palms-b-and-b-PA6914', '+27 31 563 5915', 'enquiries@thepalmsdurban.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Paxton Hotel', 3, -33.97223, 25.63175, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/the-paxton-hotel-PA854', NULL, 'resevations@paxton.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Pine', 2, -25.84765, 28.19485, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/the-pine-PA43065', '+27 12 643-0144', 'elainel@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Potting Shed Guest House', 2, -34.41537, 19.23297, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/the-potting-shed-guest-house-PA1609', '+27 28 312-1712', 'potshed@hermanus.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Quays on Timeball', 2, -29.87041, 31.04942, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban/the-quays-on-timeball-PA7687', '313 374 967', 'reservations@quays.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Rabbit Hole Guest House', 2, -26.08702, 27.77702, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/krugersdorp/the-rabbit-hole-guest-house-PA2083', '+27 11 665 3242', 'rabbitholeguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Rectory', 2, -32.17593, 18.89266, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/clanwilliam/the-rectory-PA45438', NULL, 'estrauss@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Residence', 3, -26.16454, 28.05939, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/the-residence-PA42159', '+27 11 853 2480/ +27 11 914 4092', 'info@theresidence.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Retreat at Groenfontei', 2, -33.52764, 21.678, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/calitzdorp/the-retreat-at-groenfontein-PA4615', '+27 44 2133 880', 'info@groenfontein.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Riviera Suite- First Resorts', 2, -33.91765, 18.38639, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/sea-point/the-riviera-suite-first-resorts-PA44843', '214 341 040', 'rivierasuites@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Robertson Small Hotel', 3, -33.8005, 19.87982, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/robertson/the-robertson-small-hotel-PA43089', '+27 23 626-7200', 'riaan@therobertsonsmallhotel.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Royal Hotel', 3, -33.38314, 18.89667, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/riebeek-kasteel/the-royal-hotel-PA7602', '+27 22 448 1378', 'info@royalinriebeek.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Royal Princess Gardens', 2, -26.11418, 27.99073, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/the-royal-princess-gardens-PA45130', '117 823 111', 'info@royalprincessgarden.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Royal St Andrews Lodge', 3, -33.60414, 26.88712, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/the-royal-st-andrews-lodge-PA43102', '+27 46 624-1379', 'hilander@border.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Royal Terrace Guest Lodge', 2, -28.23336, 28.31272, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bethlehem/the-royal-terrace-guest-lodge-PA43103', '+27 58 303-9335', 'royalt@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Shamrock Lodge', 2, -23.88763, 29.48612, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/the-shamrock-lodge-PA45253', '+27 15 291-4665', 'info@theshamrock.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Sir David Boutique Guest House', 3, -33.79756, 18.45969, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/bloubergstrand/the-sir-david-boutique-guest-house-PA45546', '+2721 554 5987', 'office@thesirdavid.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Spotted Grunter Resort', 2, -31.59806, 29.52833, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-st-johns/the-spotted-grunter-resort-PA942', '475 641 279', 'info@spottedgrunter.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Springbok Lodge', 3, -28.2928, 29.5068, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/the-springbok-lodge-PA36259', '+27 36 637-9604', 'springbok@nambiti.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Stables', 2, -28.27332, 29.12971, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/the-stables-PA43107', '+27 58 622-3020', 'info@shadypines.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Stagger Inn (carnarvon Estate - Queenstown District)', 1, -31.90955, 26.89678, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/the-stagger-inn-carnarvon-estate--queenstown-district-PA45574', '+27 45 966-0408', 'finance@nerpo.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Studio B&B', 1, -31.88218, 26.88309, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/the-studio-b&b-PA45339', '+27 45 839-6226', 'karel@dewaalbaxter.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Sunset', 2, -32.76831, 18.15024, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/velddrift/the-sunset-PA44036', '+2722 783 2763', 'sunsetrest@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Syrene Boutique Hotel', 3, -26.04065, 28.06187, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/rivonia/the-syrene-boutique-hotel-PA42164', '+27 11 231 3900', 'dani@thesyrene.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Thatch Guest House', 3, -32.96979, 27.95723, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/the-thatch-guest-house-PA43127', '+27 43 748-3672', 'thethatch@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Thorntree Country House', 2, -33.3107, 22.04186, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/the-thorntree-country-house-PA9714', NULL, 'thethorntree@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Trend Guest House', 2, -31.89094, 26.87436, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/the-trend-guest-house-PA43668', '+27 45 839 4725', 'thetrendguesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Upper Room', 2, -25.64674, 28.29231, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/the-upper-room-PA44921', '128 191 323', 'upperroom@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Urban Hotel Bloemfontei', 2, -29.11133, 26.20184, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/the-urban-hotel-bloemfontein-PA45278', '514 443 142', 'sybil@urbanhotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Venue', 2, -27.7557, 24.82707, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/hartswater/the-venue-PA44956', NULL, 'info@thevenuenc.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The View', 2, -34.04642, 24.91738, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/the-view-PA43669', '+27 83 287 7108', 'rodney@knt.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The View Sunny Cove', 3, -34.14377, 18.43629, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/fish-hoek/the-view-sunny-cove-PA45198', '+27 21 782 9357', 'booking@theviewsunnycove.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Village At Fairview', 3, -23.82241, 30.16086, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tzaneen/the-village-at-fairview-PA43136', '+27 15 307-2679', 'reservations@fairviewtzaneen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Village Guest House', 2, -26.53667, 28.06452, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/henley-on-klip/the-village-guest-house-PA43137', '+27 16 366-0707', 'thevillage@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Vineyard On Ballito', 3, -29.53928, 31.21249, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/the-vineyard-on-ballito-PA6940', ' (032) 946 1204', 'info@vineyardonballito.co')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Vision Guest House', 3, -31.59199, 28.80394, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/the-vision-guest-house-PA43144', '+27 47 532-3733', 'pinky3@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Walden House', 2, -33.92935, 18.40725, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/the-walden-house-PA1699', '+27 21 424-4256 ', 'waldenh@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Wallow Guest House', 2, -33.98394, 22.58714, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/the-wallow-guest-house-PA45469', '+2744 877 1096', 'thewallow@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Wardrobe Guest House', 2, -25.76799, 28.24597, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/the-wardrobe-guest-house-PA36136', '+27 12 756 1385', 'info@thewardrobeguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Whistling Duck', 2, -27.31944, 30.62611, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/wakkerstroom/the-whistling-duck-PA43145', '349 950 060', 'info@whistlingduck.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The White House B&B', 3, -32.94111, 28.03352, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/nubie/the-white-house-b&b-PA43147', '+27 43 740-0344', 'accommodation@thewhitehousebandb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The White House Jeffereys Bay', 1, -34.04871, 24.92324, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/jeffreys-bay/the-white-house-jeffereys-bay-PA45835', '+27 (42) 293 3116', 'whitehousejbay@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The White Rose Guest House', 2, -32.16952, 25.61446, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/cradock/the-white-rose-guest-house-PA45218', '048-8811450', 'whiteroseguesthouse@telkomsa.net ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('The Woodpecker In', 3, -25.819934, 28.311578, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/the-woodpecker-inn-PA766', '+27 12 993-5838', 'pecker@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Theftero Spiti', 3, -29.34212, 31.37573, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/princes-grant/theftero-spiti-PA43150', '+27 11 234-7473/4', 'hermank@datasolve.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thesen Islands Lodges', 3, -34.04839, 23.05522, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/thesen-islands-lodges-PA5106', '+27 44 382 1462', 'reservations@thesenislandslodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thornwood Lodge', 1, -24.81581, 28.07455, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/mabalingwe-nature-reserve/thornwood-lodge-PA45145', '27 11 463 6755', 'michele@thornwoodlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Three Cities Alpine Heath Resort', 3, -28.3819, 29.4303, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/bergville/three-cities-alpine-heath-resort-PA5547', '+27 36 438 8500 ', 'reservations@alpineheath.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Three Oaks and an Aloe', 2, -25.72303, 27.88515, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/hartebeespoortdam/three-oaks-and-an-aloe-PA43176', '+27(0)12 253 0553', 'info@3oa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Three Rivers Lodge & Villa Anna Sophia', 3, -26.66323, 27.96741, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vereeniging/three-rivers-lodge-&-villa-anna-sophia-PA7609', '+27 16 423 6046', 'info@threeriverslodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thuba-Kobo-Sele Guest House', 9, -27.42989, 23.44204, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kuruman/thubakobosele-guest-house-PA45779', '537 120 301', 'info@thubakobosele.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thula Manzi Guest Lodge', 3, -25.99012, 28.10188, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/midrand/thula-manzi-guest-lodge-PA44894', '113 121 159', 'danie@thulamanzi.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thula Meetse Mountain Lodge', 2, -24.49755, 28.69819, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/naboomspruit/thula-meetse-mountain-lodge-PA45101', '+27 11 230 1903 ', 'bookings@thulameetse.co.za ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thulani Lodge', 2, -26.17674, 28.01192, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melville/thulani-lodge-PA43177', '+27 11 482-1106', 'thulanilodge@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thunzi Bush Lodge', 3, -33.98031, 25.30383, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/thunzi-bush-lodge-PA2231', '+27 41 3722082 ', 'info@thunzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thylitshia Villa', 3, -33.65535, 22.0851, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/oudtshoorn/thylitshia-villa-PA7610', '+27 44 272 7814', 'thylitshia@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thyme & Again B&B Graaff Reinet', 2, -32.25702, 24.53303, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/thyme-&-again-b&b-graaff-reinet-PA43181', '+27 49 892-5413', 'pringle@gam.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Thyme and Again B and B Estcourt', 2, -29.01132, 29.8774, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/estcourt/thyme-and-again-b-and-b-estcourt-PA6953', ' (036) 352 4706 / 08282473', 'villagessip@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tienfontein B&B', 3, -30.32953, 26.99005, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/zastron/tienfontein-b&b-PA43670', '+27 82 374-9612', 'emheyns@nokwi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tillietudlem Game and Trout Lodge', 3, -29.6148, 29.9386, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/dargle/tillietudlem-game-and-trout-lodge-PA6958', '(033) 2344226/011-886 898', 'tillietudlem@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tinley Manor Hil''s', 3, -29.45499, 31.28101, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlali/tinley-manor-hils-PA43195', '+27 82 572 0993', 'hilarys@techopen.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tipi Bush Camp', 1, -33.41898, 25.89048, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/paterson/tipi-bush-camp-PA45368', '828 219 944', 'info@tipibushcamp.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tirhani Lodge', 1, -23.89626, 29.46707, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/tirhani-lodge-PA43198', '+27 15 297-5988', 'info@tirhanilodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Toll Inn Guest Farm', 2, -30.70353, 26.70903, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/toll-inn-guest-farm-PA45094', '051-6341541', 'nff@xsinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tomjachu Bush lodge', 3, -25.58658, 31.08011, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/nelspruit/tomjachu-bush-lodge-PA1042', NULL, 'office@tomjachu.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Toms Place', 3, -28.27324, 29.13113, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/harrismith/toms-place-PA43201', '+27 58 623-0006', 'tomsplace@harrismith.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Topiary Guest House', 2, -31.3306, 27.82383, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/elliot/topiary-guest-house-PA45050', '+27 45 931-1384', 'topiary01@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Touraco Guest House', 2, -25.75098, 28.3153, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/touraco-guest-house-PA43202', '+27 12 803-8585', 'travel@touraco.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Toverberg Guest Houses', 2, -30.72269, 25.09522, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/colesberg/toverberg-guest-houses-PA1662', '+27 51 753-0422', 'toverberg@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tozandre Guest House', 2, -26.93575, 29.24666, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/standerton/tozandre-guest-house-PA43209', '+27 17 714-0039', 'info@tozandreguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tradewinds Country In', 1, -30.0444, 30.89329, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mtunzini/tradewinds-country-inn-PA6968', ' (035) 340 2266/083 647 77', 'tradewindscountryinn@mweb')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tradewinds Lodge', 3, -30.0642, 30.87987, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/tradewinds-lodge-PA43216', '+27 31 903-7254', 'trawind@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tramonto Wedding & Function Venue and Guest House', 3, -33.96493, 22.37311, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/george/tramonto-wedding-&-function-venue-and-guest-house-PA43217', '+27 44 870 7150', 'guesthouse@tramonto-venue.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tranquil House', 2, -31.91691, 26.83733, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/tranquil-house-PA44718', NULL, 'tranquilhouse@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Travalia Guest Farm', 1, -31.90089, 23.04837, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/three-sisters/travalia-guest-farm-PA44841', '+27 53 622 0009', 'info@travalia.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Travel Lodge', 1, -25.77653, 29.47919, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/middelburg/travel-lodge-PA45673', '+27 13 282 6297 ', 'travellodge@webafrica.org.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Trawal B&B', 1, -31.77563, 18.62647, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/klawer/trawal-b&b-PA5139', NULL, 'trawal@mylan.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Treetop Heights', 2, -26.01539, 28.02001, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/fourways/treetop-heights-PA43220', '+27 11 465-5232', 'jennifer@treetopheights.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tshukudu Safaris - Marula Camp', 1, -24.35, 30.96667, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/hoedspruit/tshukudu-safaris--marula-camp-PA45466', '+2715 001-7084', 'info@marulacamp.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tsibana Guest House Sunnyside', 1, -25.75529, 28.20519, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/tsibana-guest-house-sunnyside-PA43263', '+27 12 342-7553', 'mothatams@tut.ac.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tsitsikamma On Sea Luxury Lodge', 3, -32.22139, 26.77361, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/tsitsikamma/tsitsikamma-on-sea-luxury-lodge-PA43375', '+27 42 280-9900', 'admin.tos@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tswingwana Guest Lodge', 1, -26.32201, 27.65213, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/the-cradle-of-human-kind/tswingwana-guest-lodge-PA43385', '+27 11 210-3900', 'ajardine@xavier.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tudor Lodge & Tours (Sandton)', 2, -26.06335, 28.07451, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/gallo-manor/tudor-lodge-&-tours-sandton-PA43392', '+27 11 802-4436', 'monmar@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tuishuis Lodge', 2, -25.83382, 28.17782, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/tuishuis-lodge-PA43394', '+27 12 654-5713', 'tuishuis@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tuningi Safari Lodge', 3, -24.76538, 26.17192, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/madikwe-game-reserve/tuningi-safari-lodge-PA7279', '+27 11 781-5384', 'reservations@tuningi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Turning Tides B&B', 1, -33.58837, 26.88267, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-alfred/turning-tides-b&b-PA5152', '+2746 624 4700', 'turningtides@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tuscan View Guest House', 3, -30.01538, 30.92521, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/amanzimtoti/tuscan-view-guest-house-PA42264', '+27 31 904 1710', 'info@tuscanview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tuskers B&B', 1, -28.55384, 29.77161, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/tuskers-b&b-PA43397', '+27 36 637-4746', 'tuskersbnb@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Twentysevenchelsea', 1, -29.789, 31.0354, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/durban-north/twentysevenchelsea-PA43398', NULL, 'sharon@twentysevenchelsea.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Twins Guest House', 3, -32.88215, 27.39698, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/king-williams-town/twins-guest-house-PA1380', '+27 43 642-1149', 'alidaj@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Two Views', 2, -30.36768, 30.70526, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pennington/two-views-PA43430', '+27 39 975-1424', 'emmaschultz@hotmail.co.uk')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Tzaneen Country Lodge', 2, -23.81801, 30.30016, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/tzaneen/tzaneen-country-lodge-PA43433', '015-3043290/1', 'reservations@tznlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ubuntu Guest House', 2, -28.7426, 24.78229, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kimberley/ubuntu-guest-house-PA44926', '538 327 000', 'info@ubuntuguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ukhozi Bush Lodge', 2, -28.81933, 29.53247, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/ukhozi-bush-lodge-PA43435', '+27 36 488-1327', 'ukhozi@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umbhaba Lodge', 2, -25.06298, 31.12289, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/umbhaba-lodge-PA1307', '+27(0)13 737-7636', 'reservations@umbhaba.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umdlalo Lodge house of Zizis Restaurant', 3, -30.7105, 30.46509, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umtentweni/umdlalo-lodge-house-of-zizis-restaurant-PA6996', ' (039) 6950224', 'umdlalolodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umdloti Holiday Resort', 1, -29.67229, 31.11645, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umdloti-beach/umdloti-holiday-resort-PA6998', ' (031) 568 1283/1738', 'bookings@umdlotiresort.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umfolozi River Lodge and Bird Park', 2, -28.48032, 32.18253, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mtubatuba/umfolozi-river-lodge-and-bird-park-PA7006', '+27 35 550 5023', 'lodge@umfolozi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umhambi Lodge', 2, -28.78455, 32.09395, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/richards-bay/umhambi-lodge-PA43438', '+27 35 753-1038', 'umhambi@isat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umngazi River Bungalows & Spa', 3, -31.66667, 29.45, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-st-johns/umngazi-river-bungalows-&-spa-PA1322', '+27 47 564-1115/6/8/9', 'gm@umngazi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umthunzi Boutique Hotel', 2, -30.71663, 30.47416, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umtentweni/umthunzi-boutique-hotel-PA43445', '+27 39 695 0852', 'reservations@umthunzi.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umzimvubu Retreat Guest House', 1, -31.63179, 29.5447, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-st-johns/umzimvubu-retreat-guest-house-PA45102', '475 641 741', 'bookings@umzimvuburetreat.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Umzolozolo Lodge', 3, -28.40806, 29.95889, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ladysmith/umzolozolo-lodge-PA42232', '+27 31 579 8360', 'tracey@umzolozolo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Undulata Country Lodge', 1, -29.67925, 17.88382, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/springbok/undulata-country-lodge-PA44737', '(027) 712 3732', 'undulatalodge@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Urban Manor BnB', 2, -33.95728, 25.59604, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/port-elizabeth/urban-manor-bnb-PA43466', '+27 41 373-7824', 'yharrison@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Ushaka Manor Guest House', 3, -29.7288, 31.08164, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlanga-rocks/ushaka-manor-guest-house-PA7033', ' (031) 561 2028/082 552 53', 'dlowes@ushakamanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Usiba Country Lodge', 3, -25.98207, 27.53715, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/usiba-country-lodge-PA43472', '+27 83 585 5813', 'usiba@usibalodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Val d''O', 3, -33.87818, 19.06152, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/franschhoek/val-do-PA7625', '218 763 902', 'info@valdor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Valemount Country Lodge', 3, -29.8708, 29.71796, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/underberg/valemount-country-lodge-PA7038', ' (033) 7011686/0822638579', 'info@valemountafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Valley Lodge and Spa', 3, -25.9901, 27.54665, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/magaliesburg/valley-lodge-and-spa-PA44992', '(014) 577-1301', 'res@valleylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Valley View Lodge', 2, -25.10041, 30.78262, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/sabie/valley-view-lodge-PA44952', NULL, 'stay@valleyviewlodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Van Eeden Accommodatio', 2, -31.75626, 18.22755, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/strandfontein/van-eeden-accommodation-PA5181', '+2727 215 1045 ', 'accomstrandfontein@mylan.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Van Zijl Guest Houses & Smidswinkel Restaurant', 1, -31.37461, 19.11071, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/nieuwoudtville/van-zijl-guest-houses-&-smidswinkel-restaurant-PA43771', '+27 27 218-1535', 'nieuvz@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Velmore Hotel Estate', 2, -25.81438, 28.09323, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/centurion/velmore-hotel-estate-PA45464', '(012) 370 -7000', 'fomvelmore@orion-hotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Verbara Forest Lodge', 2, -29.89347, 30.95294, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/umhlali/verbara-forest-lodge-PA43498', '+27 32 947-9000/11', 'seaton@verbaralodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Verbe Farm Accommodatio', 2, -30.21955, 17.92356, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/kamieskroon/verbe-farm-accommodation-PA45257', '+27 27 672 1772', 'verbenoheep@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vetho Apartment Hotels', 2, -26.13048, 28.19914, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kempton-park/vetho-apartment-hotels-PA43529', '+27 11 974-7009', 'tskonthzm@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vetho House', 3, -29.54284, 31.21645, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/vetho-house-PA7178', ' (032) 9460687', 'vethohouse@vetho.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Victoria Country Club', 1, -29.5775, 30.33652, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/victoria-country-club-PA45460', '333 471 942', 'manager@victoria.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Victoria Guest House', 2, -29.55908, 30.32934, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/victoria-guest-house-PA42223', '+27 33 347 3408', 'info@victoriaguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Victoria Manor', 2, -31.89476, 26.86604, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/victoria-manor-PA45696', '(0) 45 838 4249 ', 'bookings@victoriamanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Victoria Place Guest House', 3, -23.91231, 29.46467, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/victoria-place-guest-house-PA43530', '+27 15 295-7599', 'reservations@victoriaplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Victoria Place Self Catering', 2, -23.91297, 29.46381, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/victoria-place-self-catering-PA43531', '+27 15 295-7599', 'reservations@victoriaplace.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vikings Rest', 2, -30.85048, 30.38007, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/vikings-rest-PA43533', '+27 39 315-5005', 'elna.brits@vodamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Azure', 3, -33.96676, 18.38447, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/villa-azure-PA5204', '+27 21 438-1760', 'reservations@villaazure.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa de Ghaap Guest House & Restaurant', 1, -29.05775, 23.77102, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/douglas/villa-de-ghaap-guest-house-&-restaurant-PA45143', '+ 27 53 298-4314', 'villadeghaap@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Del Peche', 2, -29.48744, 31.25395, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ramsgate/villa-del-peche-PA7052', ' (039) 3144751 / 3121143', 'ethel.lemmer@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Del Sol', 2, -30.85605, 30.37497, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/villa-del-sol-PA7053', ' (039) 312 1143 ', 'vdsol@venturenet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Garda Bed and Breakfast', 2, -33.94819, 18.4702, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/cape-town/villa-garda-bed-and-breakfast-PA7809', '+ 27 21 686 8138', 'villagarda@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa L'' Apparita', 3, -29.50674, 31.22968, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/salt-rock/villa-l-apparita-PA7639', '325 257 487', 'info@lapparita.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Lugano Guesthouse', 3, -26.29342, 28.05964, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/johannesburg/villa-lugano-guesthouse-PA9602', NULL, ' fax 01143220')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Maria Guest Lodge', 3, -26.84758, 26.68859, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/klerksdorp/villa-maria-guest-lodge-PA1372', '182 976 335', 'sering@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Moyal', 3, -26.14254, 28.04642, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/melrose/villa-moyal-PA42186', '+27 11 447 6399', 'jenny.villamoyel@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Reinet Guest House', 2, -32.25318, 24.52902, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/graaff-reinet/villa-reinet-guest-house-PA42250', '+27 49 892 5525', 'info@villareinet.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Royal Palm Guest House', 2, -25.42859, 31.95238, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/komatipoort/villa-royal-palm-guest-house-PA45136', '+2713 793 7463', 'villa-candilabra@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa San Giovanni Accommodatio', 2, -25.6555, 28.2156, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/wonderboom/villa-san-giovanni-accommodation-PA43538', '+ 27 0 12 543 0501', 'info@vsg.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Siesta No 4', 3, -30.84578, 30.38951, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/margate/villa-siesta-no-4-PA43539', '+27 31 764-0877', 'brenda@zestholidays.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Spa Holiday Resort', 2, -30.1182, 30.84738, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/illovo-beach/villa-spa-holiday-resort-PA7063', '(031) 916 4939', 'info@villaspa.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Stella', 2, -26.14716, 28.14939, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/edenvale/villa-stella-PA42244', '+27 11 454 1361', 'dadita@netactive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villa Victoria Executive Guest House', 2, -26.19987, 28.29644, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/benoni/villa-victoria-executive-guest-house-PA7641', '+27 11 421-2886', 'stanhitchcock@iburst.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Village Guest House And Restaurant', 2, -33.36978, 19.31139, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/ceres/village-guest-house-and-restaurant-PA43556', '+27 23 316-2035', 'villageguest@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Villiera Guest House', 3, -29.05539, 23.76926, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/douglas/villiera-guest-house-PA43557', '+27 53 298-1453', 'villiera@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vincent Valley Lodge', 2, -32.97451, 27.91568, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/vincent-valley-lodge-PA43558', '+27 43 726-3131', 'info@vvl.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Virginia Townhouse', 3, -31.59204, 28.76242, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/virginia-townhouse-PA45682', '+27 47 531-9099', 'info@virginiatownhouse.biz')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Visit Vakasha Town Lodge', 1, -25.8803, 29.2308, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/witbank/visit-vakasha-town-lodge-PA45296', NULL, 'visitvakasha@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('VJ''s Guest House', 3, -33.75796, 25.40781, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/uitenhage/vjs-guest-house-PA43559', '+27 41 992-3597', 'wfgviljoen@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Von Abercron Residence', 2, -34.40195, 19.25652, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/von-abercron-residence-PA5258', '+27 28 312 1551', 'info@abercron-residence-hermanus.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vrede Self Catering', 3, -34.07694, 18.83782, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/somerset-west/vrede-self-catering-PA45072', NULL, 'enquiries@vredeselfcatering.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vredelust B&B', 2, -33.99088, 19.28901, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/villiersdorp/vredelust-b&b-PA7646', '+2728 840 1735', 'gpdall@iafrica.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Vultures Lodge', 3, -30.29742, 27.07535, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/zastron/vultures-lodge-PA45334', '+27 76 227 3913', 'vultureslodge@webmail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wan Inn Bed & Breakfast', 2, -31.88522, 26.88822, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/queenstown/wan-inn-bed-&-breakfast-PA43562', '+27 45 839-6709', 'waninn17@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wakenshaw Manor', 2, -29.50609, 31.23529, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/wakenshaw-manor-PA45832', '+27 86 111 3281', 'jay@homesonline.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Warmkaros B&B', 2, -32.97589, 27.91199, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/warmkaros-b&b-PA43563', '+27 43 726-3536', 'info@warmkaros.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wartburg Hotel - Orion Group', 2, -29.4325, 30.58, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/wartburg/wartburg-hotel--orion-group-PA42599', NULL, 'gmwart@orionhotels.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterberry Hill', 2, -25.04792, 31.13094, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/hazyview/waterberry-hill-PA44850', '137 378 493', 'johan@firstresorts.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterfalls Boutique Hotel', 3, -25.7924, 28.26402, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/waterfalls-boutique-hotel-PA45190', '+27 12 346 6218', 'info@waterfallsboutiquehotel.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterford Manor', 2, -29.29588, 29.98039, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/rosetta/waterford-manor-PA2102', NULL, 'waterford@lantic.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterfront Guest Farm and Venue', 2, -28.44933, 21.26399, 'http://www.aaholidays.co.za/accommodation/south-africa/northern-cape/upington/waterfront-guest-farm-and-venue-PA45095', '+2754 332 6415', 'info@waterfrontkalahari.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterfront Guest House', 2, -26.11214, 27.99487, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/randburg/waterfront-guest-house-PA45348', NULL, 'hildaj@dreamvacs.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterfront Guest House Carolina', 2, -26.0609, 30.11278, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/carolina/waterfront-guest-house-carolina-PA43566', '+27 17 843-2632', 'info@waterfrontcarolina.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterfront Lodge', 3, -34.03922, 23.01547, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/waterfront-lodge-PA380', ' +27 44 382 1696', 'waterfr@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterglen Guest Lodge', 3, -25.74285, 27.26712, 'http://www.aaholidays.co.za/accommodation/south-africa/north-west/rustenburg/waterglen-guest-lodge-PA1313', '+27 14 537-2412', 'waterglengh@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Watermelons B&B', 2, -31.59712, 28.78148, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/watermelons-b&b-PA45233', NULL, 'watermelonsbnb@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Waterwoods', 2, -29.41807, 29.90891, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/nottingham-road/waterwoods-PA45369', NULL, 'lynford@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Weavind Place', 2, -25.73457, 28.27333, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/weavind-place-PA43567', '+27 12 804-0434', 'weavindp@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wedgeview Country House and Spa', 3, -33.94389, 18.85879, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/wedgeview-country-house-and-spa-PA7659', '+2721 881 3525', 'info@wedgeview.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welcome Guest House', 2, -26.657, 27.9729, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/vereeniging/welcome-guest-house-PA43568', NULL, 'info@welcomeguesthouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welcome In', 2, -26.17159, 28.31714, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/benoni/welcome-inn-PA9123', '011 849-6588', 'info@welcomeinn.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welgekozen Country Lodge', 3, -27.00399, 30.80156, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/piet-retief/welgekozen-country-lodge-PA43569', '+2717 826 2910', 'welgekozen@worldonline.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welgelegen Guest Farm', 2, -28.62909, 28.20894, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/fouriesburg/welgelegen-guest-farm-PA43570', '+27 58 223-0495', 'info@vivit.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welgelegen Manor', 3, -26.65606, 28.58937, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/balfour/welgelegen-manor-PA43571', '+27 83 281 1706', 'info@welgelegenmanor.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Welgemoed Chalets', 1, -30.69054, 26.71437, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/welgemoed-chalets-PA43572', '+27 51 633-2692', 'wssmith@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wen do lin Traveller''s Rest', 1, -29.11835, 26.22492, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/bloemfontein/wen-do-lin-travellers-rest-PA45104', '(+27) 051 861 2062', 'mcwilson@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wensleydale Guest Lodge', 2, -29.60535, 30.41325, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/pietermaritzburg/wensleydale-guest-lodge-PA1573', '+27 33 346-1302', 'info@wensleydalelodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Westlodge B and B', 3, -24.92442, 30.84612, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/graskop/westlodge-b-and-b-PA43588', '+27 13 767-1390', 'westlodge@icon.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wetlands Country House and Sheds', 2, -27.34314, 30.14278, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/wakkerstroom/wetlands-country-house-and-sheds-PA35921', '+27 (017) 730 0101', 'info@wetlandscountryhouse.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wetlands Country Retreat', 2, -27.3328, 30.12429, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/wakkerstroom/wetlands-country-retreat-PA45306', NULL, 'gianwes@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wetlands Dullstroom Country Lodge', 1, -25.39924, 30.12262, 'http://www.aaholidays.co.za/accommodation/south-africa/mpumalanga/dullstroom/wetlands-dullstroom-country-lodge-PA43774', '+27 12 804-3590', 'johann@edelweiss.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whale Away Guest House', 2, -34.41377, 19.24797, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/hermanus/whale-away-guest-house-PA7656', '+27 28 312 4468  ', 'info@whaleaway.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whale Sanctuary Lodge', 2, -34.55247, 19.36926, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/gansbaai/whale-sanctuary-lodge-PA5321', '+27 28 384 2806', 'res@whalesanctuerylodge.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whalesong Hotel and Hydro', 3, -34.05646, 23.36998, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/plettenberg-bay/whalesong-hotel-and-hydro-PA2387', '+27 11 729 6700', 'reservations@legendlodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whinstone Farm B and B', 1, -29.06298, 30.59248, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/greytown/whinstone-farm-b-and-b-PA7084', ' (082) 5730559', 'umvotivet@m.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whispering Whale', 3, -32.97382, 17.88741, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/jacobsbaai/whispering-whale-PA43591', '+27 82 770 4109', 'info@whisperingwhale.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('White Mountain Conference & Team Building Resort', 2, -29.20028, 29.5275, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/giants-castle-nature-reserve/white-mountain-conference-&-team-building-resort-PA7088', '+27 36 353-3437', 'whitemountain@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('White Shores Guesthouse', 3, -30.92566, 30.31057, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/southbroom/white-shores-guesthouse-PA7089', ' (039) 316 6534', 'whiteshores@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Whittals Chalets', 1, -30.71694, 26.71223, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/aliwal-north/whittals-chalets-PA43594', '+27 51 634-1189', 'whittals@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wild Olive Guest House', 3, -33.97277, 18.4734, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/newlands/wild-olive-guest-house-PA2141', '+2721 683 0880', 'stay@wildolive.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wild Waves', 2, -30.79601, 30.4179, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/shelly-beach/wild-waves-PA7093', ' (039) 315 7334', 'wildwaves@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wilderness Manor Guest House', 3, -33.99247, 22.57773, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/wilderness/wilderness-manor-guest-house-PA5352', ' +27 44 877 0264', 'wildman@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Willy''s Chateau', 2, -26.1947, 28.1101, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/kensington/willys-chateau-PA910', '+27 11 615-5210', 'steincape@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wilmot Cottages', 2, -33.99429, 25.66957, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/summerstrand/wilmot-cottages-PA43605', '+27 41 583-1770', 'nwilmot@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Winburg Guest House', 2, -28.52036, 27.0219, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/winburg/winburg-guest-house-PA43607', '+27 51 881-0233', 'wguesthouse@mtnloaded.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Winterton Country Lodge', 2, -28.81379, 29.53633, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/winterton/winterton-country-lodge-PA42288', '+2736-4881049', 'rosecot@intekom.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Woodleigh Guest Lodge', 2, -32.99071, 27.93441, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/east-london/woodleigh-guest-lodge-PA43775', '+27 43 735-4285', 'bev.forword@absamail.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Woodridge Country Hotel and Spa', 3, -29.40047, 30.05482, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/balwan/woodridge-country-hotel-and-spa-PA1623', '+27 33 234-4423', 'woodridge@worldonline.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Wyndford Holiday Farm', 2, -28.88632, 27.88352, 'http://www.aaholidays.co.za/accommodation/south-africa/free-state/caledonspoort/wyndford-holiday-farm-PA43627', '+27 58 223-0274', 'reception@wyndford.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Xamarin Guest Farm', 1, -32.09472, 18.31275, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/lamberts-bay/xamarin-guest-farm-PA43628', '+27 27 432-1325', 'hayes@cybertrade.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Yellow Aloe Guest House', 2, -32.18446, 18.89927, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/clanwilliam/yellow-aloe-guest-house-PA5386', ' +27 27 4822018', 'yellowaloe@mweb.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Yellowwood Lodge', 2, -34.03532, 23.04109, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/knysna/yellowwood-lodge-PA42759', '+27 44 382 5906', 'yellwood@global.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zanami Lodge', 2, -23.90998, 29.4655, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/polokwane/zanami-lodge-PA44872', '270 152 914 825', 'zanamilodge@webmail.co.za  ')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zebra Country Lodge', 2, -25.51314, 28.48827, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/leeuwkloof/zebra-country-lodge-PA1237', '+27 12 361 6303', 'reservations@legendlodges.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zebra Hills Game Reserve', 3, -27.7411, 32.10282, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/mkuze/zebra-hills-game-reserve-PA43629', '+27 35 595-8125', 'zebrahills@telkomsa.net')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zebula Country Club Unit 107', 3, -23.97478, 28.29944, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/bela-bela/zebula-country-club-unit-107-PA43631', NULL, 'foundersportfolio@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zeldagar Guest House', 2, -25.71203, 28.26346, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/zeldagar-guest-house-PA43641', '+27 12 333-9324', 'info@zeldagar.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zeldagar Lodge', 2, -25.70789, 28.26152, 'http://www.aaholidays.co.za/accommodation/south-africa/gauteng/pretoria/zeldagar-lodge-PA43642', '123 339 324', 'info@zeldagar.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zenzele River Lodge', 3, -25.22055, 28.49793, 'http://www.aaholidays.co.za/accommodation/south-africa/limpopo-province/rust-de-winter/zenzele-river-lodge-PA262', '012-3467693', 'zenzeleriverlodge@polka.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zevenwacht Wine Farm', 3, -33.92201, 18.68437, 'http://www.aaholidays.co.za/accommodation/south-africa/western-cape/stellenbosch/zevenwacht-wine-farm-PA5402', ' +27 21 903 5123 ', 'reservations@zevenwacht.co.za')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zimbali- No 12 Thulabali', 3, -29.55285, 31.20169, 'http://www.aaholidays.co.za/accommodation/south-africa/kwazulu-natal/ballito/zimbali-no-12-thulabali-PA43646', '+27 83 462 3624', 'foundersportfolio@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zovuyo Guest House & Conference Centre', 2, -32.33272, 28.14381, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/butterworth/zovuyo-guest-house-&-conference-centre-PA45065', NULL, 'zovuyo.guesthouse@gmail.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('ZQ Guest House', 2, -31.59239, 28.75596, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/mthatha/zq-guest-house-PA45305', '+27 47 532 5305', 'nsiban@yahoo.com')");

        tx.executeSql("INSERT INTO AAAccommodation (Name, AA_rating, Latitude, Longitude, Seopermalink, PhoneNumber, Email) VALUES ('Zuurberg Mountain Village', 2, -33.31667, 25.68333, 'http://www.aaholidays.co.za/accommodation/south-africa/eastern-cape/addo/zuurberg-mountain-village-PA43650', NULL, 'henri@addo.co.za')");


        //Acc end  Beyers Naude Drive comma removed  & Walmer Park Shopping Centre

        //sales
        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('East Londo', NULL, -32.98481, 27.90552, '(043)7260601', 'reception@harveyworld-el.co.za  shamema@harveytravl-el.co.za', NULL, '45 Devereux Avenue, Vincent, East Londo', 'East Londo', 'Eastern Cape', 'HWT East London, P.O. Box 8051, Nahoon, East London, 5210')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Port Elizabeth', NULL, -33.98096, 25.55761, '(041)368 6452', 'chantells.teaa@gmail.com  tracym.teaa@gmail.com', NULL, 'Shop 19A, Walmer Park Shopping Centre, Main Road', 'Walmer', 'Port Elizabeth', 'Private Bag x0002, the Fig Tree, Charlo, Port Elizabeth, 6033')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Bloemfontei', NULL, -29.121944, 26.220556, '(051)4476191', 'helenh.teaa@gmail.com  elizabethh@teaa.gmail.com', NULL, 'Shop SO1B, Third Floor, Loch Logan Waterfront, Henry Street, Bloemfontei', 'Bloemfontei', 'Free State', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('East Rand Mall', NULL, -26.18144, 28.24284, '(011)8261512  (011)8261511', 'susan.fonorama@galileosa.co.za   ditsac52@gmail.com', NULL, 'Shop 102, East Rand Mall, C/o North Rand & Bentel Avenue', 'Boksburg', 'Gauteng', 'P.O. Box 26696 East Rand 1462')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Centurio', NULL, -25.5245, 28.0948, '(011)6535513', 'carinai.teaa@gmail.com    julier.teaa@gmail.com', NULL, 'Shop F6, Banking Mall area, Centurion Lifestyle centre, Cnr Lenchen Ave & Old Jhb Road', 'Centurion', 'Gauteng', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Cresta', NULL, -26.1305, 27.971429, '(011)4785312', 'busisiwe.magubane@aasa.co.za  cleodenes@aasa.co.za', NULL, 'Cresta Regional Shoppin Centre, Beyers Naude Drive', 'Cresta', 'Gauteng', 'No P.O. Box address')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Park Meadows', NULL, -26.1835, 28.1146, '(011)6157946  (011)6157852', 'elizabethz.teaa@gmail.com    bongam.teaa@gmail.com', NULL, 'Shop 33, Park Meadows Shopping Centre, Cumberland Road,Kensingto', 'Kensingto', 'Gauteng', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Menlyn', NULL, -25.780596, 28.274227, '(012)348 2522', 'justine@zaplanet.co.za colleen@zaplanet.co.za', NULL, 'Shop 2 Level P3, Menlynn Park Shopping Centre, Atterbury Road', 'Menlyn', 'Gauteng', 'P.O. Box 36070 Menlo Park 0102')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Benmore', NULL, -26.6, 28.257, '(011)8844104', 'samanthag.teaa@gmail.com stephana.teaa@gmail.com', NULL, 'Shop G02, Benmore Gardens Shopping Centre, Cnr Grayston & Benmore Road, Benmore', 'Benmore', 'Gauteng', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Springs', NULL, -26.25788, 28.44021, '(011)8122240', 'deshini.rambaran@harveyworld.co.za  john.smith@harvyworld.co.za', NULL, '90 4th Street, Springs, Gauteng', 'Springs', 'Gauteng', 'P.O. Box 17826, Sunward Park, Boksburg, 1470')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Musgrave', NULL, -29.848926, 30.999945, '(031)2015244', 'michelleb.teaa@gmail.com      belindaj.teaa@mail.com', NULL, 'Shop 317, Musgrave Centre, Musgrave Road, Durba', 'Durba', 'Kwazulu Natal', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Hilto', NULL, -29.551416, 30.300267, '(033) 343 1380', 'juanita@hiltontravel.co.za    jane@hiltontravel.co.za', NULL, 'Shop 52, Lower Quarry Centre, Hilton Avenue', 'Hilto', 'Kwazulu Natal', 'P.O. Box 236, Hilton, Kwazulu Natal,3245')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('La Lucia', NULL, -29.451448, 31.034822, '(031)5727852  (031)5727854', 'tasleema.teaa@gmail.com  shereenr@gmail.com', NULL, 'Shop 205, Entrance 2, La Lucia, Kwazulu Natal', 'La Lucia', 'Kwazulu Natal', 'P.O. Box 784527 Sandton 2146')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Richards Bay', NULL, -28.45272, 32.03115, '(035)7893017', 'heathero@harveyworld.co.za   karon.mcgarr@harveyworld.co.za', NULL, 'Shop 18b, Lakeside Mall, 5 Markstrasse Road', 'Richards Bay', 'Kwazulu Natal', 'P.O. Box 58, Richards Bay, Kwazulu Natal, 3900')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Shelly Beach', NULL, -30.771943, 30.434308, '(039)3156330', 'sarah.margison@harveyworld.co.za    denise.cumming@harveyworld.co.za', NULL, 'RS Howe Building, Lot 98, Marine Drive', 'Shelly Beach', 'Kwazulu Natal', 'P.O. Box 692, Shelly Beach, Kwazulu Natal, 4265')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Tzanee', NULL, -23.8174, 30.1574, '(015)3073565', 'kobus.cloete@harveyworld.co.za   linda.nel@harveyworld.co.za', NULL, 'Shop 13, Oasis Mall, Aquapark', 'Tzanee', 'Mpumalanga', 'P.O. Box 757, Tzaneen, Limpopo 0850')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Nelspruit', NULL, -25.47346, 30.96768, '(013)7533571', 'marcia@dana.co.za   monique@dana.co.za', NULL, 'Shop 12, The Crossings, Cnr N4 & General Dan Pienaar Street, Nelspruit', 'Nelspruit', 'Mpumalanga', 'P.O. Box 218, Nelspruit, 1200')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Upingto', NULL, -28.27218, 21.1457, '(054) 3311470', 'travel@ymctravel.co.za     christa@ymctravel.co.za', NULL, 'ORI Building, 48 Schroder Street, Upington, Northern Cape', 'Upingto', 'Northern Cape', 'YMC Travel, P.O. Box 2213, Upington, Northern Cape, 8800')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Meadowridge', NULL, -34.21954, 18.272042, '(021) 7152850', 'ray@constantiabergtravel.co.za  linda@constantiabergtravel.co.za', NULL, 'Shop 6 , Meadowridge Village Shooping Centre, Howard Drive', 'Meadowridge', 'Western Cape', 'P.O. Box 5226, Cape Town, 8000')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Cavendish', NULL, -33.980597, 18.462619, '(021) 683 1410', 'shahidas.teaa@gmail.com     dylanm.teaa@gmail.com', NULL, 'Shop F11, First Floor, Cavendish Connect, Dreyer Street', 'Claremont', 'Western Cape', 'P.O. Box 44288, Claremont, 7735')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('George', NULL, -33.5728, 22.272495, '(044)8746930', 'prudence.jones@harveyworldsa.co.za  linda.scholtz@harveyworldsa.co.za', NULL, '111 York Street, George, Western Cape, 6530', 'George', 'Western Cape', 'P.O. Box 1594, George, Western Cape, 6530')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Somerset West', NULL, -34.082473, 18.821764, '(021)8510827', 'shireen.te@galileosa.co.za   mary.te@galileosa.co.za', NULL, 'Shop 236A, Entrance 3, Somerset Mall', 'Somerset West', 'Western Cape', 'P.O. Box 3771, Somerset West, 7129')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Tyger Valley', NULL, -33.871522, 18.636274, '(021) 9142265', 'elaine.te@galileosa.co.za      jan.te@galileosa.co.za', NULL, 'Shop 597F, Entrance 8, Upper Level, Tyger Valley Shopping Centre, Willie van Schoor Avenue', 'Bellville', 'Western Cape', 'P.O. Box 4390, Tygervalley,7536')");

        tx.executeSql("INSERT INTO SalesAgent (Name, Catery, Lat, Long, Tel, Email, Website, AddressStreet, AddressSuburb, AddressCity, AddressPostal) VALUES ('Garsfontei', NULL, -25.49548, 28.18873, '(012)9408999', 'teller2@voetspore.co.za  raymond@voetspore.co.za', NULL, 'Shop 315, Woodlands Boulevard, c/0 Garsfontein & De Villa Bois Str', 'Pretoria', 'Gauteng', 'P.O. Box 92256, Mooikloof,0059')");

        //sales end

        // fUEL STATION
        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loxton Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -32.90486, 18.76815, 'Dippenaar, Jaco (MR J)', '022 913 1136', 60, 'Langstreet', 'PIKETBERG', 7320, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '06B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lubbe Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -30.043366, 25.790953, 'Lubbe, Frik (MR F)', '051 7130439', 19, 'Louw Street', 'TROMPSBURG', 9913, NULL, 'Free State', 'Core 4 - The Rest', NULL, '08A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lynross BP', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.62243, 28.09466, 'Kruger, Theunis (MR T)', '012 5412812', NULL, 'Cnr Piet Rautenback & Piet Pret', 'ROSSLY', 200, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('M1 Oasis', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.24146, 28.008174, 'Smal, Louis (MR L)', '011 496 1880', NULL, 'M1 Highway', 'ORMONDE', 2013, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', 'Wimpy', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Maanankoe Filling Station', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.526851, 28.810928, 'Litabe, Jan (MR J)', '058 7893390', NULL, 'Resort Road', 'PHUTHADITJHABA', 2013, NULL, 'Free State', 'Core 4 - The Rest', NULL, '07C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Madadeni Toyota', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -27.75564, 29.948387, 'Mbonambi, Bonginkosi (MR B)', '034 329 1724', 10203, 'Main Road', 'NEWCASTLE', 2940, 10203, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '06C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Magaliesburg Diensstasie', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.99338, 27.54324, 'James, Linda (MRS L)', '014 5771107', 29, 'Rustenburg Road', 'MAGALIESBURG', 2805, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Makapanstad BP', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.243089, 28.122557, 'Lesolang, Lawrence (MR L)', '012 714 1102', NULL, 'Makapaanstad Road', 'MAKAPAANSTAD', 190, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Malibu Service Station', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -34.00147, 18.69048, 'Brey, Mohammed (MR MS)', '021 909 2815', 1, 'London Way', 'BLUE DOWNS', 7490, 1, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Malmesbury Toyota', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.466558, 18.73084, 'Van Zyl, Dirl (MR D)', '022 4822961', 88, 'Voortrekker Road', 'MALMESBURY', 7300, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mangalani Service Station', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.28345, 27.85521, 'Nkuna, Khazuamula (MR K M)', '011 9808002', NULL, 'cnr Old Potchefstroom & Tsianda Rds', 'CHIAWELO', 2000, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Manor Garage', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.598799, 30.398566, 'Paruk, Ebrahim (MR E)', '033 3425781', 4, 'Ohrtmann Road', 'PIETERMARITZBURG', 3200, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Maokeng Filling Station', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -27.663233, 27.249596, 'Coetzer, Piet (MR P)', '056 2125591', 8500, 'Maokeng Street', 'KROONSTAD', 9500, NULL, 'Free State', 'Core 4 - The Rest', 'Rural Road', '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Marx Service Centre', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.77805, 30.76538, 'Schroeder, Norman (MR N)', '031 7655592', 7, 'Inanda Road', 'HILLCREST', 3650, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mashikoane Service Station', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.51897, 28.1099, 'Maluleke, Teboho (MS T)', '012 799 3112', NULL, 'BLOCK H (Mabopane)', 'SOSHUNGUVE', 152, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Maxi Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.6735, 27.91887, 'Groenewald, Eben (MR E)', '016 4211787', NULL, 'cnr Van Riebeeck & Beaconsfield Rds', 'VEREENIGING', 1930, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Menlo Motors', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.347245, 28.433929, 'Smit, Jan (MR J)', '011 8118170', 79, 'Agnew Street', 'DUNNOTTAR', 1590, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Merewent Service Station', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.95269, 30.96835, 'Kandasamy, Mandgaren (MR M)', '031 468 1881', 3, 'Rajmahal Road', 'MEREWENT', 4068, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('MG''s Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.257602, 27.855451, 'Neta, George (MR G)', '011 9856625', NULL, 'Cnr Koma Drive & Malia Street', 'SOWETO', 1868, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Midland Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -28.56645, 29.80665, 'Hillenaar, Kees (MR K)', '036 6376967', 70, 'Newcastle Road', 'LADYSMITH', 3370, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '05C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Midway Motors', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.465464, 31.179308, 'Ginindza, Elias (MR E)', '0137 941134', 2305, 'Shabangu Street', 'KANYAMAZANE', 1214, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '61C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Midway Service Station', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.863641, 29.219672, 'Heyns, Koos (MR J)', '013 690 1848', NULL, 'Cnr Leyds & Voortrekker Street', 'WITBANK', 1035, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Milnerton Service Station', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.87763, 18.50096, 'Beato, Tony (MR T)', '021 5522020', 434, 'Koeberg Road', 'MILNERTO', 7441, 434, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Modacks Service Centre', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.992684, 18.553353, 'Modack,  (MR )', '021 6917046', NULL, 'The Downs Avenue', 'MANNENBERG', 7764, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Model Garage', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.850913, 30.983524, 'Kronik, Louis (MR L)', '031 261 6252', 163, 'king cetshwayo highway', 'MAYVILLE', 4091, 163, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Moloantoa Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.560136, 27.858658, 'Konyana, Joyce (MRS J)', '016 5942264', NULL, 'Wessels Mota Street', 'SEBOKENG', 1980, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Montagu Vulstasie', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.784526, 20.122029, 'Coetsee, Johan (MR J)', '023 626 6871', NULL, 'Bath Street', 'MONTAGU', 6720, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Montana Motors', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.678821, 28.228781, 'de Vries, Johnny (MR J)', '012 5430784', 369, 'Serissa Street', 'MONTANA', 151, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Montwood Motors', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.917325, 30.965805, 'Nortje, Naas (MR N)', '031 462 8652', 123, 'Montclair Road', 'MONTCLAIR', 4000, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mooi Street Auto Fitment', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.21139, 28.05269, 'Pillay, S (MR S)', '011 334 3995', NULL, 'cnr Mooi St & Heildelberg Road', 'JOHANNESBURG', 2023, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Moore Rd Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.857579, 31.00225, 'Schewitz, Graeme (MR G)', '031 2015194', 222, 'Che Guevara Road', 'BEREA', 4001, 222, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('More Power Service Station', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.16198, 27.974755, 'Cassim Saib, Idris (MR I A)', '011 477 0913', NULL, 'Cnr 5th & 10th Sts', 'ALBERTSKROO', 0, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Morgenster Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.04238, 18.59523, 'Hassan, Nazeem (MR N)', '021 3923735', NULL, 'Morgenster Avenue', 'MITCHELLS PLAI', 7802, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Motorhave', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -33.01808, 27.9116, 'Kleyn, Johan (MR J)', '043 7225508', 55, 'Fleet Street', 'EAST LONDO', 5201, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Motorport', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.82456, 18.49085, 'Biznis, Mike (MR M)', '021 5576133', NULL, 'cnr Blaauwberg Rd & Raats Drive', 'TABLE VIEW', 7441, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mountain View Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.865984, 18.652728, 'De Villiers, Sarel (MR S)', '021 9768170', NULL, 'Kendal & Edelweis Roads', 'EVERSDAL', 7550, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mulla Motors', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.934419, 30.945571, 'Mulla, Cassim (MR C)', '031 400 9942', 30, 'Meranti Street', 'DURBA', 4060, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Mummy''s Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.18944, 26.22729, 'Sello, Francis (MR F)', '051 434 1822', 11910, 'Tau Street', 'KAGISANONG', 9300, NULL, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nagina Service station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.86959, 30.813, 'Ramlall, B (MR B)', '031 7064603', 2, 'Soniway', 'MARIANHILL', 3610, 2, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nakisa Service Station', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -31.7829, 28.4202, 'Thabede, Sibusiso (MR S)', '082 443 9254', 83, 'Southerland Street', 'UMTATA', 5100, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '06A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nancefield Filling Station', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.310299, 27.903041, 'Suleman, Shokad (MR S)', '011 422 0333', NULL, 'Cavendish & Jesmond Road', 'NANCEFIELD', 1820, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nantes Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.084795, 26.243572, 'Van den Berg, Gert (MR G)', '051 4333293', 2, 'Nantes Street', 'BAYSWATER', 9310, NULL, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('National Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.73075, 31.00508, 'Naidoo, Krishna (MR K)', '031 500 5766', 14, 'Hunslett Road', 'PHOENIX INDUSTRIAL PARK', 4068, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Industrial', '01A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ndlela Taxi City', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -25.988108, 28.234687, 'Khan, Abubakr (MR AE)', '011 9256796', NULL, 'John Chapman Drive', 'TEMBISA', 1632, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Neta Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.520628, 28.07821, 'Neta, George (MR GM)', '012 7023745', NULL, 'Kmongwe & Makhele Sts', 'MABOPANE', 190, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Neil Woolridge Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -30.05806, 30.8806, 'Woolridge, Neil (MR N)', '033 3453519', 2, 'Chief Albert Luthuli Street', 'PIETERMARITZBURG', 3201, 2, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('New Freeway Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.980947, 18.534619, 'Manus, Harold (MR H)', '021 6385180', NULL, 'cnr David & Reen Roads', 'ATHLONE INDUSTRIA', 7766, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('New Germany Service Centre', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.80073, 30.87489, 'Moonsamy, Poobalan (MR P)', '031 705 3930', 33, 'Shepstone Road', 'NEW GERMANY', 3620, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', '--', 'WBC', '--', 'BP Jetwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nirvana Circle Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.3104, 27.8395, 'Ravat, Yunus (MR Y)', '011 8541400', 48, 'Flamin Road', 'LENASIA', 1820, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Northern Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -28.557675, 29.783967, 'Asmal, Dawood (MR D I A)', '036 6377555', 6, 'Queen Street', 'LADYSMITH', 3370, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '05C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('North Paarl Service Station', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.704705, 18.960333, 'Volschenk, Hennie (MR H)', '021 8725518', 546, 'Main Street', 'PAARL', 7620, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Norwood BP Centre', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -31.78273, 28.42008, 'Rusteberg, Steve (MR S)', '011 7286310', NULL, 'Main Durban Road', 'UMTATA', 5100, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '06A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Norwood Garage', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.157197, 28.076694, 'Hoosen, Suhaifa (MRS S)', '011 483 3810', 52, 'Grant Avenue', 'NORWOOD', 2041, 52, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ntlali Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -31.810885, 28.759636, 'Ntlali, Ebenezer (MR E)', '047 5730023', NULL, 'PO BOX 1', 'MQUANDALI', 5080, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '57A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Nu-Stateway Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.99749, 26.76105, 'Barker, Anita (MS A)', '057 3534383', 448, 'Stateway', 'WELKOM', 9465, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Oak Cottage Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.31174, 26.53528, 'White, Guy (MR G)', '046 6224737', 35, 'African Street', 'GRAHAMSTOW', 6140, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Oaks Service Station', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.51281, 29.40953, 'Raw, Vaughn (MR V)', '039 7272173', 13, 'Hope Street', 'KOKSTAD', 4700, 13, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '57A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Oakvlei Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.89648, 18.64816, 'Carstens, Riaan (MR R)', '021 910 1805', NULL, 'cnr Hadley  Old Paarl Road', 'BELLVILLE', 7561, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', 'Dealer Owned', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ontdekkerspark Motors', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.14754, 27.89287, 'Patel, Divieshkum (MR D)', '011 672 0870', 328, 'cnr Louis & Ontdekkers Roads', 'DISCOVERY', 1711, 328, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', '--', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Osmans Service Station', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.93526, 18.59032, 'Naidoo, Monty (MR M)', '021 931 7020', NULL, 'Owen Road', 'ELSIES RIVER', 7480, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Paddy''s Garage', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.24893, 28.440512, 'Hornby, Kenneth (MR K)', '011 8112074', 1, 'Boksburg Road', 'SPRINGS', 1560, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Palm Court Fuels', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.12582, 27.93127, 'Ragie, Zahier (MR Z)', '011 475 1333', NULL, 'JG Strydom Ave & Fern Ave', 'WELTERVREDENPARK', 1715, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'STD')");
        //Fuel ma6th  
        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Palm Service Centre', 'Rtl Sales Ops-Durba', 'vender, Devrani', -28.741082, 32.053294, 'Van Rooyen, Nico (MR N)', '035 7897039', 14, 'Bullion Boulevard', 'RICHARDS BAY', 3900, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Urban Road', '05A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Pelican Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.917871, 30.941338, 'Callanan, Frank (MR F)', '0314622521  0314623683', NULL, 'Pelican Place', 'YELLOWWOOD PARK', 4011, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Pinati Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.992707, 18.516357, 'Firfiray, Husain A (MR H A)', '021 6916813', NULL, 'cnr Induland & Blomvlei Roads', 'LANSDOWNE', 7780, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Pondo Motors', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -24.053471, 30.218817, 'Ntsanwisi, Mungsis (MR M)', '015 303 1494', 1520, 'Muhlaya Street', 'GAZANKULU', 826, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '63C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('President Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.922269, 18.380834, 'Shaw, Robert (MR R)', '021 439 2801', 110, 'Regent Road', 'SEA POINT', 8001, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Prestige Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.9382, 30.95773, 'Ramkinsoon, Nimal (MR N)', '031 4622766', 172, 'Leicester Road', 'DURBA', 4060, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Protea Glen Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.269444, 27.814145, 'Thidiela, Azwidali (MR AD)', '011 9873155', NULL, 'Cnr Chesnut & Sagewood', 'SOWETO', 1868, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Protea Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.271851, 27.832391, 'Neta, George (MR G)', '011 9801326', 1837, 'Ndaba Drive', 'SOWETO', 1868, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Quarry Service Centre', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.561676, 30.300132, 'Smith, Margie (MRS M)', '033 3431977', 57, 'Hilton Avenue', 'HILTO', 3245, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Queensburgh Auto Centre', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.87935, 30.92625, 'Savage, Josephine (MRS J)', '031 464 6460', 60, 'Main Road', 'MALVERN, QUEENSBURGH', 4093, 60, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('QwaQwa Garage', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.41991, 28.7554, 'Molefe, Winnie (MRS W)', '058 713 1707', NULL, 'C/O Mota & Mampoi', 'PHUTHADITJHABA', 9866, NULL, 'Free State', 'Core 4 - The Rest', NULL, '07C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rametse Motors', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.533029, 28.735897, 'Rametse, William (MR W)', '015 2235731', 3827, 'Nelson Mandela Drive', 'SESHE', 742, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '12C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Randles Road Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.839962, 30.983889, 'Yuseph, Mohamed Su (MR M)', '031 2077686', 240, 'Randles Road', 'SYDENHAM', 4001, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rays 1', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.940711, 18.549284, 'Fell, George (MR G)', '021 5344557', 1, 'Nourse Avenue', 'EPPING INDUSTRIA', 7475, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rays 2', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.927671, 18.562376, 'Fell, George (MR G)', '021 5344557', NULL, 'odenough Avenue & Bofors Circle', 'EPPING 2', 7475, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Reservoir Hills Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.80501, 30.947067, 'Pancha, Harry (MR H)', '031 2628126', 292, 'Mountbatten Drive', 'RESERVOIR HILLS', 4091, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rex Motors', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.76643, 29.454541, 'Louverdis, Savras (MR S)', '013 2824376', 3, 'Church Street', 'MIDDELBURG', 1050, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rhodes Filling Station', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.422511, 28.461682, 'du Toit, Stefanus (MR SP)', '011 8145820', NULL, 'Cnr Rhodes & Buxton Sts', 'NIGEL', 1490, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ridgewood Motors', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.76475, 28.28925, 'De Beer, Stoffel (MR J S)', '012 348 5042', 16, 'Camellia Avenue', 'LYNNWOOD', 81, 16, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('River Service Station', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.274447, 27.226125, 'Masipa, Paul (MR P)', '014 555 5743', 947, 'Unit 3', 'MOGWASE', 314, NULL, 'North West', 'Core 4 - The Rest', NULL, '10C', '--', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Riverside Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.86609, 25.60182, 'Tucker, Des (MR D)', '041 4661631', 40, 'Grahamstown Road', 'SWARTKOPS', 6209, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', 'Shop 91 - 136 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Road Island Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -28.95299, 31.75682, 'Mattinson, Mike (MR M)', '035 3401745', NULL, 'Main Road', 'MTUNZINI', 3867, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Industrial', '04A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Robs Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.73547, 30.57907, 'Ramdial, Ravin (MR R)', '031 7823438', NULL, 'Ridge Road', 'CATO RIDGE', 3680, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rocklands Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.065636, 18.613324, 'Isaac, Nadir (MR N)', '021 391 4966', NULL, 'cnr Caravelle & Handley-Page Roads', 'ROCKLANDS', 7786, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rocky''s Service Station', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.036169, 18.502526, 'Seedat, Ahmed (MR A)', '021 705 1531', NULL, 'Cnr Klip & Lake Road', 'GRASSY PARK', 7945, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rombo Motors', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.194579, 28.151343, 'Ciarocchi, Mario (MR M)', '011 8730219', 44, 'Rietfontein Road', 'PRIMROSE', 1416, 44, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Rondebosch Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.95896, 18.47079, 'Rochat, Rory Denni (MR R D)', '021 689 5146', 16, 'Main Road', 'RONDEBOSCH', 7700, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Roryn Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.67981, 27.93051, 'Dadabhay, Bilal (MR B)', '016-4223533', NULL, 'Cnr Voortrekker & Victoria Ave', 'VEREENIGING', 1930, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Roundabout Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.009308, 18.517519, 'Fakir, Fouad (MR F)', '021 7040670', NULL, 'Old Strandfontein Road', 'WETTO', 7780, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ry-Gate Service Centre', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.96988, 18.53386, 'Allie, Akber (MR A)', '021 6333064', 12, 'Hazel Road', 'GATESVILLE', 7764, 12, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sacks Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.208978, 28.048175, 'Seedat, Moosa (MR M)', '011 3343744', NULL, 'cnr Von Weilligh & Grahamstown Road', 'JOHANNESBURG', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Safari Motors', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -26.13268, 28.68309, ' Loubser, Deon (MR D)', '013 6652346', 54, 'Sarel Cilliers Street', 'DELMAS', 2210, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Safarituine Diensstasie', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.697264, 27.227304, 'Etsabeth, Razano (MR R)', '014 533 0336', 2, 'Arend Road', 'RUSTENBURG', 300, NULL, 'North West', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', '--', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Saibs Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.93976, 30.97984, 'Hoosen, Iqbal (MR I)', '031 5055960', 108, 'Woodview Drive', 'PHOENIX', 4015, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sakies City Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.234592, 27.867347, 'Wally, Mohamed (MR M)', '011 9329809', NULL, 'cnr Koma & Bolani Drive', 'SOWETO', 1868, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sampo Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.15637, 26.16039, 'Kaka, Ismael (MR I)', '018 6322786', NULL, 'cnr Swart & Buiten Streets', 'LICHTENBURG', 2740, NULL, 'North West', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('SB Delta', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -32.719296, 25.572605, 'Hankel, Eric (MR E)', '042 2431180', 79, 'Nojoli Street', 'SOMERSET EAST', 5850, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '07B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Schepel''s Garage', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.908734, 18.571104, 'Schepel, Robert (MR R)', '021 5911771', 330, 'Voortrekker Road', 'ODWOOD', 7460, 330, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Schwarzland Auto Haus', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.466684, 18.730814, 'Van Der Merwe, Danie (MR D)', '022 4821474', 127, 'Voortrekker Road', 'MALMESBURY', 7299, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Scotts Service Station', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.40924, 27.83391, 'Scott, Moses (MR M)', '011 855 2443', 60, 'Alan Paton Avenue', 'ENNERDALE', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Seadoone Service Station', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.066505, 30.869816, 'Peer, N (MR N)', '031 9033894', 26, 'Seadoone Road', 'AMANZIMTOTI', 4125, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sentraal Motors', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.711323, 28.223016, 'Young, Peter (MR P)', '012 331 0950', 963, 'Ben Swart Street', 'VILERIA', 186, 963, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sentra Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.014533, 18.995305, 'Laubscher, Johan (MR J)', '022 9312176', 8, 'Voortrekker Street', 'PORTERVILLE', 6810, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '06B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sharwoods North End', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.94573, 25.60629, 'Sharwood, John (MR J)', '041 4843661', 556, 'van Mbeki Ave', 'PORT ELIZABETH', 6001, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sheba Motors', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.777092, 31.043721, 'Morrow, Clive R (MR C R)', '013 7125101', 38, 'General Street', 'BARBERTO', 1824, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '61C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Shopping Centre Motors', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.327666, 28.185758, 'Motsoane, Michael (MR M)', '011 8668073', NULL, 'cnr Moagi & Leside Road', 'VOSLOORUS', 1456, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Shosholoza Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.21138, 28.04224, 'Nanabhai, Mohummed (MR M)', '011 838 3493', NULL, 'cnr Village & Loveday Street', 'JOHANNESBURG CENTRAL', 1812, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Showground Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.93019, 25.60194, 'Swan, Dick (MR D)', '041 4847398', 50, 'Uitenhage Road', 'NORTH END', 6001, 50, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Simon Vermoote', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.75371, 28.325085, 'Venter, Tjaart (MR T)', '012 807 2662', NULL, 'cnr Furrow & Simon Vermoote', 'THE WILLOWS', 41, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('SK Service Station', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.21229, 27.871252, 'Kekana, Susan (MRS S)', '011 9889300', 76, 'Roodepoort Road', 'DOBSONVILLE', 1863, 76, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Solo Filling Station', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.42817, 28.488913, 'Coetzer, Nick (MR N)', '011 8145609', NULL, 'cnr York & J Van Der Merwe Roads', 'NIGEL', 1490, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Somerset Road Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.91181, 18.41733, 'Schaeffer, Paul (MR P)', '082 875 9154', 4, 'Somerset Road', 'GREENPOINT', 8051, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'NED/NDS')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sondoni Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.159068, 31.416906, 'Naidoo, Perumal (MR P)', '032 4541675', 1002, 'Sundumbili Township', 'MANDINI', 4490, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Township', '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sonpark Diensstasie', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.47614, 30.969433, 'Jacobs, Kobus (MR K)', '013 7412678', NULL, 'Dan Pienaar & Piet Retief Str', 'NELSPRUIT', 1201, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '61C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Southernwood Service Centre', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.99578, 27.8967, 'Coetzer, Otto (MR O)', '043 7220783', NULL, 'Oxford Street', 'EAST LONDO', 5201, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Soweto Highway Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.233634, 27.952904, 'Thidiela, Azwidali (MR AD)', '011 985 6796', NULL, 'cnr Soweto Highway & Immik Road', 'SOWETO', 2016, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'PnP Express', 'Shop 0 - 90 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Spes Bona Tractors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.73626, 19.01054, 'De Bod, Pieter (MR P)', '021 8622194', NULL, 'Klein Drakenstein Road', 'KLEIN DRAKENSTEI', 7628, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Springpark Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.80499, 30.9994, 'Sokay, Monisen (MR M)', '031 5794630', 26, 'Palmfield Road', 'SPRINGFIELD', 4034, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Industrial', '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('S S S Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -27.75354, 29.94978, 'Singh, Smiley (MR S)', '034 3123785', 62, 'Kirkland Street', 'NEW CASTLE', 2940, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '06C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Stadion Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.12061, 26.20419, 'Swanepoel, Hendri (MR G)', '051 444 5106', 62, 'King Edward Road', 'BLOEMFONTEI', 9317, 62, 'Free State', 'Core 4 - The Rest', 'Industrial', '11C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Stikland Auto', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.907653, 18.657007, 'Van Blommestein, Christo (MR C)', '021 948 6613', 1, 'Bridge Road', 'STIKLAND', 7530, 1, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sunpark Motors', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.888705, 30.879596, 'Naidoo, Vinothan (MR V)', '031 409 1372', NULL, 'PO Box 39025', 'QUEENSBURGH', 4070, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Supercars Fuel Sales', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.903891, 18.597976, 'Diedericks, Chris (MR C)', '021 9398562', 362, 'Voortrekker Road', 'PAROW', 7500, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', 'Dealer Owned', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Super Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.03186, 18.48305, 'Becker, Stanley (MR S)', '021 7063323', 81, 'Victoria Road', 'SOUTH FIELD', 7800, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Sydfred''s Motors', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.338585, 28.807602, 'Schultz, S (MR S)', '039 7373176', 116, 'Main Street', 'MATATIELE', 4730, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '57A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Tall Tree Service Station', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.01922, 29.8819, 'Lalparsad, Ajeesh (MR A)', NULL, 70, 'Connor Street', 'ESCOURT', 3310, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '05B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Teanong Service Station', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.988093, 28.2346, 'Dhladhla, Dan (MR D)', '011 926 8132', 537, 'Rev Rtj Namane Drive', 'TEMBISA', 1624, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Tempest Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.985682, 26.724988, 'Lombard, Kevin (MR K)', '057352 4059', 1, 'Tempest Road', 'WELKOM', 9460, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('T G Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.969204, 22.449143, 'Strydom, Coen (MR C)', '044 8744421', 10, 'York Street', 'GEORGE', 6530, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Therons Garage', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.90193, 18.63968, 'Ricketts, Nicholas (MR N)', '021 801 6111', NULL, 'Voortrekker Road', 'BELLVILLE', 7530, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', 'Dealer Owned', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Thompson Service Centre', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.286582, 30.757119, 'Thompson,  (MR C)', '039 3155108', NULL, 'Marine Or East Street', 'SHELLY BEACH', 4240, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Thornton Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.92653, 18.53992, 'Gibson, George (MR G)', '021 5343667', 58, 'Cypress Avenue', 'THORNTO', 7460, 58, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Thusanong BP', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.975262, 26.763999, 'Van Dyk, Hendrik (MR H G)', '057 396 1873', 71, 'Constantia Street', 'WELKOM', 9459, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('TK Filling Station', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', NULL, NULL, 'Mazibuko, Gwendoline (MRS G)', '016 592 5290', 1172, 'Moshoeshoe Street', 'SEBOKENG', 1984, 444, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Tlhabane Service Centre', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.637122, 27.215634, 'Durrant, Nico (MR N)', '014 5654500', NULL, 'Tlhabane Civic Centre', 'TLHABANE', 299, NULL, 'North West', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Trawal Truck In', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -31.772708, 18.637724, 'Roussouw, Justus (MR J)', '027 2161536', NULL, 'National Road', 'KLAWER', 8145, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '09B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Trek In', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -26.659341, 28.582124, 'Hoosen, Yunus (MR Y)', '017 7730332', 1, 'Stuart Street', 'BALFOUR', 2410, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Triple A Service Station', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.719726, 28.209248, 'Maree, Gert (MR GA)', '012 3359600', NULL, 'Cnr Michael Brink & 12th Ave', 'GEZINA', 84, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Umhlali Farmer Services', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.503037, 31.234659, 'Mattushek,  (MR )', '032 9479700', NULL, 'Old Salt Rock Road', 'UMHLALI', 4390, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Industrial', '03A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Umlazi Service Centre', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.957039, 30.939092, 'Ndhlovu, Peggy (MRS P P)', '031 906 5135', NULL, 'Cnr Road 1 and Masuthi Highway', 'UMLAZI', 4058, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Universitas Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.1196, 26.19347, 'Joubert, Johannes (MR JH)', '051 522 6832', 30, 'Paul Krugerlaa', 'BLOEMFONTEI', 9330, NULL, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Val De Grace Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.74137, 28.30294, 'Akoob, Asghar (MR A)', '012 804 4052', 94, 'Watermeyer Street', 'VAL DE GRACE', 184, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Valley Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.118459, 18.388682, 'Raeside, Ian (MR IB)', '021 7852206', 1, 'Irene Way', 'SUN VALLEY INDUSTRIA', 7975, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Verde Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.854799, 28.14306, 'Fasen, Coen (MR C)', '012 654 4000', NULL, 'Cnr Willem Botha  Ruimte Roads', 'WIERDAPARK', 149, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Verona Service Station', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.25483, 28.05564, 'Peer, Cassim (DR C)', '011 435 0525', NULL, 'Cnr Verona & Prairie', 'ROSETTENVILLE', 2130, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Vic White Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.986683, 18.497421, 'Allie, Akber (MR A H)', '021 633 3064', 26, 'Hazel Road', 'RYLANDS ESTATE', 7780, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Village Road Motors', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.79584, 30.82913, 'Merrick, Dave (MR D)', '031 7642607', 33, 'Village Road', 'KLOOF', 3640, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Village Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.13572, 18.43259, 'Heffer, Tim (MR T)', '021 782 1615', 62, 'Main Road', 'FISH HOEK', 7945, 62, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Villiersdorp Toyota', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.985518, 19.289313, 'van Wyk, Francois (MR F)', '028 840 1133', 56, 'Main Street', 'VILLIERSDORP', 6848, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Voorspoed Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.661197, 27.978483, 'Patel, Zaahir (MR Z)', '083 626 5884', NULL, 'Cnr General Hertzog & Ring  Rds', 'VEREENIGING', 1935, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Wartburg Service Station', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.432345, 30.57964, 'Fortmann, Ludwig (MR L)', '033-503 1444', NULL, 'Cnr Noodsbg and Schroeders', 'WARTBURG', 3233, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Waterfall Service Centre', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.006098, 28.117241, 'Rootman, Jan (MR J)', '011 315 8701', NULL, 'Cnr Bekker & le Roux Street', 'VORNA VALLEY', 1686, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Wavecrest Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.06951, 18.5716, 'Naidoo, Devalogan (MR D M)', '021 3932114/5', NULL, 'cnr Dennegeur Ave & Benguela Road', 'STRANDFONTEIN VILLAGE', 7788, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Welgelegen Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.87734, 18.57103, 'Hougaard, Johan (MR J)', '021 9302122', 1, 'Elvy Street', 'PANORAMA', 7500, 1, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Westlake Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.078963, 18.456173, 'Bijl, Chris (MR C)', '021 7019900', NULL, 'Main Road', 'WESTLAKE', 7945, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Westville Autohouse', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.81817, 30.86771, 'Hasan, Tanvir (MR T)', '031 2668855', 24, 'Church Road', 'WESTVILLE', 3630, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Westville Motors', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.82713, 30.93148, 'Mahomedy, Siraj (MR S)', '031 266 3509', 129, 'Jan Hofmeyr Road', 'WESTVILLE', 3631, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Wetlands Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.999621, 18.51309, 'Firfiray, Husain (MR H)', '021 7031334', 662, 'Lansdowne Road', 'LANSDOWNE', 7780, 44, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Wilger Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.682763, 26.47372, 'Oosthuizen, Willem (MR W F)', '051 8211068', 62, 'Voortrekker Straat', 'BRANDFORT', 9400, NULL, 'Free State', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Willem Du Toit Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -32.99907, 17.95209, 'Du Toit, Willem (MR W)', '022 7141497', NULL, 'Main Road', 'SALDANHA', 7395, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Winston Linford Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.585956, 22.209464, 'Linford, Kevin (MR K)', '044 2791722', 39, 'Voortrekkerroad', 'OUDSTHOOR', 6620, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Woodlands Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.033166, 18.59725, 'Ali, Adbul (MR A A)', '082 553 0848', NULL, 'Cnr Eros & Mitchells Ave', 'MITCHELLS PLAI', 7785, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Worcester Renault', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.64809, 19.45261, 'Roux, Andre (MR A)', '023 342 1848', 107, 'High Street', 'WORCESTER', 6850, 107, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Wynland Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.71487, 18.97423, 'Minitzer, Louis (MR L)', '021 8626224', 3, 'Oosbosch Street', 'PAARL', 7645, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Zoo Lake Garage', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.159549, 28.025627, 'Vos, Anne (MRS A)', '011 6461808', 52, 'Ennis Road', 'PARKVIEW', 2122, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('ZZZ Service Station', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -31.600772, 28.780699, 'Ntobongwana, Fezile (MRMRS F & K)', '0475312072  0475312074', NULL, 'cnr Madeira & Eagle Streets', 'UMTATA', 5100, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '06A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('222 Service Station', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.995999, 27.903169, 'Pasiya, Unathi (MS U)', '043 7420607', 10, 'Gately Street', 'EAST LONDO', 5205, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('6th Avenue Auto Centre', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.97986, 25.5979, 'Hayes, Trevor (MR T)', '041 581 4247', 123, 'Heugh Road', 'WALMER', 6070, 123, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Action Filling Station', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.14926, 26.24017, 'Osman, Bilal (MR B)', '051 432 0534', 4451, 'Bochabelo', 'BLOEMFONTEI', 9323, 4451, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('AC Wild Coast Motors Service S', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.744951, 30.442448, 'Basson, Coral (MRS AC)', '039 3056369', NULL, 'Wild Coast Casino', 'MZAMBA BEACH', 4270, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Aqua Mall Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.15579, 18.87115, 'Kritzinger, Louie (MR L)', '082 412 3368', 1, 'Faura Marine Drive', 'RDONS BAY', 7151, 1, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', 'NDS')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Araf Fuel Centre', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.90735, 30.99044, 'Kaka, Mohammed (MR M)', '031 4651192', 299, 'Soloman Mahlangu Drive', 'ROSSBURGH', 4094, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Industrial', '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Assembly Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.919724, 18.566126, 'Khan, Janangir (MR J)', '021 9333391', 156, 'Halt Road', 'ELSIES RIVER', 7460, 156, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Auto Atlantis', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.562829, 18.493265, 'Mostert, Andre (MR A)', '021 577 4121', NULL, 'Ivan Hampshire Place', 'ATLANTIS', 7350, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Auto Centre', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.255479, 28.427405, 'Donker, Bert (MR B)', '011 8155454', 42, 'South Main Reef Road', 'SPRINGS', 1560, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Auto Tyres', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.974634, 27.894065, 'Liss, Michael (MR M)', '043 7260770', 22, 'Queen Street', 'EAST LONDO', 5201, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Badger Motors', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.79697, 30.88368, 'Mkhize, Nonhlanhla (MISS N)', '031 705 4474', 126, 'Shepstone Road', 'NEW GERMANY', 3620, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Bashee Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.099241, 28.308005, 'Thabede, Sibusiso (MR S)', '047 5310212', 5, 'Richardson Road', 'IDUTYWA          TRANSKEI', 5000, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Benba Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.910627, 18.560255, 'Kushner, Dale (MR D)', '021 5915264', 224, 'Voortrekker Road', 'ODWOOD', 7460, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ben Vorster Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.922507, 18.481035, 'Smith, Chris (MR C)', '021 5110846', 26, 'Koeberg Road South', 'MAITLAND', 7405, 26, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Bergville Garage', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -28.731212, 29.344243, 'Asmal, Bob (MR B)', '036 4481108', NULL, 'cnr Kingsway & Tatham Roads', 'BERGVILLE', 3350, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '06C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Berlin Garage', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.87029, 27.58559, 'Fouche, Gary (MR G)', '043 6852271', 2, 'Legion Street', 'BERLI', 5660, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Birdhaven BP', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.136922, 28.057155, 'Vargas, Jose (MR J)', '011 7886580', NULL, 'cnr St Andrew & North Wrenrose Sts', 'BIRDHAVE', 2131, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Blue Route Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.06443, 18.45269, 'Cocotos, Alethia (MR A)', '021 7156332', 20, 'Tokai Road', 'TOKAI', 7945, 20, 'Western Cape', 'Core 3 - Cape', 'Shopping Centre - Loc', '01A', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', 'Nandos', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Boulevard Motors (odwood)', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.895512, 18.554481, 'Dos Santos, Gabriel (MR G)', '082 375 5715', 116, 'Vasco Boulevard', 'ODWOOD', 7459, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Boulevard Motors (Tzaneen)', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.827269, 30.162079, 'Nel, Petrus (DR P A)', '015 3072997', NULL, 'Sanlam Centre', 'TZANEE', 850, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '63C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Boulevard Motors (vd Bijlpark)', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.70266, 27.83604, 'Rossouw, Hempie (MR W)', '016 933 5550', NULL, 'Cnr Jan van Riebeeck & Meyer Sts', 'VANDERBIJLPARK', 1900, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Aero Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.0017, 18.47751, 'Chetty, Purshothma (MR P)', '021 761 6979', NULL, 'Wetton Road', 'KENWY', 7790, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Airfield', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.16408, 28.3128, 'Mc Ginn, Margaret (MRS M)', '011 849 4310', NULL, 'Cnr Aerodrome Drive & Webb St', 'NORTHMEAD     BENONI', 1511, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Airport', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.96642, 18.59307, 'De uveia, Antonio (MR A)', '021 934 7166', NULL, 'Borchards Quarry Road', 'CAPE TOWN INTERNATIONAL', 7525, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Alice', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.79632, 26.828491, 'Miller, Shaun (MR S)', '040 6530216', 1, 'Bridge Street', 'ALICE', 5700, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Alphen Park', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.783508, 28.264317, 'Ismail-Moosa, Yusuf (MR Y)', '012 753 2786', NULL, 'Cnr Selati & Garsfontein Roads', 'ALPHE', 49, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Arena Park', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.914167, 30.870587, 'Paruk, Ashraf (MR A M I)', '031 404 8407', NULL, 'Arena Park Road', 'CHATSWORTH', 4030, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP at Greenacres', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.95251, 25.577323, 'Coetzee, Eva (MRS E)', '041 3631920', 250, 'Cape Road', 'PORT ELIZABETH', 6070, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Atlas Service Station', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.1195, 28.25706, 'Soobrayan, Rooksana (MRS R)', '011 973 3761', NULL, 'cnr Atlas & Louis Botha Avenue', 'BONAERO PARK', 2013, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Atterbury Value Mart', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.79729, 28.317066, 'Erasmus, Johan (MR J)', '012 9917071', NULL, 'Atterbury Road', 'FAERIE GLE', 42, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Badplaas', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.96183, 30.57965, 'Masina, Mica (MR M)', '017 8448103', NULL, 'On Badplaas & Carolina Rds', 'BADPLAAS', 1685, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Balfour Park Motors', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.13718, 28.090033, 'Hoorzook, Faizel (MR F)', '011 786 5903', NULL, 'Balfour Park Shopping Centre', 'BALFOUR', 2410, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bapsfontei', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -26.100215, 28.62038, 'Toerien, Johan (MR J)', '011 9641573', NULL, 'Cnr R50 Delmas & Pretoria Str', 'BAPSFONTEI', 1517, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bara', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.259222, 27.942596, 'Seretse, Thabo (MR T)', '011 933 3361', NULL, 'Old Potchefstroom Road', 'JOHANNESBURG', 2016, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bedfordview', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.176371, 28.139162, 'Hajat, Fareed (MR F)', '011 455 4944', NULL, 'cnr Van Buuren & King Streets', 'BEDFORDVIEW', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Belhar Drive', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.94704, 18.64844, 'Haron, Abdullah (MR A)', '021 952 2693', NULL, 'Belhar Drive & Alabama Avenue', 'BELHAR', 7490, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'FNB/NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Berea E L', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.992867, 27.911099, 'Kidson, Debbie (MRS D)', '043 726 2095', 18, 'Pearce Street', 'EAST LONDO', 5201, 18, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Berea (Pta)', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.756776, 28.190205, 'Alli, Muhammed H (MR M)', '012 6418106', NULL, 'cnr Railway & Scheiding Streets', 'PRETORIA CENTRAL', 1, 4, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bergbro', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.163872, 27.951769, 'Wessels, Hennie (MR H)', '011 477 7601', 461, 'rdon Road', 'ROODEPOORT', 1712, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Beyers Naude Oasis - North', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.113392, 27.953867, 'Bentel, Hilary (MR H)', '011 476 2838', NULL, 'Beyers Naude Drive & N1 Freeway', 'RANDBURG', 2194, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', 'McDonalds', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Beyers Naude Oasis - South', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.113421, 27.953923, 'Joselowsky, Solly (MR S)', '011 476 1595', NULL, 'Beyers Naude Drive  N1 Freeway', 'RANDBURG', 2194, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', 'McDonalds', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Birnam Park', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.129634, 28.068979, 'Ben-Zeev, David (MR D)', '011 786 6791', 75, 'Corlett Drive', 'BIRNAM', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bluff', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.927511, 31.0018, 'ldstone, Ellen (MRS E)', '031 467 4282', 100, 'Grays In', 'BLUFF', 4052, 100, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'PnP Express', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bonga', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.02432, 18.66572, 'Reddy, Sasa (MR S)', '021 364 2998', NULL, 'cnr Bonga  Sulani Drive', 'KHAYALITSHA', 7784, NULL, 'Western Cape', 'Core 3 - Cape', 'Township', '01A', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Boulders', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -25.994173, 28.127421, 'Rootman, Jan (MR J)', '011 805 6296', NULL, 'c/n Old Pretoria & Alexander Street', 'MIDRAND', 1685, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Braamfontei', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.195377, 28.031371, 'Vieira, Marco (MR M)', '011 403 5862', 120, 'Smit Street', 'BRAAMFONTEI', 1459, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', 'Steers', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Brakpa', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.242125, 28.367688, 'Pillay,  (MR S)', '0117401537  0117401538', NULL, 'Prince George Ave', 'BRAKPA', 1501, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bramley', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.115446, 28.105885, 'Vargas, Jose (MR J)', '011 8821113', 22, 'Canning Road', 'BRAMLEY', 2090, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Brickfield', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.163183, 28.175696, 'Seretse, Thabo (MR T)', '011 906 7275', NULL, 'Cnr Buurman & Brickfield Road', 'SPRUITVIEW', 1804, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Broadacres', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.000777, 27.984839, 'Du Toit, Johann (MR J)', '011 467 6778', NULL, 'cnr Valley & Ceder Roads', 'BROADACRES EXT 1', 2194, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Jetwash', 'STD/ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bromhof', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.08694, 27.95859, 'van Deventer, Lana (MRS L)', '011 791 3262', NULL, 'Cnr Pres Fouche & Haw', 'BROMHOF', 2040, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bruma', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.181463, 28.110623, 'Mcleod, Craig (MR C)', '011 6168168', NULL, 'cnr Marcia & Broadway Avenue', 'BRUMA', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Bryansto', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.059342, 28.0225, 'Dzivhani, Nonhlanhla (MRS N)', '011 706 3194', NULL, 'Cnr Main  Grosvenor Road', 'BRYANSTO', 2021, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Buffalo Street', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -33.01307, 27.90152, 'berdan, Anil (MR A)', '043 722 7563', NULL, 'Cnr Buffalo & Albany Sts', 'EAST LONDO', 5200, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Buffeljagsrivier', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.023871, 20.460685, 'van Nierkerk, Steyn (MR S)', '028 512 3700', NULL, 'National Road', 'BUFFELJAGSRIVIER', 6742, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Capricor', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.088611, 18.48015, 'Mac Lachan, Liz (MRS E)', '021 788 2782', NULL, 'Prince George Drive', 'CAPRICORN PARK', 7945, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'PnP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Cascades Service Station', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.573727, 30.354339, 'Sokhele, Dulcie (MRS D)', '033 3473881', NULL, 'McCarthy Drive', 'PIETERMARITZBURG', 3202, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', 'BP Express', 'Shop 0 - 90 m2', 'WBC', '--', 'BP Jetwash', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Cavendish', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.98494, 18.46631, 'Hunt-Davis, Robin Timo (MR R T)', '021 6742974', 214, 'Main Road', 'CLAREMONT', 7740, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Centurion', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.86677, 28.19507, 'Toerien, Anton (MR A)', '012 665 0093', 5, 'Bloukrans Street', 'HIGHVELD EXT 1', 46, 5, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'STD/NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Charles Street', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.774502, 28.267903, 'Rayne, Mike (MR M)', '012 4608654', NULL, 'cnr Charles & Atterbury Streets', 'PRETORIA', 28, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Chatsworth Circle', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.91188, 30.87849, 'Naidoo, Grery (MR G)', '031 4037988', 4, 'Joyhurst Road', 'CHATSWORTH', 4030, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Jetwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Church Street', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.596399, 30.384783, 'Naicker, Vinayagum (MR V)', '082 938 7711', 434, 'Church Street', 'PIETERMARITZBURG', 3201, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Clare Road', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.822878, 30.977609, 'Yusuf, Rooksan (MR R)', '031 2093512', 177, 'Clare Road', 'CLARE ESTATE  DURBA', 4001, 135, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Clocktower', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.03651, 18.602639, 'ldstein - Subhanni, Colleen (MRS C)', NULL, NULL, 'cnr Lavender & Eisleben Roads', 'MITCHELLS PLAI', 7780, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Clubview', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.841019, 28.167266, 'Siebrits, Martin (MR M)', '012 660 1929', 12, 'Mark Street', 'VIRGINIA', 9430, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Craftsma', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.15568, 28.33292, 'Hoosen, Hidayet (MR H J)', '011 849 3213', NULL, 'Cnr Milesharp & Hartshowe Street', 'RYNFIELD', 1501, 33, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Daveyto', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.162019, 28.403267, 'Patel, Pradip (MR P)', '010 590 1645', 16, 'Heald Street', 'DAVEYTO', 1520, 17, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Despatch Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.80414, 25.49705, 'Meyer, Gerhard (MR G)', '041 9331334', NULL, 'H F Verwoerd Drive', 'DESPATCH', 6219, 36, 'Eastern Cape', 'Core 4 - The Rest', NULL, '02A', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Devland', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.281639, 27.933207, 'Nyati, Wilberforc (MR W Q)', '082 318 6083', NULL, 'lden Highway', 'DEVLAND', 2064, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Diensstasie', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.332549, 26.318388, 'Gerber, Frans (MR F)', '0186 731389', 110, 'Voortrekker Street', 'COLIGNY', 2725, NULL, 'North West', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Diepkloof', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.259007, 27.934167, 'Sibisi, Xaviar (MR X)', '011 938 1292', NULL, 'cnr Potch & Promoloane Roads', 'DIEPKLOOF', 1804, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Dobsonville', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.2303, 27.838755, 'Nonkwelo, Lucia (MRS L)', '011 931 0625', NULL, 'cnr Kgame & Mohajane', 'DOBSONVILLE', 1865, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Dorp Street', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.939141, 18.857354, 'van Schalkwyk, Philip (MR P)', '021 8866915', 73, 'Dorp Street', 'STELLENBOSCH', 7599, 73, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Dube Village Mall', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.70804, 30.970238, 'Mbatha, Sbonello (MR SA)', '031 519 2004', NULL, 'Curnick Ndlovu Highway', 'INANDA', 4310, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Shopping Centre - Loc', '01A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Durham', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.92901, 18.46015, 'Brown, Eric (MR E)', '021 448 5474', 2, 'Durham Avenue', 'SALT RIVER', 7925, 2, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'STD/ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Ebony Park', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.00349, 28.17792, 'Sithagu, Elvis (MR ME)', '083 708 2539', NULL, 'Corner Acacia and Bluegum Streets', 'THEMBISA', 1685, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Edenburg', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.048837, 28.060038, 'Melik,  (MR J)', '011 234 4797', 98, 'Cnr Rivonia Boulevard & 12th Ave', 'SANDTO', 2010, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Edendale Service Station', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.649357, 30.31199, 'Sokhela, Petrus (MR PM)', '033 3995202', NULL, 'Main Road', 'EDENDALE', 3217, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Township', '03B', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Edenvale North', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.154704, 28.161944, 'Hajat, Fareed (MR F)', '011 452 6042', NULL, 'Van Riebeeck Road', 'MODDERFONTEI', 2041, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Elardus Park', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.826841, 28.260168, 'Maarten, Jasper (MR J)', '012 3454812', 849, 'Barnard Street', 'ELARDUS PARK', 153, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Eldo Gle', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.834149, 28.137353, 'Snyman, Werner (MR W)', '012 658 5730', NULL, 'Cnr Willem Botha & K103 (Hans Stry)', 'ELDORAIGNE, CENTURION', 157, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Eldorado Park 2', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.289229, 27.888064, 'Foster, George (MR G)', '011 945 6064', NULL, 'cnr Main & Circle Roads Extention 5', 'ELDORADO PARK', 1811, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Elite Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.106983, 18.467589, 'Mohamed, Riedawan (MR R)', '021 788 3288', 80, 'Main Road', 'MUIZENBERG', 7945, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Empire', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.185119, 28.041359, 'Mcleod, Rowan (MR R)', '011 642 9073', NULL, 'cnr Empire & Joubert Streets', 'PARKTOW', 2193, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Emporium', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.668092, 27.237987, 'Webb, Andrew (MR A)', '014 592 3652', NULL, 'cnr Smit & Van Stade', 'RUSTENBURG', 300, NULL, 'North West', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Jetwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Evander', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -26.46963, 29.11118, 'Carrim, Aslim (MR A)', '017 632 4038', 89, 'Standford Road', 'EVANDER', 2280, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Fairland', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.119425, 27.958504, 'Munshi, Hawa (MR H)', '011 478 0361', NULL, 'Beyers Naude Drive', 'KELLAND', 1820, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Fourways', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.016435, 28.012296, 'Larche, Jean Marc (MR J)', '011 705 3234', NULL, 'cnr Sunset Boulevard & William Nico', 'SANDTO', 2196, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Gallo Manor', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.06867, 28.08747, 'Moolla, Mohamed (MR M)', '011 802 1030', NULL, 'Bowling Avenue', 'GALLO MANOR', 2052, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Garage Franschhoek', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.903543, 19.153189, 'Eigelaar, Tommie (MR T)', '021 8762069', NULL, 'Main & La Cotte Streets', 'FRANSCHHOEK', 7690, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Gately Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -33.035106, 27.867951, 'Peer, Ebrahim (MR E)', '043 7312077', 41559, 'Settlers Way', 'EAST LONDO', 5600, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Glynnwood', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.19529, 28.30852, 'Nana, Manny (MR M)', '011 4217955', NULL, 'cnr Princes Garage & Harrison Sts', 'BENONI', 1502, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP rdons Bay', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.15413, 18.86767, 'Paulsen,  (MR A)', '021 8562813', 1, 'Beach Road', 'RDONS BAY', 7150, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'STD/ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Grabouw', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.16115, 19.009489, 'Venter, Werner/ Ro (MS W & R)', '021  8595687', 1, 'Marsh Rose Mall Oudebrug Road', 'GRABOUW', 7130, 1, 'Western Cape', 'Core 3 - Cape', NULL, '05A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hammarsdale', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.793681, 30.65696, 'Subramanian, Masilamone (MR M)', '031 736 1351', NULL, 'Old Main Road', 'HAMMARSDALE', 3700, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '02A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hans Strydom', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.123203, 27.988405, 'Pretorius, Andre (MR A)', '011 7823301', 63, 'Hans Strydom Avenue', 'LINDEN EXTENTIO', 2115, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Harmony Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.07749, 26.87947, 'De Lange, Koos (MR K)', '057 2174424', 56, 'Riverside Drive', 'HARMONY', 9435, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hazelwood', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.77498, 28.2579, 'Barkhuizen, Piet (MR P)', '012 460 6218', NULL, 'Eighteenth & Dely', 'HAZELWOOD', 102, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hebro', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.54785, 28.02113, 'Nortje, Johan (MR J)', '012 7021445', NULL, 'Lucas Manpe Highway', 'HEBRO', 156, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Heidelberg Road', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.21147, 28.05053, 'Trieloff, Carl (MR C)', '011 334 0961', 15, 'Heidelberg Road', 'CITY DEEP', 116, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Helderberg', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.10042, 18.83092, 'Theron, Gabriel Ro (MR G R)', '021 8547200', 87, 'Broadway', 'STRAND', 7139, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', '--', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Heritage Park', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.107728, 18.860861, 'Putzier, Arnold (MR A A)', '082 775 8749', NULL, 'cnr George Street Ext & N2 Motorway', 'SOMERSET WEST', 7150, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Highway', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.518811, 28.091739, 'Mokoka, Anthony (MR AM)', '012 799 3300', NULL, 'Zone F', 'SOSHANGUVE HIGHWAY', 2164, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hillcrest', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.815206, 30.859115, 'Clark, Mons (MR M)', '031 765 3422', 42, 'Old Main Road', 'HILLCREST', 3601, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hitech Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.89209, 27.42452, 'Moola, Boetie (MR M E)', '082 570 1750', 28, 'Cathcart Street', 'KING WILLIAM''S TOW', 5600, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '03A', '--', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Hyper', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.20788, 28.24972, 'Patel, Pradip (MR P)', '082 466 3140', 2, 'CRN CASON AND RIETFONTEIN ROAD', 'BOKSBURG NORTH', 1502, 2, 'Gauteng', 'Core 1 - Gauteng', 'Shopping Centre - Loc', '09C', '--', 'Kiosk / Non-Express', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Jean Avenue', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.840396, 28.187343, 'Harmse, Hennie (MR H)', '012 6646294', NULL, 'cnr Rabie & Jean Avenue', 'CENTURION', 46, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'Wimpy', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Jozini', 'Rtl Sales Ops-Durba', 'vender, Devrani', -27.46806, 32.06419, 'Wilhelm, Willemse (MR W)', '035 572 1204', NULL, 'Main Road', 'JOZINI', 3969, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Rural Road', '57A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Kabega Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.9396, 25.49756, 'Botha, Abel (MR A H C)', '041 360 6966', 615, 'Cape Road', 'PORT ELIZABETH', 6025, 615, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Kagiso', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.158568, 27.783113, 'Sibambo, Phanuel (MR P)', '011 410 5850', NULL, 'Kagiso Avenue', 'KAGISO', 1744, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Katlehong', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.326636, 28.147154, 'Seretse, Thabo (MR T)', '011 905 3511', NULL, 'cnr Hospital & Khotso Street', 'KATLEHONG', 1432, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'Chicken Licke', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Kensingto', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.183262, 28.106706, 'Adam, Zahed (MR Z)', '011 615 6376', NULL, 'Broadway Avenue', 'KENSINGTO', 2020, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Khuboni', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.009307, 28.241661, 'Molisana, Neo (MR N)', '011 9244349', NULL, 'Cnr Brian Mazibuko & Thamimnyele dr', 'TEMBISA', 1632, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP King', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.87542, 27.39371, 'Pasiya, Prim (MS Prim)', '043 6424755', NULL, 'Alexandra Road', 'KING WILLIAM''S TOW', 5600, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '03A', 'BP Express', 'Shop 91 - 136 m2', '--', 'QSR - Other', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Klipriver Road', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.238325, 28.02832, 'Nanabhai, Mohummed (MR M)', '011 6839096', NULL, 'Cnr Turf Club & Kliprivier Roads', 'WEST TURFFONTEI', 2130, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Kramerville', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.087405, 28.079647, 'Beitz, Julius (MR J)', '011 444 7243', NULL, 'cnr Bowling & Archmedies Roads', 'KRAMERVILLE', 2148, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Kwa Mashu Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.73636, 31.00306, 'Mbatha, Sbonelo (MR S)', '031 519 2019', NULL, 'PO Box 27015', 'KWA MASHU', 4360, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Township', '01A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Lansdowne', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.997586, 18.605339, 'Reddy,  (MR S)', '021 3710125', NULL, 'cnr Stock & Lansdowne Roads', 'PHILLIPI', 7785, NULL, 'Western Cape', 'Core 3 - Cape', 'Township', '01A', 'PnP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'NDS')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Leeuwpoort', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.224094, 28.259558, 'De Wit, Adriana (MRS A)', '011 4635531', 150, 'Leeupoort Street', 'BOKSBURG', 1511, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', 'Kiosk / Non-Express', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Letchworth', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.86905, 18.54611, 'Pritchard, Butch (MR B)', '0215588510  0215588520', NULL, 'Letchworth Drive', 'EDGEMEAD', 7441, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Linden Park', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.417402, 28.467482, 'Van Heerden, Ronnie (MR R)', '011 888 8915', NULL, 'Cnr Bramfischer Drive & 1st Ave', 'LINDE', 2123, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Louis Botha', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.16074, 28.084722, 'Gatti, Isabelle (MS I)', '011 485 4145', 304, 'Louis Botha Avenue', 'ORANGE GROVE', 1610, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Jetwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Luipaard', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.10844, 27.78629, 'Mannering, Sharron (MRS S B)', '011 660 7959', 437, 'Main Reef Road', 'KRUGERSDORP', 1739, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Mabopane', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.49612, 28.090234, 'Mokoka, Tony (MR A)', '012 790 5909', NULL, 'Buitekant Street', 'MABOPANE STATION, SOSHANGUVE', 190, 1840, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Mahube Valley', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.708776, 28.413543, 'Kotlolo, Andrew (MR A)', '012 840 1844', NULL, 'Mayibuye Street', 'MAMELODI', 122, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Makana', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.259676, 26.478958, 'Pagel, Denis (MR D)', '046 636 1110', 30, 'Beaufort Street', 'GRAHAMSTOW', 6140, 30, 'Eastern Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Makhaza', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.046871, 18.698678, 'Raziya, Tsepo (MR T)', NULL, NULL, 'Landsdowne Road', 'KHAYALITSHA', 7784, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Mamelodi Gardens', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.721916, 28.38916, 'Motuku, Prudence (MRS P K)', '012 801 5250', NULL, 'cnr Broadway & Hinterland Roads', 'MAMELODI GARDENS', 122, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', 'Chicken Licke', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Mandini', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.15916, 31.41696, 'Dhooma, Ismail (MR I)', '032 456 2488', 1, 'Long Road', 'MANDINI', 4490, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Industrial', '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP McGrer Street Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.11941, 26.23986, 'Smit, Albertus J (MR AJ)', '051 4303645', 39, 'McGrer Street', 'BLOEMFONTEI', 9310, 19, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Melrose Arch', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.129501, 28.069878, 'Ginsberg, Manachem (MR M)', '011 786 8644', NULL, 'Cor Corlett Drive Off Ramp', 'BIRNAM', 2015, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Merrima', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.931751, 18.860699, 'Brisley, Edward (MR E)', '021 887 2916', NULL, 'Cnr Merriman Ave & Andringa Street', 'STELLENBOSCH', 7599, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', 'McDonalds', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Meyer Street', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.205568, 28.156902, 'Patel, Ash (MR A)', '011 873 2268', NULL, 'Fordburg', 'GERMISTO', 2033, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Montague Drive', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.781166, 20.123122, 'Laubscher, Theo (MR T)', '021 5524107', 32, 'Montague Drive', 'MONTAGUE GARDENS', 7441, 32, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Montecasino', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.028916, 28.009671, 'Ferreira,  (MR I)', '011 705 1185', 316, 'William Nicol Drive', 'BRYANSTO', 2021, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Morninghill', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.17699, 28.11593, 'Vieira, Antonio (MR A)', '011 6229671', 1, 'Boeing Road West', 'BEDFORDVIEW', 2008, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', 'Shop 91 - 136 m2', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Motorama', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.259036, 28.470878, 'Otto, Jappie (MR J)', '011 3918513', 64, 'Ermelo Road', 'SPRINGS', NULL, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Motordeal', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', NULL, NULL, 'Saloojee, Firose (MR F)', '016 455 4945', NULL, 'Houtkop Road', 'VEREENIGING', 1936, 39, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Motors', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.900843, 29.234155, 'De Sousa, Gabriel (MR G)', '013 692 3262', NULL, 'Cnr Hans Strydom & Bailey Street', 'WITBANK', 1038, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Mountain View', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.69996, 28.15892, 'Erasmus, Anton (MR A)', '012 379 3998', 504, 'Karel Trichardt Avenue', 'MOUNTAIN VIEW', 82, 504, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP N12 Zuurbekom', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.314688, 27.757263, 'Hlabangane, Fulathela (MR F)', '083 629 3227', NULL, 'Fifth Ave and Moroka', 'SOWETO', 1868, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', 'Shop 201 - 399 m2', '--', 'KFC', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Newlands', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.985537, 18.459329, 'Smith, Darrin (MR D E)', '021 686 3531', 35, 'Newlands Avenue', 'NEWLANDS', 7800, 35, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'PnP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Newmarket', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.296518, 28.14286, 'Kahts, Dave (MR D)', '011 908 2602', NULL, 'Heidelberg  Vereeniging', 'ALRODE, ALBERTO', 1449, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Nina Park', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.678108, 28.150157, 'Fourie, Jan (MR J)', '012 542 2492', NULL, 'cnr Grafenheim & Rachel De Beer', 'NINA PARK', 156, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Northdene', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.86284, 30.88559, 'Giles, ALAN (MR A)', '031 7081371', 670, 'Main Road', 'NORTHDENE', 4093, 670, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'Rock ''n Rooster', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Northend Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.79115, 31.01824, 'Reyersbach, Hayley Sar (MRS HSD)', '031 5645382', 560, 'Chris Hani Road', 'BRIARDENE', 4051, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Industrial', '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP North Rand Road', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.179228, 28.277922, 'Ellis, John (MR J)', '011 918 8211', NULL, 'Cnr North Rand & Kirschner Rds', 'BOKSBURG', 1462, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Jetwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Northwold', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.07127, 27.96397, 'Rajman, Sudesh (MR S)', '011 792 6828', NULL, 'Cnr 3rd and Maple street', 'NORTHWOLD', 1709, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Old Farm Road', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.789038, 28.327652, 'Van Heerden,  (MR L)', '012 991 5011', NULL, 'Cnr Hans Strydom & Old Farm Road', 'FAERIE GLE', 2021, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Olivedale', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.05709, 27.96866, 'McLeod, Nigel (MR N)', '011 704 3119', NULL, 'cnr Windsor Way & President Fouche', 'NORTHRIDING', 2158, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', 'WBC', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Orange Farm', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.464323, 27.848565, 'Tshabalala, Muzi (MR M)', '011 820 4111', NULL, 'Main Road', 'ORANGE FARM', 1805, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP O''Reilly Merry', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.145131, 28.312404, 'Prinsloo, Peter (MR P)', '011 425 4757', 101, 'O'' Reilly Merry Street', 'BENONI', 1501, 101, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Jetwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Park Drive', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.815641, 18.489372, 'Venter, Werrner (MR W)', '021 5576926', 2, 'Link Road', 'TABLEVIEW', 7441, 2, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD/ATM SOL')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Perth Road', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.185768, 27.983766, 'Osman, Imraan (MR I)', '011 477 8229', 29, 'Perth Road', 'WESTDENE', 2128, 29, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Pinelands', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.940669, 18.50059, 'Hanekom, Hestie (MRS H)', '021 5316461', NULL, 'cnr Forest Drive & Stephens Road', 'PINELANDS', 7430, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Pitstop', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -27.757023, 29.952543, 'McDermot, James (MR J)', '034 3121181', 59, 'Allen Street', 'NEWCASTLE', 2940, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '06C', '--', '--', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Pomona', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.095908, 28.257858, 'Maharaj, Rakesh (MR R)', '011 979 3301', 2, 'Pomona Road', 'KEMPTON PARK', 1620, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Prince George Drive', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.04696, 18.48729, 'Venter, Tjaart (MR T)', '021 712 8336', NULL, 'Prince George Drive', 'RETREAT', 7800, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 201 - 399 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Promenade', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.036859, 18.617192, 'ldstein-Subhanni, Colleen (MR C)', '021 376 4841', NULL, 'AZ Berman Drive', 'MITCHELLS PLAI', 7785, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Prospecton Road Service Sta', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.806955, 31.035234, 'Pillay, Arthur (MR A)', '031 9023221', NULL, 'Prospecton Road', 'PROSPECTO', 4110, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Jetwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Queenswood', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.730902, 28.246185, 'Coetzee, Gerrit (MR G)', '012 3335630', NULL, 'Cnr Ebworth Rd and Stead Ave', 'QUEENSWOOD, EXT 10, PRETORIA', 1, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Rabie Ridge', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.018604, 28.178362, 'Sinthumule, Phanuel (MR MP)', '083 633 9019', NULL, 'cnr Rieduiker & Stilt Avenue', 'RABIE RIDGE', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', '--', 'WBC', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Rachel de Beer Street', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.67716, 28.17882, 'Bhoola, Sadiq (MR S)', '012 546 6133', NULL, 'Cnr Rachel de Beer & Jan van Riebee', 'PRETORIA NORTH', 116, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Radiokop', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.104419, 27.924558, 'sai, Mans (MR M)', '011 679 3263', NULL, 'Cor Christiaan de Wet &', 'ROODEPOORT', 2125, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Raisethorpe', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.563055, 30.408134, 'Moodley, Kameshen (MR K)', '033 3875000', 550, 'Chota Motala Road', 'RAISETHORPE', 3201, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', 'BP Express', '--', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Ramsgate', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.89044, 30.34336, 'du Plooy, Nico (MR N)', '039 314 4102', 196, 'Marine Drive', 'RAMSGATE', 4285, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Randburg', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.096485, 27.986642, 'Hlongwane, Sydney (MR S)', '011 791 1560', 104, 'Hans Strijdom', 'RANDBURG', 2125, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'Wimpy', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Randhart', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.32196, 28.13736, 'Kahts, Dave (MR D)', '011 864 3519', NULL, 'Cnr. Swartkoppies  Potgieter St', 'RANDHART', 1457, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Retreat Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.057379, 18.475714, 'Bhamjee, Moosa (MR M)', '021 712 9516', 198, 'Retreat Road', 'RETREAT', 7945, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Richmond Road', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.81237, 30.84753, 'Harper, David (MR D)', '031 7027302', 41498, 'Richmond Road', 'PINETOW', 3600, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Ridge Oasis', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.703672, 30.49336, 'Royden-Turner, Shirley (MRS S)', '031 782 2201', NULL, 'Northbound', 'CATO RIDGE', 3680, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '02A', 'BP Express', '--', 'WBC', 'Steers', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Riverside', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.48495, 30.99275, 'Wolmer, Rodney (MR R)', '013 7571405', NULL, 'Industrial Park', 'NELSPRUIT', 1200, NULL, 'Mpumalanga', 'Core 4 - The Rest', 'Township', '61C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Rivonia', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.04611, 28.0594, 'Moolla, Mohamed (MR M I)', '011 803 5805', NULL, 'PO BOX 4043', 'RIVONIA', 2128, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Urban Road', '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Rosmead', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.00216, 18.47934, 'Coetzer, Kurt (MR K)', '021 762 8991', NULL, 'Cnr Rosmead & Wetton Rd', 'KENILWORTH', 7780, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Rusloo', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.34846, 28.20067, 'Seretse, Thabo (MR T)', '011 906 7275', NULL, 'MC Botha & Hattingh Drive', 'VOSLOORUS', 2058, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sabie', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.099626, 30.773796, 'Cogill, Keith (MR KCJ)', '013 7641982', 43, 'Hoofstraat', 'SABIE', 1260, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '61C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Salt Lake', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.26086, 28.36061, 'Bhayat, Ahmed (MR A)', '011 7432942', NULL, 'cnr Denne & Springs Road', 'DENNE OORD', 6529, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sam Service Station', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -29.584994, 30.533103, 'Kweyama, Thokozani (MR T)', '031 906 3072', NULL, 'cnr Mayibuye Drv & Mkhiwane St', 'UMLAZI', 4001, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', 'Kiosk / Non-Express', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sandow', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.80743, 18.47937, 'vender, Melanie (MR M)', '021 554 3656', 1, 'Sandown Road', 'BLOUBERG SANDS', 7436, 1, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP San Souci', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.901, 29.44976, 'Bava, Ameer (MRS A)', '082 786 3461', 101, 'Market Street', 'PIETERSBURG', 750, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '12C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Saratoga', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.19214, 28.05429, 'Williams, Ayesha (MS A)', '011 402 6080', 35, 'Saratoga Avenue', 'DOORNFONTEI', 116, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', 'Shop 100 m2 - Limited', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Scottsville', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.617189, 30.398419, 'de Lange, Earl (MR E)', '033 345 1981', 60, 'Durban Road', 'PIETERMARITZBURG', 3201, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sheffield Service Station', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.399115, 27.874872, 'Hitzeroth, Lucretia (MS L)', '011 855 7812', NULL, 'Cnr lden Highway & Sheffield Road', 'LENASIA SOUTH ~ EXT 4', 1824, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sibaya', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.836869, 31.016897, 'ldstone, Ellen (MRS E)', '031 5682968', NULL, 'Cnr M4 & Sibaya Drive', 'UMDLOTI', 4350, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sinoville', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.67748, 28.2048, 'Pretorius, A (MR A)', '012 5432111', 70, 'Zambezi Drive', 'SINNOVILLE', 1630, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Smit Street', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.195401, 28.031867, 'Jogie, Hassen (MR H)', '011 4036065', 125, 'Smit Street', 'BRAAMFONTEI', 116, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', 'BP Jetwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Southfield', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.035778, 18.487101, 'Eachus, Lindsay (MR L)', '021 7056153', 146, 'Victoria Road', 'SOUTHFIELD', 7800, 146, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP South Road Service Station', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.557942, 30.393735, 'Duber, Idris (MR I)', '033 391 5687', 1, 'South Road', 'NORTHDALE', 3201, 1, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sparks Road', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.83575, 30.9953, 'Singh, Santosh (MR S)', '031 2087469', 29, 'Sparks Road', 'OVERPORT', 4001, 29, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Spruitview', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.3173, 28.18149, 'Motsoane, Motlalepul (MR M)', '011 866 7677', NULL, 'Stand 1130 Siluma Drive', 'SPRUITVIEW EXT 1', 2023, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Stanford Road', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.919386, 25.564566, 'Phillips, Micheal (MR M)', '041 4563461', NULL, 'cnr Stanford & Aubrey Roads', 'GELVANDALE', 6016, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', '--', 'Nandos', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Stormvoel', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.71206, 28.28353, 'Toerien, Anton (MR A)', '012 8002084', NULL, 'Cnr Stormvoel Road & Bloueier Road', 'EASTLYNNE', 186, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Strand', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.097019, 18.851905, 'Coetzer, Deon (MR D)', '021 853 0806', 45, 'Main Road', 'STRAND', 7140, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Strubensvalley Service Sta', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.121861, 27.900303, 'Van Heerden, Ronnie (MR R)', '011 475 5007', NULL, 'Cnr Fredenharry & Cascades Sts.', 'STRUBENS VALLEY', 1735, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', '--', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sujee Motors', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.20723, 28.30751, 'Sujee, Salma (MRS S)', '011 4212421', NULL, 'Cnr Liverpool & Lanca', 'BENONI SOUTH', 1500, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sunnyrock', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.167232, 28.166318, 'Hajat, Ahmed (MR A F)', '011 455 1340', NULL, 'cnr Edenvale & North Reef Roads', 'EDENVALE', 1567, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', 'Steers & Fishaways', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sunnyside', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.75267, 28.20326, 'Naidoo, Visham (MR V)', '012 341 4934', NULL, 'Cnr Jeppe & Kotze Street', 'PRETORIA', 132, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', 'BP Jetwash', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Sydney Road', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.88556, 30.98698, 'Aitken, Bruce (MR B)', '083 403 1696', 483, 'Sydney Road', 'SYDNEY', 4001, 483, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Terrace Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.137228, 28.009214, 'Yusuf, Naser (MR S N)', '011 888 1710', 1, 'Rustenburg Road', 'VICTORY PARK', 2195, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Thorntree', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.580442, 28.103225, 'Zama, Wanda (MR W)', '083 269 0907', NULL, 'erf  738 Soshanguve', 'SOSHANGUVE', 2, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', '--', '--', 'QSR - Other', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Tom Jones', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.18029, 28.311628, 'Casey, Quraish (MR Q)', '011 849 0099', NULL, 'Cnr Tom Jones & Bunyan Roads', 'BENONI', 1501, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Trio', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.357385, 28.115342, 'Van Aswegen, Anita (MRS A)', '011 9004063', NULL, 'cnr Kliprivier & Rivett Carnac Road', 'ALRODE SOUTH', 1930, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Twin Palms', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.748254, 28.210209, 'Bullah, Bharat (MR B)', NULL, NULL, 'Schoeman Street', 'ARCADIA', 105, 611, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Jetwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Tygervalley', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.905129, 18.628059, 'Nicole, Pierre Ant (MR P A)', '021 9196120', 273, 'Durban Road', 'BELLVILLE', 7530, 273, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Umbilo', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.87437, 30.99195, 'Paramanund, Chunderpau (MR C)', '031 205 5808', 570, 'Umbilo Road', 'DURBA', 4001, 566, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Valhalla', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.80866, 28.14903, 'Ramsarup, Nerissha (MS N)', '012 654 5278', NULL, 'Broadway East', 'VALHALLA', 137, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Verulam', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.64686, 31.0451, 'Solwa, Ashraf (MR A)', '031 263 9700', 2, 'Ireland Street', 'VERULAM', 4340, 2, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Village Mall', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.056319, 30.881262, 'Salajee, Ismail (MR I)', '031 905 5019', 371, 'Kingsway Road', 'AMANZIMTOTI', 4125, 371, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Vosloorus', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.361474, 28.200384, 'Molisana, Neo (MR N)', '011 906 3003', NULL, 'Cnr Khoza & Roetsdrive', 'VOSLOORUS', 1432, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Walmer Gardens', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.980338, 25.579652, 'Webb, Brian (MR B)', '041 5811750', NULL, 'Cnr 10th Ave & Main Road', 'WALMER', 6065, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Waterfall Park', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.65364, 27.23389, 'Grobelaar, Andre (MR A)', '014 537 3032', NULL, 'cnr Howick St & Johannesburg Rd', 'RUSTENBURG', 300, NULL, 'North West', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'FNB/STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Waterkloof Ridge', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.815666, 28.242876, 'Uys, Hannes (MR H)', '012 3476878', NULL, 'cr Hans Strydom & Kierie Klapper St', 'WATERKLOOF RIDGE', 1811, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Waterloo', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.659081, 31.054558, 'Singh, Komila (MRS K)', '032 948 1021', NULL, 'Umdloti Link Road (M27)', 'INANDA', 4340, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP West Street', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.857343, 31.028936, 'Singh, Dharam (MR D)', '031 337 7100', 208, 'Dr Pixley Kaseme Street', 'DURBA', 4000, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP William Nicol', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.003488, 28.012969, 'Bentel, Hilary (MR H)', '011 465 2071', NULL, 'William Nicol Drive', 'FOURWAYS', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 100 m2 - Limited', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Wine Route', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.804089, 18.87215, 'Alport, Mark (MR M J)', '021 875 5838', NULL, 'Cnr Old Main Road & R44', 'KLAPMUTS', 7600, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Winmore', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.8403, 28.28087, 'Toerien, Johan (MR JC)', '012 9973151', NULL, 'cnr De Villa Bois & Hesketh Streets', 'WINGATE PARK', 153, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'PnP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Zambezi', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.67897, 28.25395, 'Prinsloo, Peter (MR P)', '012 548 5387', NULL, 'Zambezi Drive', 'MONTANA PARK', 1, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('BP Zeerust', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -25.54239, 26.10714, 'de Paiva, Lucian (MR L)', '018 642 2015  018 642 2016', NULL, 'cnr Kerk & Russel Streets', 'ZEERUST', 2865, NULL, 'North West', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Braairock Cafe & Filling Sta', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.27492, 29.13216, 'Kuun, Johan (MR J)', '058 6232178', 100, 'Meckechnie Street', 'HARRISMITH', 9880, NULL, 'Free State', 'Core 4 - The Rest', NULL, '06C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Breswill Service Centre', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.303751, 28.447096, 'Williams, Shirley (MRS S)', '011 8185824', NULL, 'Cnr Nigel & Chaterland', 'SELCOURT', 1567, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Bridge Auto Louis Trichardt', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.04946, 29.91383, 'Gilfillan, Johan (MR J)', '015 5165071', 4, 'Rissik Street', 'LOUIS TRICHARDT', 920, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '13C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Brighton Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.84445, 18.71428, 'Van Schalkwyk, Johan (MR J)', '021 9882175', 3, 'Brighton Road', 'KRAAIFONTEI', 7570, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', 'Steers & Debonairs', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Buffalo Pass Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.992917, 27.856347, 'Pape, Lesanne (MRS L)', '043 7411205', NULL, 'Woolwash Road', 'HAVENHILL  EAST LONDO', 5200, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Buffelsdale Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.58347, 31.09662, 'Dada, Mohammed (MR M)', '032 9453458', 21, 'Dahlia Drive', 'BUFFELSDALE', 4400, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Bullion Boulevard Express', 'Rtl Sales Ops-Durba', 'vender, Devrani', -28.761175, 32.044167, 'Van Rooyen, Fanie (MR F)', '035 7899011', 125, 'Bullion Boulevard', 'RICHARDS BAY', 3900, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Industrial', '05A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Camelot Motors', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.77034, 28.22391, 'Soncini, Sandra (MRS S)', '012 3462142', NULL, 'Cnr Queen Wilhelmina & Boshoff Ave', 'NEW MUCKELNEUK', 27, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Capricorn Motors', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.901056, 29.484193, 'Suter, Neville (MR N)', '015 2959207', 42, 'Thabo Mbeki Street', 'PIETERSBURG', 700, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '12C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Car Motors', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.15821, 28.16548, 'Begg, Mohamed (MR M R)', '011 454 3912', NULL, 'cnr Dick Kemp & Edenvale Roads', 'EDENVALE', 1610, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Carrera Sales', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.094343, 28.005144, 'Schober, Hans (MR H)', '011 8861330', NULL, 'Hendrik Verwoerd Drive', 'RANDBURG', 2125, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Cascaro Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.19705, 28.05054, 'Khan, Abubakr (MR A E)', '011 336 9080', NULL, 'Cnr Claim & Noord Streets', 'JOHANNESBURG MAI', 2000, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Cecelia Park Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.12707, 26.15667, 'Mackenzie, Murdoch (MR M)', '051 5233970', NULL, 'Kwaggafontein Plot 37', 'BLOEMFONTEI', 9301, NULL, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Cedars Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.04399, 18.60513, 'Naidoo, Desmond (MR D R)', '021 3911590', NULL, 'cnr Cedars & Boshoff Roads', 'MITCHELLS PLAI', 7802, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ABSA/FNB/NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Central Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -34.04154, 24.91703, 'Marx, Petrus (MR P J)', '042 2931696', 94, 'Da Gama Road', 'JEFFREYS BAY', 6330, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '03B', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ceresvallei Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.362334, 19.311621, 'Van Wyk, Francois (MR F)', '023 3121154', 44, 'Vos Street', 'CERES', 6835, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Chess Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.849496, 30.973997, 'Wahab, Roofie (MR R)', '031 2611504', 87, 'Vusi Mzimela Road', 'MAYVILLE', 4091, 87, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', '--', 'WBC', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Circular Drive Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.978688, 25.536399, 'Wilkie, Derick (MR D)', '041 367 2554', 153, 'Circular Drive', 'WALMER', NULL, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('City Hall Motors', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.099901, 27.771902, 'Strydom, Otto (MR O)', '011 6607959', NULL, 'Cnr Kruger & Church Street', 'KRUGERSDORP', 1724, 739, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('City West Service Station', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.74898, 28.14938, 'Coetzee, Albert (MR A)', '012 327 5771', 564, 'Church Street', 'PRETORIA WEST', 183, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Colchester Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.687887, 25.834052, 'Botha, Hans (MR H)', '041 4680107', NULL, 'cnr Jetty  Darling Street', 'COLCHESTER', 6175, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Concorde Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -28.11112, 26.86887, 'Vermaas, Fredie (MR F)', '057 2126653', 12, 'Mark Street', 'VIRGINIA', 9430, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Connaught Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.92032, 18.58872, 'Brey,  (MR U)', '021 9332256', 121, 'Connaught Road', 'PAROW VALLEY', 7500, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'PnP Express', '--', '--', '--', 'Dealer Owned', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Constantia Park Service Station', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.80316, 28.286197, 'de Bruin, Tarina (MRS T)', '012 9933375', 509, 'Niesewond', 'CONSTANTIA PARK', 10, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Corner Motors', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.50914, 28.35847, 'Taljaard, Jaap (MR J)', '016 3416550', NULL, 'cnr Schoeman & Old Durba', 'HEIDELBERG', 2400, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Cottage Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -33.963338, 18.476097, 'Carr, Rod (MR R)', '021 6894209', 52, 'Camp Ground Road', 'RONDEBOSCH', 7700, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('C P Nel Delta', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -34.162167, 22.109792, 'Mckeown, Gail (MRS G)', '044 6912116', NULL, 'Louis Fourie Road', 'MOSSEL BAY', 6500, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Craib Avenue Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.93601, 26.80615, 'Buytendach, Jannie (MR J)', '057 3884820', 59, 'Craib Avenue', 'RIEBEECKSTAD', 9469, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('C & R Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.208114, 28.054722, 'Leong, Steven (MR S)', '011 3345644', 45, 'Durban Street', 'CITY AND SUBURBA', 2026, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('C View Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.901828, 30.963068, 'Lakraj, Timothy (MR T)', '031 4651788', 531, 'Sarnia Road', 'SEA VIEW', 4001, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Daljosaphat Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.71605, 18.97135, 'osen, Abe (MR A)', '021 8727280', NULL, 'Oosbosch Street', 'PAARL', 7646, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Dalvale Service Station', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.726962, 18.98234, 'Minitzer, Louis (MR L)', '021 8682223', NULL, 'Jan van Riebeeck Drive', 'DALJOSAPHAT', 7620, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Daniels Auto Centre', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.566966, 30.405841, 'Vawda, Mahmood (MR M)', '033 3871612', 50, 'Mysore Road', 'RAISETHORPE', 3201, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '03B', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Darling Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.371572, 18.383632, 'Renske, Thys (MR T)', '022 4922652', NULL, 'Main Road', 'DARLING', 7345, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Daxina Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.38396, 27.84848, 'Cajee, Farida (MS F)', '011 8551669', NULL, 'cnr Starling & Azalea', 'LENASIA SOUTH', 1827, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('De Kuilen Auto', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.92016, 18.67628, 'Jacobs, Fanie (MR F)', '021 9031362', 35, 'Van Riebeeck Street', 'KUILSRIVIER', 7580, 35, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', 'Dealer Owned', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Delwes Filling Station', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -26.159012, 28.617897, 'Botha, Carel (MR C)', '013 665 1403', 195, 'Sarel Celliers Street', 'DELMAS', 2210, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('De Wit Motors', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -26.520351, 29.985096, 'Coetzer, Johan (MR J)', '01780 15300', 69, 'Kerk Street', 'ERMELO', 2350, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '08C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Disa Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.067804, 18.823002, 'Van der Walt, Louis (MR L)', '021 8551250', NULL, 'Lobelia & Main Roads', 'HELDERVUE', 7140, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', 'BP Superwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Doeane Garage', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.43447, 31.95686, 'Scott, Ian (MR I)', '013 7937618', NULL, 'Lebombo Border Post', 'KOMAATIPOORT', 1340, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '61C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Dolomite Motors', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.366732, 27.394562, 'Sewlall, Rohan (MR R)', '018 788 5095', NULL, 'Cnr Reinecke & Dolomite', 'CARLTONVILLE', 2508, NULL, 'North West', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Donkin Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -32.31576, 22.57264, 'De Witt, Pierre (MR P)', '023 4143244', 170, 'Donkin Street', 'BEAUFORT WEST', 6970, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '08B', '--', 'Shop 91 - 136 m2', '--', 'KFC', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Downtown Filling Station', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.203555, 28.060734, 'Dasoo, Faiyez (MR F)', '011 6143279', 294, 'Commissioner Street', 'JEPPESTOW', 2100, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Drive In Motors', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.525036, 31.20664, 'Van Vuuren, Hans (MR H)', '032 9463162', 8, 'Drive Inn Road', 'BALLITO', 4420, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '03A', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'KFC', 'BP Jetwash', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Drivewell Service Station', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -27.662549, 27.239887, 'Motala, Afhraf (MR A)', '056 2151268', 29, 'Reitz Street', 'KROONSTAD', 9500, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Drop In Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.921072, 25.554038, 'Dixon, Hayden (MR H)', '041 457 1100', NULL, 'cnr Bell & Beetlestone Roads', 'GELVANDALE', 6020, 106, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Dunswart Filling Station', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.208805, 28.249751, 'Patel, Mahesh (MR M)', '011 849 7368', 3, 'Main Reef Road', 'DUNSWART', 1506, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Easts Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.19764, 31.03643, 'Henstock, Chris (MR C)', '035 474 2544', 57, 'Osborn Road', 'ESHOWE', 3815, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Industrial', '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Edenburg Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.730547, 25.934034, 'Swart, Ignatius (MR I P)', '051 743 1006', 35, 'Voortrekkerstreet', 'EDENBURG', 9908, NULL, 'Free State', 'Core 4 - The Rest', NULL, '08A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('E en R Motors', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.914325, 18.584751, 'Havenga, Barend (MR B)', '021 9316510', 55, 'Jan Smuts Drive', 'PAROW', 7500, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Eersterust Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.708359, 28.308592, 'Sharief, Farouk (MR F)', '011 337 4030', 252, 'Hans Coverdale West Street', 'EERSTERUST', 22, 252, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Elandskraal Garage', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.751104, 27.558959, 'Thomas, Marthinus (MR M)', '014 5743104', NULL, 'Old Pretoria Road', 'MOOI NOOI', 325, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('El Corro Motors', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.14435, 27.95375, 'Louw, Joubert (MR J)', '011 476 1653', NULL, '14th Avenue & Bagley Terrace', 'NORTHCLIFF', 2195, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Eldorado Park BP 1', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.173595, 27.879848, 'Foster, George (MR G)', '011 342 2713', NULL, 'Stand 2563/4/5 Extention 3', 'ELDORADO PARK', 1710, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Enterprise Motors', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.19951, 28.01314, 'Paruk, Zak (MR Z)', '011 837 3743', NULL, 'cnr Queen  Church Street', 'MAYFAIR', 2025, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Erica Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -33.948489, 18.621532, 'Kadir, Ashraf (MR A)', '021 952-7290', NULL, 'Chestnut & Willow Way', 'BELHAR', 7490, 16, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', 'Dealer Owned', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Escombe Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.87253, 30.8986, 'Tully, Brian (MR B)', '031 4641508', 439, 'Main Road', 'ESCOMBE', 4093, 439, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('E''Thembeni Service Station', 'Rtl Sales Ops-Gauteng South', 'Rakhuba, Kagiso', -26.30909, 28.39236, 'Zwane, Themba (MR T)', '011 737 2197', NULL, 'cnr Majola & Thema Road', 'KWA THEMA', 1518, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Evaton North BP', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.508262, 27.856055, 'Nxusa,  (MR S)', '016 583 0448', 1829, 'Rabotapi Road', 'EVATON NORTH', 1908, 1835, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Fifth Avenue Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.897136, 18.577969, 'Kluner, Stephan (MR S)', '021 9305025', NULL, 'Fifth Avenue', 'PAROW', 7500, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Finland Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.331928, 28.147873, 'Branco De Matos, Luis Filip (MR L F)', '047 4913157', 5, 'Umtata Road', 'BUTTERWORTH', 4960, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Fiveways Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.96063, 25.60202, 'war, Geoff (MR G)', '041 3734499', 59, 'Cape Road', 'PORT ELIZABETH', 6065, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', 'BP Express', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Fleetway Service Centre', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.914636, 18.474994, 'Calvert, Kevin (MR K)', '021 5116236', 54, 'Section Street', 'PAARDEN EILAND', 7405, 54, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Flora Lake Service Centre', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.182306, 27.908852, 'Taylor, Andrew Pau (MR A P)', '011 674 0067', 6, 'Kathleen Street', 'ROODEPOORT', 1900, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Fountain Service Station', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -26.94148, 29.22935, 'Dippenaar, Christo (MR C)', '017 712 2911', 26, 'Krogh Street', 'STANDERTO', 2430, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '08C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Fourways Gardens BP', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.007906, 28.007585, 'Nel, Renita (MRS R)', '011 4653681', NULL, 'Uranium', 'FOURWAYS', 2068, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Frates Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.716042, 28.220937, 'Wichman, Hein (MR H)', '012 3300230', NULL, 'Frederick & Frates', 'RIETFONTEI', 31, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Friendly Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.993276, 30.933218, 'Parmanand, Steve (MR S)', '031 9122214', 41277, 'Dehaloo Lane', 'ISIPI', 4115, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Glenfair Service Station', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.766356, 28.279899, 'Ruane,  (MR C)', '012 3619766', NULL, 'Cor Lynnwood & Daventry Roads', 'LYNNWOOD MANOR', 40, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', 'BP Superwash', 'NED')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Glenrob Motors', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.189967, 28.045661, 'Nyati, Wilberforc (MR W)', '011 725 1439', 67, 'Klein Street', 'HILLBREW', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Globe Motors', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.2214, 28.1706, 'Bice, Mauro (MR M)', '011 8738955', 36, 'Power Street', 'GERMISTO', 1411, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('ld Star Motors', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.908449, 29.454766, 'Steenkamp, Leon (MR L)', '015 295 2103', 24, 'Grobler Street', 'PIETERSBURG', 700, 24, 'Limpopo', 'Core 4 - The Rest', NULL, '12C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('lf Course Garage', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.878531, 28.223049, 'Jonker, Donald (MR DL)', '012 6671918', NULL, 'Main Road', 'IRENE', 1675, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('mpo Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.316787, 28.204574, 'Owen, Heather (MR H)', '047 4911971', NULL, 'Kentane Road', 'BUTTERWORTH', 4960, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Grayston Drive', 'Rtl Sales Ops-Gauteng North', 'Coxon, Joh', -26.097716, 28.05954, 'Joselowsky, Solly (MR S)', '011 884 7099', 119, 'Grayston Drive & North Roads', 'SANDOWNS', 2010, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', 'KFC', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Grobler''s Service Station', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.26047, 28.12048, 'Grobler, Dirk (MR D)', '0117243013  0117243020', 1, 'Voortrekker Street & Glen Albyn Str', 'ALBERTO', 1450, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Grove Auto City', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.1703, 28.07324, 'Seedat, Moosa (MR M)', '011 483 1002', NULL, 'Louis Botha Avenue', 'ORANGE GROVE', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 91 - 136 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Gullsway Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.94752, 27.98571, 'Keitzmann, Trevor (MR T)', '043 7401603', 1, 'Gullsway - nubie', 'EAST LONDO', 5201, 60, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Guys Service Centre', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.144707, 27.808026, 'Fourie, Johan (MR J)', '011 7624948', NULL, 'Cnr Mcclean & van Eck', 'KRUGERSDORP', 1756, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Halfway Toyota Uvonga', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.836264, 30.389849, 'Lamble, Niel (MR N)', '039 3150020', NULL, 'Marina Drive', 'UVO', 4275, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Halfway Toyota Widenham', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.203551, 30.800323, 'Von Mollendorff, Theo (MR T)', '039 9732022', 1, 'Rozel Road', 'UMKOMAAS', 4182, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hampson Delta', 'Rtl Sales Ops-Durba', 'Khanyile, Nontokozo', -30.29005, 30.74986, 'Hampson, Rowan (MR R)', '039 9761203', 98, 'Scott Street', 'SCOTTBURGH', 4180, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '03A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Harrismith Road Motors', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -28.557919, 29.783871, 'Swart, Marius (MR M)', '036 6376143', 18, 'Harrismith Road', 'LADYSMITH', 3370, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '05C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hatfield Gardens Service Stati', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.746468, 28.235479, 'Salajee, Faizal (MR F)', '083 326 0561', NULL, 'Cnr Hilda & Schoeman Streets', 'HATFIELD', 40, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hawston Service Station', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.386703, 19.130214, 'Moos, Yusuf (MR Y)', '028 3151266', NULL, 'Gert Viljoen Road', 'HAWSTO', 7202, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hay-Hoe Service Station', 'Rtl Sales Ops-Durba', 'Pillay, Promona', -29.82117, 30.86105, 'Bester, John (MR JS)', '031 7021953', 6, 'Underwood Road', 'PINETOW', 3610, NULL, 'KwaZulu Natal', 'Core 2 - Durba', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Heidelberg Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.0818, 20.948232, 'Eybers, Willness (MR W)', '028 7221935', 1, 'Eksteen Street', 'HEIDELBERG', 6665, 1, 'Western Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Highway Motors (Odendaalsrus)', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.877445, 26.69192, 'Rezazadeh, Reza (MR R)', '057 3541858', 34, 'Voortrekker Street', 'ODENDAALSRUS', 9480, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Highway Motors (Port Alfred)', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.59199, 26.88539, 'Menary, Neil (MR N)', '046 6242570', 70, 'Albany Road', 'PORT ALFRED', 6170, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Highway Nissa', 'Rtl Sales Ops-Gauteng North', 'Sithole, Nozipho', -25.66751, 30.24436, 'Van Rensburg, Boet (MR B)', '013 2560050', NULL, 'Cnr Quitzow & Main Road', 'MACHADODORP', 1170, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hiway Motors', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -32.980714, 27.827901, 'Halloway, Bronwyn (MRS B)', '043 7451606', NULL, 'Main Road', 'WILSONIA', 5247, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hout Bay Petrol Filling Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.02715, 18.35824, 'Mahomed, Zahir (MR Z)', '021 790 5114', 122, 'Main Road', 'HOUT BAY', 7872, 122, 'Western Cape', 'Core 3 - Cape', NULL, '01A', 'PnP Express', '--', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Howick Falls Garage', 'Rtl Sales Ops-Durba', 'Sakuneka, Selby', -29.48888, 30.22524, 'Cornell, Gregg P (MR G P)', '033 3302121', 23, 'Main Street', 'HOWICK', 3290, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', NULL, '03B', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Huda Service Station', 'Rtl Sales Ops-Cape Tow', 'Mabunda, Beki', -34.029666, 18.603254, 'Bayat, Abdullah (MR A)', '021 371 2586', NULL, 'cnr Erica & Merrydale Roads', 'LENTEGEUR', 7785, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hudson Spence & So', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.920786, 25.597335, 'Spence, Robin (MR R)', '041 4533430', 183, 'Kempston Road', 'SIDWELL', 6061, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hu and Hu', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -32.90781, 17.99632, 'Hu, Erns (MR E)', '022 7132216', NULL, 'Velddrif Road', 'VREDENBURG', 7380, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Human Motors (Welkom)', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.984485, 26.739801, 'Beukes, Pierre (MR P)', '057 3526241', 141, 'Arrarat Road', 'WELKOM', 9460, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hutton Hyde Park', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.12895, 28.03482, 'Purchase, Tony (MR T)', '011 7882305', 291, 'Jan Smuts Avenue', 'DUNKELD WEST', 2132, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Hyundai Worcester', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.648265, 19.450406, 'De Villiers, Pieter (MR P)', '023 3472218', 38, 'High Street', 'WORCESTER', 6851, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ibhayi Truck Stop', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.911946, 25.613655, 'Tucker, Desmond (MR D)', '041 4861856', NULL, 'Propnet Park, Ries Street', 'DEAL PARTY, PORT ELIZABETH', 4001, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ideal Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.931294, 25.575409, 'Cohen, Vernon (MR V)', '041 4534460', 152, 'Durban Road', 'KORSTE', 6013, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Indwe Filling Station', 'Rtl Sales Ops-Durba', 'Panya, Arnold', -31.477324, 27.342802, 'Stapbelberg, Willem (MR W)', '045 9521239', NULL, 'Voortrekker Street', 'INDWE', 5445, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '57A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ismail Auto Centre And Car', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.648687, 27.238425, 'Bhamjee, Fayiza (MRS F)', '014 5381122', 81, 'Petunia Road', 'RUSTENBURG', 302, NULL, 'North West', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Jabula Service Station', 'Rtl Sales Ops-Durba', 'vender, Devrani', -28.40603, 32.21898, 'Snyman, Julius (MR J)', '035 550 0085', 20, 'John Ross Highway', 'MTUBATUBA', 3935, NULL, 'KwaZulu Natal', 'Core 4 - The Rest', 'Industrial', '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('JDP Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.872182, 26.681488, 'Lonegan, Peter (MR P)', '057 354 2934', 109, 'Kerkstreet', 'ODENDAALSRUS', 9480, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Jealous Garage', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.43344, 27.847951, 'Modise, Maria (MRS M)', '082 4936551', 476, 'Jericho Road', 'MABOLOKA', 250, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('J & M Diensstasie', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -25.862089, 26.892361, 'Snyman, Tokkie (MR T)', '014 5432380', 52, 'Jameson Street', 'KOSTER', 2825, NULL, 'North West', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('J O Garage/G & W Driveway', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.678054, 27.716465, 'Loots,  (MR W)', '014 7632100', 1, 'Venter Street', 'ELLISRAS', 555, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '13C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('J R Filling Station', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.350755, 28.158975, 'Molisana, Neo (MR N)', '011 860 4987', 702, 'Stand', 'KATLEHONG', 2023, NULL, 'Gauteng', 'Core 1 - Gauteng', 'Township', '09C', 'BP Express', 'Shop 137 - 200 m2', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kempston Truck Stop', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -29.180238, 26.191132, 'Meiring, Frik (MR F)', '051 443 8261', NULL, 'Ferreira Off Ramp N1', 'BLOEMFONTEI', 9317, NULL, 'Free State', 'Core 4 - The Rest', NULL, '11C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kenny''s Service Centre', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.763672, 25.39429, 'Botha, Kenneth (MR K)', '041 991 0772', 93, 'Cuyler Street', 'UITENHAGE', 6230, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '02A', '--', '--', '--', '--', '--', 'STD')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kenridge Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.862699, 18.633855, 'Visagie, Poena (MR P)', '021 9147904', NULL, 'cnr Mildred and Tygervally', 'KENRIDGE', 7550, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kew Service Station', 'Rtl Sales Ops-Gauteng South', 'Ntuli, Zanele', -26.12485, 28.08701, 'Bessit, Shadwick (MR S)', '011 887 1552', NULL, 'Corlett Drive & 9th Road', 'KEW', 2018, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 137 - 200 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kmotso Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.398152, 28.280287, 'Durrant, Nico (MR N)', '014 5654500', 113, 'Third Street', 'HAMMANSKRAAL', 116, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kirstenhof Motors', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.075633, 18.457459, 'Smith, Eldred (MR E)', '021 7010151', 347, 'Main Road', 'KIRSTENHOF', 7974, 347, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Knock All Service Station', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.868509, 25.580205, 'Nondumo, Speedo (MR S)', '041 466 8115', NULL, 'Salamntu Street', 'KWAZAKHELE', 6061, NULL, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Knysna Nissa', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -34.036079, 23.03706, 'Schady, David (MR D)', '044 3826057', 56, 'Main Street', 'KNYSNA', 6570, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '04A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Komkyk Motors', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.33611, 20.03383, 'Louw, Tertius T (MR TT)', '023 3581049', NULL, 'National Road', 'TOUWS RIVER', 6880, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '05A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kraft Road Motors', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.171721, 28.201449, 'Vorster, Jacobus (MR JA)', '011 8223606', NULL, 'Cnr Kraft & North reef Road', 'ELANDSFONTEI', 0, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kruin Motors', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.15995, 27.8699, 'Maduwa, Daniel (MR D)', '011 766 1167', NULL, 'Cnr Hooft & Mooi Streets', 'ROODEPOORT', 1725, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kwikfit Bredasdorp', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -34.52981, 20.04659, 'Lesch, Anton (MR A)', '028 4251160  028 4251161  028 4251162', 72, 'Kerkstraat', 'BREDASDORP', 7280, NULL, 'Western Cape', 'Core 4 - The Rest', NULL, '06A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Kya Sand Service Station', 'Rtl Sales Ops-Gauteng North', 'Mnqeta, Zintle', -26.02052, 27.94885, 'Mansingh, Sudhirsing (MR R M)', '011 7082344', NULL, 'Cnr Bernie & River Road', 'KYA SANDS', 2001, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'ABSA')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('La Belle Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.89697, 18.67298, 'Vercuiel, Eric (MR E)', '021 9452805', NULL, 'La Belle Road', 'STIKLAND', 7357, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Ladysmith Truck In', 'Rtl Sales Ops-Gauteng South', 'Sekthe, Lorraine', -26.20945, 27.98976, 'Perros, Emil (MR E)', '011 8379126', NULL, 'Cnr Main Reef & Marais Roads', 'LANGLAAGTE', 2102, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lakeview Motors', 'Rtl Sales Ops-Gauteng South', 'Mthembu, Baldwi', -27.98145, 26.7024, 'Barker, Anita (MRS A)', '057 352 1723', 146, 'Long Road', 'WELKOM', 9460, NULL, 'Free State', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', 'ATM Sol')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('La Lucia Ridge Oasis', 'Rtl Sales Ops-Durba', 'vender, Devrani', -29.75204, 31.04718, 'Davidson, Anton (MR A)', '031 5629623', 49, 'Sagewood Way', 'LA LUCIA', 4022, NULL, 'KwaZulu Natal', 'Core 2 - Durba', 'Urban Road', '01A', 'BP Express', 'Shop 91 - 136 m2', 'WBC', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lambton Service Centre', 'Rtl Sales Ops-Gauteng South', 'Bottoman, Nolwazi', -26.24654, 28.18096, 'Wally, Mohamed (MR M)', '011 8275490', NULL, 'Doak & Webber Streets', 'GERMISTO', 1414, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('La Montagne Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.746185, 28.318478, 'Behr, Jurgen (MR J)', '012 8037230', 230, 'Albertus Street', 'LA MONTAGNE', 184, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lategans Garage', 'Rtl Sales Ops-Cape Tow', 'Tomose, Chris', -33.639678, 19.008621, 'Thorpe,  (MR C)', '021 8734490', 14, 'Church Street', 'WELLINGTO', 7654, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lesontol Motors', 'Rtl Sales Ops-Gauteng North', 'Makpela, Jacqueline', -25.297531, 27.826281, 'Madiba, Jim (MR J)', '012 7034735', 8898, 'Motsatsi Road', 'GARANKUWA', 200, NULL, 'Gauteng', 'Core 4 - The Rest', NULL, '09C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Leyds Street Motors', 'Rtl Sales Ops-Gauteng North', 'Moshoeshoe, Pinky', -25.746288, 28.209331, 'Bekker, Tim (MR T B)', '012 3411904', NULL, 'Leyds & Pretorius Streets', 'ARCADIA', 7, NULL, 'Gauteng', 'Core 1 - Gauteng', NULL, '09C', 'BP Express', 'Shop 0 - 90 m2', '--', '--', '--', 'FNB')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lichtenburg Diesel Service Sta', 'Rtl Sales Ops-Gauteng South', 'Moopeloa, Lucky', -26.151973, 26.159918, 'Robinson, Robbie (MR R)', '018 6326291', NULL, 'Cnr Hendrik Potgiete & 6th Ave', 'LICHTENBURG', 2740, NULL, 'North West', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Limpopo Toyota', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -23.89982, 29.45129, 'Viljoen, Hennie (MR D)', '015 297 2411', 108, 'Landrost Mare Street', 'PIETERSBURG', 700, NULL, 'Limpopo', 'Core 4 - The Rest', NULL, '12C', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Links Service Station', 'Rtl Sales Ops-Cape Tow', 'Dagnin, Bronwy', -34.07437, 18.84052, 'nsalves, John (MR J)', '021 8522034', NULL, 'Main & Stellenbosch Strs', 'HELDERBERGVUE ESTATE', 7130, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '02A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loevenstein Motors', 'Rtl Sales Ops-Cape Tow', 'Engelbrecht, Sharlene', -33.90141, 18.6156, 'Smit, Theo Franc (MR T F)', '021 9491168', 3, 'Voortrekker Road', 'BELLVILLE', 7551, NULL, 'Western Cape', 'Core 3 - Cape', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Lorraine Motors', 'Rtl Sales Ops-Cape Tow', 'Joubert, Bradley', -33.9659, 25.50925, 'Easton, Barry (MR B)', '041 367 2319', 136, 'Luneville Road', 'LORRAINE', 6070, 136, 'Eastern Cape', 'Core 4 - The Rest', NULL, '01A', '--', '--', '--', '--', '--', '--')");

        tx.executeSql("INSERT INTO FuelStation (SiteName, SalesAreaName, SalesManager, Latitude, Longitude, DealerName, Telno, StreetNo, StreetName, Suburb, PostCode, AddressLine1, ProvinceName, CoreArea, LocationType, PricingZone, ExpressShop, ShopSize, WildBean, QSR, CarWash, ATM) VALUES ('Loskop Vallei Vulstasie', 'Rtl Sales Ops-Gauteng North', 'Ledwaba, Emma', -25.16441, 29.39499, 'Jardin, Johnnie (MR J)', '013 2625565', NULL, 'Cnr Hereford & Van Riebeeck Street', 'GROBLERSDAL', 450, NULL, 'Mpumalanga', 'Core 4 - The Rest', NULL, '10C', '--', '--', '--', '--', '--', '--')");


        //FUEL STATION END

    });
}




