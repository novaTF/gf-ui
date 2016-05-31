import { GfuiSitePage } from './app.po';

describe('gfui-site App', function() {
  let page: GfuiSitePage;

  beforeEach(() => {
    page = new GfuiSitePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gfui-site works!');
  });
});
