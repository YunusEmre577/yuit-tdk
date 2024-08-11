export interface Name {
    ad_id: string;
    ad: string;
    anlam: string;
    koken: string;
    cins: string;
}
/**
 *
 * @param key İsim bulur. Örnek: getName("Ahmet" ya da ["Ahmet", "Mehmet"])
 * @returns {Name}
 */
export declare function getName(key: string | string[]): Promise<Name[]>;
