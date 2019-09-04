const fs = require("fs");

const { Translate } = require("@google-cloud/translate");
const english = require("./english.json");

const languageCode = "el" // https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers
const projectId = "";

const translated = {};

const translator = new Translate({ projectId });

(async function() {
    console.log("Translating:")
    for (const [ key, value ] of Object.entries(english)) {
        console.log(`\t ${key}`)

        const [ translation ] = await translator.translate(value, languageCode);
        translated[key] = translation;
    }
    console.log("Done");
    const jsonString = JSON.stringify(translated);

    fs.writeFile("./translated", jsonString, () => {
        console.log("Translations written to disk");
    })
})()
