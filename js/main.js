document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top");
    window.onscroll = function() {
        backToTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
    };
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
