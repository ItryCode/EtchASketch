const board=document.querySelector('.main-container');
const btnChange=document.querySelector('.btn-change');
const btnReset=document.querySelector('.btn-reset');
const btnColor=document.querySelector('.btn-color');
const btnRandom=document.querySelector('.btn-random');

let childDiv;
let num=16;

//This is the bread and butter,
//Used to create the intial grid
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


//Used to remake the grid
function unmakeGrid(){
    let delDiv=document.querySelectorAll('.container')
    delDiv.forEach(child=>{child.remove()})
}


//Used to reset the grid
function removeColor(){
    let containerList=document.querySelectorAll(".grids.colored");
    containerList.forEach((child)=>{child.style.cssText='background-color:#FFFFFF'});
}

//Function calls go here
createGrid(num);
gridDraw();

// User provides input for number of grids here
function prompted(){
    num=prompt("Enter a grid value <30");
    if (num>30 || !num){
        return alert('Dont do that!')
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

//Function to enable user to pick a color
function colorPicker(){
    let chosenColor=document.querySelector("#input-color");
    let containerList=document.querySelectorAll(".grids");
    containerList.forEach(child=>{child.addEventListener("mouseenter",()=>{child.style.cssText=`background-color:${chosenColor.value}!important`})});
    
}

//Function to enable randomised drawing(Mosaic)
function randomColor(){
    
    let containerList=document.querySelectorAll(".grids");
    containerList.forEach(child=>{child.addEventListener("mouseenter",()=>{child.style.cssText=`background-color:rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})!important`})});
}


//Button event listeners go here
btnChange.addEventListener('click',prompted);    //Button to change rowsxcoloumns in grid
btnReset.addEventListener('click',removeColor);  //Button to reset the grid
btnColor.addEventListener('click',colorPicker);  //Button to pick color
btnRandom.addEventListener('click',randomColor); //Button to pick random color






