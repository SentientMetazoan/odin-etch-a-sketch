let grid_size = 16
let current_option = "PAINT"

function init_page() {
  
  
  const btn_erase = document.querySelector("#btn-erase")
  const btn_paint = document.querySelector("#btn-paint")
  const btn_size = document.querySelector("#btn-size")
  
  btn_erase.addEventListener("click", () => change_mode("ERASE"))
  btn_paint.addEventListener("click", () => change_mode("PAINT"))
  btn_size.addEventListener("click", () => {
    let new_size = prompt("Size? (8-100, default 16)", 16)
    if(isNaN(new_size)){
      alert("Not a number!")
    }
    else {
      new_size < 8 ? grid_size = 8
      : new_size > 100 ? grid_size = 100
      : grid_size = new_size
      build_grid()
    }
  })
  
  build_grid()
}

function change_mode(mode){
  current_option = mode
  document.querySelector("#left-container > span").textContent = `Current mode: ${mode}`
  console.log(`Mode set to: ${mode}`)
}

function square(){
  const el = document.createElement("div"); // grid square
  el.className = "grid-square";
  el.addEventListener("click", () => {
    if(current_option === "PAINT")  el.style.backgroundColor = "black"
    else  el.style.backgroundColor = "white"
  })
  return el
}

function build_grid(){
  const gc = document.querySelector("#grid-container"); // the element to contain all the grid squares
  gc.innerHTML = ""
  for(let i=0; i< grid_size; i++){
    let el_row = document.createElement("div"); // grid row
    el_row.className = "grid-row flex";
    for(let j=0; j< grid_size; j++) el_row.appendChild(square()); //append element to row element
    gc.appendChild(el_row); // append row to the container
  }
}