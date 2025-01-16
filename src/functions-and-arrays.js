// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (!words.length) {
    return null;
  } else {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    console.log(longestWord);
    return longestWord;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
  if (!num.length) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  }
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums) {
  if (!nums.length) {
    return 0;
  }

  const sum = nums.reduce((a, b) => a + b, 0);
  return Math.round(sum / nums.length);
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordArr, wordS) {
  if (!wordArr.length) {
    return null;
  }

  return wordArr.includes(wordS);
}
