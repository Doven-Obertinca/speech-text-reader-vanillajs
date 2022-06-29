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
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices);

// Toggle text box
toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

// Close button
closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

// Change voice
voicesSelect.addEventListener("change", setVoice);

// Read text button
readBtn.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
