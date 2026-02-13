document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login");
  const playDiv = document.getElementById("play");
  const welcome = document.getElementById("welcome");
  const result = document.getElementById("result");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");

  const infoPanel = document.getElementById("infoPanel");
  const infoStartBtn = document.getElementById("infoStartBtn");

  infoStartBtn.addEventListener("click", () => {
    infoPanel.style.display = "none"; // paneli gizlədir
    login.classList.remove("hidden"); // login ekranını göstər
  });


  startBtn.addEventListener("click", () => {
    const name = document.getElementById("nickname").value.trim();
    if (!name) {
      alert("Nickname daxil et");
      return;
    }

    welcome.textContent = `Welcome, ${name}!`;
    login.classList.add("hidden");
    playDiv.classList.remove("hidden");
  });

  document.querySelectorAll(".choices button").forEach((btn) => {
    btn.addEventListener("click", () => play(btn.dataset.choice));
  });

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  
  document.querySelectorAll(".choices button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const userBtn = document.querySelector(
    `.choices button[data-choice="${userChoice}"]`,
  );
  userBtn.classList.add("active");

  let text = `You: ${userChoice} | CPU: ${cpuChoice} → `;


  let resultClass = "";
  if (userChoice === cpuChoice) {
    text += "Draw 😐";
    resultClass = "draw";
  } else if (
    (userChoice === "rock" && cpuChoice === "scissors") ||
    (userChoice === "paper" && cpuChoice === "rock") ||
    (userChoice === "scissors" && cpuChoice === "paper")
  ) {
    text += "You win 🎉";
    resultClass = "win";
  } else {
    text += "You lose 💀";
    resultClass = "lose";
  }

  result.textContent = text;
  result.className = `result ${resultClass}`;
}


  resetBtn.addEventListener("click", () => {
    playDiv.classList.add("hidden");
    login.classList.remove("hidden");
    document.getElementById("nickname").value = "";
    result.textContent = "";
  });
});
