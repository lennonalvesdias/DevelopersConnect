import { DocumentacoesPage } from './app.po';

describe('documentacoes App', () => {
  let page: DocumentacoesPage;

  beforeEach(() => {
    page = new DocumentacoesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
