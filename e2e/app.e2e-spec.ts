import { AwesomeMarkPage } from './app.po';

describe('awesome-mark App', () => {
  let page: AwesomeMarkPage;

  beforeEach(() => {
    page = new AwesomeMarkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
