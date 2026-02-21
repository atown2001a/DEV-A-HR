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

function clearThemeData() {
sessionStorage.clear();
localStorage.clear();
location.reload();
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
