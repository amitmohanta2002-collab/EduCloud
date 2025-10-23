console.log("enter to the random color world")
 but=document.getElementsByClassName("buttons")
Array.from(but).forEach((e)=>{
    e.addEventListener('click',function(e){
        
        if(e.target.classList.contains("colorButtons1")){
            rand1=Math.ceil(Math.random()*255)
            rand2=Math.ceil(Math.random()*255)
            rand3=Math.ceil(Math.random()*255)
            e.target.style.background=`rgb(${rand1},${rand2},${rand3})`
        }
        else if(e.target.classList.contains("colorButtons2")){
            rand1=Math.ceil(Math.random()*255)
            rand2=Math.ceil(Math.random()*255)
            rand3=Math.ceil(Math.random()*255)
            e.target.style.background=`rgb(${rand1},${rand2},${rand3})`
        }
        else if(e.target.classList.contains("colorButtons3")){
            rand1=Math.ceil(Math.random()*255)
            rand2=Math.ceil(Math.random()*255)
            rand3=Math.ceil(Math.random()*255)
            e.target.style.background=`rgb(${rand1},${rand2},${rand3})`
        }
        else {
            rand1=Math.ceil(Math.random()*255)
            rand2=Math.ceil(Math.random()*255)
            rand3=Math.ceil(Math.random()*255)
            e.target.style.background=`rgb(${rand1},${rand2},${rand3})`
        }
    }
    )
})
document.getElementById("reset").addEventListener('click',()=>{
    Array.from(document.getElementsByClassName("buttons")).forEach(e=>{
        e.style.background="black";
    })
})