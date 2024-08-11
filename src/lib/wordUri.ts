export function getWordUri (key: string, type:string): Promise <string> {
 const uri = `https://sozluk.gov.tr/${type}?ara=${encodeURI(key.toLowerCase())}`
 return Promise.resolve(uri)
}
export function getTermUri (key: string): Promise <string> {
    const uri = `https://sozluk.gov.tr/terim?eser_ad=tümü&ara=${encodeURI(key.toLowerCase())}`
    return Promise.resolve(uri)
   }
   export function getNameUri (key: string): Promise <string> {
    const uri = `https://sozluk.gov.tr/adlar?gore=1&cins=4&ara=${encodeURI(key.toLowerCase())}`
    return Promise.resolve(uri)
   }
// yuit.dev 2024