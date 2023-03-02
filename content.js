chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'removeNoteHeadings') {
        const noteHeadings = document.querySelectorAll('.noteHeading');
        noteHeadings.forEach(noteHeading => { noteHeading.remove(); });
    }
});