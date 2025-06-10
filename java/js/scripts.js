document.addEventListener("DOMContentLoaded", function() {
  const sportsBtn = document.getElementById("sports-btn");
  const sportsMenu = document.getElementById("sports-menu");

  sportsBtn.addEventListener("click", () => {
    sportsMenu.classList.toggle("show");
  });
});