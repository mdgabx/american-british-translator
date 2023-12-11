const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(locale, text) {

        let translated = '';
        
        if(locale === 'american-to-british') {
           translated = this.americanToBritish(text)
        } else {
          translated = this.britishToAmerican(text)
        }

        return translated
    }

    americanToBritish(txt) {
        let newPhrase = '';

        if(txt) {
            newPhrase = txt.toLowerCase();
    
            for (let word in americanToBritishSpelling) {
                let regex = new RegExp("\\b" + word + "\\b", "gi");
                let insertWord = `<span class="highlight">${americanToBritishSpelling[word]}</span>`

                newPhrase = newPhrase.replace(regex, insertWord);
            }

            const americanTimeRegex = /(\b\d{1,2}):(\d{1,2}\b)/g
            newPhrase = newPhrase.replace(americanTimeRegex, '<span class="highlight">$1.$2</span>')

            newPhrase = newPhrase.charAt(0).toUpperCase() + newPhrase.slice(1);
        
        }
       
        return newPhrase;
    }

    britishToAmerican(txt) {

    }
}

module.exports = Translator;