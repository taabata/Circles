var left;
var topp;
var cln = 1;
var mousex;
var mousey;

function mousecords(e){
    mousex = e.clientX;
    mousey = e.clientY;
}

function rmv(){
    var elem = document.getElementById("cont").children;
    for(i=0;i<elem.length;i++){
        left = window.getComputedStyle(elem[i]).getPropertyValue("left");
        topp = window.getComputedStyle(elem[i]).getPropertyValue("top");

        function rght(){
            elem[i].style.left = parseInt(left) + 4 +"px";
        }
        function lft(){
            elem[i].style.left = parseInt(left) - 4 +"px";
        }
        function tp(){
            elem[i].style.top = parseInt(topp) - 4 +"px";
        }
        function btm(){
            elem[i].style.top = parseInt(topp) + 4 +"px";
        }
        
        var arr = [lft,rght,tp,btm];
        var rnd = Math.floor(Math.random() * (4 - 0) ) + 0;
        //console.log(rnd+" , top: "+topp+"  , left: "+left);

        arr[rnd]();


    

    }
    setTimeout(() => {
        rmv();
    }, 50);
    
    

    
}

function gen(e){
    var clss = ["circle","square","triangle"];
    var clrs = ["orange","green","blue","black","yellow","red","violet"];
    //alert("yes");
    var posx = e.clientX;
    console.log(posx);
    var posy = e.clientY;
    var elem = document.getElementById("circle");
    var newelem = elem.cloneNode();
    newelem.style.left = posx+"px";
    newelem.style.top = posy+"px";
    newelem.id = "circle"+ cln;
    newelem.className = "circle";
    //newelem.className = clss[Math.floor(Math.random() * (3 - 0) ) + 0]
    var r = Math.floor(Math.random() * (255 - 0) ) + 0;
    var g = Math.floor(Math.random() * (255 - 0) ) + 0;
    var b = Math.floor(Math.random() * (255 - 0) ) + 0;
    var clr = "rgba("+r+","+g+","+b+",1)";
    newelem.setAttribute("data-clr",clr);
    if(newelem.className == "triangle"){
        newelem.style.borderBottom = "50px solid rgb("+r+","+g+","+b+")";
        newelem.style.transform = "translate(-50%,-50%) scale("+Math.floor(Math.random() * (1.5 - 0.5) ) + 0.5+")";
    }
    else{
        var rad = Math.floor(Math.random() * (150 - 10) ) + 10;
        newelem.style.width = rad+"px";
        newelem.style.height = rad+"px";
        var color = clrs[Math.floor(Math.random() * (clrs.length - 0) ) + 0];
        newelem.style.background = "radial-gradient(rgba("+r+","+g+","+b+",1), rgba("+r+","+g+","+b+",0.2))";
    }
    
    
    cln++;
    document.getElementById("cont").appendChild(newelem);
    setTimeout(() => {
        newelem.onmouseover = function(){
            console.log(newelem.getAttribute("data-clr"));
            let xpos = parseInt(newelem.style.left);
            let ypos = parseInt(newelem.style.top);
            if(ypos>mousey){ 
                var elemd = 0;  
                var elemu = 0;
                var elemr = 0;
                var eleml = 0;
                function elemavdown(){
                    newelem.style.top = parseInt(newelem.style.top) + 2 + "px";
                    if(elemd<100){
                        //console.log("yeeees");
                        setTimeout(() => {
                            elemd++;
                            elemavdown();
                        }, 10*(parseInt(elemd/10)+1));
                    }
                    else{
                        elemd = 0;
                    }
                    
                }         
                elemavdown();
                
            }
            else if(ypos<= mousey){
                var elemu = 0;
                function elemavup(){
                    newelem.style.top = parseInt(newelem.style.top) - 2 + "px";
                    if(elemu<100){
                        //console.log("yeeees");
                        setTimeout(() => {
                            elemu++;
                            elemavup();
                        }, 10*(parseInt(elemu/10)+1));
                    }
                    else{
                        elemu = 0;
                    }
                    
                }         
                elemavup();
                
            }
            if(xpos>mousex){
                var eleml = 0;
                function elemavleft(){
                    newelem.style.left = parseInt(newelem.style.left) + 2 + "px";
                    if(eleml<100){
                        //console.log("yeeees");
                        setTimeout(() => {
                            eleml++;
                            elemavleft();
                        }, 10*(parseInt(eleml/10)+1));
                    }
                    else{
                        eleml = 0;
                    }
                    
                }         
                elemavleft();
                
            }
            else if(xpos<= mousex){
                var elemr = 0;
                function elemavright(){
                    newelem.style.left = parseInt(newelem.style.left) - 2 + "px";
                    if(elemr<100){
                        //console.log("yeeees");
                        setTimeout(() => {
                            elemr++;
                            elemavright();
                        }, 10*(parseInt(elemr/10)+1));
                    }
                    else{
                        elemr = 0;
                    }
                    
                }         
                elemavright();
            }
            
        }
    }, 100);
    
        
    

}

function del(){
    var elem = document.getElementById("cont").children;
    for(i=1;i<elem.length;i++){
        left = window.getComputedStyle(elem[i]).getPropertyValue("left");
        topp = window.getComputedStyle(elem[i]).getPropertyValue("top");
        if(parseInt(left)<0){
            console.log(elem[i].style.left);
            document.getElementById("left").style.transition = "background-color 4s";
            document.getElementById("left").style.backgroundColor = elem[i].getAttribute("data-clr");
            console.log(document.getElementById("left").style.backgroundColor);
            elem[i].remove(self);
        }
        if(parseInt(left)>screen.availWidth){
            console.log(elem[i].style.left);
            document.getElementById("right").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
        }

        if(parseInt(topp)<0){
            console.log(elem[i].style.top);
            document.getElementById("top").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
        }

        if(parseInt(topp)>screen.availHeight){
            console.log(elem[i].style.top);
            document.getElementById("bottom").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
        }
    }
    setTimeout(() => {
        del();
    }, 100);

}

window.onload = function(){
    del();
    rmv();
    mousecords();
}
