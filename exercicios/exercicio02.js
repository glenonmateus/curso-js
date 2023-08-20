let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

// solução 1
// const temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;
// console.log(varA, varB, varC);

// solução 2
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
