for(let i = 0; i < 49; i++){
    let button = document.createElement('button')
    button.id = "nixonbutton"
    button.textContent = "Richard Nixon"
    button.addEventListener('click', showSubmit)
    buttonspam.appendChild(button)
}

mcgovernbutton.addEventListener('click', showSubmit)

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
        submitButton.innerHTML = "<a href='buddy.html'>Submit your vote</a>"
    }

}
