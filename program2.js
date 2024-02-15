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
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int n = s.length();
        int num = romanMap.get(s.charAt(n-1));

        for (int i= n-2; i> 0; i--){
            
        }


    }
}
    
};


module.exports={romanToInt}