const board=document.querySelector('.main-container');
const btnChange=document.querySelector('.btn-change');
const btnReset=document.querySelector('.btn-reset');
const btnColor=document.querySelector('.btn-color');

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
    containerList.forEach((child)=>{child.style.cssText='background-color:#FFFFFF'});
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



//Function to enable drawing on the grid
function gridDraw(){
    let containerList=document.querySelectorAll(".grids");
    containerList.forEach(child=>{child.addEventListener("mouseenter",()=>{child.classList.add('colored')})});
}


function colorPicker(){
    let chosenColor=document.querySelector("#input-color");
    let containerList=document.querySelectorAll(".grids");
    containerList.forEach(child=>{child.addEventListener("mouseenter",()=>{child.style.cssText=`background-color:${chosenColor.value}!important`})});
    
}


btnChange.addEventListener('click',prompted)    //Button to change rowsxcoloumns in grid
btnReset.addEventListener('click',removeColor)  //Button to reset the grid
btnColor.addEventListener('click',colorPicker)






