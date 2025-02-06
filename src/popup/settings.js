browser.storage.local.get("endless_scroll").then((result) => {
    const checkbox = document.getElementById("checkbox");
    if (result.endless_scroll) {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");

    // Attach the event listener
    checkbox.addEventListener("change", () => {
        browser.storage.local.set({ endless_scroll: checkbox.checked });
    });
});