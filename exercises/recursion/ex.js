"use strict";

function isPalindrome(str) {

    if (str.length <= 1) return true;

    if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
    else return isPalindrome(str.substr(1, str.length - 1));
}

// console.log( isPalindrome("") === true );
// console.log( isPalindrome("a") === true );
// console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

// console.log( isPalindrome("ab") === false );
// console.log( isPalindrome("abc") === false );
// console.log( isPalindrome("abca") === false );
// console.log( isPalindrome("abcdba") === false );
