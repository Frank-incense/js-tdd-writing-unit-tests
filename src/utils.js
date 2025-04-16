// Your code here
const vowels = ['a', 'e', 'i', 'o', 'u'];
export function pointsForWord(word){
    let points = 0;
    for(let letter of word){
        if (vowels.includes(letter)){
            points += 1;
        }
        else{
            points += 2;
        }
    }
    return points
}

// Side effect and data Fetching