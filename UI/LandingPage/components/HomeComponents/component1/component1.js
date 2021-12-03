// animate the background of component1
function populateDots(limit) {
    
    for(let i=0;i<limit;i++) {
        document.getElementById("dots").innerHTML += `<div id="dot${i}" class="dot"></div>`;
    }
    for(let i=0;i<limit/2;i++) {
        let topPos = Math.floor(Math.random()*390);
        let rightPos = Math.floor(Math.random()*290);
        document.getElementById(`dot${i}`).style.position = "absolute";
        document.getElementById(`dot${i}`).style.top = `${topPos}px`;
        document.getElementById(`dot${i}`).style.right = `${rightPos}px`;
    }
    for(let i=limit-1;i>limit/2;i--) {
        let topPos = Math.floor(Math.random()*390);
        let leftPos = Math.floor(Math.random()*290);
        document.getElementById(`dot${i}`).style.position = "absolute";
        document.getElementById(`dot${i}`).style.top = `${topPos}px`;
        document.getElementById(`dot${i}`).style.left = `${leftPos}px`;
    }
}
function animateBackgroundComponent1() {
    
    let selection1 = []; // move from bottom
    let selection2 = []; // move top
    let selection3 = []; // move right
    let selection4 = []; // more left

    for(let i=0;i<document.querySelectorAll(".dot").length/5;i++) {
        selection1.push(document.querySelectorAll(".dot")[Math.floor(Math.random() * document.querySelectorAll(".dot").length/5)]);
    }
    for(let i=0;i<document.querySelectorAll(".dot").length/4;i++) {
        selection2.push(document.querySelectorAll(".dot")[Math.floor(Math.random() * document.querySelectorAll(".dot").length/4)]);
    }
    for(let i=0;i<document.querySelectorAll(".dot").length/3;i++) {
        selection3.push(document.querySelectorAll(".dot")[Math.floor(Math.random() * document.querySelectorAll(".dot").length/3)]);
    }
    for(let i=0;i<document.querySelectorAll(".dot").length/2;i++) {
        selection4.push(document.querySelectorAll(".dot")[Math.floor(Math.random() * document.querySelectorAll(".dot").length/2)]);
    }
    console.log(selection1);
    console.log(selection2);
    console.log(selection3);
    console.log(selection4);

    // move selection1 down
    function moveSelection1() {
        let id = null
        id = setInterval(frame, 80);
        let pos = []; //let pos be an array of pos
        for(let i=0;i<selection1.length;i++) {
            pos.push(Math.floor(Math.random()*100));
        }
        function frame() {
            if(pos[pos.length-1]>=300) {
                pos = [];
                for(let i=0;i<selection1.length;i++) {
                    pos.push(Math.floor(Math.random()*100));
                }
                console.log("this is reset pos",pos);
                runFrame();
            }else {
                runFrame();
            }
            function runFrame() {
                for(let i=0;i<pos.length;i++) {
                    pos[i] = pos[i] + 1;
                }
                console.log(pos);
                for(let i=0;i<selection1.length;i++) {
                    selection1[i].style.top = pos[i] + 'px';
                }
            }
        }
    }
    moveSelection1();
    // move selection2
    function moveSelection2() {
        let id = null
        id = setInterval(frame, 80);
        let pos = []; //let pos be an array of pos
        for(let i=0;i<selection2.length;i++) {
            pos.push(Math.floor(Math.random()*50));
        }
        function frame() {
            if(pos[pos.length-1]>=390) {
                pos = [];
                for(let i=0;i<selection2.length;i++) {
                    pos.push(Math.floor(Math.random()*50));
                }
                console.log("this is reset pos",pos);
                runFrame();
            }else {
                runFrame();
            }
            function runFrame() {
                for(let i=0;i<pos.length;i++) {
                    pos[i] = pos[i] + 1;
                }
                console.log(pos);
                for(let i=0;i<selection2.length;i++) {
                    selection2[i].style.left = pos[i] + 'px';
                }
            }
        }
    }
    moveSelection2();
    // move selection3
    function moveSelection3() {
        for(let i=0;i<selection3.length;i++) {
            selection3[i].classList.add("dotAnimationScale1");
        }
    }
    moveSelection3();
    // move selection4
    function moveSelection4() {
        for(let i=0;i<selection4.length;i++) {
            selection4[i].classList.add("dotAnimationScale2");
        }
    }
    moveSelection4();
}
window.onload = () => {
    populateDots(100);
    animateBackgroundComponent1();
}

