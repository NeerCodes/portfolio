let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};                            
 

document.getElementById("downloadLink").addEventListener("click", function() {
  var link = document.createElement("a");
  link.href = "resume.jpg"; // Replace with the actual path to your resume PDF file
  link.download = "Neeraj_resume.jpg";    // Set the desired filename for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});