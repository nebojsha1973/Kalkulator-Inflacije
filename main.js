function inflationCalculator() {
    //console.log('RADI');//testiramo onklik f-ju

    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflationRate = parseFloat(inflationRate.value); //pretvaranje stringa u broj
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);
    console.log(years);

    /*
    console.log(typeof(inflationRate));
    console.log(typeof(money));

    //console.log(inflationRate.value);
    //console.log(money.value);

    let sabiranje = inflationRate + money;
    console.log(sabiranje); //dobijamo string nadodavanje 
    console.log(typeof(sabiranje)); //proverava tip promenjive

    */

  //Formula za izracunavanje inflacije:


  let worth = money + (money * (inflationRate / 100));

    console.log(worth);

    for ( i=1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }
    // console.log(worth);
    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Današnjih ${money} eura vredi isto kao ${worth} eura za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);

}    