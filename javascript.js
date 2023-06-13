const board=document.querySelector('.main-container');

for(let i=0;i<16;i++){
    let newDiv=document.createElement("div");
    newDiv.classList.add('container')
    for(let j=0;j<16;j++){
        let childDiv=document.createElement("div");
        childDiv.classList.add('grids');
        newDiv.appendChild(childDiv);

    }
    board.appendChild(newDiv);
}