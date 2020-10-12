module.exports = function toReadable(number) {
    let result = '';
    if (number === 0) {
        return 'zero';
    }
    if (number.toString().length === 3) {
        result += checkOneDigit(number.toString().charAt(0));
        number %= 100; //123
        result += ' hundred ';
    }
    if (number.toString().length === 2) {

        let twoDigits = checkTwoDigits(number.toString()); //2 цифры не прокатило, рассматриваем 1
        if (twoDigits.length === 0) {
            twoDigits = checkTwoDigits(number.toString().charAt(0)); // 1 цифра не прокатила
            if (twoDigits.length > 0) {
                result += twoDigits;
            } else {
                result += checkOneDigit(number.toString().charAt(0)) + 'ty '; //284 попадаем сюда почему????
            }
            number %= 10;
        } else {
            result += twoDigits;
            return result.trim();
        }
    }
    result += checkOneDigit(number.toString());
   return  result.trim();

}

function checkOneDigit(number) {
    let result = '';
    switch (number) {
        case '1':
            result += 'one';
            break;
        case '2':
            result += 'two';
            break;
        case '3':
            result += 'three';
            break;
        case '4':
            result += 'four';
            break;
        case '5':
            result += 'five';
            break;
        case '6':
            result += 'six';
            break;
        case '7':
            result += 'seven';
            break;
        case '8':
            result += 'eight';
            break;
        case '9':
            result += 'nine';
            break;
    }
    return result;
}

function checkTwoDigits(number) {
    let result = '';
    switch (number) {
        case '10':
            result += 'ten ';
            break;
        case '11':
            result += 'eleven ';
            break;
        case '12':
            result += 'twelve ';
            break;
        case '13':
            result += 'thirteen ';
            break;
        case '14':
            result += 'fourteen ';
            break;
        case '15':
            result += 'fifteen ';
            break;
        case '16':
            result += 'sixteen ';
            break;
        case '17':
            result += 'seventeen ';
            break;
        case '18':
            result += 'eighteen ';
            break;
        case '19':
            result += 'nineteen ';
            break;
        case '20':
            result += 'twenty ';
            break;
        case '2':
            result += 'twenty ';
            break;
        case '30':
            result += 'thirty ';
            break;
        case '3':
            result += 'thirty ';
            break;
        case '40':
            result += 'forty ';
            break;
        case '4':
            result += 'forty ';
            break;
        case '50':
            result += 'fifty ';
            break;
        case '5':
            result += 'fifty ';
            break;
        case '80':
            result += 'eighty ';
            break;
        case  '8':
            result += 'eighty ';
            break;

    }
    return result;
}
