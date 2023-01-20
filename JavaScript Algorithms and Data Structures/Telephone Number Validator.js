function telephoneCheck(str) {
    var pattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
    return pattern.test(str);
}

telephoneCheck("555-555-5555");