// https://programmers.co.kr/learn/courses/30/lessons/12940
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 

function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) =>  a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)]
}

