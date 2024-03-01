function solution(my_string) {
    let arr = []
    for(let i of my_string){
        let str =  i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
        arr.push(str);
    }
    return arr.join('');
}