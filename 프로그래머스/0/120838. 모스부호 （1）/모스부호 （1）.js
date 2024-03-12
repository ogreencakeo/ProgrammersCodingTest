function solution(letter) {
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    let arr = letter.split(' ');
    let result = [];
    for(let i of arr){
        if(isNaN(i)){
            result.push(morse[i]);
        }
        
    }
    return result.join('');
}