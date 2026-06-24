const LOAD_CRT_DURATION_MS = 1000;
const INTERACTION_CRT_DURATION_MS = 200;
const LOADER_SEGMENTS = 12;
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeParam = new URLSearchParams(window.location.search).get("theme");
const explicitTheme =
  themeParam === "light" || themeParam === "dark" ? themeParam : null;
let crtTimer;
let loaderTimer;
let loaderProgress = 0;
let userSelectedTheme = Boolean(explicitTheme);

const getBody = () => document.getElementById("body");

const getResumeContent = () => document.getElementById("resumeContent");

const getLoaderBar = () => document.getElementById("loaderBar");

const getToggleButton = () => document.getElementById("togglebtn");

const applyTheme = (theme) => {
  let body = getBody();
  if (!body) {
    return;
  }

  body.classList.remove("light", "dark");
  body.classList.add(theme);
};

const applyPreferredTheme = () => {
  applyTheme(explicitTheme ?? (colorSchemeQuery.matches ? "dark" : "light"));
};

const triggerCrtEffect = (durationMs) => {
  let body = getBody();
  if (!body) {
    return;
  }

  body.classList.add("crt", "crt-active");
  window.clearTimeout(crtTimer);
  crtTimer = window.setTimeout(() => {
    body.classList.remove("crt-active");
  }, durationMs);
};

const triggerInteractionCrtEffect = () => {
  triggerCrtEffect(INTERACTION_CRT_DURATION_MS);
};

const setLoaderProgress = (progress) => {
  let loaderBar = getLoaderBar();
  if (!loaderBar) {
    return;
  }

  loaderProgress = Math.max(0, Math.min(progress, 1));
  let filled = Math.round(loaderProgress * LOADER_SEGMENTS);
  let empty = LOADER_SEGMENTS - filled;
  loaderBar.textContent = `[${"█".repeat(filled)}${"-".repeat(empty)}]`;
};

const waitForWindowLoad = () => {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", resolve, { once: true });
  });
};

const waitForFonts = () => {
  if (!document.fonts) {
    return Promise.resolve();
  }

  return Promise.all([
    document.fonts.load('1rem "Gohu"'),
    document.fonts.load('1rem "typewriter"'),
    document.fonts.ready,
  ]);
};

const revealPage = () => {
  let body = getBody();
  let resumeContent = getResumeContent();
  let toggleButton = getToggleButton();
  if (!body) {
    return;
  }

  window.clearInterval(loaderTimer);
  setLoaderProgress(1);

  window.setTimeout(() => {
    toggleButton?.removeAttribute("hidden");
    resumeContent?.removeAttribute("hidden");
    body.classList.remove("is-loading");
    body.classList.add("is-ready");
    resumeContent?.setAttribute("aria-hidden", "false");
    triggerCrtEffect(LOAD_CRT_DURATION_MS);
  }, 120);
};

const startPageLoader = () => {
  setLoaderProgress(0);
  loaderTimer = window.setInterval(() => {
    setLoaderProgress(Math.min(loaderProgress + 0.08, 0.92));
  }, 120);

  Promise.all([waitForWindowLoad(), waitForFonts()]).then(revealPage, revealPage);
};

window.toggleDark = () => {
  let body = getBody();
  if (!body) {
    return;
  }

  userSelectedTheme = true;
  body.classList.add("crt");

  if (body.classList.contains("light")) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  triggerInteractionCrtEffect();
};

applyPreferredTheme();

colorSchemeQuery.addEventListener("change", () => {
  if (!userSelectedTheme) {
    applyPreferredTheme();
  }
});

startPageLoader();

window.addEventListener("scroll", triggerInteractionCrtEffect, {
  passive: true,
});
window.addEventListener("pointerdown", triggerInteractionCrtEffect, {
  passive: true,
});
window.addEventListener("touchstart", triggerInteractionCrtEffect, {
  passive: true,
});
