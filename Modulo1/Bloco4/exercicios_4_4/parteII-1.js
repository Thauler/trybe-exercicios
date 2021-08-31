function palindrome(string) {
    let reverse = string.split('').reverse().join('');
    if(reverse === string) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('arara'));
console.log(palindrome('nave'));