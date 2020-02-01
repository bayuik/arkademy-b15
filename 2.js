const username = (name) => {
    let pattern = /^(x)[A-Z.]{4,7}(x)$/
    let regex = pattern.exec(name);

    if(regex) {
        return true;
    }
    return false;
}

const password = (password) => {
    let pattern = /^[a-z.]{4,}[A-Z]{3}$/;

    if(pattern.exec(password)) {
        return true;
    }
    return false
}
console.log(username('xNANAx'))
console.log(password('bayuIND'))