function solution(dot) {
    var xPosition = dot[0];
    var yPosition = dot[1];
    var answer = 0;
    
    if(xPosition>0 && yPosition>0){
        answer = 1;
    }else if(xPosition<0 && yPosition>0){
        answer = 2;
    }else if(xPosition<0 && yPosition<0){
        answer = 3;
    }else if(xPosition>0 && yPosition<0){
        answer = 4;
    }
    
    return answer;
}