const { calculateLBTT } = require("../index");

describe('calculateLBTT',()=>{
    test('should return a string of 0 tax due when the house price is 145000 or less',()=>{
        expect(calculateLBTT(10)).toBe("£0 tax due")
        expect(calculateLBTT(1200)).toBe("£0 tax due")
        expect(calculateLBTT(14000)).toBe("£0 tax due")
        expect(calculateLBTT(145000)).toBe("£0 tax due")
    })
    test("should return 2% tax of house price from 145001-250k", ()=>{
        expect(calculateLBTT(146000)).toBe("£20 tax due")
        expect(calculateLBTT(195000)).toBe("£1000 tax due")
        expect(calculateLBTT(250000)).toBe("£2100 tax due")
    })
})
