function Show(val) {
  if (val == 1) {
    document.getElementById("rect-2").style.height = "161px";
    document.getElementById("rect-3").style.height = "74.12px";
    document.getElementById("rect-4").style.height = "74.12px";
    document.getElementById("show").style.display = "block";
    document.getElementById("sho").style.display = "none";
    document.getElementById("sh").style.display = "none";
  }
}
function Sho(val) {
  if (val == 2) {
    document.getElementById("rect-2").style.height = "74.12px";
    document.getElementById("rect-3").style.height = "161px";
    document.getElementById("rect-4").style.height = "74.12px";
    document.getElementById("show").style.display = "none";
    document.getElementById("sho").style.display = "block";
    document.getElementById("sh").style.display = "none";
  }
}
function Sh(val) {
  if (val == 3) {
    document.getElementById("rect-2").style.height = "74.12px";
    document.getElementById("rect-3").style.height = "74.12px";
    document.getElementById("rect-4").style.height = "161px";
    document.getElementById("show").style.display = "none";
    document.getElementById("sho").style.display = "none";
    document.getElementById("sh").style.display = "block";
  }
}
