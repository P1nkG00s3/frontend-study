function cgh(id){
    let button = document.getElementById("img_1");
    if(button.src.indexOf("/images/icon%20menu.png")>0) {
        button.src = '/images/IsActive_menu.png';
        let elem = document.getElementById("nav-list");
        elem.style.display = 'block';
        elem.style.animation = 'move_on 0.15s linear';
        elem.style.opacity = '1';
    }
    else{
        button.src='/images/icon%20menu.png';
        let elem = document.getElementById("nav-list");
        elem.style.animation = 'move_back 0.15s linear';
        elem.style.opacity = '0';
    }
}