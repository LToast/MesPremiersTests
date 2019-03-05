let Util = {};
Util.factorial = (n) => {
    if (n==0){
        return 1;
    }
    if (n>3000){
        throw "n too large";
    }
    if (n<0){
        throw "n is negative";
    }
    return n* Util.factorial (n-1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    if(n<0){ throw 'n négatif'}
    if (n<=1){return false;}
    for (let i=2;i<n;i++){
        if (n%i==0){
            return false;
        }
    }
    return true;
};


/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
    let res=0;
    for(let i=0;i<=n;i++){
        if (Util.isPrime(i)){ res+=i;}
    }
    return res;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
    let res=[];
    for (let i=1;i<=n;i++){
        let str="";
        if (i%3===0){
            str+="Fizz";
        }
        if (i%5===0){
            str+="Buzz"
        }
        res[i-1]=(str==="")?i:str;
    }
    return res;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
    let res="";
    let alphabet_low="abcdefghijklmnopqrstuvwxyz".split("");
    let alphabet_up="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let i=0;i<phrase.length;i++){
        let index_low =alphabet_low.indexOf(phrase.charAt(i));
        let index_up =alphabet_up.indexOf(phrase.charAt(i));
        if (index_low!=-1){
            res+=alphabet_low[index_low+1%alphabet_low.length];
        }
        else if (index_up!=-1){
            res+=alphabet_up[index_up+1%alphabet_up.length];
        }
        else{
            res+=" ";
        }
    }
    return res;
};


module.exports = Util;

