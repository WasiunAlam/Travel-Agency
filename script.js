const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const hamburgerIcon = document.querySelector(".hamburger-icon");
        const closeIcon = document.querySelector(".close-icon");
        
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
            
            // Toggle between hamburger and X icon
            if (hamburgerIcon.style.display !== "none") {
                hamburgerIcon.style.display = "none";
                closeIcon.style.display = "inline";
            } else {
                hamburgerIcon.style.display = "inline";
                closeIcon.style.display = "none";
            }
        });
        
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
                hamburgerIcon.style.display = "inline";
                closeIcon.style.display = "none";
            });
        });
