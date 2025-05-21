// Typewriter Effect
const words = ["Colorful Universe", "Creative Designs", "Vibrant Vibes"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    currentWord = words[i];

    let displayText = isDeleting
      ? currentWord.substring(0, j--)
      : currentWord.substring(0, j++);

    document.getElementById("typewriter").textContent = displayText;

    if (!isDeleting && j === currentWord.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
}
type();

// Theme Switcher
function changeTheme() {
  const bg = document.querySelector(".background");
  const colors = [
    "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    "linear-gradient(135deg, #fccb90, #d57eeb)",
    "linear-gradient(135deg, #f6d365, #fda085)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)"
  ];
  const current = bg.style.backgroundImage;
  const next = colors[Math.floor(Math.random() * colors.length)];
  bg.style.backgroundImage = next;
}
