document.addEventListener("DOMContentLoaded", function () {
    // Initialize GLightbox
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        zoomable: true,
    });

    // Add dynamic interaction
    const highlights = document.querySelectorAll(".highlight");

    highlights.forEach((highlight) => {
        highlight.addEventListener("mouseover", () => {
            highlight.style.color = "#ff5733";
        });

        highlight.addEventListener("mouseout", () => {
            highlight.style.color = "#007acc";
        });
    });

    // Append a new dynamic action to the list
    const actionsList = document.querySelector("#actions");
    const newAction = document.createElement("li");
    newAction.innerHTML = "Educate others about <span class='highlight'>digital rights</span>.";
    actionsList.appendChild(newAction);
});

