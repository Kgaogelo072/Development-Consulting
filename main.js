document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    const fromTop = window.scrollY + 80;

    navLinks.forEach(link => {
      const sectionId = link.getAttribute("href");
      if (!sectionId.startsWith("#")) return;

      const section = document.querySelector(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); 
});
