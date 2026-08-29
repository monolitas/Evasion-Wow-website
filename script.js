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
