function solution(spell, dic) {
    const result = [];
    dic.forEach((v) => {
       let count = 0;
        spell.forEach((j) => {
            if(v.includes(j)) count++;
        });
        
        if(count === spell.length) result.push(v);
    });
    
    return result.length === 0? 2 : 1;
}