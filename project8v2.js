var left;
var topp;
var cln = 1;
var mousex;
var mousey;
var nums = 0;
var initial = 0;
var fin = 20;
var flag = screen.availHeight;
var on = 0;
var z = 0;
var accel = 4;



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

function gen(){
    var clss = ["circle","square","triangle"];
    var clrs = ["orange","green","blue","black","yellow","red","violet"];
    //alert("yes");
    var posx = Math.floor(Math.random() * (screen.availWidth - 0) ) + 0;
    console.log(posx);
    var posy = Math.floor(Math.random() * (screen.availHeight - 0) ) + 0;
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
                    newelem.style.top = parseInt(newelem.style.top) + 4 + "px";
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
                    newelem.style.top = parseInt(newelem.style.top) - 4 + "px";
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
                    newelem.style.left = parseInt(newelem.style.left) + 4 + "px";
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
                    newelem.style.left = parseInt(newelem.style.left) - 4 + "px";
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
    if(nums<300){
        setTimeout(() => {
            nums++;
            gen();
        }, 10);
    }
    else{
        on = 1;
        compensate();
    }
    
    
        
    

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
            nums--;
        }
        if(parseInt(left)>screen.availWidth){
            console.log(elem[i].style.left);
            document.getElementById("right").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
            nums--;
        }

        if(parseInt(topp)<0){
            console.log(elem[i].style.top);
            document.getElementById("top").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
            nums--;
        }

        if(parseInt(topp)>screen.availHeight){
            console.log(elem[i].style.top);
            document.getElementById("bottom").style.backgroundColor = elem[i].getAttribute("data-clr");
            elem[i].remove(self);
            nums--;
        }
    }
    setTimeout(() => {
        del();
    }, 100);

}

function shine(){
    document.getElementById("cont3").style.background="linear-gradient(45deg,transparent,transparent "+initial+"%,white,transparent "+fin+"%,transparent)";
    document.getElementById("cont4").style.background="linear-gradient(45deg,transparent,transparent "+initial+"%,white,transparent "+fin+"%,transparent)";
    if(initial>=100){
        initial=0;
        fin=20;
        setTimeout(() => {
            shine();
        }, 1000);
    }
    else{
        setTimeout(() => {
            shine();
        }, 10);
    }
    initial+=1;
    fin+=1;
    
}

function up(){
    on = 0;
    var elem = document.getElementById("cont").children;
    for(i=1;i<elem.length;i++){
        elem[i].style.top = parseInt(elem[i].style.top) - 10 +"px";
    }
    if(flag>0){
        flag-=2;
        setTimeout(() => {
            up();
        }, 10);
    }
}


function translatewords(t){
    if(t.id=="inpuserr"){
        var elem = document.getElementById("inpuserr");
        var elem2 = document.getElementById("inpuser");
        elem2.value = elem.value;
    }
    else{
        var elem = document.getElementById("inppassr");
        var elem2 = document.getElementById("inppass");
        elem2.value = elem.value;
    }
    
}

function compensate(){
    console.log("number:  "+(document.getElementById("cont").children).length);
    if(nums<300 && on==1){
        nums++;
        gen();
    }
    if(on==1){
        setTimeout(() => {
            compensate();
        }, 10);
    }
}

function anim(){
    var elem = document.getElementById("txt");
    elem.style.letterSpacing = "10px";
}

function animinverse(){
    var elem = document.getElementById("txt");
    elem.style.letterSpacing = "4px";
}


function explode(){
    document.getElementById("form").style.animation = "form 1s forwards";
    document.getElementById("welc").style.animation = "welc 1s forwards";
    setTimeout(() => {
        document.getElementById("welcome").style.animation = "welcshrink 1s forwards";
        document.getElementById("dot").style.animation = "dotshrink 1s forwards";
        document.getElementById("name").style.animation = "name 1s forwards";
        setTimeout(() => {
            document.getElementById("container").style.animation = "logo 1s forwards";
            setTimeout(() => {
                document.getElementById("list").style.animation = "list 1s forwards";
                document.getElementById("display").style.animation = "display 1s forwards";
            }, 2200);
        }, 1750);
    }, 1500);

    on = 0;
    var elem = document.getElementById("circle");
    var elems = document.getElementById("cont").children;
    var x  = parseInt(elem.style.left);
    var y = parseInt(elem.style.top);
    for(i=0;i<elems.length;i++){
        var adjacent = x - parseInt(elems[i].style.left);
        var opposite = y - parseInt(elems[i].style.top);
        if(adjacent<0){
            adjacent = adjacent*-1;
        }
        if(opposite<0){
            opposite = opposite*-1;
        }
        var grad = opposite/adjacent;
        var accely = accel*grad;
        
        if(parseInt(elems[i].style.left)<x && parseInt(elems[i].style.top)<y){
            elems[i].style.left = parseInt(elems[i].style.left) - accel + "px";
            elems[i].style.top = parseInt(elems[i].style.top) - accely + "px";
        }
        else if(parseInt(elems[i].style.left)<x && parseInt(elems[i].style.top)>y){
            elems[i].style.left = parseInt(elems[i].style.left) - accel + "px";
            elems[i].style.top = parseInt(elems[i].style.top) + accely + "px";
        }
        else if(parseInt(elems[i].style.left)>x && parseInt(elems[i].style.top)<y){
            elems[i].style.left = parseInt(elems[i].style.left) + accel + "px";
            elems[i].style.top = parseInt(elems[i].style.top) - accely + "px";
        }
        else if(parseInt(elems[i].style.left)>x && parseInt(elems[i].style.top)>y){
            elems[i].style.left = parseInt(elems[i].style.left) + accel + "px";
            elems[i].style.top = parseInt(elems[i].style.top) + accely + "px";
        }
        else if(parseInt(elems[i].style.left)>x && parseInt(elems[i].style.top)==y){
            elems[i].style.left = parseInt(elems[i].style.left) + accel + "px";
        }
        else if(parseInt(elems[i].style.left)==x && parseInt(elems[i].style.top)>y){
            elems[i].style.top = parseInt(elems[i].style.top) + accely + "px";
        }
        else if(parseInt(elems[i].style.left)<x && parseInt(elems[i].style.top)==y){
            elems[i].style.left = parseInt(elems[i].style.left) - accel + "px";
        }
        else if(parseInt(elems[i].style.left)==x && parseInt(elems[i].style.top)<y){
            elems[i].style.top = parseInt(elems[i].style.top) - accely + "px";
        }
    }
    accel = accel+2;
   
    
    if(z<screen.availWidth){
        setTimeout(() => {
            z++;
            explode();
        }, 10);
    }
    
}


function listoftabs(){
    
}


window.onload = function(){
    gen();
    shine();
    del();
    rmv();
    mousecords();
}
