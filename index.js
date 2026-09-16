document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");

  console.log("Waiting for the delay...");

  setTimeout(() => {
    heading.classList.add("fade-in-active");
    console.log("Animation triggered!");
  }, 500);
});
