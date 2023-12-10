const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(locale, text) {
        
        if(locale === 'american-to-british') {
            this.americanToBritish(text)
        } else {
            this.britishToAmerican(text)
        }
    }

    americanToBritish(txt) {
        const str = txt.toLowerCase()
        let newPhrase = '';

        // americanToBritishSpelling.map((x) => console.log(x)) not an array

        for(let word in americanToBritishSpelling) {
            let regex = new RegExp("\\b" + word + "\\b", "gi")

            if(regex.test(word)) {
                newPhrase = str.replace(word, americanToBritishSpelling[word])
            } 
        }

        console.log(newPhrase)

        return newPhrase
    
    }

    britishToAmerican(txt) {

    }
}

module.exports = Translator;