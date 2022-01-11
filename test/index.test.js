const { expect } = require("@jest/globals");
const {getFee,getCoin, getSumCoin, getChange} = require("../config");
test('menghitung biaya transaksi, 4 * 0.5', () => {
    expect(getFee(4,0.5)).toBe(2);
});
test('menentukan coin yang dipakai, ', () => {
    const expected = [ 10, 7, 6, 5 ]
    let coin = [10,7,6,5,3,2]; //coin yang dimiliki dodi
    let amount = 23;
    let fpc = 0.5;
    expect(getCoin(coin,amount,fpc)).toEqual(expected);
});
test('menghitung semua coin yang dipakai ,', () => {
    const coin = [ 10, 7, 6, 5 ]
    expect(getSumCoin(coin)).toBe(28);
});
test('menghitung kembalian, total coin yang dipakai - tagihan', () => {
    const total = 28;
    const tagihan = 25;
    expect(getChange(total,tagihan)).toBe(3);
});