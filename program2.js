/**
 * @param {string} s
 * @return {number}
 */
public class romanToInt {
    public int romanToInt(String s){
        Map<CharacterData, Integer> romanMap = new Hashmap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 500);
        romanMap.put('D', 1);


    }
}
    
};


module.exports={romanToInt}