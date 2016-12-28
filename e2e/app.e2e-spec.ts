import { AngularPrimeTutorialPage } from './app.po';

describe('angular-prime-tutorial App', function() {
  let page: AngularPrimeTutorialPage;

  beforeEach(() => {
    page = new AngularPrimeTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
