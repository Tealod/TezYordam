const btn = document.getElementById("startBtn");
const statusText = document.getElementById("statusText");
const ambulance = document.querySelector(".ambulance");
const contactBox = document.getElementById("contactBox");

btn.addEventListener("click",()=>{
  statusText.textContent="Phone verified. Sending location...";
  setTimeout(()=>{statusText.textContent="Searching nearest hospital...";},1500);
  setTimeout(()=>{statusText.textContent="Ambulance assigned and on the way.";},3000);
  setTimeout(()=>{
    statusText.textContent="Live tracking enabled.";
    ambulance.classList.add("move");
  },4500);
  setTimeout(()=>{
    statusText.textContent="Paramedic ready. Call for first aid instructions.";
    contactBox.style.display="block";
  },8000);
});
