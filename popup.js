document.getElementById("block").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0].url) {
      document.getElementById("msg").innerText = "Open YouTube or Instagram first!";
      return;
    }

    let url = tabs[0].url.toLowerCase();

    if (url.includes("youtube.com") || url.includes("instagram.com")) {
      chrome.tabs.update(tabs[0].id, {
        url: "https://www.google.com/search?q=time+to+study"
      });
      document.getElementById("msg").innerText =
        "Blocked! Time to study 📚";
    } else {
      document.getElementById("msg").innerText =
        "This works only on YouTube or Instagram.";
    }
  });
});