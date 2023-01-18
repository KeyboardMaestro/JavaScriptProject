function solution(my_string) {
    my_string = my_string.replaceAll("a", "");
    my_string = my_string.replaceAll("e", "");
    my_string = my_string.replaceAll('i', "");
    my_string = my_string.replaceAll('o', "");
    my_string = my_string.replaceAll('u', "");
    return my_string
} // Resource : https://school.programmers.co.kr/learn/courses/30/lessons/120849?language=javascript