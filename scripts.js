
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
    .dark-mode {
        background: #2f3640;
        color: white;
    }
    .dark-mode header {
        background: #1e272e;
    }
    .dark-mode form button {
        background: #718093;
    }
`;
document.head.appendChild(style);
