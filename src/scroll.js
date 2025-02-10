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
setInterval(() => {
    if (throttled)
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


// variables for auto scroll down speed when endless scroll is enabled
let autoScrollInterval = null;
let autoScrollSpeed = 0; // Default speed

// Function to update speed from storage
function updateAutoScrollSpeed() {
    browser.storage.local.get("auto_scroll_speed").then((result) => {
        autoScrollSpeed = result.auto_scroll_speed || 5;
    });
}

// Function to start scrolling
function startAutoScroll() {
    if (!autoScrollInterval) {
        autoScrollInterval = setInterval(() => {
            window.scrollBy(0, autoScrollSpeed);
        }, 20); // Scroll every 20ms
    }
}

// Function to stop scrolling
function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

// Listen for setting changes to enable or disable auto-scrolling
browser.storage.local.get(["endless_scroll", "auto_scroll_speed"]).then((result) => {
    if (result.auto_scroll_speed) {
        autoScrollSpeed = result.auto_scroll_speed;
    }
    if (result.endless_scroll) {
        startAutoScroll();
    }
});

// Add a listener for changes in the browser's storage
browser.storage.onChanged.addListener((changes, area) => {
    // Check if the change happened in the local storage area
    if (area === "local") {
        if ("auto_scroll_speed" in changes) {
            autoScrollSpeed = changes.auto_scroll_speed.newValue || 0;
        }
        if ("endless_scroll" in changes) {
            if (changes.endless_scroll.newValue) {
                startAutoScroll(); 
            } else {
                stopAutoScroll();
            }
        }
    }
});

// Mobile scroll is a different event (future work)

