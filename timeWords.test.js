const {timeWord} = require('./timeWords');

describe('timeWord', () => {
    it('should display midnight correctly', () => {
        expect(timeWord('00:00')).toBe('midnight');
    });

    it('should display noon correctly', () => {
        expect(timeWord('12:00')).toBe('noon');
    });

    it('should display am for times right after midnight', () => {
        expect(timeWord('00:01')).toContain('am');
    });

    it('should display am for times before noon', () => {
        expect(timeWord('11:59')).toContain('am');
    });

    it('should throw an error for hours larger than 23', () => {
        expect(() => timeWord('24:14')).toThrow(RangeError);
    });

    it('should throw an error for minutes larger than 59', () => {
        expect(() => timeWord('11:60')).toThrow(RangeError);
    })

    it('should display pm for times right after noon', () => {
        expect(timeWord('12:01')).toContain('pm');
    });

    it('should display pm for times right before midnight', () => {
        expect(timeWord('23:59')).toContain('pm');
    });
});