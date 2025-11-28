// Dynamically set href values using JavaScript
 document.getElementById("link-home").href = "#home"; 
 document.getElementById("link-about").href = "#about"; 
 document.getElementById("link-resume").href = "#resume"; 
 document.getElementById("link-projects").href = "#projects";
  document.getElementById("link-contact").href = "#contact"; 
  // Example: Dynamically set resume download link 
  document.getElementById("resume-download").
  href = "https://example.com/your-resume.pdf"; 
  // Wait for the DOM to load 
  document.addEventListener("DOMContentLoaded", () => { 
    const img = document.querySelector(".myphoto img"); 
    if (img) 
    { img.addEventListener("click", () => { 
        img.classList.toggle("zoomed"); }); 
    } });
     document.addEventListener("DOMContentLoaded", () => { 
        const img = document.querySelector(".myphoto img");
         if (!img) return; 
         img.addEventListener("click", (event) => { event.stopPropagation();
             // Prevent the body click from triggering immediately
              img.classList.toggle("zoomed"); });
               document.body.addEventListener("click", () => { 
                if (img.classList.contains("zoomed")) { img.classList.remove("zoomed"); } }); });