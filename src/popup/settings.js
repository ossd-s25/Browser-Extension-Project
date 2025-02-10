// read and initialize slider values
browser.storage.local.get(["endless_scroll","auto_scroll_speed"]).then((result) => {

    const checkbox = document.getElementById("checkbox");
    const range = document.getElementById("range");

    if (result.endless_scroll) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    range.value = result.auto_scroll_speed || 0;
});

// wait for elements to load (not really needed)
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");
    const range = document.getElementById("range");

    // Attach the event listener to record slider
    checkbox.addEventListener("change", () => {
        browser.storage.local.set({ endless_scroll: checkbox.checked });
    });

    // Attach the event listener to record slider
    range.addEventListener("change", () => {
        browser.storage.local.set({ auto_scroll_speed: parseInt(event.target.value, 10) });
    });
});

