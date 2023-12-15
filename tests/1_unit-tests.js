const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()

suite('Unit Tests', () => {

    const removeHtml = (str) => str.replace(/<[^>]*>/g, '')

    suite('Translation from american to british', () => {

        let locale = 'american-to-british'

        test('Translate Mangoes are my favorite fruit.', (done) => {
            let phrase = "Translate Mangoes are my favorite fruit."
           
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'Translate mangoes are my favourite fruit.')

            done();
        })

        test('Translate I ate yogurt for breakfast. to British English', (done) => {
            let phrase = "I ate yogurt for breakfast.";
           
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'I ate yoghurt for brekkie.')

            done()
        }) 

        test('Translate We had a party at my friend\'s condo. to British English', (done) => {
            let phrase = "We had a party at my friend's condo."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "We had a party at my friend's flat.")

            done();
        })

        test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
            let phrase = "Can you toss this in the trashcan for me?"

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "Can you toss this in the bin for me?")

            
            done();
        })

        test("Translate The parking lot was full. to British English", (done) => {
            let phrase = "The parking lot was full.";

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "The car park was full.")

            done();
        })

        test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
            let phrase = "Like a high tech Rube Goldberg machine."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "Like a high tech Heath Robinson device.")

            done();
        })

        test("Translate To play hooky means to skip class or work. to British English", (done) => {
            let phrase = "To play hooky means to skip class or work.";

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "To bunk off means to skip class or work.")

            done();
        })

        test("No Mr. Bond, I expect you to die.", (done) => {
            let phrase = "No Mr. Bond, I expect you to die."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "No Mr Bond, i expect you to die.")

            done()
        })

        test("Dr. Grosh will see you now.", (done) => {
            let phrase = "Dr. Grosh will see you now."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'Dr Grosh will see you now.')

            done();
        })

        test("Translate Lunch is at 12:15 today. to British English", (done) => {
            let phrase = "Lunch is at 12:15 today."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'Lunch is at 12.15 today.')

            done();
        })
    })

    suite('Translation from british to american', () => {

    })
});
