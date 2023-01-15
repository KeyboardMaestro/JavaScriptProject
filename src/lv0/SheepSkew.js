function solution(n, k) {
    let answer = 0;
    answer = 12000 * n + 2000 * (k - Math.floor(n/10));
    console.log(answer);
    return answer;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript