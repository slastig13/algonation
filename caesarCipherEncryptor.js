// Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key. Letters should "wrap" around the alphabet (i.e. "z" shifted 1 returns "a")

function caesarCipherEncryptor(string, key) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]; // because there's only 26 letters in the alphabet, this is considered constant space  O(26) -> O(1)
  let temp = [];

  if (key > 26) key = key % 26; // edge case

  for (let lett of string) {
    let i = alphabet.indexOf(lett); // because there's only 26 letters in the alphabet (in this case), this becaomes a constant time operation O(26) -> O(1)
    if (i + key <= 25) temp.push(alphabet[i + key]);
    else {
      let absoIdx = Math.abs(25 - i - key + 1);
      temp.push(alphabet[absoIdx]);
    }
  }
  return temp.join("");
}

// O(N) time complexity, explanation above
// O(N) space complexity

console.log(caesarCipherEncryptor("xyz", 2)); // should return 'zab'
