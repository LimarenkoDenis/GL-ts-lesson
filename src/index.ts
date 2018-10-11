type IRepo =  { name: string, owner: { repos_url: string } };
type IGithubRepos = { items: IRepo[] };

const search: HTMLInputElement | null = document.querySelector('#refInput');
const wrapperElement: HTMLInputElement | null = document.querySelector('.wrapper');

if (!search || !wrapperElement) {
  throw Error('Can not find html elements');
}

search.addEventListener('input', (event: Event) => {
  // tslint:disable-next-line:no-any
  const value: string = (event.target as any).value;
  fetch(`https://api.github.com/search/repositories?q=${value}`)
  .then((res: Response) => res.json())
  .then((repo: IGithubRepos) => {
    wrapperElement.innerHTML = '';

    repo.items.forEach((item: IRepo) => {
      const a: HTMLAnchorElement = document.createElement('a');
      a.innerHTML = item.name;
      a.setAttribute('href', item.owner.repos_url);
      wrapperElement.appendChild(a);
    });
  });
});
