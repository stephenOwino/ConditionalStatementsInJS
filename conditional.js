
const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber;

/*if statement alone*/
if(jsExpression){
    console.log('This expression is true');
}


//if-Else statement
if(jsExpression){
    console.log('This expression is true');

}else{
    console.log('This statement is false');
}

/*Adding another "code path" with else if"
Hint:you can use as many "else-if statements as you want*/
if(jsExpression){
    console.log('The expression is true');

}else if(firstNumber > 0){
    console.log('the expression is false and the forst number is is greater than 0');

}else{
    console.log('expression is false, and firstNumber 0 or less');
}