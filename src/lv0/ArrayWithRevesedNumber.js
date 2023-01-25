function solution(n) {
    var answer = [];
    n = "" + n;
    for(let i = n.length-1; i >= 0; i--){
        answer.push(+n[i])
    }
    return answer;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/12932