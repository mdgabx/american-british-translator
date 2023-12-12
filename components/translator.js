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

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        function capitalize(title) {
            return title.charAt(0).toUpperCase() + title.slice(1)
        }

        function capitalizeTitleAndName(phrase) {
            let words = phrase.split(' ')

            for(let i = 0; i < words.length; i++) {
                if(/mr|mrs|ms|mx|dr|prof/gi.test(words[i])) {
                    words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1);
                } 
            }

            words = words.join(' ')

           return words
        }

        let newPhrase = '';

        if(txt) {
            newPhrase = txt.toLowerCase();

            for(let title in americanToBritishTitles) {
                const escapedTitle = escapeRegExp(title)
                const regexTitle = new RegExp(escapedTitle, "gi")

                let insertTitle = `<span class="highlight">${capitalize(americanToBritishTitles[title])}</span>`

                newPhrase = newPhrase.replace(regexTitle, insertTitle)
            }
    
            for (let word in americanToBritishSpelling) {
                let regex = new RegExp("\\b" + word + "\\b", "gi");
                let insertWord = `<span class="highlight">${americanToBritishSpelling[word]}</span>`

                newPhrase = newPhrase.replace(regex, insertWord);
            }

            for(let word in americanOnly) {

                const regex = new RegExp("\\b" + word + "\\b", "gi");
                let insertWord = `<span class="highlight">${britishOnly[word]}</span>`

                newPhrase = newPhrase.replace(regex, insertWord)
            }

            const americanTimeRegex = /(\b\d{1,2}):(\d{1,2}\b)/g
            newPhrase = newPhrase.replace(americanTimeRegex, '<span class="highlight">$1.$2</span>')

            newPhrase = newPhrase.charAt(0).toUpperCase() + newPhrase.slice(1);
        
        }
       
        return capitalizeTitleAndName(newPhrase)
    }

    britishToAmerican(txt) {

        let newPhrase = '';

        if(txt) {
            newPhrase = txt.toLowerCase();

            for(let word in americanToBritishSpelling) {

                const regex = new RegExp("\\b" + americanToBritishSpelling[word] + "\\b", "gi")
                let insertWord = `<span class="highlight">${word}</span>`

                newPhrase = newPhrase.replace(regex, insertWord)
            }

            for(let word in britishOnly) {

                const regex = new RegExp("\\b" + word + "\\b", "gi");
                let insertWord = `<span class="highlight">${britishOnly[word]}</span>`

                newPhrase = newPhrase.replace(regex, insertWord)

            }

            const americanTimeRegex = /(\b\d{1,2}).(\d{1,2}\b)/g
            newPhrase = newPhrase.replace(americanTimeRegex, '<span class="highlight">$1:$2</span>')

            newPhrase = newPhrase.charAt(0).toUpperCase() + newPhrase.slice(1);

        }

        return newPhrase
    }
}

module.exports = Translator;