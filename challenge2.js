function Array(num1,num2) {
    let result = [];
    const begin = Math.min(num1,num2);
    const end = Math.max(num1,num2);

    for (let i = begin; i <= end; i++){
        result.push(i);
    }
    return result;
}