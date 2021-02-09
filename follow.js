function removeLast(){
    console.log(inputtext.value);
    let temp = '';
    for(let i = 0; i < inputtext.value.length - 1;i++){
        temp += inputtext.value[i];
        console.log(temp)
    }
    inputtext.value = temp
}

let addLetter1 = function(event){
    if(inputtext.value.length == 0){
        inputtext.value += 'R';
    }
    inputtext.addEventListener('keydown', addLetter2)
    
}

let addLetter2 = function(event){
    if(inputtext.value == "R"){
        inputtext.value += 'i';
    }
    inputtext.addEventListener('keydown', addLetter3)
    inputtext.removeEventListener('keydown', addLetter2)
}

let addLetter3 = function(event){
    if(inputtext.value == "Ri"){
        inputtext.value += 'c';
    }
    inputtext.addEventListener('keydown', addLetter4)
    inputtext.removeEventListener('keydown', addLetter3)
}

let addLetter4 = function(event){
    if(inputtext.value == 'Ric'){
        inputtext.value += 'h';
    }
    inputtext.addEventListener('keydown', addLetter5)
    inputtext.removeEventListener('keydown', addLetter4)
}

let addLetter5 = function(event){
    if(inputtext.value == 'Rich'){
        inputtext.value += 'a';
    }
    inputtext.addEventListener('keydown', addLetter6)
    inputtext.removeEventListener('keydown', addLetter5)
}

let addLetter6 = function(event){
    if(inputtext.value == 'Richa'){
        inputtext.value += 'r';
    }
    inputtext.addEventListener('keydown', addLetter7)
    inputtext.removeEventListener('keydown', addLetter6)
}

let addLetter7 = function(event){
    if(inputtext.value == 'Richar'){
        inputtext.value += 'd';
    }
    inputtext.addEventListener('keydown', addLetter8)
    inputtext.removeEventListener('keydown', addLetter7)
}

let addLetter8 = function(event){
    if(inputtext.value == 'Richard'){
        inputtext.value += ' ';
    }
    inputtext.addEventListener('keydown', addLetter9)
    inputtext.removeEventListener('keydown', addLetter8)
}

let addLetter9 = function(event){
    if(inputtext.value == 'Richard '){
        inputtext.value += 'N';
    }
    inputtext.addEventListener('keydown', addLetter10)
    inputtext.removeEventListener('keydown', addLetter9)
}

let addLetter10 = function(event){
    if(inputtext.value == 'Richard N'){
        inputtext.value += 'i';
    }
    inputtext.addEventListener('keydown', addLetter11)
    inputtext.removeEventListener('keydown', addLetter10)
}

let addLetter11 = function(event){
    if(inputtext.value == 'Richard Ni'){
        inputtext.value += 'x';
    }
    inputtext.addEventListener('keydown', addLetter12)
    inputtext.removeEventListener('keydown', addLetter11)
}

let addLetter12 = function(event){
    if(inputtext.value == 'Richard Nix'){
        inputtext.value += 'o';
    }
    inputtext.addEventListener('keydown', addLetter13)
    inputtext.removeEventListener('keydown', addLetter12)
}

let addLetter13 = function(event){
    if(inputtext.value == 'Richard Nixo'){
        inputtext.value += 'n';
    }
    inputtext.removeEventListener('keydown', addLetter13)
    
    let submit = document.createElement('button')
    submit.id = "submitButton"
    submit.innerHTML = "<a href='votesubmit.html'>Submit your vote</a>"
    middle.appendChild(submit)
}




inputtext.addEventListener('keydown', addLetter1);
inputtext.addEventListener('keyup', removeLast);