import '../styles/style.scss';

const showButton = document.querySelector('header>button');
const titleSkills = document.querySelector('.title');

showButton.addEventListener('click', () => {
  const titelCoord = titleSkills.getBoundingClientRect();
  // eslint-disable-next-line no-restricted-globals
  scrollTo(0, titelCoord.y);
});
