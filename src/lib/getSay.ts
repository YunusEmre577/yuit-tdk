import { getWordUri} from './wordUri.js';

export interface Soz {
    soz_id:string,
    sozum:string,
    atara:string,
    anlami:string,
    anahtar:string,
    turu2:string,
    gosterim_tarihi:"yunus" | any
};
export type SozArray = Soz[];
/**
 * 
 * @param key Atasözünü öğrenme: getSay("üzüm üzüme" ya da ["Üzüm üzüme", "Damlaya damlaya"])
 * @returns {Soz}
 */
export async function getSay(key:string | string[]): Promise<SozArray[]> {
    if(!Array.isArray(key)) key = [key];
    let wordContent:any = Promise.all(key.map(async item => {
        const wordUrl = await getWordUri(item, "atasozu");
        const wordData = await fetch(wordUrl);
        let word: Soz = await wordData.json();
        return word;
    }))

    return wordContent
}