function openBlock(element){
    pass = document.getElementById('input-pass');
    email = document.getElementById('input-email');

    document.getElementById("filter-block").style.display = "block";
    document.getElementById("filter-block").style.opacity = "1";
    if (element == 'pass') {
        document.getElementById("change-pass").style.opacity = "1";
        document.getElementById("change-pass").style.display = "flex";
    } 
    if (element == 'email') {
        document.getElementById("change-email").style.opacity = "1";
        document.getElementById("change-email").style.display = "flex";
    }
}

function closeBlock(){
    closeD = function closeDisplay() {
        document.getElementById("filter-block").style.display = "none";
        document.getElementById("change-pass").style.display = "none";
        document.getElementById("change-email").style.display = "none";
    }
    document.getElementById("filter-block").style.opacity = "0";
    document.getElementById("change-pass").style.opacity = "0";
    document.getElementById("change-email").style.opacity = "0";
    setTimeout(closeD, 200);
}
