# SETUP

* you need have an API key on your computer and an environment variable called _GOOGLE_APPLICATION_CREDENTIALS_ that needs to point to it. (See step one and two [here](https://cloud.google.com/translate/docs/quickstart-client-libraries)).

* Clone or download the repo. Then in your terminal open the folder and run ```npm ci``` to install the depen

# HOW TO

Put the JSON that needs to be translated in this projects root under the name _from.json_. Then in main.js modify the following lines 

```
const toTranslate = [
    new Language("greek", "el"),
    new Language("german", "de"),
    new Language("danish", "da"),
];
```

with the languages you need. So for instance if you want Turkish and Swedish it should say

```
const toTranslate = [
    new Language("turkish", "tr"),
    new Language("swedish", "sv"),
];
```