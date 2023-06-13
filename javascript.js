const board=document.querySelector('.main-container');
const btnChange=document.querySelector('.btn-change');
const btnReset=document.querySelector('.btn-reset');

let childDiv;
let num=16;
function createGrid(gridNum){
    num=gridNum
    for(let i=0;i<num;i++){
        let newDiv=document.createElement("div");
        newDiv.classList.add('container')
        for(let j=0;j<num;j++){
            childDiv=document.createElement("div");
            childDiv.classList.add('grids');
            newDiv.appendChild(childDiv);
        
        }
        board.appendChild(newDiv);
    }
}

function unmakeGrid(){
    let delDiv=document.querySelectorAll('.container')
    delDiv.forEach(child=>{child.remove()})
}

function removeColor(){
    let containerList=document.querySelectorAll(".grids.colored");
    containerList.forEach((child)=>{child.classList.remove('colored')});
}


createGrid(num);
gridDraw();

// User provides input for number of grids here
function prompted(){
    num=prompt("Enter a grid value <100");
    if (num>100 || !num){
        return alert('DOnt do that!')
    }
    else{
        unmakeGrid();
        createGrid(num);
        gridDraw()
        
    }
}



//Events
function gridDraw(){
    let containerList=document.querySelectorAll(".grids");
    containerList.forEach(child=>{child.addEventListener("mouseover",()=>{child.classList.add('colored')})});
}
btnChange.addEventListener('click',prompted)
btnReset.addEventListener('click',removeColor)






