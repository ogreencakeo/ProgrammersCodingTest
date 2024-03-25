function solution(picture, k) {
    let result = [];
    
    picture.forEach((v) => {
        const expand = [...v].reduce((acc, cur) => acc + cur.repeat(k) , '');
        
        for(let i=0; i<k; i++) result.push(expand);
    });
    
    return result;
}