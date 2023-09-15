import { English } from "./english";

export let STRINGS = English

export function setLanguage(languageCode: string) {
    localStorage.language = languageCode
    setupLanguage()
}

export function setupLanguage() {
    switch(localStorage.language) {
        case "en":
        case "us":
        default:
            STRINGS = English; break;
    }
}