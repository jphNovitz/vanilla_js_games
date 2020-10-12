document.addEventListener('DOMContentLoaded', ()=> {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('click', () => {
        let player = document.querySelector('#player')
        figure = playerSwitch(player)
        square.style.backgroundImage= "url('" + figure + ".png')"
    }))
    

})

function playerSwitch(){
    if (player.innerHTML === 'Player O') {
        player.innerHTML = 'Player X'
        return 'o'
    }
        else {
             player.innerHTML = 'Player O'
             return 'x'
        } 
}