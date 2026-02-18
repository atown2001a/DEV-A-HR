function HideOrShow() {
  var x = document.getElementById("hideshowDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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

function clearThemeData() {
sessionStorage.clear();
localStorage.clear();
location.reload();
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
document.getElementById("dropCON").style.top = "3.6rem";
document.getElementById("dropCON").style.right = "13rem";
document.getElementById("dropCON").style.position = "absolute";


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


const themeMap = { 
BlGo: "Themes/Black/themeBG.html", BlGr: "Themes/Black/themeBGr.html", BlB: "Themes/Black/themeBeB.html", 
NaB:"Themes/Navy/themeNB.html",NaGo: "Themes/Navy/themeNG.html", NaGr: "Themes/Navy/themeNGr.html",
GoB: "Themes/Gold/themeGB.html", GoN: "Themes/Gold/themeGN.html", 
GreB:"Themes/Green/themeGrB.html",
BeiB: "Themes/Beige/themeBeiB.html",
BeiG: "Themes/Beige/themeBeiG.html",
BeiN:  "Themes/Beige/themeBeiN.html",
GrN:"Themes/Grey/themeGrN.html",
AB: "Themes/Aqua/themeAB.html", 

  // ...add the rest
};

function applyTheme(code) { 

const file = themeMap[code]; if (!file) return; const xhttp = new XMLHttpRequest(); xhttp.onload = function () { document.getElementById("themeContainer").innerHTML = this.responseText;
  };
  xhttp.open("GET", file, true); xhttp.send();
  // disable active button (optional)
  document.querySelectorAll(".themeBTN").forEach(b => b.disabled = false); const btn = document.querySelector(`.themeBTN[data-theme="${code}"]`); if (btn) btn.disabled = true; localStorage.setItem("themeCode", code);
}

document.addEventListener("DOMContentLoaded", () => { document.querySelectorAll(".themeBTN").forEach(btn => { btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });

  applyTheme(localStorage.getItem("themeCode") || "GB");

});
