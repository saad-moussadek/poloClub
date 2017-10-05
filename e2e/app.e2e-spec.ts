import { PoloClubPage } from './app.po';

describe('polo-club App', () => {
  let page: PoloClubPage;

  beforeEach(() => {
    page = new PoloClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
