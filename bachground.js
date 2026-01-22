chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2],
    addRules: [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "youtube.com", resourceTypes: ["main_frame"] }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: "instagram.com", resourceTypes: ["main_frame"] }
      }
    ]
  });
});
