const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(locale, text) {

        let translated = '';

        if (locale === 'american-to-british' && this.isAlreadyBritish(text)) {
            translated = 'Everything looks good to me!';
        } else if (locale === 'british-to-american' && this.isAlreadyAmerican(text)) {
            translated = 'Everything looks good to me!';
        } else {
            if(locale === 'american-to-british') {
                translated = this.americanToBritish(text)
              } else {
                translated = this.britishToAmerican(text)
              }
        }
           
    
        return translated
    }

    isAlreadyAmerican(txt) {
        // let phrase = txt.toLowerCase()

        // for (let word in americanOnly) {
        //     if (phrase.includes(word)) {
        //         return true; // Return true if any American English word is found
        //     }
        // }



        // return false; 
    }

    isAlreadyBritish(txt) {
        let count = 0;
        let phrase = txt.toLowerCase()

        for (let word in britishOnly) {
            const regex = new RegExp("\\b" + word + "\\b", "gi")

            if(regex.test(phrase)) {
                count++
            }
        }

        console.log('first count', count)


        for (let word in americanToBritishSpelling) {
            const regex  = new RegExp("\\b" + americanToBritishSpelling[word] + "\\b", "gi")
            if(regex.test(phrase)) {
                count++
            }
        }

        console.log('2nd count', count)

        // for (let title in americanToBritishTitles) {
        //     if(phrase.match(`${this.escapeRegExp(americanToBritishTitles[title])}`)) {
        //         count++
        //     }
        // }

        // // console.log(count)

        if(count === 0) {
            return false
        } else {
            return true
        }
    }


    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    capitalize(title) {
        return title.charAt(0).toUpperCase() + title.slice(1)
    }

    
    capitalizeTitleAndName(phrase) {
        let words = phrase.split(' ')

        for(let i = 0; i < words.length; i++) {
            if(/mr|mrs|ms|mx|dr|prof/gi.test(words[i])) {
                words[i + 1] = words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1);
            } 
        }

        words = words.join(' ')

       return words
    }


    americanToBritish(txt) {

        let newPhrase = '';

        if(txt) {
            newPhrase = txt.toLowerCase();

            for(let title in americanToBritishTitles) {
                const escapedTitle = this.escapeRegExp(title)
                const regexTitle = new RegExp(escapedTitle, "gi")

                let insertTitle = `<span class="highlight">${this.capitalize(americanToBritishTitles[title])}</span>`

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
       
        return this.capitalizeTitleAndName(newPhrase)
    }

    britishToAmerican(txt) {

        let newPhrase = '';

        if(txt) {
            newPhrase = txt.toLowerCase();

            for(let title in americanToBritishTitles) {
                const escapedTitle = this.escapeRegExp(americanToBritishTitles[title])
                const regexTitle = new RegExp("\\b" + escapedTitle + "\\b", "gi")

                let insertTitle = `<span class="highlight">${this.capitalize(title)}</span>`

                newPhrase = newPhrase.replace(regexTitle, insertTitle)

            }

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

        return this.capitalizeTitleAndName(newPhrase)
    }
}

module.exports = Translator;