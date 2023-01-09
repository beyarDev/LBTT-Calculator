const { calculateLBTT } = require("../index");

describe('calculateLBTT',()=>{
    test('should return 0 when the house price is 145000 or less',()=>{
        expect(calculateLBTT(10)).toBe(0)
        expect(calculateLBTT(1200)).toBe(0)
        expect(calculateLBTT(14000)).toBe(0)
        expect(calculateLBTT(145000)).toBe(0)
    })
    test("should return 2% tax of house price from 145001-250k", ()=>{
        expect(calculateLBTT(146000)).toBe(20)
        expect(calculateLBTT(195000)).toBe(1000)
        expect(calculateLBTT(250000)).toBe(2100)
    })
    test("should return 5% tax of house price from 250001-325k plus the 2%",()=>{
        expect(calculateLBTT(250001)).toBe(2100.05)
        expect(calculateLBTT(260000)).toBe(2600)
        expect(calculateLBTT(325000)).toBe(5850)
    })
    test("should return 10% tax of house price from 325001-750k plus 5% plus 2%",()=>{
        expect(calculateLBTT(325001)).toBe(5850.1)
        expect(calculateLBTT(625000)).toBe(35850)
        expect(calculateLBTT(750000)).toBe(48350)
    })
    test("should return 12% tax of house price from 750001 and up, plus 10%,5%,2%",()=>{
        expect(calculateLBTT(750001)).toBe(48350.12)
        expect(calculateLBTT(1000000)).toBe(78350)
        expect(calculateLBTT(1200995)).toBe(102469.4)
    })
})
