function huruf(length) {
    let hasil =  '';
    let characters = 'bayu';
    let panjangnya = characters.length;
    for (let i = 0; i < length; i++){
        hasil += characters.charAt(Math.floor(Math.random() * panjangnya))
    }
    return hasil;
}
console.log(huruf(4))