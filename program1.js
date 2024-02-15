/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s)  {
    const leftSymbols =[];
    
    for (let i=0;i<s.length; i += 1){
        

        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            leftSymbols.push(s[i]);
        }
        else if (s[i] === ')' && leftSymbols.length === 0 && stack.length !==0){
            stack.pop();
        }else if (s[i] === ']' && top === '[' && stack.length !==0){
            stack.pop();
        }else if (s[i] === '}' && top ===  '{' && stack.length !==0){
            stack.pop();
        }else {
            return false;
        }
    
    }
    
   return stack.length === 0; 

};



