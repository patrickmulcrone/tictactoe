/**
 * Created by mulcrone on 3/26/15.
 */

var board = [1,2,3,
             4,5,6,
             7,8,9]; //board positions

check(0,1,2) //row win
check(4,5,6)
check(7,8,9)
check(1,4,7) //column win
check(2,5,8)
check(3,6,9)
check(1,5,9) //diagonal win
check(3,5,7)


function check(a,b,c){

    if (board[a] === [b] && [b] === [c]){
        console.log("Winner!!!");

    }else{
        console.log("Loser!");
    }



}