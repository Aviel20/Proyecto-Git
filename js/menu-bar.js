//PROPIEDADES
let proBar = {
    bot: document.querySelector(".avatar"),
    cie: document.querySelector(".modal")
}
//METODOS
let metBar = {
    active: proBar.bot.addEventListener("click", ((e) => {
        if (e.target.matches(".avatar *")) {
            proBar.cie.style.display = "flex";
        }
    })),
    cierre: proBar.cie.addEventListener("click", ((e) => {
        if(e.target.matches(".modal *")){
            proBar.cie.style.display = "none";
        }
    }))
}