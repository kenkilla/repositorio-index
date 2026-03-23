//obtener el boton por su ID que se puso 
const boton1=document.getElementById('blu');

//agregar in evento al boton
boton1.addEventListener('click',function(){
    alert("PAPITAS");
});


function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}

