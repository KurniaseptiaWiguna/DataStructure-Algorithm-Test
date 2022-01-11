const getChange = (a , b) => {
    return a - b;
}
const getFee = (a , b) => {
    return a * b;
}
const getCoin = (coin, amount, fee) => {
    let i = 0;
    let usedCoin = [];
    let sum = 0;

    function action (index) {
        sum = sum + coin[index];
        usedCoin.push(coin[i])
        // console.log(i)
        if( sum > (amount + (fee * (index+1)))){
            usedCoin.push(coin[i+1])
            return usedCoin

        }else{
            i++
            return action(index++)
        }
    }
    return action(i);
}
const getSumCoin = (coin) => {
    let sum = 0;
    for(let i = 0; i<coin.length; i++){
        sum = sum + coin[i]
    }
    return sum;
}

module.exports = {
    getChange,
    getFee,
    getCoin,
    getSumCoin,
}