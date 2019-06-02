const translate = require('@vitalets/google-translate-api');

export async function transalte(text: string) {
    let translatedText: string = "";
    let textArr: string[] = text.split(" ");

    for (let iText of textArr) {
        await translate(iText, {from: 'en', to: 'nl'})
            .then((res: any) => {
                translatedText += res.text + " ";
            }).catch((err: any) => {
                console.error(err);
            }
        );
    }

    return translatedText.replace(/ $/, '');
}