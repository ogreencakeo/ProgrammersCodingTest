function solution(str_list) {
    const idx = str_list.findIndex((v) => v === 'l' || v === 'r');
    
    if(idx === -1){
        return [];
    }else if(str_list[idx] === 'l'){
        return str_list.slice(0, idx);
    }else{
        return str_list.slice(idx+1);
    }
    
}