const {getChange, getFee,getCoin, getSumCoin} = require("./config")

let amount = 23; //harga barang

let coin = [10,5,2,3,6,7]; //coin yang dimiliki dodi
coin.sort(function(a, b){return a - b});//menyusun coin berdasarkan ASC
coin.reverse()

let fpc = 0.5; // biaya per coin/ fee per coin
let hitungCoin = 0;
let total = 0;

function transaction (){
    let coinDipakai = getCoin(coin,amount,fpc) //mencari coin yang dipakai

    let biaya = getFee(coinDipakai.length ,fpc );//menghitung biaya transaksi per coin

    let tagihan = amount + biaya; //menjumlahkan tagihan amount/harga barang dengan biaya

    let sum = getSumCoin(coinDipakai); //menjumlahkan semua coin yang dipakai

    let kembalian =getChange(sum, tagihan) //menghitung kembalian
    console.log("total transaksi: ",amount);
    console.log("coin yang dipakai: ",coinDipakai)
    console.log("biaya transaksi: ",biaya)
    console.log("total tagihan: ",tagihan)
    console.log("kembalian: ",kembalian)
}
transaction();