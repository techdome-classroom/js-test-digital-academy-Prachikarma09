/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack =[];
    
    for (let i=0;i<s.length; i += 1){
        const top = stack [stack.length-1];

        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i]);
        }else if (s[i] === ')' && top === '(' && stack.length !==0){
            stack.pop();
        }elae if (s[i]) === ']'
    
    }
    
};

module.exports = { isValid };


