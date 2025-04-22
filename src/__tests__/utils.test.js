// Your tests here
import {pointsForWord} from "../utils"

describe("pointsForWord", ()=>{
    test("calculates the total points for a waord (1 point per vowel, 2 per consonant)",()=>{
        const word = "test"
        const result = pointsForWord(word);
        expect(result).toBe(7);
    })
    
    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
    
        const points = pointsForWord(word);
    
        expect(points).toBe(7);
    });
})