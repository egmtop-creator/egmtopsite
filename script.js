// ===== GAME 1: Ball Pop =====
const ballBtn = document.getElementById("ballBtn");
const playfield = document.getElementById("playfield");

ballBtn.addEventListener("click", function () {
  // создаём 12 шариков
  for (let i = 0; i < 12; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");

    // случайная позиция внутри playfield
    const x = Math.floor(Math.random() * (playfield.clientWidth - 18));
    const y = Math.floor(Math.random() * (playfield.clientHeight - 18));
    ball.style.left = x + "px";
    ball.style.top = y + "px";

    playfield.appendChild(ball);
  }

  // удалить шарики через 5 секунд
  setTimeout(function () {
    playfield.innerHTML = "";
  }, 5000);
});

// ===== GAME 2: Mini Chat (локальный) =====
const nameInput = document.getElementById("nameInput");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const chatLog = document.getElementById("chatLog");

sendBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const msg = msgInput.value.trim();

  if (name === "" || msg === "") return;

  const line = document.createElement("div");
  line.textContent = name + ": " + msg;
  chatLog.appendChild(line);

  msgInput.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
});

// ===== GAME 3: Clicker =====
const scoreEl = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const resetBtn = document.getElementById("resetBtn");

let score = 0;

clickBtn.addEventListener("click", function () {
  score = score + 1;
  scoreEl.textContent = score;
});

resetBtn.addEventListener("click", function () {
  score = 0;
  scoreEl.textContent = score;
});


