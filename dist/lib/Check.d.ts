/**
 *
 * @param key Sözcük ismi. Örnek: Çekirdek, Beyaz eşya gibi.
 * @returns Sözcüğün bulunup bulunamamasına karşın true ya da false gönderir.
 */
export declare function CheckWords(key: string | string[]): Promise<boolean[]>;
/**
 *
 * @param key Terim ismini belirtme örnek: üçgen, alan gib.
 * @returns Geriye terim anlamın bulunup bulunmamasına karşın true ya da false gönderir
 */
export declare function CheckTerms(key: string | string[]): Promise<boolean[]>;
/**
 *
 * @param key : Atasözü ismini belirtme örnek: Üzüm üzüme baka baka kararır
 * @returns : Atasözünün bulunup bulunamamasına karşın true ya da false gönderir.
 */
export declare function CheckSays(key: string | string[]): Promise<boolean[]>;
/**
 *
 * @param key : İsimi belirtme yeri. Örnek: Ahmet, Mehmet gibi veya Array'da olabilir
 * @returns : İsmin bulunup bulunamamasına karşın true ya da false gönderir.
 */
export declare function CheckName(key: string | string[]): Promise<boolean[]>;
