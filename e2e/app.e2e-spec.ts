import { TPLabIV2017Page } from './app.po';

describe('tp-lab-iv2017 App', () => {
  let page: TPLabIV2017Page;

  beforeEach(() => {
    page = new TPLabIV2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
