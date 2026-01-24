/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    if (s.length < p.length) return res;

    let pCount = Array(26).fill(0);
    let wCount = Array(26).fill(0);

    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {
        wCount[s[right].charCodeAt(0) - 97]++;

        if (right - left + 1 > p.length) {
            wCount[s[left].charCodeAt(0) - 97]--;
            left++;
        }

        if (right - left + 1 === p.length) {
            let same = true;
            for (let i = 0; i < 26; i++) {
                if (wCount[i] !== pCount[i]) {
                    same = false;
                    break;
                }
            }
            if (same) res.push(left);
        }
    }

    return res;
};
