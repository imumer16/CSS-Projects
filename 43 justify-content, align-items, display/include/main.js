document.getElementById("button1").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "center";
    document.getElementById("title").innerHTML ="Center";
});

document.getElementById("button2").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "start";
    document.getElementById("title").innerHTML ="Start";
});

document.getElementById("button3").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "end";
    document.getElementById("title").innerHTML ="End";
});

document.getElementById("button4").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "space-evenly";
    document.getElementById("title").innerHTML ="Space Evenly";
});

document.getElementById("button5").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "flex-start";
    document.getElementById("title").innerHTML ="Flex-start";
});

document.getElementById("button6").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "flex-end";
    document.getElementById("title").innerHTML ="Flex-end";
});

document.getElementById("button7").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "left";
    document.getElementById("title").innerHTML ="Left";
});

document.getElementById("button8").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "right";
    document.getElementById("title").innerHTML ="Right";
});

document.getElementById("button9").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "normal";
    document.getElementById("title").innerHTML ="Normal";
});

document.getElementById("button10").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "space-between";
    document.getElementById("title").innerHTML ="Space-between";
});

document.getElementById("button11").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "space-around";
    document.getElementById("title").innerHTML ="Space-around";
});

document.getElementById("button12").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "stretch";
    document.getElementById("title").innerHTML ="Stretch";
});

document.getElementById("button13").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "safe cente";
    document.getElementById("title").innerHTML ="Safe center";
});

document.getElementById("button14").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "unsafe cente";
    document.getElementById("title").innerHTML ="Unsafe center";
});

///////////////////////////////////////////////////////////////////////////////////////

document.getElementById("button15").addEventListener("click",()=>{
    document.getElementById("main").style.display="none";
    document.getElementById("title1").innerHTML ="Display None";
});

document.getElementById("button16").addEventListener("click",()=>{
    document.getElementById("main").style.display="flex";
    document.getElementById("title1").innerHTML ="Display Flex";
});

document.getElementById("button17").addEventListener("click",()=>{
    document.getElementById("main").style.justifyContent = "inline";
    document.getElementById("title1").innerHTML ="Display inline";
});

document.getElementById("button18").addEventListener("click",()=>{
    document.getElementById("main").style.display="block";
    document.getElementById("title1").innerHTML ="Display block";
});

document.getElementById("button19").addEventListener("click",()=>{
    document.getElementById("main").style.display="inline-block";
    document.getElementById("title1").innerHTML ="Display inline-block";
});

///////////////////////////////////////////////////////////////////////////////////////

document.getElementById("button20").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems=stretch;
    document.getElementById("title2").innerHTML ="Stretch";
});

document.getElementById("button21").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems="center";
    document.getElementById("title2").innerHTML ="Center";
});

document.getElementById("button22").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems= "flex-start";
    document.getElementById("title2").innerHTML ="Flex-start";
});

document.getElementById("button23").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems="flex-end";
    document.getElementById("title2").innerHTML ="Flex-end";
});

document.getElementById("button24").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems ="baseline";
    document.getElementById("title2").innerHTML ="Baseline";
});

document.getElementById("button25").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems="initial";
    document.getElementById("title2").innerHTML ="initial";
});

document.getElementById("button26").addEventListener("click",()=>{
    document.getElementById("main").style.alignItems="inherit";
    document.getElementById("title2").innerHTML ="Inherit";
});