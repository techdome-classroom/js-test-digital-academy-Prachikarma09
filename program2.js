/**
 * @param {string} s
 * @return {number}
 */
var romanToInt =function(s){
    const romanMap= new Map();
        Map<CharacterData, Integer> romanMap = new Hashmap<>();
        romanMap.sett('I', 1);
        romanMap.set('V', 5);
        romanMap.set('X', 10);
        romanMap.set('L', 50);
        romanMap.set('C', 100);
        romanMap.set('D', 500);
        romanMap.set('M', 1000);

        int n = s.length();
        int num = romanMap.get(s.charAt(n-1));

        for (int i= n-2; i> 0; i--){
             
            if(romanMap.get(s.charAt(i)) > romanMap.get(s.charAt(i + 1))){
                num += romanMap.get(s.charAt(i));
            }else{
                num -= romanMap.get(s.charAt(i));
            }
        }

     return num;
    }
}
    
};


module.exports={romanToInt}