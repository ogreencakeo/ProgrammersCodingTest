function solution(rsp) {
    var rsp_arr = rsp.split('');
    var win_arr = [];
    for(let i of rsp_arr){
        if(i==='2'){
            win_arr.push('0');
        }else if(i==='0'){
            win_arr.push('5');
        }else if(i==='5'){
            win_arr.push('2');
        }
    }
    return win_arr.join('');
}