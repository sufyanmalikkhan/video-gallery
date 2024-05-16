let vid = document.getElementsByClassName("vid");
let vd = document.getElementsByClassName("vd");
let main_video = document.getElementById("main-vd");
let para = document.getElementById("hello");
main_video.style.height="400px";
main_video.style.width="100%";

for(let i = 0; i < vd.length; i++){
  console.log(vd[i])
  vd[i].addEventListener("click", function(){
    main_video.src= this.src;
    main_video.style.height="400px";
    main_video.style.width="100%";
  }) 

}
