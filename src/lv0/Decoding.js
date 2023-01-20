function solution(cipher, code) {
    var answer = '';
    for (let i = 0; i < cipher.length; i++){
        if ((i+1)%code === 0)
            answer += cipher[i];
    }
    return answer;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120892