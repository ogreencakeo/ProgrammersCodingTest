function solution(age) {
    const covert = {
        0 : 'a', 1 : 'b', 2 : 'c', 3 : 'd', 4 : 'e', 5 : 'f', 6 : 'g', 7 :'h',
        8 : 'i', 9 : 'j'
    }
    let arr = age.toString().split('');
    let result = '';
    for(let i of arr){
        result += covert[parseInt(i)];
    }
    return result;
}