const uniqueNums = {
    '00': "o'clock",
    '01': "oh one",
    '02': "oh two",
    '03': "oh three",
    '04': "oh four",
    '05': "oh five",
    '06': "oh six",
    '07': "oh seven",
    '08': "oh eight",
    '09': "oh nine",
    '10': "ten",
    '11': "eleven",
    '12': "twelve",
    '13': "thirteen",
    '14': "fourteen",
    '15': "fifteen",
    '16': "sixteen",
    '17': "seventeen",
    '18': "eighteen",
    '19': "nineteen",
    '20': "twenty",
    '30': "thirty",
    '40': "fourty",
    '50': "fifty"
}

module.exports = {
    timeWord: timeString => {
        let hours = timeString[0] + timeString[1];
        let minutes = timeString[3] + timeString[4];

        if(Number(hours) > 23 || Number(minutes) > 59 || Number(hours) < 0 || Number(minutes) < 0) {
            throw new RangeError('Invalid time entered. Hours must be in interval [00, 24) and Minutes in [00, 60).')
        }
    
        //figure out if it's am or pm
        let am = '';
        let pm = '';
        if(Number(hours) / 12 < 1) {
            am = 'am';
        } else {
            pm = 'pm';
        }
    
        hours = handleHours(hours);
        minutes = handleMins(minutes);
    
    
        if (hours + minutes === "twelve o'clock " && am) {
            return 'midnight';
        } else if (hours + minutes === "twelve o'clock " && pm) {
            return 'noon';
        }
    
        if (am) {
            return hours + minutes + am;
        } else {
            return hours + minutes + pm;
        }
    }
}

const handleHours = hours => {
    let hrs = Number(hours) % 12;
    if(hrs < 10) {
        hrs = '0' + hrs;
    } else {
        hrs = String(hrs);
    }
    let answer = uniqueNums[hrs];
    if (Number(hrs) < 1) {
        answer = 'twelve';
    } else if (Number(hrs) < 10) {
        answer = answer.slice(3);
    }

    return answer + ' ';
}

const handleMins = minutes => {
    return uniqueNums[minutes] + ' ';
}

//list of all possible unique nums between 0 and 60 inclusive
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// 30, 40, 50, 60