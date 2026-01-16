// Typing Effect
let words = [
  "Full Stack Developer",
  "Web Designer",
  "Python Developer",
  "Blockchain Developer"
];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
  if (i >= words.length) i = 0;
  current = words[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause before deleting
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(typeEffect, 120);
}
typeEffect();

// Contact Button
function showMsg() {
  alert("Thank you Divya! I will contact you soon 🚀");
}