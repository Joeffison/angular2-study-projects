import { JoeffisonAngular2Page } from './app.po';

describe('joeffison-angular2 App', function() {
  let page: JoeffisonAngular2Page;

  beforeEach(() => {
    page = new JoeffisonAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
