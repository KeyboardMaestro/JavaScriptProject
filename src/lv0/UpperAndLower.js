function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++){
        if (my_string[i] <= 'z' && my_string[i] >= 'a'){
            answer += my_string[i].toUpperCase();
        }
        else
            answer += my_string[i].toLowerCase();
    }
    return answer;
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120893