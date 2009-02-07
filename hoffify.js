hoffify_add = function() {
    var file = hoff_data[Math.ceil(Math.random()*hoff_data.length) - 1];
    
    var div = document.createElement('div');
    div.style.position = 'fixed';
    
    var height = Math.random()*.9;
    if (typeof(window.innerHeight) == 'number') {
        height = height*window.innerHeight+'px';
    } else if(document.documentElement && document.documentElement.clientHeight) {
        height = height*document.documentElement.clientHeight+'px';
    } else {
        height = height*100+'%'; 
    }
    
    div.style.top = height;
    div.style.left = Math.random()*90 + '%';
    div.style.zIndex = 10;
    var img = document.createElement('img');
    img.setAttribute('src',file);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
    div.appendChild(img);
}
