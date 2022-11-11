export default function (){
    const hamburgerBtn = document.querySelector(".favDiv");
    const menuBar = document.querySelector("#menuBar");
    const closeBtn = document.querySelector(".closeMenu")
    hamburgerBtn.addEventListener("click", () => {
        menuBar.classList.add("active")
    });
    closeBtn.addEventListener("click", () => {
        menuBar.classList.remove("active")
    })
}
