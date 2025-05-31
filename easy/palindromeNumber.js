var isPalindrome = function(x) {
    numberString = x + "";
    numberReverse = numberString.split("").reverse("").join("");
    
    if(numberReverse == x){
        return true;
    }else{
        return false;
    }
};