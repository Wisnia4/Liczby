
function automorficzna(n)
{       var a,b,
    m=10;

    b=m;
    while(n>b)
    {
        b*=m;
    }

    a = (n*n) % b ;

    if (a==n) return(25);
    else return("Liczba "+n+" nie jest automorficzna");

}

function rozloz(liczba)
{

    if (!isNaN(liczba) && liczba > 1){
        var wynik = "Czynniki pierwsze liczby " + liczba + " to:";
        var i = 2;
        var e = Math.floor(Math.sqrt(liczba));
        while (i <= e) {
            while ((liczba % i) == 0) {
                wynik += " " + i;
                liczba = Math.floor(liczba/i);
                e = Math.floor(Math.sqrt(liczba));
            }
            i++;
        }
        if (liczba > 1) wynik += " " + liczba;
        return(wynik);
    }
    else
    {
        return('Podano nieprawidłową wartość!');

    }
    return false;
}

module.exports = {
    rozloz :  rozloz,
    automorficzna: automorficzna

};
