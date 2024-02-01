let lightBtn = document.getElementById("lightBtn");
let lightBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", turnLight);
lightBtn.addEventListener("click", turnDark);

function turnLight(){
  document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "light");
}

function turnDark()
{
  document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark");
}
