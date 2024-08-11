import { getWordUri } from './wordUri.js';
;
/**
 *
 * @param key Atasözünü öğrenme: getSay("üzüm üzüme" ya da ["Üzüm üzüme", "Damlaya damlaya"])
 * @returns {Soz}
 */
export async function getSay(key) {
    if (!Array.isArray(key))
        key = [key];
    let wordContent = Promise.all(key.map(async (item) => {
        const wordUrl = await getWordUri(item, "atasozu");
        const wordData = await fetch(wordUrl);
        let word = await wordData.json();
        return word;
    }));
    return wordContent;
}
