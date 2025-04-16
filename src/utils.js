// Your code here
export function pointsForWord(word){
    let points = 0;
    if (!word){
        return points
    }
    for(let letter of word){
        points += /[aeiou]/.test(letter.toLowerCase()) ? 1 : 2;
    }
    return points
}

// Side effect and data Fetching

pointsForWord("test")