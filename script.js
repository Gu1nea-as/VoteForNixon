let middle = document.getElementsByClassName('middle')
middle = middle[0]


let nixon = 0
let mcgovern = 0

// let nixonVote = function(event){
//     if(nixon < 1){
//         nixon += 1
//     }
//     mcgovern = 0

//     if(nixon == 1){
//         selection = "Richard Nixon"
//     }
// }

// let mcgovernVote = function(event){
//     if(mcgovern < 1){
//         mcgovern += 1
//     }
//     nixon = 0

//     if(mcgovern == 1){
//         selection = "George McGovern"
//     }
// }

function showSubmit(event) {
    let submit = document.createElement('button')
    submit.id = "submitButton"

    let voteText = document.createElement('h3')
    voteText.textContent = `Submit your vote for: ${this.textContent}`
    submitVote.innerHTML = ''
    submitVote.appendChild(submit)
    submitVote.appendChild(voteText)
    let selection = this.textContent
    link(selection)
}

function link(selection) {
    if (selection == 'Richard Nixon') {
        submitButton.innerHTML = "<a href='votesubmit.html'>Submit your vote</a>"
    } else if (selection == 'George McGovern') {
        submitButton.innerHTML = "<a href='failsubmit.html'>Submit your vote</a>"
    }

}



let fadein = function (event) {
    nixonright.style.opacity = 1
    nixonleft.style.opacity = 1
}
let fadeout = function (event) {
    nixonright.style.opacity = 0
    nixonleft.style.opacity = 0
}

mcgovernbutton.addEventListener('mouseover', fadein)
mcgovernbutton.addEventListener('mouseout', fadeout)

nixonbutton.addEventListener('click', showSubmit)
// nixonbutton.addEventListener('click', nixonVote)
mcgovernbutton.addEventListener('click', showSubmit)
// mcgovernbutton.addEventListener('click', mcgovernVote)
