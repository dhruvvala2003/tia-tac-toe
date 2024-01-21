let box=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let restart=document.querySelector("#restart");
let msg=document.querySelector(".declare");
    let turn0=true;

    let win=[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

    box.forEach(b=>{
        b.addEventListener('click',()=>{
            // console.log("suiiiiiiii");
            if(turn0)
            {
                b.innerText="O";
                turn0=false;
            }
            else{
                b.innerText="X";
                turn0=true;
            }
            b.disabled=true;
            checkWinner();
        });
    });

    const disableButtun=()=>{

        for(b of  box)
        {
            b.disabled=true;
        }
    };

    const enablebutten =()=>{

        for(b of  box)       // enable box
        {
            b.disabled=false;
            b.innerText="";        // fro removing text inside box..
        }
    };

     // restart game...
     const restartFun =() =>{
        turn0=true;
        enablebutten();
        msg.classList.add("hide");
    };
    
    const showWinner=(winner)=>{
        msg.innerText=`Winner Is ${winner}`;
        msg.classList.remove("hide");

        disableButtun();

    };
    const checkWinner =()=>{

        for(let pattern of win)
        {
            let pos1=box[pattern[0]].innerText;
            let pos2=box[pattern[1]].innerText;
            let pos3=box[pattern[2]].innerText;
        

            if(pos1!="" && pos2!="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    // console.log("winner found"+ pos1);
                    showWinner(pos1);
                }
            }

        }   
    };


    restart.addEventListener("click",restartFun);
    reset.addEventListener("click",restartFun);

   