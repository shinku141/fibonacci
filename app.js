'use strict';

const memo = new Map();
// 固定化されているフィボナッチ数列を代入
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    // 既に計算済みのフィボナッチ数列を返す
    if (memo.has(n)){
        return memo.get(n);
    }
    // 計算、記録、返答
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}