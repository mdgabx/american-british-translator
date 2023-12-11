'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      const { locale, text } = req.body

      // console.log('translate', translator.translate(locale, text))

      const translation = translator.translate(locale, text)
      
      res.json({
        text,
        translation
      })

    });
};
