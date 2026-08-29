const SERVER = {
  name: "EVASION",
  realmName: "Evasion",
  realmlist: "logon.example.com",
  discord: "https://discord.gg/replace-me",
  realmState: "DEVELOPMENT"
};

document.querySelectorAll("[data-realm-name]").forEach(el => el.textContent = SERVER.realmName);
document.querySelectorAll("[data-realmlist]").forEach(el => el.textContent = SERVER.realmlist);
document.querySelectorAll("[data-realm-state]").forEach(el => el.textContent = SERVER.realmState);
document.querySelectorAll("[data-discord]").forEach(el => el.href = SERVER.discord);

const copyButton = document.getElementById("copy");
const copyResult = document.getElementById("copyText");

copyButton?.addEventListener("click", async () => {
  const value = `set realmlist ${SERVER.realmlist}`;
  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "Copied";
    copyResult.textContent = "Copied to clipboard";
    setTimeout(() => {
      copyButton.textContent = "Copy realmlist";
      copyResult.innerHTML = `set realmlist <span data-realmlist>${SERVER.realmlist}</span>`;
    }, 1800);
  } catch {
    copyResult.textContent = value;
  }
});

// Simple visual-art pass: load repo-hosted artwork directly into the live site.
if (!document.querySelector('link[href="art-pass.css"]')) {
  const artStyles = document.createElement("link");
  artStyles.rel = "stylesheet";
  artStyles.href = "art-pass.css";
  document.head.appendChild(artStyles);
}

const brand = document.querySelector(".brand");
if (brand) {
  brand.innerHTML = '<img class="brand-art" src="assets/evasion-logo.svg" alt="Evasion">';
}

const heroScene = document.querySelector(".hero-scene");
if (heroScene) {
  heroScene.innerHTML = '<img class="hero-art" src="assets/hero-moonlit.svg" alt="">';
}

const heroContent = document.querySelector(".hero-content");
const heroEyebrow = heroContent?.querySelector(".eyebrow");
if (heroContent && heroEyebrow && !heroContent.querySelector(".hero-wordmark")) {
  const wordmark = document.createElement("img");
  wordmark.className = "hero-wordmark";
  wordmark.src = "assets/evasion-logo.svg";
  wordmark.alt = "Evasion";
  heroEyebrow.insertAdjacentElement("afterend", wordmark);
}
