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
        count++;
        checkforwinner()
        
    })
})
let count=0;
const checkforwinner=()=>{
    if(count==9){
        console.log("Tie! Play again!");
            disableall();
            document.getElementById("reset").style.display='none';
            document.getElementById("winner").innerHTML="Tie! Play again!";
            document.querySelector(".winner").style.display='block';
    }
    for(let pattern of win){
        let posval1=boxes[pattern[0]].innerHTML;
        let posval2=boxes[pattern[1]].innerHTML;
        let posval3=boxes[pattern[2]].innerHTML;
        if(posval1!=""&&posval2!=""&&posval3!=""&&posval1===posval2&&posval2===posval3){
            console.log(posval1+"is Winner");
            disableall();
            document.getElementById("reset").style.display='none';
            document.getElementById("winner").innerHTML="YAY! Winner is '"+posval1+"' !!";
            document.querySelector(".winner").style.display='block';
            
            
        }
    }
}
const disableall=()=>{
    boxes.forEach(box => {
        box.disabled=true;
    });
}
const reset=()=>{
    count=0;
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    });
    newdisplay();
    document.getElementById("reset").style.display='inline';
}
const newdisplay=()=>document.querySelector(".winner").style.display='none';
// let newgamebtn=document.querySelector(".newgame");
// newgamebtn.addEventListener("click",reset());