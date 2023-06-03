enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Month): boolean {
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            return true;
        default:
            return false;
    }
}

console.log(isItSummer(Month.Jun));
