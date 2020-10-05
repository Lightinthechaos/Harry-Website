
const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text",{y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider",{y:"-100%", duration: 1.5, delay:0.5});
tl.to(".intro",{y:"-100%", duration: 1}, "-=1.5");
tl.fromTo("nav", {opacity: 0}, {opacity:0.6, duration: 3}).set("nav",{css:{zIndex:1}});
tl.fromTo(".big-text", {opacity: 0}, {opacity:1, duration: 3},"-=2");
tl.fromTo(".container",{opacity: 0}, {opacity:0.5, duration: 3}, "-=2");


//document.getElementById('auto').play()
var audioDom = document.getElementById('auto');
// const iframeDom = document.getElementById('iframeDom');

// iframeDom.onload = function(){
// 	audioDom.src = './audio/rain_thunder.mp3';
// 	audioDom.oncanplay = function(){
// 		audioDom.play();
// 	};
// };
// window.onload = function(){
//     if (confirm("Do you want to play rain sound?")){
//         audioDom.play()
//     }
// }
document.getElementById("myBtn").addEventListener("click", playMusic);
function scolldown(name){
    if (name == 'home'){
        document.querySelector(".first").scrollIntoView({behavior:"smooth"});
    }
    if (name == "me"){
        document.querySelector(".second").scrollIntoView({behavior:"smooth"});
    }
    if (name == "gallery"){
        document.querySelector(".third").scrollIntoView({behavior:"smooth"});
    }
    if (name == "say"){
        document.querySelector(".fourth").scrollIntoView({behavior:"smooth"});
    }
}
function change (iconID){
    if(document.getElementById(iconID).className=="fa fa-play-circle-o fa-3x"){
      document.getElementById(iconID).className = "fa fa-pause-circle-o fa-3x";
    }else{
      document.getElementById(iconID).className = "fa fa-play-circle-o fa-3x";
    }
}
function playMusic() {
    if (audioDom.paused) {
        audioDom.play();
    }else{
        audioDom.pause();
    }  
}
function volumeUp() {
    audioDom.volume += 0.1; 
}
function volumeDown() {
    audioDom.volume -= 0.1; 
}
function display_side_nav(){
    var smallnav = document.getElementsByClassName("small-nav");
    if (smallnav[0].style.display == "block"){
        smallnav[0].style.display = "none"
    }
    else{
        smallnav[0].style.display = "block";
    }
}
//add like or dislike
//check if browser support Web storage
if(typeof(Storage)!=="undefined")
{
    console.log(Storage);
} else {
    document.getElementById("result").innerHTML="Sorry, your browser does not support Web storage";
}

const up = document.getElementById("up")
const down = document.getElementById("down")

window.onload=function(){
    if (localStorage.getItem('up') == null || localStorage.getItem('down') == null){
        localStorage.setItem("up", 0)
        localStorage.setItem("down", 0)
        
    }
    up.innerText = localStorage.getItem('up')
    down.innerText = localStorage.getItem('down')
}

function add(){

    var value_up = up.textContent;
    console.log(value_up);
    var after_add = parseInt(value_up) + 1;
    console.log(after_add);
    localStorage.setItem("up", after_add)
    up.innerText = after_add.toString();

}
function subtract(){

    var value_down = down.textContent;
    console.log(value_down);
    var after_subtract = parseInt(value_down) - 1;
    console.log(after_subtract);
    localStorage.setItem("down", after_subtract)
    down.innerText = after_subtract.toString();
}


function func(){
    console.log(document.getElementById("inputText").value);
    var msg = document.getElementById("inputText").value;
    var time = new Date().getTime();
    localStorage.setItem(msg, time); 
	alert("Thank you for your comments!");
    document.getElementById("inputText").value = "";
}
// localStorage.removeItem('up')
// localStorage.removeItem('down')
// for (var i = 0; i < localStorage.length; i++){
//     var key = localStorage.key(i);
//     localStorage.removeItem(key);
// }