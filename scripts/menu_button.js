function cgh(id){
    let button = document.getElementById("img_1");
    if(button.src.indexOf("/images/icon%20menu.png")>0) {
        button.src = '/images/IsActive_menu.png';
        let elem = document.getElementById("nav-list");
        elem.style.display = 'block';
    }
    else{
        button.src='/images/icon%20menu.png';
        let elem = document.getElementById("nav-list");
        elem.style.display = 'none';
    }
}