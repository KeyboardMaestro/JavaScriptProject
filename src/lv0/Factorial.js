function solution(n) {
    let sum = 1;
    while (true){
        let i = 1;
        if (sum >= n)
            break;
        else{
            i++
            sum *= sum * i
        }
    }
    return i - 1;
}