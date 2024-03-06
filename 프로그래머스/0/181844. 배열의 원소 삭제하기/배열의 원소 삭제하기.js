function solution(arr, delete_list) {
    let del_arr = arr.filter(v => !delete_list.includes(v));
    return del_arr;
}