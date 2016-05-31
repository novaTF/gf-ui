export class GfuiSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gfui-site-app h1')).getText();
  }
}
