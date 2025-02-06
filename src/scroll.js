// Returns true if the page is scrolled all the way to the bottom
function isScrolledToBottom() {
    const threshold = 5; // px
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - threshold;
}


// Duplicate all elements betwen the body tag and append them to the body tag
function duplicatePageContent() {
    const clonedBodyChildren = Array.from(document.body.childNodes).map(child => child.cloneNode(true));
    clonedBodyChildren.forEach(node => {
        document.body.appendChild(node);
    });
}

// variables to prevent multiple duplication in one scroll instance
let throttled = false;
const throttleDuration = 500; // ms

// Listen for wheel events.
window.addEventListener("wheel", (event) => {
    if (throttled || !event.deltaY)
        return;
    // Read setting from slider
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

// Mobile scroll is a different event (future work)