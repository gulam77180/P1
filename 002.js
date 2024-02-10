let btn=document.querySelectorAll(".box");
let res=document.querySelector(".msg");
let winner=document.querySelector("#result")
let reStart=document.querySelector(".btn");

let true0=true;

let winarray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


const restart=()=>{
    true0=true;
    enableBoxes();
    res.classList.add("hide");
}


const enableBoxes=()=>{
    for(let enable of btn){
        enable.disabled=false;
        enable.innerText="";
    }
}

reStart.addEventListener("click",restart);

btn.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(true0){
            box.innerText="X"
            box.style.color="black"
            true0=false;
        }else{
            box.innerText="O";
            box.style.color="rgb(105, 99, 99)"
            box.style.textShadow="white"
            true0=true;
        }
        box.disabled=true;

        checkwinner();
    })
})

const afterWin=()=>{
    for(let box of btn){
        box.disabled=true;
    }
}

const showwinner=(winner)=> {
    res.classList.remove("hide");
    res.style.color="(0,0,0)";
    res.innerText=`winner is ${winner}`;
    afterWin();
}

const checkwinner=()=>{
    for(let check of winarray){
        let pos1=btn[check[0]].innerText;
        let pos2=btn[check[1]].innerText;
        let pos3=btn[check[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }
    }
}