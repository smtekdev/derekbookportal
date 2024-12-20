
    document.addEventListener("DOMContentLoaded", function () {
        const menuItems = document.querySelectorAll(".menu li");
        const sections = document.querySelectorAll(".section");

        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                // Get the target section
                const targetSection = item.getAttribute("data-section") + "-section";

                // Remove active class from all sections
                sections.forEach(section => section.classList.remove("active"));

                // Add active class to the target section
                document.getElementById(targetSection).classList.add("active");
            });
        });
    });

