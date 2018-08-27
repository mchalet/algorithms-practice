function memoizedFibonacci(num) {
    if (num == 0) {
        memory[num] = 0;
        return 0;
    } else if (num == 1 || num == 2) {
        memory[num] = 1;
        return 1;
    } else {
        if (!memory[num]) {
            memory[num] = memoizedFibonacci(num - 1) +
                memoizedFibonacci(num - 2);
        }
        return memory[num];
    }
}