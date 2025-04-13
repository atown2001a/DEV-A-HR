function HideOrShow() {
  var x = document.getElementById("hideshowDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Grey Background Navy Bar
function loadDocGrN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGrN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeGrN.html");
  xhttp.send();
}

// Black Background Aqua Bar
function loadDocBA() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBA").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeBA.html");
  xhttp.send();
}

//  Background Black Gold Bar
function loadDocBG() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBG").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeBG.html");
  xhttp.send();
}


// Navy Background Black Bar
function loadDocNB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeNB.html");
  xhttp.send();
}
// Navy Background Gold Bar 
function loadDocNG() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNG").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeNG.html");
  xhttp.send();
}


// Gold Background Black Bar
function loadDocGB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeGB.html");
  xhttp.send();
}
// Gold Background Navy Bar
function loadDocGN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeGN.html");
  xhttp.send();
}

// Aqua Background, Navy Bar
function loadDocAN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsAN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeAN.html");
  xhttp.send();
}
// Aqua Background Black Bar
function loadDocAB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsAB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeAB.html");
  xhttp.send();
} 

// Beige Background, Navy Bar
function loadDocBeN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeBeN.html");
  xhttp.send();
}
// Aqua Background Black Bar
function loadDocBeB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "themeBeB.html");
  xhttp.send();
}
 
function reloadme() {
location.reload(false);
}

            function navBTNGroupftn() {
            var x = document.getElementById("payrollNavBTNjs");
             if (x.style.display === "none") {
               x.style.display = "block";
             } else {
               x.style.display = "none";
               }

            var x = document.getElementById("recruitmentNavBTNjs");
             if (x.style.display === "none") {
               x.style.display = "block";
             } else {
               x.style.display = "none";
               }

            var x = document.getElementById("performanceNavBTNjs");
             if (x.style.display === "none") {
               x.style.display = "block";
             } else {
               x.style.display = "none";
               }
            }
