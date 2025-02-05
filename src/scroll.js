function isScrolledToBottom() {
    const threshold = 5; // px
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - threshold;
}

function duplicatePageContent() {
    const clonedBodyChildren = Array.from(document.body.childNodes).map(child => child.cloneNode(true));
    clonedBodyChildren.forEach(node => {
        document.body.appendChild(node);
    });
}

let throttled = false;
const throttleDuration = 500; // ms

// Listen for wheel events.
window.addEventListener("wheel", (event) => {
    if (throttled || !event.deltaY)
        return;
    // Read setting
    browser.storage.local.get("endless_scroll").then((result) => {
        if (isScrolledToBottom() && result.endless_scroll) {
            duplicatePageContent();
            throttled = true;
            setTimeout(() => {
                throttled = false;
            }, throttleDuration);
        }
      });
    
});

// Mobile scroll is a different event