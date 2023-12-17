let boxes=document.querySelectorAll(".box");
const win=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
let turno=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O"
            turno=false
        }
        else{
            box.innerText="X"
            turno=true
        }
        box.disabled=true;
    })
})
