export interface Soz {
    soz_id: string;
    sozum: string;
    atara: string;
    anlami: string;
    anahtar: string;
    turu2: string;
    gosterim_tarihi: "yunus" | any;
}
export type SozArray = Soz[];
/**
 *
 * @param key Atasözünü öğrenme: getSay("üzüm üzüme" ya da ["Üzüm üzüme", "Damlaya damlaya"])
 * @returns {Soz}
 */
export declare function getSay(key: string | string[]): Promise<SozArray[]>;
