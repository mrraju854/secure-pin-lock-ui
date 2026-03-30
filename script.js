let pin = "";
let savedPin = "";
let isSetting = true;

const keys = document.querySelectorAll(".key");
const boxes = document.querySelectorAll(".pin-box");
const status = document.getElementById("status");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const app = document.getElementById("app");

keys.forEach(key => {
key.addEventListener("click", () => {

let value = key.innerText;

if(value === "Clear"){
pin = "";
}
else if(value === "⌫"){
pin = pin.slice(0,-1);
}
else{
if(pin.length < 4){
pin += value;
}
}

updateUI();

if(pin.length === 4){
handlePin();
}

});
});

function updateUI(){
boxes.forEach((box, index) => {
box.classList.toggle("active", index < pin.length);
});
}

function handlePin(){

if(isSetting){
savedPin = pin;
pin = "";
isSetting = false;

title.innerText = "🔓 Enter PIN";
subtitle.innerText = "Unlock your device";
status.innerText = "PIN set successfully ✅";

updateUI();
}
else{
if(pin === savedPin){
status.innerText = "Unlocked Successfully 🎉";
}
else{
status.innerText = "Wrong PIN ❌";
app.classList.add("shake");

setTimeout(()=>app.classList.remove("shake"),400);

pin = "";
updateUI();
}
}

}