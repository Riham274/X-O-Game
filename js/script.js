let turn ='X';
const myHeader = document.querySelector('.info');
const myBlocks = Array.from(document.querySelectorAll('.game-blocks .block'));

myBlocks.forEach ((block) =>
 {
    block.onclick = function()
     {
        if (block.innerHTML=='' && turn === 'X')
           { block.innerHTML = turn;
             turn='O';
             myHeader.innerHTML='<span> O </span>';
             block.classList.add('clicked');
           }

        else if (block.innerHTML=='' && turn === 'O')
                {block.innerHTML = turn;
                 turn = 'X';
                 myHeader.innerHTML = '<span> X </span>' ;
                 block.classList.add('clicked');
            }  
        winner();     
    } 
 }
);

function winner() {
    if(myBlocks[0].innerHTML == myBlocks[1].innerHTML &&
       myBlocks[1].innerHTML == myBlocks[2].innerHTML &&
       myBlocks[2].innerHTML != ''
      )
      end(0,1,2);

    else if (myBlocks[3].innerHTML == myBlocks[4].innerHTML &&
             myBlocks[4].innerHTML == myBlocks[5].innerHTML &&
             myBlocks[5].innerHTML != ''
            )
            end(3,4,5);
    else if (myBlocks[6].innerHTML == myBlocks[7].innerHTML &&
            myBlocks[7].innerHTML == myBlocks[8].innerHTML &&
            myBlocks[8].innerHTML != ''
            )
            end(6,7,8); 
    else if (myBlocks[0].innerHTML == myBlocks[3].innerHTML &&
             myBlocks[3].innerHTML == myBlocks[6].innerHTML &&
             myBlocks[6].innerHTML != ''
            )
            end(0,3,6);  
    else if (myBlocks[1].innerHTML == myBlocks[4].innerHTML &&
             myBlocks[4].innerHTML == myBlocks[7].innerHTML &&
             myBlocks[7].innerHTML != ''
            )
            end(1,4,7);
    else if (myBlocks[2].innerHTML == myBlocks[5].innerHTML &&
             myBlocks[5].innerHTML == myBlocks[8].innerHTML &&
             myBlocks[8].innerHTML != ''
            )
           end(2,5,8);
    else if (myBlocks[0].innerHTML == myBlocks[4].innerHTML &&
             myBlocks[4].innerHTML == myBlocks[8].innerHTML &&
             myBlocks[8].innerHTML != ''
            )
            end(0,4,8); 
    else if (myBlocks[2].innerHTML == myBlocks[4].innerHTML &&
             myBlocks[4].innerHTML == myBlocks[6].innerHTML &&
             myBlocks[6].innerHTML != ''
            )
            end(2,4,6);
          
};

function end (a, b, c) {
    //console.log(`Game finished with index ${a} ,${b} ,${c}`);
    myBlocks[a].style.backgroundColor = 'green';
    myBlocks[b].style.backgroundColor = 'green';
    myBlocks[c].style.backgroundColor = 'green';
    myHeader.innerHTML = `<span>${myBlocks[a].innerHTML} Winner</span>`;
    document.querySelector('.game-blocks').style.pointerEvents = 'none';
    document.getElementById('end-game').play();

    setTimeout( () => {location.reload() } , 4000) ;  // ريفرش للبرنامج بعد اربع ثواني من الفوز 

    setInterval( () => { myHeader.innerHTML += '.' } , 1000) ;

};