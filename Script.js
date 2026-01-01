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
  xhttp.open("GET", "Themes/Grey/themeGrN.html");
  xhttp.send();
}


/*
// Black Background Navy bar
function loadDocBN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Black/themeBN.html");
  xhttp.send();
}
*/

// Black Background Gold Bar
function loadDocBGold() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBGold").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Black/themeBG.html");
  xhttp.send();
}

//  Background Black Green Bar
function loadDocBGreen() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBGreen").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Black/themeBGr.html");
  xhttp.send();
}


// Black Background Beige bar
function loadDocBeB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Black/themeBeB.html");
  xhttp.send();
}





// NAVY

// Navy Background Black Bar
function loadDocNB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Navy/themeNB.html");
  xhttp.send();
}

// Navy Background Gold Bar 
function loadDocNG() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNG").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Navy/themeNG.html");
  xhttp.send();
}

// Navy Background Green Bar 
function loadDocNGr() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNGr").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Navy/themeNGr.html");
  xhttp.send();
}

// Navy Background Beige Bar 
function loadDocNG() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsNG").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Navy/themeNG.html");
  xhttp.send();
}




//Gold
// Gold Background Black Bar
function loadDocGB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Gold/themeGB.html");
  xhttp.send();
}

// Gold Background Navy Bar
function loadDocGN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Gold/themeGN.html");
  xhttp.send();
}

// Green is too similar to Gold

//Aqua

// Aqua Background Black Bar
function loadDocAB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsAB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Aqua/themeAB.html");
  xhttp.send();
}



// Green

// Green Background Black Bar
function loadDocGrB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGrB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Green/themeGrB.html");
  xhttp.send();
}


/*
// Green Background Navy Bar
function loadDocGreenN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGreenN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Green/themeGrN.html");
  xhttp.send();
}

// Green Background Beige Bar
function loadDocGrBe() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsGrBe").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Green/themeGrBe.html");
  xhttp.send();
}

*/



// Beige
// Beige Background, Black Bar
function loadDocBeiB() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeiB").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Beige/themeBeiB.html");
  xhttp.send();
}

// Beige Background, Navy Bar
function loadDocBeiN() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeiN").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Beige/themeBeiN.html");
  xhttp.send();
}


// Beige Background, Green Bar
function loadDocBeiG() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("themeSettingsBeiG").innerHTML = this.responseText;
  }
  xhttp.open("GET", "Themes/Beige/themeBeiG.html");
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


const userAgent = navigator.userAgent.toLowerCase();

// Detect Firefox
const isFirefox = userAgent.includes('firefox') || userAgent.includes('fxios');

// Detect Chrome
const isChrome = userAgent.includes('chrome') && 
                 !userAgent.includes('edg') && 
                 !userAgent.includes('opr');

if (isFirefox) {
    console.log("Running Firefox-specific code...");



function checkZoom() {
    // A common way to estimate zoom, though imperfect across all setups
    var zoomLevel = Math.round(window.devicePixelRatio * 100);

    	    // This is a rough estimation. For 90% browser zoom, devicePixelRatio might be around 0.9 on standard displays.
   	    // On high DPI displays, this gets complicated.
	    // A better, but more complex, method involves measuring a fixed-size element in CSS pixels vs device pixels.

	    // Let's assume for a standard 100% OS scale, 90% browser zoom gives 0.9 dPR
	    // We'll set a tolerance range
	    var requiredZoom = 90;
//	    var tolerance = 10; // Allow for slight variations

//	    var content = document.getElementById('content-wrapper');
//	    var message = document.getElementById('zoom-message');

    	    if (zoomLevel !== requiredZoom) {
    
		//    content.style.display = 'block';
       		//    message.style.display = 'none';

 	     		document.body.style.display = 'none';  // Hide all content
        		alert(`Page zoom is not at 90%. It's at ${zoomLevel}%.. Please set it to 90%`);
    		} else {
			document.body.style.display = 'block';  // Show content if zoom is 90%
    		}
	    }
	window.onload = function() {
	    checkZoom();
	};

} else if (isChrome) {
// For Chrome Only
    console.log("Running Chrome-specific code...");
      document.body.style.zoom = "90%";
   function checkZoom() {
    // Get the current zoom level
    const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);

if (zoomLevel !== 90) {
        document.body.style.display = 'none';  // Hide all content
        alert(`Page zoom is not at 90%. It's at ${zoomLevel}%.. Please set it to 90%`);
    } else {
        document.body.style.display = 'block';  // Show content if zoom is 90%
    }
}

	window.onload = function() {
	    checkZoom();
	};

}
