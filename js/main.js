document.querySelector(".control-buttons span").onclick = function(){
  let Yourname = prompt("whats your name");

  if(Yourname ==null || Yourname ==""){
    document.querySelector(".name span").innerHTML="unknowen";
    // count()


  }else{
    document.querySelector(".name span").innerHTML=Yourname;
    // count()


  }
  document.querySelector(".control-buttons").remove();
}

let duration =1000;

let bkockcontainer =document.querySelector(".memory-game-blocks")

let blocks = Array.from(bkockcontainer.children);
let orderRange =[...Array(blocks .length).keys()];
console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);


// 
blocks.forEach((block,index) =>{
  block.style.order=orderRange[index];
  // console.log(block);
  block.addEventListener("click",function(){
    flipBlock(block);
  });

});

function flipBlock(SelectBlock)
{
  SelectBlock.classList.add("is-flipped")
  let allflipedblocks = blocks.filter(flippedBlocks => flippedBlocks.classList.contains('is-flipped'))
  if(allflipedblocks.length ==2){
    // console.log("nn");
    stopcliping()
    sheckmatchedblock(allflipedblocks[0],allflipedblocks[1])
  }
};

function stopcliping(){
  bkockcontainer.classList.add("no-clicking")

  setTimeout(()=>{
    bkockcontainer.classList.remove("no-clicking")


  },duration)
}


function shuffle(array){
  let current = array.length,
  temb,
  randem;

  while(current > 0){
    randem =Math.floor(Math.random()* current);
    current--;
    temb =array[current];
    array[current] =array[randem];
    array[randem]=temb;
  }
  return array;
}


function sheckmatchedblock(firstBlock , secondBlock){
  let triseelement = document.querySelector(".trice span")
  if(firstBlock.dataset.technology ===secondBlock.dataset.technology ){
  firstBlock.classList.remove("is-flipped");
  secondBlock.classList.remove("is-flipped");

  firstBlock.classList.add("has-match");
  secondBlock.classList.add("has-match");
}else{
  triseelement.innerHTML=parseInt(triseelement.innerHTML)+1;
  setTimeout(()=>{
    firstBlock.classList.remove("is-flipped");
  secondBlock.classList.remove("is-flipped");

  },duration)
}

}