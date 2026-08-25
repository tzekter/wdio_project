import { expect } from 'chai';

export default class BasePage{
    async open(path = ''){
        await browser.url(`https://practicesoftwaretesting.com/${path}`);
    }
    async assertUrlContains(partialUrl){
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include(partialUrl, `Url should contain "${partialUrl}`);
    }
}