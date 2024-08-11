import { getWordUri } from "./wordUri.js";
/**
 *
 * @param key Anlam öğrenme Örnek: getMeaning("Eşya" ya da ["Eşya", "Çekirdek"])
 * @returns geriye Anlamı döndürür.
 */
export async function getMeaning(key) {
    if (!Array.isArray(key))
        key = [key];
    const data = await Promise.all(key.map(async (item) => {
        const uri = await getWordUri(item, "gts");
        const getMeaningData = await fetch(uri);
        const mean = await getMeaningData.json();
        return mean;
    }));
    return data;
}
