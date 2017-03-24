import { BwClientAngularPage } from './app.po';

describe('bw-client-angular App', () => {
  let page: BwClientAngularPage;

  beforeEach(() => {
    page = new BwClientAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
