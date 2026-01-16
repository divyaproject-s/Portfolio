let words = ["Full Stack Developer", "Python Developer", "Web Designer"];
let i = 0, j = 0;
let deleting = false;

function typeEffect(){
  let word = words[i];
  document.getElementById("typing").innerText = word.substring(0, j);

  if(!deleting){
    j++;
    if(j === word.length + 1){
      deleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    j--;
    if(j === 0){
      deleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(typeEffect, 120);
}
typeEffect();
