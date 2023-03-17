if no second player name then player 2 is computer
if event.target[1].value; is a empty stirng then equals to computer

if player 2 is 'computer' then instead of the regular on click handler:

- write a function called play computer move
  - generate 2 random indexes for the row and col (Math.floor and Math. random)
  - check if the randomly generated indexes are at an empty space
    - if the space is empty, play the space and switch turns
    - else you need to regenerate two more random coordinates and try again

after you click on single player game, if player two is computer
after first player makes moves check if name of player two is computer, run play computer function
call render the board if the condition above is true
