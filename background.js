chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    code: `const noteHeadings = document.querySelectorAll('.noteHeading');
             noteHeadings.forEach(noteHeading => { noteHeading.remove(); });`
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'removeNoteHeadings') {
    chrome.tabs.executeScript(sender.tab.id, {
      code: `const noteHeadings = document.querySelectorAll('.noteHeading');
               noteHeadings.forEach(noteHeading => { noteHeading.remove(); });`
    });
  }
});