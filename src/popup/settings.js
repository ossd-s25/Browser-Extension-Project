browser.storage.local.set({ endless_scroll: false });

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");

    // Attach the event listener
    checkbox.addEventListener("change", () => {
        browser.storage.local.set({ endless_scroll: checkbox.checked });
    });
});