// Your tests here
import {pointsForWord} from "../utils"

describe("pointsForWord", ()=>{
    test("calculates the total points for a waord (1 point per vowel, 2 per consonant)",()=>{
        const word = "test"
        const result = pointsForWord(word);
        expect(result).toBe(7);
    })
})