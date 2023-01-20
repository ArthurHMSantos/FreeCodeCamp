function rot13(str) {

    let cypher = "";
    let alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    for(let i = 0; i < str.length; i++) {
        if(alphabet.includes(str[i]) == 0) {
            cypher += str[i];
            continue;
        }

        for(let j = 0; j < alphabet.length; j++) {
            if(str[i] == alphabet[j]) {
                if (j < 13) {
                    cypher += alphabet[j + 13];
                } else {
                    cypher += alphabet[j - 13];
                }
            }
            
        }

    }

    return cypher;
}
console.log(rot13("SERR PBQR PNZC"));