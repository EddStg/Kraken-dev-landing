function setupMobileMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (!button || !menu) return;

  const setExpanded = (expanded) => {
    menu.classList.toggle("hidden", !expanded);
    button.setAttribute("aria-expanded", String(expanded));
    button.setAttribute("aria-label", expanded ? "Cerrar menú" : "Abrir menú");
  };

  button.addEventListener("click", () => setExpanded(menu.classList.contains("hidden")));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setExpanded(false)));
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.35;
    const currentSection = sections
      .filter((section) => section.offsetTop <= scrollPosition)
      .at(-1);

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentSection?.id || "inicio"}`);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
}

setupMobileMenu();
setupActiveNav();

if (window.lucide) {
  window.lucide.createIcons();
}
