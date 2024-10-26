// Show and hide the start menu
document.getElementById("start-button").addEventListener("click", function() {
    const startMenu = document.getElementById("start-menu");
    startMenu.style.display = (startMenu.style.display === "none" || startMenu.style.display === "") ? "block" : "none";
});

// Add logic to open applications from start menu (e.g., Notepad)
document.querySelectorAll("#start-menu li").forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
        const appName = menuItem.textContent;
        alert(appName + " is opening...");
    });
});
