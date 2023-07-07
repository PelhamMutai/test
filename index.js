const toggleButton=document.querySelector(".toggle-btn");
const linkbar=document.querySelector(".links");
const Icon=document.querySelectorAll(".icon");

toggleButton.addEventListener("click", () =>{
    linkbar.classList.toggle("active");
    Icon.forEach(icon =>{
        icon.classList.toggle("hidden");
    })
}
)
