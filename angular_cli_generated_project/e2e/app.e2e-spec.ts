import { AngularCliGeneratedProjectPage } from './app.po';

describe('angular-cli-generated-project App', function() {
  let page: AngularCliGeneratedProjectPage;

  beforeEach(() => {
    page = new AngularCliGeneratedProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
