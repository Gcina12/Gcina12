const PORTFOLIO = {
  contact: {
    email: "rolologcina78@gmail.com",
    github: "https://github.com/Gcina12",
    linkedin: "https://www.linkedin.com/in/gcina-rololo/",
    cv: ""
  },
  skills: [
    { title: "Languages", items: ["C#", "Python", "TypeScript", "JavaScript", "SQL"] },
    { title: "Web & .NET", items: ["ASP.NET Core", "ASP.NET Web Forms", ".NET MAUI", "React", "Vite", "FastAPI", "Node.js", "Express"] },
    { title: "Data & APIs", items: ["PostgreSQL", "Neon", "SQLAlchemy", "Firebase", "Open Banking APIs", "REST APIs"] },
    { title: "Tools & platforms", items: ["Git & GitHub", "Docker", "Azure App Service", "Azure SQL", "Three.js", "Expo / React Native", "Visual Studio"] },
    { title: "UI & delivery", items: ["Bootstrap 5", "SweetAlert2", "Master Pages", "User Controls", "Sprint planning", "Technical documentation"] }
  ],
  projects: [
    {
      name: "Geo Poly",
      kind: "Featured · strategy game",
      description: "I built a single-player, Risk-style geopolitical strategy game for my UCT Honours (INF4001) entrance-exam work. It features 10 countries, AI-controlled opponents, combat rules and LLM-generated battle commentary.",
      tags: ["React", "Vite", "Firebase", "Three.js", "LLM integration"],
      categories: ["web"],
      featured: true,
      demo: "https://geo-poly.vercel.app",
      source: "",
      note: "Built as part of my UCT Honours entrance-exam work."
    },
    {
      name: "CoreGarage",
      kind: "Featured · team sprint",
      description: "I worked on this workshop management system for Flexora Technologies as part of a sprint-based group project. It has role-based dashboards for Receptionist, Mechanic and Manager, backed by an ASP.NET Core API and SQL database, with formal sprint specifications and project documentation.",
      tags: ["ASP.NET Core", "Vite", "TypeScript", "SQL", "Monorepo"],
      categories: ["web", "group"],
      featured: true,
      demo: "https://coregarage.onrender.com",
      source: "",
      note: "Free Render hosting may take around 30 seconds to wake up."
    },
    {
      name: "WageBridge",
      kind: "FinTech · hackathon",
      description: "In a four-person team at the UCT Winter School FinTech Hackathon, I helped build a South African Earned Wage Access platform. Our prototype includes DebiCheck-style mandate consent, income-consistency eligibility scoring, an admin dashboard and South African bank-code validation.",
      tags: ["FastAPI", "Python", "React", "Neon PostgreSQL", "SQLAlchemy", "Node.js", "Express"],
      categories: ["web", "fintech", "group"],
      featured: false,
      demo: "",
      source: "",
      note: "Built collaboratively under hackathon time constraints."
    },
    {
      name: "MasiKhule",
      kind: "FinTech · concept",
      description: "I explored a fintech concept for rural Eastern Cape producers, using Open Banking and Open Finance principles to shape a financial passport and loan marketplace.",
      tags: ["Open Finance", "FinTech", "Product concept"],
      categories: ["fintech"],
      featured: false,
      demo: "",
      source: "",
      note: "A concept focused on access to financial services."
    },
    {
      name: "KasiSkillz Exchange",
      kind: "Academic · group project",
      description: "Our IFS313E group built a service marketplace connecting local people who need services with people who offer them. I worked with ASP.NET Web Forms, Master Pages and User Controls in a modular site deployed to Azure.",
      tags: ["ASP.NET Web Forms", "Azure App Service", "Azure SQL", "Bootstrap 5", "SweetAlert2"],
      categories: ["web", "group"],
      featured: false,
      demo: "",
      source: "",
      note: "The project used SHA-256 password hashing."
    },
    {
      name: "GuessMaster",
      kind: "Mobile · university group project",
      description: "I worked with a university group on a .NET MAUI number-guessing game with a glass-inspired interface, text-to-speech feedback, high scores and a How to Play page.",
      tags: [".NET MAUI", "C#", "Text-to-speech"],
      categories: ["mobile", "group"],
      featured: false,
      demo: "",
      source: "",
      note: "Add the project repository link when it is ready to share."
    },
    {
      name: "UFH Campus Bookstore",
      kind: "Mobile · university project",
      description: "A university project centred on a mobile experience for the University of Fort Hare campus bookstore.",
      tags: ["Mobile", "University project"],
      categories: ["mobile", "group"],
      featured: false,
      demo: "",
      source: "",
      note: "Add a short feature summary and repository link when available."
    }
  ],
  certificates: [
    {
      title: "UCT–Cortex Hub Fintech Lab Winter School",
      issuer: "University of Cape Town · Financial Innovation Hub & The Cortex Hub",
      year: "2026",
      description: "An intensive three-week programme in Open Banking, Open Finance and fintech innovation, alongside hackathon teamwork and building a working product under time pressure.",
      url: "Certificate_Gcina_Rololo.pdf"
    }
  ],
  experience: [
    {
      role: "Tutor — Computer Literacy & Digital Skills for Accountants",
      organization: "University of Fort Hare",
      period: "University teaching support",
      description: "I run learning sessions, support students with questions and explain computer literacy and digital tools used in accounting. I aim to make the material approachable and practical."
    }
  ],
  responsibleAI: [
    { icon: "01", title: "Plan", description: "I define requirements, architecture and design decisions. I use AI to speed up boilerplate, compare alternatives and explain unfamiliar concepts." },
    { icon: "02", title: "Build", description: "I work incrementally, step by step, so I can learn from each part instead of copying a complete solution." },
    { icon: "03", title: "Review", description: "I test and debug AI suggestions, and only ship code I understand and can explain." },
    { icon: "04", title: "Learn",     description: "I’m comfortable in AI-assisted teams. I follow university integrity rules, cite help where required, and consider privacy, accuracy and bias." }
  ],
  assistantAnswers: [
    {
      matches: ["project", "built", "portfolio"],
      answer: "I’ve worked on Geo Poly, CoreGarage and WageBridge, as well as MasiKhule, KasiSkillz Exchange, GuessMaster and a UFH Campus Bookstore project. They range from team builds and coursework to a fintech concept. Scroll to Projects to see the details."
    },
    {
      matches: ["stack", "technology", "technologies", "tech", "language", "framework"],
      answer: "My toolkit includes C#, ASP.NET Core and Web Forms, .NET MAUI, Python, FastAPI, React, Vite, TypeScript, Node/Express and SQL/PostgreSQL. I’ve also worked with Firebase, Three.js, Azure, Docker, Git and Open Banking APIs."
    },
    {
      matches: ["available", "hire", "job", "work", "opportunity", "role"],
      answer: "Yes—I’m open to business analyst and junior developer opportunities, and I’m applying for an Honours in Information Systems. I’m based in South Africa and graduating in 2026. Use the Contact section to reach me."
    },
    {
      matches: ["study", "university", "degree", "honours", "education"],
      answer: "I’m a final-year BCom Information Systems student at the University of Fort Hare, graduating in 2026. I’m also applying for Honours in Information Systems."
    },
    {
      matches: ["tutor", "teaching", "experience"],
      answer: "I tutor Computer Literacy and Digital Skills for Accountants at the University of Fort Hare. I run sessions, support students and help explain digital tools."
    },
    {
      matches: ["ai", "artificial intelligence"],
      answer: "I use AI as an assistant, not a replacement for my thinking. I set the direction, review and test suggestions, and only ship code I understand. I also follow academic-integrity requirements."
    },
    {
      matches: ["contact", "email", "reach"],
      answer: "You can reach me by email at rolologcina78@gmail.com, or connect via GitHub and LinkedIn using the Contact section."
    }
  ]
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[character]);

function renderSkills() {
  const container = document.querySelector("#skills-grid");
  container.innerHTML = PORTFOLIO.skills.map((group) => `
    <article class="skill-card glass-card reveal">
      <h3>${escapeHTML(group.title)}</h3>
      <div class="skill-list">${group.items.map((skill) => `<span>${escapeHTML(skill)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function projectLink(label, url, accessibleLabel) {
  if (!url) {
    return `<span class="project-link unavailable" aria-disabled="true" title="Project link not provided yet">${label} <span aria-hidden="true">↗</span></span>`;
  }
  return `<a class="project-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(accessibleLabel)}">${label} <span aria-hidden="true">↗</span></a>`;
}

function renderProjects(filter = "all") {
  const visibleProjects = PORTFOLIO.projects.filter((project) => filter === "all" || project.categories.includes(filter));
  const container = document.querySelector("#projects-grid");
  document.querySelector("#count-all").textContent = String(PORTFOLIO.projects.length);

  if (visibleProjects.length === 0) {
    container.innerHTML = '<p class="project-empty">No projects in this category just yet.</p>';
    return;
  }

  container.innerHTML = visibleProjects.map((project) => `
    <article class="project-card glass-card reveal${project.featured ? " featured" : ""}">
      <div class="project-topline">
        <span class="project-kicker">${escapeHTML(project.kind)}</span>
        ${project.featured ? '<span class="featured-badge">Featured</span>' : ""}
      </div>
      <h3>${escapeHTML(project.name)}</h3>
      <p class="project-description">${escapeHTML(project.description)}</p>
      <ul class="project-tags">${project.tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>
      ${project.note ? `<p class="project-note">${escapeHTML(project.note)}</p>` : ""}
      <div class="project-actions">
        ${projectLink("Live demo", project.demo, `${project.name} live demo (opens in a new tab)`)}
        ${projectLink("Source code", project.source, `${project.name} source code (opens in a new tab)`)}
      </div>
    </article>
  `).join("");
  observeReveals(container);
}

function renderCertificates() {
  document.querySelector("#certificates-list").innerHTML = PORTFOLIO.certificates.map((certificate) => `
    <article class="certificate-card glass-card reveal">
      <div class="certificate-info">
        <span class="certificate-icon" aria-hidden="true">✳</span>
        <div>
          <h3>${escapeHTML(certificate.title)}</h3>
          <p>${escapeHTML(certificate.description)}</p>
          <p class="certificate-meta">${escapeHTML(certificate.issuer)} · ${escapeHTML(certificate.year)}</p>
        </div>
      </div>
      ${certificate.url
        ? `<a class="certificate-link" href="${escapeHTML(certificate.url)}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>`
        : '<span class="certificate-link unavailable" aria-disabled="true" title="Add a certificate link to PORTFOLIO.certificates">View certificate</span>'}
    </article>
  `).join("");
}

function renderExperience() {
  document.querySelector("#experience-list").innerHTML = PORTFOLIO.experience.map((item) => `
    <article class="experience-item glass-card reveal">
      <span class="experience-date">${escapeHTML(item.period)}</span>
      <div>
        <h3>${escapeHTML(item.role)}</h3>
        <p class="experience-org">${escapeHTML(item.organization)}</p>
        <p>${escapeHTML(item.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderResponsibleAI() {
  document.querySelector("#ai-cards").innerHTML = PORTFOLIO.responsibleAI.map((item) => `
    <article class="ai-card glass-card">
      <span class="ai-icon" aria-hidden="true">${escapeHTML(item.icon)}</span>
      <h4>${escapeHTML(item.title)}</h4>
      <p>${escapeHTML(item.description)}</p>
    </article>
  `).join("");
}

function renderContact() {
  const links = [
    { label: "Email me", href: `mailto:${PORTFOLIO.contact.email}`, primary: true },
    { label: "GitHub", href: PORTFOLIO.contact.github },
    { label: "LinkedIn", href: PORTFOLIO.contact.linkedin }
  ];
  document.querySelector("#contact-links").innerHTML = links.map((link) => `
    <a class="button ${link.primary ? "button-primary" : "button-secondary"}" href="${escapeHTML(link.href)}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHTML(link.label)}${link.primary ? ' <span aria-hidden="true">↗</span>' : ""}</a>
  `).join("");

  const cvLink = document.querySelector(".cv-link");
  if (PORTFOLIO.contact.cv) {
    cvLink.href = PORTFOLIO.contact.cv;
    cvLink.setAttribute("download", "");
    cvLink.innerHTML = 'Download CV <span aria-hidden="true">↓</span>';
    cvLink.removeAttribute("aria-disabled");
    cvLink.hidden = false;
  } else {
    cvLink.removeAttribute("href");
    cvLink.textContent = "CV link to add";
    cvLink.setAttribute("aria-disabled", "true");
    cvLink.title = "Set the CV URL in PORTFOLIO.contact.cv";
    cvLink.hidden = false;
  }
}

function observeReveals(root = document) {
  const targets = root.querySelectorAll(".reveal:not([data-reveal-ready])");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!window.revealObserver) {
    window.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  targets.forEach((element) => {
    element.dataset.revealReady = "true";
    window.revealObserver.observe(element);
  });
}

function setupProjectFilters() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((filterButton) => {
        const selected = filterButton === button;
        filterButton.classList.toggle("is-active", selected);
        filterButton.setAttribute("aria-pressed", String(selected));
      });
      renderProjects(button.dataset.filter);
    });
  });
}

function setupNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    navigation.classList.toggle("is-open", !expanded);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

function setupAssistant() {
  const panel = document.querySelector("#assistant-panel");
  const launcher = document.querySelector(".assistant-launcher");
  const closeButton = document.querySelector(".assistant-close");
  const messages = document.querySelector("#assistant-messages");
  const form = document.querySelector("#assistant-form");
  const input = document.querySelector("#assistant-input");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let greeted = false;

  function addBubble(text, type) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble${type === "user" ? " user" : ""}`;
    bubble.textContent = text;
    messages.append(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  function showGreeting() {
    if (greeted) return;
    greeted = true;
    addBubble("Hi! I can help you learn about Gcina’s projects, skills and opportunities. What would you like to know?", "assistant");
  }

  function setOpen(open) {
    panel.classList.toggle("is-open", open);
    panel.setAttribute("aria-hidden", String(!open));
    launcher.setAttribute("aria-expanded", String(open));
    if (open) {
      showGreeting();
      input.focus();
    } else {
      launcher.focus();
    }
  }

  function answerFor(question) {
    const normalized = question.toLowerCase();
    const match = PORTFOLIO.assistantAnswers.find((entry) => entry.matches.some((keyword) => normalized.includes(keyword)));
    return match
      ? match.answer
      : "I can answer questions about Gcina’s projects, tech stack, studies, tutoring, AI workflow or availability. Try one of those, or use the Contact section to get in touch.";
  }

  function typeReply(text, bubble, index = 0) {
    if (reducedMotion.matches || index >= text.length) {
      bubble.textContent = text;
      messages.scrollTop = messages.scrollHeight;
      form.querySelector("button").disabled = false;
      input.disabled = false;
      input.focus();
      return;
    }
    bubble.textContent += text[index];
    messages.scrollTop = messages.scrollHeight;
    window.setTimeout(() => typeReply(text, bubble, index + 1), 12);
  }

  function respond(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    addBubble(cleanQuestion, "user");
    input.value = "";
    input.disabled = true;
    form.querySelector("button").disabled = true;
    const typing = document.createElement("div");
    typing.className = "chat-bubble typing";
    typing.setAttribute("aria-label", "Assistant is typing");
    typing.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    messages.append(typing);
    messages.scrollTop = messages.scrollHeight;
    window.setTimeout(() => {
      typing.remove();
      const reply = addBubble("", "assistant");
      typeReply(answerFor(cleanQuestion), reply);
    }, reducedMotion.matches ? 0 : 450);
  }

  launcher.addEventListener("click", () => setOpen(launcher.getAttribute("aria-expanded") !== "true"));
  closeButton.addEventListener("click", () => setOpen(false));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    respond(input.value);
  });
  document.querySelectorAll("#assistant-suggestions button").forEach((button) => {
    button.addEventListener("click", () => respond(button.textContent));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && launcher.getAttribute("aria-expanded") === "true") setOpen(false);
  });
}

renderSkills();
renderProjects();
renderCertificates();
renderExperience();
renderResponsibleAI();
renderContact();
setupProjectFilters();
setupNavigation();
setupAssistant();
observeReveals();
