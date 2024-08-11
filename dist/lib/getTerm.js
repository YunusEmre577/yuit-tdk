import { getTermUri } from "./wordUri.js";
/**
 *
 * @param key Terim anlam : getTerm("üçgen" ya da ["üçgen", "alan"])
 * @returns Terim anlamlı içeriği döndürür.
 */
export async function getTerm(key) {
    if (!Array.isArray(key))
        key = [key];
    const data = await Promise.all(key.map(async (item) => {
        const getWordURI = await getTermUri(item);
        const getData = await fetch(getWordURI, { method: "GET" });
        const veri = await getData.json();
        return veri;
    }));
    return data;
}
