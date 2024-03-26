function solution(keyinput, board) {
    let positionX = Math.floor(board[0] / 2);
    let positionY = Math.floor(board[1] / 2);
    let position = [0, 0];
    
    for(let i of keyinput){
        if(i === 'right' && position[0] < positionX) position[0] += 1; // 오른쪽으로 이동
        else if(i === 'left' && position[0] > -positionX) position[0] -= 1; // 왼쪽으로 이동
        else if(i === 'down' && position[1] > -positionY) position[1] -= 1; // 아래로 이동
        else if(i === 'up' && position[1] < positionY) position[1] += 1; // 위로 이동
        
    }
    return position;
}