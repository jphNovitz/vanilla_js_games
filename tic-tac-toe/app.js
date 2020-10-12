document.addEventListener('DOMContentLoaded', ()=> {
    const squares = document.querySelectorAll('.square');
    let player = document.querySelector('#player')

    squares.forEach(square => square.addEventListener('click', (e) =>  play(e)))
    
    function play(e){
        figure = playerSwitch(player)
        e.target.style.backgroundImage= "url('" + figure + ".png')"
    }
    
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
})

