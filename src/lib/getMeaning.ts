import { getWordUri } from "./wordUri.js";
export interface Mean {
madde_id: string,
kac:string,
kelime_no:string,
cesit:string,
anlam_gor:string,
on_taki:any,
on_taki_html:any,
madde:string,
madde_html:string,
cesit_say:string,
anlam_say:string,
taki:any,
cogul_mu:string,
ozel_mi:string,
egik_mi:string,
lisan_kodu:string,
lisan:string,
telaffuz_html:any,
lisan_html:any,
telaffuz:string,
birlesikler:any,
font:any,
madde_duz:string,
gosterim_tarihi:any,
anlamlarListe:any[];
}
/**
 * 
 * @param key Anlam öğrenme Örnek: getMeaning("Eşya" ya da ["Eşya", "Çekirdek"])
 * @returns geriye Anlamı döndürür.
 */
export async function getMeaning(key:string|string[]): Promise<Mean[]> {
    if(!Array.isArray(key)) key = [key];
    const data = await Promise.all(
        key.map(async item => {
            const uri = await getWordUri(item, "gts");
            const getMeaningData = await fetch(uri);
            const mean = await getMeaningData.json()
            return mean;
        })
    )
    return data;
}