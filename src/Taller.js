function solution(array, height) {
    var answer = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > height)
            answer++;
    }
    return answer;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript