const LOAD_CRT_DURATION_MS = 1000;
const INTERACTION_CRT_DURATION_MS = 200;
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
let crtTimer;
let userSelectedTheme = false;

const getBody = () => document.getElementById("body");

const applyTheme = (theme) => {
  let body = getBody();
  if (!body) {
    return;
  }

  body.classList.remove("light", "dark");
  body.classList.add(theme);
};

const applyPreferredTheme = () => {
  applyTheme(colorSchemeQuery.matches ? "dark" : "light");
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

if (document.readyState === "complete") {
  triggerCrtEffect(LOAD_CRT_DURATION_MS);
} else {
  window.addEventListener(
    "load",
    () => {
      triggerCrtEffect(LOAD_CRT_DURATION_MS);
    },
    { once: true },
  );
}

window.addEventListener("scroll", triggerInteractionCrtEffect, {
  passive: true,
});
window.addEventListener("pointerdown", triggerInteractionCrtEffect, {
  passive: true,
});
window.addEventListener("touchstart", triggerInteractionCrtEffect, {
  passive: true,
});
