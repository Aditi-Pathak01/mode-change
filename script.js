let btn = document.querySelector("#btn")
let body = document.querySelector("body")
let mode = "light"

btn.addEventListener("click",()=>{
if (mode === "light"){
  mode = "dark"
  body.style.backgroundColor = "black"
} else if ( mode === "dark"){
  mode = "light"
  body.style.backgroundColor = "white"
}
});

