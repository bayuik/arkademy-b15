const cetak = panjang => {
    // if(panjang % 2 == 0){
    //     console.log(`harus bilangan ganjjil (${panjang})`);
    //     return;
    // }
    let str = '';
    const nilaiTengah = Math.floor(panjang / 5);
    const nilaiAkhir = Math.floor(panjang / 2)

    for(let i = 0; i < panjang; i++) {
        for (let j = 0; j < panjang; j++){
            if (j === 0 || i === nilaiTengah ||j === panjang - 1 || i === nilaiAkhir + 1){
                str += '* ';
            }else {
                str += '  ';
            }
        }str += '\n';
        
    };console.log(str);
    
}
cetak(4)
cetak(2)