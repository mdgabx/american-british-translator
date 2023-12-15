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

        test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
            let phrase = "No Mr. Bond, I expect you to die."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "No Mr Bond, i expect you to die.")

            done()
        })

        test("Translate Dr. Grosh will see you now. to British English", (done) => {
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

        let locale = 'british-to-american'

        test("Translate We watched the footie match for a while. to American English", (done) => {
            let phrase = "We watched the footie match for a while."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'We watched the soccer match for a while.')

            done();
        })

        test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
            let phrase = "Paracetamol takes up to an hour to work."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'acetaminophen takes up to an hour to work.')

            done()
        })

        test("Translate First, caramelise the onions. to American English", (done) => {
            let phrase = "First, caramelise the onions."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'First, caramelize the onions.')

            done()
        })

        test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
            let phrase = "I spent the bank holiday at the funfair."

            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'I spent the public holiday at the carnival.')

            done()
        })
        
        test("Translate I had a bicky then went to the chippy. to American English", (done) => {
            let phrase = "I had a bicky then went to the chippy."
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, 'I had a cookie then went to the fish-and-chip shop.')

            done()
        })

        test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
            let phrase = "I've just got bits and bobs in my bum bag."
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "I've just got odds and ends in my fanny pack.")

            done()
        })

        test("Translate The car boot sale at Boxted Airfield was called off. to American English" , (done) => {
            let phrase = "The car boot sale at Boxted Airfield was called off."
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "The swap meet at boxted airfield was called off.")

            done()
        })

        test("Translate Have you met Mrs Kalyani? to American English", (done) => {
            let phrase = "Have you met Mrs Kalyani?"
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "Have you met Mrs. Kalyani?")

            done()
        })

        test("Translate Prof Joyner of King's College, London. to American English", (done) => {
            let phrase = "Prof Joyner of King's College, London."
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "Prof. Joyner of king's college, london.")

            done()
        })

        test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
            let phrase = "Tea time is usually around 4 or 4.30."
            const result = translator.translate(locale, phrase)
            const res = removeHtml(result)

            assert.notEqual(res, '')
            assert.notEqual(res, undefined)
            assert.notEqual(res, 'Everything looks good to me!')
            assert.equal(res, "Tea time is usually around 4 or 4:30.")

            done()
        })
    })
});
