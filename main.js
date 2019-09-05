const Language = require("./Language");


// https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers
const translateTo = [
    new Language("turkish", "tr"),
    new Language("swedish", "sv"),
]


const fs = require("fs");
const { Translate } = require("@google-cloud/translate");
const english = require("./from.json");

const translator = new Translate();

async function translate(language, languageCode) {
    const translated = {};

    console.log(`Translating ${language}:`)
    for (const [ key, value ] of Object.entries(english)) {
        console.log(`\t ${language.toUpperCase()}_${key}`)

        const [ translation ] = await translator.translate(value, languageCode);
        translated[key] = translation;
    }

    const jsonString = JSON.stringify(translated);

    fs.writeFile(`./${language}.translated.json`, jsonString, () => {
        console.log("Translations written to disk");
    })
}

(async function() {
    const translators = 
        translateTo.map(language => translate(language.language, language.languageCode));

    await Promise.all(translators);
    console.log("Translating complete");
})()