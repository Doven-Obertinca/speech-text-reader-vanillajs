const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./img/water-3853492_1920.jpg",
    text: "I'm Thirsty",
  },
  {
    image: "./img/1655465795437.jpg",
    text: "I'm Hungry",
  },
  {
    image: "./img/1655465822414.jpg",
    text: "I'm Tired",
  },
  {
    image: "./img/1655465407277.jpg",
    text: "I'm Hurt",
  },
  {
    image: "./img/1656361955036.jpg",
    text: "I'm Happy",
  },
  {
    image: "./img/1655465843626.jpg",
    text: "I'm Angry",
  },
  {
    image: "./img/1655465407257.jpg",
    text: "I'm Sad",
  },
  {
    image: "./img/1655465407277.jpg",
    text: "I'm Scared",
  },
  {
    image: "./img/1656362564821.jpg",
    text: "I Want To Go Outside",
  },
  {
    image: "./img/1656362796359.jpg",
    text: "I Want To Go Home",
  },
  {
    image: "./img/1656362983818.jpg",
    text: "I Want To Go To School",
  },
  {
    image: "./img/1656363091560.jpg",
    text: "I Want To Go To Grandmas",
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `
        <img src="${image}" alt"${text}" />
        <p class="info">${text}</p>
    
    `;

  // @todo - speak event

  main.appendChild(box);
}
