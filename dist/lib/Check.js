import { getWordUri, getTermUri, getNameUri } from "./wordUri.js";
/**
 *
 * @param key Sözcük ismi. Örnek: Çekirdek, Beyaz eşya gibi.
 * @returns Sözcüğün bulunup bulunamamasına karşın true ya da false gönderir.
 */
export async function CheckWords(key) {
    if (!Array.isArray(key))
        key = [key];
    const trueOrFalse = await Promise.all(key.map(async (item) => {
        const wordUri = await getWordUri(item, "gts");
        let getWord = await fetch(wordUri, {
            method: "GET",
        });
        const data = await getWord.json();
        return data.length > 0;
    }));
    return trueOrFalse;
}
/**
 *
 * @param key Terim ismini belirtme örnek: üçgen, alan gib.
 * @returns Geriye terim anlamın bulunup bulunmamasına karşın true ya da false gönderir
 */
export async function CheckTerms(key) {
    if (!Array.isArray(key))
        key = [key];
    const trueOrFalse = await Promise.all(key.map(async (item) => {
        const wordUri = await getTermUri(item);
        let getWord = await fetch(wordUri, {
            method: "GET",
        });
        const data = await getWord.json();
        return data.length > 0;
    }));
    return trueOrFalse;
}
/**
 *
 * @param key : Atasözü ismini belirtme örnek: Üzüm üzüme baka baka kararır
 * @returns : Atasözünün bulunup bulunamamasına karşın true ya da false gönderir.
 */
export async function CheckSays(key) {
    if (!Array.isArray(key))
        key = [key];
    const trueOrFalse = await Promise.all(key.map(async (item) => {
        const wordUri = await getWordUri(item, "atasozu");
        let getWord = await fetch(wordUri, {
            method: "GET",
        });
        const data = await getWord.json();
        return data.length > 0;
    }));
    return trueOrFalse;
}
/**
 *
 * @param key : İsimi belirtme yeri. Örnek: Ahmet, Mehmet gibi veya Array'da olabilir
 * @returns : İsmin bulunup bulunamamasına karşın true ya da false gönderir.
 */
export async function CheckName(key) {
    if (!Array.isArray(key))
        key = [key];
    const trueOrFalse = await Promise.all(key.map(async (item) => {
        const wordUri = await getNameUri(item);
        let getWord = await fetch(wordUri, {
            method: "GET",
        });
        const data = await getWord.json();
        return data.length > 0;
    }));
    return trueOrFalse;
}
