function cgh(id){
    let button = document.getElementById("img_1");
    if(button.src.indexOf("/images/icon%20menu.png")>0){
        button.src='/images/IsActive_menu.png';
    }
    else{
        button.src='/images/icon%20menu.png';
    }
}