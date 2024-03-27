function solution(id_pw, db) {
    let result = "fail";
    for(let i of db){
        if(i[0] === id_pw[0]){
            result = i[1] === id_pw[1] ? result = "login" : "wrong pw"; 
            break;   
        }
    }
    return result;
}