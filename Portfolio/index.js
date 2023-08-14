// Function to handle scroll event and activate navigation links
function handleScroll() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".menu a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
}

// Scroll event listener
window.addEventListener("scroll", handleScroll);
