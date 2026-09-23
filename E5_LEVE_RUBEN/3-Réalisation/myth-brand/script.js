// Animation du nom joueur (illusion scan QR)

const players = [
  {name:"HAALAND", video:"assets/players/haaland.mp4"},
  {name:"MBAPPÉ", video:"assets/players/mbappe.mp4"},
  {name:"VINICIUS", video:"assets/players/vinicius.mp4"}
];

let index = 0;

setInterval(()=>{

  index = (index+1)%players.length;

  const nameEl = document.getElementById("playerName");
  const videoEl = document.getElementById("playerVideo");

  nameEl.style.opacity=0;

  setTimeout(()=>{
    nameEl.textContent = players[index].name;
    videoEl.src = players[index].video;
    nameEl.style.opacity=1;
  },300);

},4000);


// Smooth reveal on scroll

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s";
  observer.observe(el);
});