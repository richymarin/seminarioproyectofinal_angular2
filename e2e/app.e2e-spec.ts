import { Proyectofinalangular2Page } from './app.po';

describe('proyectofinalangular2 App', function() {
  let page: Proyectofinalangular2Page;

  beforeEach(() => {
    page = new Proyectofinalangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
