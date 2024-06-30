function openNav(){
    document.getElementById("SideNav").style.width="300px";
}
function closeNav(){
    document.getElementById("SideNav").style.width="0px";
}
function toggleSubMenu(semesterId) {
    var subMenu = document.getElementById(semesterId);
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "flex";
    } else {
        subMenu.style.display = "none";
    }
}