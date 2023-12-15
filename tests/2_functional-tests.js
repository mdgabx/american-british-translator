const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

    test("Translation with text and locale fields: POST request to /api/translate", (done) => {
        const sampleData = {
            text: 'First, caramelise the onions.',
            locale: 'american-to-british'
        }
        
        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err,res) => {
                assert.equal(res.status, 200)
                assert.equal(res.body.text, sampleData.text)
                assert.notEqual(res.body.translation, '')

                done()
            })

    }).timeout(10000)

    test("Translation with text and invalid locale field: POST request to /api/translate", (done) => {
        const sampleData = {
            locale: 'any',
            text: 'The car boot sale at Boxted Airfield was called off.'
        }

        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err, res) => {
                assert.equal(res.status, 200)
                assert.property(res.body, "error")
                assert.equal(res.body.error, "Invalid value for locale field")

                done();
            })
    }).timeout(10000)

    test("Translation with missing text field: POST request to /api/translate", (done) => {
        const sampleData = {
            text: '',
            locale: 'american-to-british'
        }

        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err,res) => {
                assert.equal(res.status, 200)
                assert.property(res.body, "error")
                assert.equal(res.body.error, "No text to translate")

                done()
            })
    }).timeout(10000)

    test("Translation with missing locale field: POST request to /api/translate", (done) => {
        const sampleData = {
            text: 'test hello world',
        }

        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err,res) => {
                assert.equal(res.status, 200)
                assert.property(res.body, "error")
                assert.equal(res.body.error, "Invalid value for locale field")

                done()
            })
    }).timeout(10000)

    test("Translation with empty text: POST request to /api/translate", (done) => {
        const sampleData = {
            text: '',
            locale: 'american-to-british'
        }

        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err,res) => {
                assert.equal(res.status, 200)
                assert.property(res.body, "error")
                assert.equal(res.body.error, "No text to translate")

                done()
            })
    }).timeout(10000)

    test("Translation with text that needs no translation: POST request to /api/translate", (done) => {
        const sampleData = {
            text: 'hello world',
            locale: 'american-to-british'
        }

        chai.request(server)
            .post('/api/translate')
            .send(sampleData)
            .end((err,res) => {
                assert.equal(res.status, 200)
                assert.property(res.body, "translation")
                assert.equal(res.body.translation, "Everything looks good to me!")

                done()
            })
    }).timeout(10000)



});
