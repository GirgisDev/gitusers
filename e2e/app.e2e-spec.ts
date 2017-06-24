import { GitUsersPage } from './app.po';

describe('git-users App', () => {
  let page: GitUsersPage;

  beforeEach(() => {
    page = new GitUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
