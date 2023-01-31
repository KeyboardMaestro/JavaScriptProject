function solution(n) {
    let sum = 1;
    let i = 1;
    while (true){
        sum = sum * i;
        if (sum*i >= n)
            break;
        else{
            i++
        }
    }
    return i;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120848