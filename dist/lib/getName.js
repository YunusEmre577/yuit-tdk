import { getNameUri } from "./wordUri.js";
;
/**
 *
 * @param key İsim bulur. Örnek: getName("Ahmet" ya da ["Ahmet", "Mehmet"])
 * @returns {Name}
 */
export async function getName(key) {
    if (!Array.isArray(key))
        key = [key];
    const data = await Promise.all(key.map(async (item) => {
        const uri = await getNameUri(item);
        const getNameData = await fetch(uri, { method: "GET" });
        const veri = await getNameData.json();
        return veri;
    }));
    return data;
}
