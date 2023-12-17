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
        checkforwinner()
    })
})

const checkforwinner=()=>{
    for(let pattern of win){
        let posval1=boxes[pattern[0]].innerHTML;
        let posval2=boxes[pattern[1]].innerHTML;
        let posval3=boxes[pattern[2]].innerHTML;
        if(posval1!=""&&posval2!=""&&posval3!=""&&posval1===posval2&&posval2===posval3){
            console.log(posval1+"is Winner");
            disableall();
        }
    }
}
const disableall=()=>{
    boxes.forEach(box => {
        box.disabled=true;
    });
}
