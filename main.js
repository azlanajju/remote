const input = document.querySelector("input");
const body = document.querySelector("body");
let text = document.querySelector(".text")
const toggleThemeMode = () => {
  body.classList.toggle("dark");
  if(body.classList.contains("dark")){
    text.innerHTML = "dark theme";
  } 
  else{
    text.innerHTML = "light theme";
  }
};
input.onchange = toggleThemeMode;
