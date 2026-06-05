const iconHtml = (name, className = "size-6") => `<i data-lucide="${name}" class="${className}"></i>`;

const painPoints = [
  {
    icon: "palette",
    title: "Diseño sin estrategia",
    text: "Sitios bonitos que no comunican tu propuesta de valor ni guían a la acción.",
    tone: "orange",
  },
  {
    icon: "shield-check",
    title: "Poca confianza",
    text: "Webs desactualizadas, lentas o poco profesionales que alejan a tus clientes.",
    tone: "teal",
  },
  {
    icon: "trending-down",
    title: "Cero conversión",
    text: "Mucho tráfico, pero sin resultados. Tu web no convierte visitas en clientes.",
    tone: "orange",
  },
];

const services = [
  {
    icon: "panels-top-left",
    title: "Landing pages",
    text: "Páginas enfocadas en una sola cosa: convertir visitantes en clientes.",
    accent: "orange",
  },
  {
    icon: "app-window",
    title: "Páginas web",
    text: "Sitios corporativos modernos, rápidos y optimizados para SEO.",
    accent: "teal",
  },
  {
    icon: "zap",
    title: "Desarrollo PWA",
    text: "Aplicaciones web progresivas: rápidas, instalables y offline.",
    accent: "orange",
  },
  {
    icon: "box",
    title: "Sistemas a medida",
    text: "Plataformas y sistemas personalizados para automatizar tu negocio.",
    accent: "teal",
  },
];

const values = [
  ["target", "Enfoque en conversión"],
  ["code-2", "Código limpio y escalable"],
  ["activity", "Rendimiento de primera"],
];

const comparison = {
  generic: {
    title: "Web genérica",
    icon: "x",
    items: [
      "Plantillas reutilizadas",
      "Diseño sin estrategia",
      "Lenta y poco optimizada",
      "No pensada en conversión",
      "Soporte limitado",
      "Resultados impredecibles",
    ],
  },
  kraken: {
    title: "Kraken Dev",
    icon: "check",
    items: [
      "Diseño 100% a medida",
      "Estrategia enfocada en tu negocio",
      "Rápida, segura y optimizada",
      "Cada sección guía a la acción",
      "Acompañamiento real",
      "Resultados medibles",
    ],
  },
};

const processSteps = [
  ["search", "Diagnóstico", "Analizo tu negocio, tu mercado y tus objetivos para definir la mejor estrategia."],
  ["network", "Estructura", "Definimos la arquitectura de la información y el flujo de la experiencia."],
  ["paintbrush", "Diseño visual", "Creo interfaces modernas, alineadas con tu marca y enfocadas en conversión."],
  ["code-2", "Desarrollo", "Desarrollo limpio, rápido y escalable con las mejores tecnologías."],
  ["rocket", "Lanzamiento", "Pruebas, optimización y lanzamiento. Tu web lista para generar resultados."],
];

const projects = [
  {
    image: "./assets/project-clinic.png",
    title: "Clínica estética",
    tags: ["Landing page", "Diseño + desarrollo"],
  },
  {
    image: "./assets/project-logistics.png",
    title: "Logística",
    tags: ["Sitio web", "SEO + rendimiento"],
  },
  {
    image: "./assets/project-gym.png",
    title: "Sistema para gimnasio",
    tags: ["Sistema web", "Panel administrativo"],
  },
];

const accentClasses = {
  orange: {
    bg: "bg-orange-50",
    icon: "text-kraken-orange",
    chip: "bg-orange-100 text-kraken-orange",
  },
  teal: {
    bg: "bg-cyan-50",
    icon: "text-kraken-teal",
    chip: "bg-cyan-100 text-kraken-teal",
  },
};

function renderPainPoints() {
  document.querySelector("#pain-points").innerHTML = painPoints
    .map(({ icon, title, text, tone }) => {
      const accent = accentClasses[tone];
      return `
        <article class="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <div class="grid size-16 shrink-0 place-items-center rounded-full ${accent.bg} ${accent.icon}">
            ${iconHtml(icon, "size-8")}
          </div>
          <div>
            <h3 class="text-lg font-extrabold">${title}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">${text}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderServices() {
  document.querySelector("#services").innerHTML = services
    .map(({ icon, title, text, accent }) => {
      const color = accentClasses[accent];
      return `
        <article class="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft">
          <div class="mx-auto grid size-16 place-items-center rounded-full ${color.bg} ${color.icon}">
            ${iconHtml(icon, "size-8")}
          </div>
          <h3 class="mt-5 text-lg font-extrabold">${title}</h3>
          <p class="mt-3 min-h-16 text-sm leading-6 text-slate-600">${text}</p>
          <a href="#contacto" class="mt-5 inline-flex items-center gap-2 text-sm font-extrabold ${color.icon}">
            Ver más ${iconHtml("arrow-right", "size-4")}
          </a>
        </article>
      `;
    })
    .join("");
}

function renderValues() {
  document.querySelector("#value-icons").innerHTML = values
    .map(([icon, label]) => `
      <div class="flex items-center gap-3 rounded-2xl bg-cyan-50 p-3 text-sm font-extrabold">
        <span class="grid size-10 place-items-center rounded-full bg-white text-kraken-teal">${iconHtml(icon, "size-5")}</span>
        ${label}
      </div>
    `)
    .join("");
}

function renderComparison() {
  const renderList = (list, positive) => `
    <div class="flex items-center gap-3 border-b border-slate-200 pb-4">
      <span class="grid size-9 place-items-center rounded-full ${positive ? "bg-cyan-100 text-kraken-teal" : "bg-slate-200 text-slate-500"}">
        ${iconHtml(list.icon, "size-5")}
      </span>
      <h3 class="text-xl font-extrabold ${positive ? "text-kraken-teal" : ""}">${list.title}</h3>
    </div>
    <ul class="mt-4 grid gap-3 text-sm text-slate-700">
      ${list.items
        .map((item) => `
          <li class="flex items-center gap-3">
            <span class="grid size-5 place-items-center rounded-full ${positive ? "bg-kraken-teal text-white" : "bg-slate-300 text-white"}">
              ${iconHtml(positive ? "check" : "x", "size-3")}
            </span>
            ${item}
          </li>
        `)
        .join("")}
    </ul>
  `;

  document.querySelector("#generic-list").innerHTML = renderList(comparison.generic, false);
  document.querySelector("#kraken-list").innerHTML = renderList(comparison.kraken, true);
}

function renderProcess() {
  document.querySelector("#process").innerHTML = processSteps
    .map(([icon, title, text], index) => {
      const bgClass = index % 2 ? "bg-kraken-teal" : "bg-kraken-orange";
      return `
      <article class="relative text-center">
        <div class="mx-auto grid size-20 place-items-center rounded-full border-[10px] border-orange-100 ${bgClass} text-white shadow-card">
          ${iconHtml(icon, "size-8")}
        </div>
        <span class="mt-3 block text-xs font-extrabold text-slate-400">${String(index + 1).padStart(2, "0")}</span>
        <h3 class="mt-2 font-extrabold">${title}</h3>
        <p class="mt-2 text-xs leading-5 text-slate-600">${text}</p>
      </article>
    `;
    })
    .join("");
}

function renderProjects() {
  document.querySelector("#projects").innerHTML = projects
    .map(({ image, title, tags }) => `
      <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
        <img src="${image}" alt="Proyecto web para ${title}" width="1672" height="941" loading="lazy" class="aspect-[16/9] w-full object-cover" />
        <div class="p-5">
          <h3 class="text-lg font-extrabold">${title}</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            ${tags
              .map((tag, i) => `<span class="rounded-full ${i ? accentClasses.teal.chip : accentClasses.orange.chip} px-3 py-1 text-xs font-extrabold">${tag}</span>`)
              .join("")}
          </div>
        </div>
      </article>
    `)
    .join("");
}

function setupMobileMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-mobile-menu]");
  const setExpanded = (expanded) => {
    menu.classList.toggle("hidden", !expanded);
    button.setAttribute("aria-expanded", String(expanded));
  };

  button.addEventListener("click", () => setExpanded(menu.classList.contains("hidden")));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setExpanded(false)));
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.35;
    const currentSection = sections
      .filter((section) => section.offsetTop <= scrollPosition)
      .at(-1);

    setActiveLink(currentSection?.id || "inicio");
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").slice(1);
      setActiveLink(targetId);
    });
  });

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
}

renderPainPoints();
renderServices();
renderValues();
renderComparison();
renderProcess();
renderProjects();
setupMobileMenu();
setupActiveNav();
lucide.createIcons();
