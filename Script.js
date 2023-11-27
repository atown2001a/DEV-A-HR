function HideOrShow() {
  var x = document.getElementById("hideshowDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettings1").innerHTML = this.responseText;
  }
  xhttp.open("GET", "theme.html");
  xhttp.send();
}

function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettings2").innerHTML = this.responseText;
  }
  xhttp.open("GET", "theme2.html");
  xhttp.send();
}

function loadDoc3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettings3").innerHTML = this.responseText;
  }
  xhttp.open("GET", "theme3.html");
  xhttp.send();
}

function loadDoc4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettings4").innerHTML = this.responseText;
  }
  xhttp.open("GET", "theme4.html");
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

            var x = document.getElementById("mybackDIV");
             if (x.style.display === "none") {
               x.style.display = "block";
             } else {
               x.style.display = "none";
               }
            }
