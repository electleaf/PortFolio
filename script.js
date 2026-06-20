document.addEventListener("DOMContentLoaded", function () {

    // Typewriter
    const text = "Taarush Vashisht";
    const el = document.getElementById("typewriter");
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i++);
            setTimeout(type, 90);
        } else {
            const cursor = document.createElement("span");
            cursor.className = "hero-cursor";
            el.appendChild(cursor);
        }
    }

    if (el) type();

    // Scroll-to-top
    const scrollBtn = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
    });
    scrollBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Copy email
    document.getElementById("copyEmail")?.addEventListener("click", function () {
        navigator.clipboard.writeText("taarushvashisht127@gmail.com").then(() => {
            this.textContent = "Copied!";
            setTimeout(() => this.textContent = "Copy", 2000);
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
        });
        navLinks.forEach(a => {
            a.style.color = a.getAttribute("href") === `#${current}` ? "var(--cyan)" : "";
        });
    });

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".timeline-card, .project-card, .skill-block, .edu-card").forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });
});
