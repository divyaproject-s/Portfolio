let words = ["Full Stack Developer", "Python Developer", "Web Designer"];
let i = 0, j = 0;
let isDeleting = false;

function typeEffect() {
  let text = words[i];
  document.getElementById("typing").innerHTML =
    text.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j === text.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typeEffect, 120);
}
typeEffect();
