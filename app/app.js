function automorphic(n)
{       var a,b, m=10;

    b=m;

    while(n>b)
    {

        b*=m;
    }

    a = (n*n) % b ;

    if (a===n) { return('Number "+n+" is an automorphic number'); }
    else {return false; }

}

function prime(num)
{

    if (!isNaN(num) && num > 1){
        var wynik = 'Prime factor " + num + " is:';
        var i = 2;
        var e = Math.floor(Math.sqrt(num));
        while (i <= e) {
            while ((num % i) === 0) {
                wynik += ' ' + i;
                num = Math.floor(num/i);
                e = Math.floor(Math.sqrt(num));
            }
            i++;
        }
         wynik += ' ' + num;
        return(wynik);
    }
    else
    {
        return false;

    }

}

module.exports = {
    prime : prime,
    automorphic: automorphic

};
