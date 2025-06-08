// Detecta se é dispositivo mobile
const isMobile = window.innerWidth <= 768;

// Configurações globais do ScrollReveal
const scrollRevealOption = {
  distance: isMobile ? "30px" : "60px",
  duration: isMobile ? 800 : 1200,
  easing: "ease-out",
  interval: isMobile ? 100 : 200,
  cleanup: true,
  mobile: true,
  reset: false, // evita reaparecer no scroll reverso
};

// Instância do ScrollReveal
const sr = ScrollReveal();

// HERO SECTION
sr.reveal(".section__container h3", {...scrollRevealOption, origin: "top"});
sr.reveal(".section__container h1", {...scrollRevealOption, origin: "left", delay: 300});
sr.reveal(".section__container h2", {...scrollRevealOption, origin: "right", delay: 600});
sr.reveal(".section__container button", {...scrollRevealOption, origin: "bottom", delay: 900});
sr.reveal(".scroll__bottom", {...scrollRevealOption, delay: 1300});
sr.reveal(".socials a", {...scrollRevealOption, origin: "left", interval: 400, delay: 1500});
sr.reveal(".nav__links li", {...scrollRevealOption, origin: "top", interval: 150, delay: 1800});

// ABOUT SECTION
sr.reveal(".about__section h2", {...scrollRevealOption, origin: "left"});
sr.reveal(".about__section p", {...scrollRevealOption, origin: "right", delay: 300});

// WEDDING SECTION
sr.reveal(".wedding__section h2", {...scrollRevealOption, origin: "left"});
sr.reveal(".wedding__content", {...scrollRevealOption, delay: 300});
sr.reveal(".wedding__content img", {...scrollRevealOption, origin: "bottom", interval: 200, delay: 500});

// PORTFOLIO SECTION
sr.reveal(".portfolio__section h2", {...scrollRevealOption, origin: "top"});
sr.reveal(".portfolio__grid img", {...scrollRevealOption, origin: "bottom", interval: 150, delay: 300});

// BUSINESS SECTION
sr.reveal(".business__section h2", {...scrollRevealOption, origin: "left"});
sr.reveal(".business__content p", {...scrollRevealOption, origin: "right", delay: 300});
sr.reveal(".business__content button", {...scrollRevealOption, origin: "bottom", delay: 600});

// TESTIMONIALS SECTION
sr.reveal(".testimonials__section h2", {...scrollRevealOption, origin: "top"});
sr.reveal(".testimonial", {...scrollRevealOption, origin: "bottom", interval: 250, delay: 300});

// PRICING SECTION
sr.reveal(".pricing__section h2", {...scrollRevealOption, origin: "left"});
sr.reveal(".price__card", {...scrollRevealOption, origin: "bottom", interval: 200, delay: 300});

// CTA SECTION
sr.reveal(".cta__section h2", {...scrollRevealOption, origin: "top"});
sr.reveal(".cta__section p", {...scrollRevealOption, origin: "bottom", delay: 200});
sr.reveal(".cta__section button", {...scrollRevealOption, origin: "bottom", delay: 500});

// FOOTER SECTION
sr.reveal(".footer__brand img", {...scrollRevealOption, origin: "left", delay: 100});
sr.reveal(".footer__brand p", {...scrollRevealOption, origin: "left", delay: 300});
sr.reveal(".footer__links", {...scrollRevealOption, origin: "bottom", delay: 500});
sr.reveal(".footer__links li", {...scrollRevealOption, origin: "bottom", interval: 100, delay: 600});
sr.reveal(".footer__socials", {...scrollRevealOption, origin: "right", delay: 800});
sr.reveal(".footer__socials a", {...scrollRevealOption, origin: "right", interval: 200, delay: 900});
sr.reveal(".footer__bottom", {...scrollRevealOption, origin: "top", delay: 1100});
