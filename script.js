let boxes = document.querySelectorAll(".box");
let resetButton=document.querySelector(".reset-btn");
let startButton=document.querySelector(".start-btn");
let startGame=document.querySelector(".game");
let win=document.querySelector(".win");
let turn=true;
let count=0;
let pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach(box => {
    box.addEventListener("click", ()=>{
        count++;
        if(turn){
            box.innerHTML="O";
            turn=false;
            
        }
        else{
            box.innerHTML="X";
            turn=true;
        }
        
        box.disabled = true;
        checkPattern();


    })
});

function checkPattern(){
    pattern.forEach(el => {
        let posA=boxes[el[0]].innerText;
        let posB=boxes[el[1]].innerText;
        let posC=boxes[el[2]].innerText;
        if(posA !="" && posB != "" && posC != ""){
            if(posA === posB && posB === posC){
                win.innerText=`Congratulations ${posA}! You are a winner`;
                win.classList.remove("hideGame")
                startGame.classList.add("hideGame");
                startButton.classList.add("hideGame");
                resetButton.classList.add("hideGame");
                setTimeout(()=>{
                    win.classList.add("hideGame");
                    startButton.classList.remove("hideGame");
                    resetButton.classList.remove("hideGame");
                },5000)
                refreshValues();

            }
            else{
                if(count===9){
                win.innerText=`OOPs, There is no winner`;
                win.classList.remove("hideGame")
                startGame.classList.add("hideGame");
                startButton.classList.add("hideGame");
                resetButton.classList.add("hideGame");
                setTimeout(()=>{
                    win.classList.add("hideGame");
                    startButton.classList.remove("hideGame");
                    resetButton.classList.remove("hideGame");
                },5000)
                refreshValues();
                }
            }
        }
        
    });
}

startButton.addEventListener("click", ()=>{
    startGame.classList.remove("hideGame");
})

resetButton.addEventListener("click", ()=>{
    refreshValues();
})

function refreshValues(){
    boxes.forEach(e => {
        e.innerText="";
        e.disabled=false;
    });
}
