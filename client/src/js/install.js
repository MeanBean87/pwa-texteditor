const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Adds the event listener for beforeinstallprompt
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.style.display = "block";
});

// Adds the event listener for the install button
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.style.display = "none";
});

// Adds the event listener for the appinstalled event
window.addEventListener("appinstalled", (event) => {
    window.deferredPrompt = null;
    butInstall.style.display = "none";
});
