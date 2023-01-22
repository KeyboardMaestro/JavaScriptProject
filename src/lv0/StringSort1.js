function solution(my_string) {
    var answer = [];
    let index = 0;
    for (let i = 0; i < my_string.length; i++){
        if (!isNaN(+my_string[i])){
            answer[index] = +my_string[i]
            index++;
        }
    }
    return answer.sort();
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120850