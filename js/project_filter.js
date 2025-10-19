function filterSelection(category) {
    const items = document.getElementsByClassName("view_item");

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        // Remove 'show' class
        item.classList.remove("show");

        // Show item if it matches the category or if 'all' is selected
        if (category === "all" || item.classList.contains(category)) {
            item.classList.add("show");
        }
    }

    // Update active class on buttons
    const buttons = document.getElementsByClassName("btn_filter");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (buttons[i].innerText.toLowerCase().includes(category)) {
            buttons[i].classList.add("active");
        }
    }
}

// Initialize filter on page load
window.addEventListener("DOMContentLoaded", () => {
    filterSelection("all");
});
