import '../styles/style.scss';

const showButton = document.querySelector('header>button');
const skillBlock = document.querySelector('.title');
const titleSkills = document.querySelector('.title');

const skillsBlockCoords = skillBlock.getBoundingClientRect();
console.log(window.scrollY, skillsBlockCoords.y);
showButton.addEventListener('click', () => {
  const titelCoord = titleSkills.getBoundingClientRect();
  // scrollTo(0, titelCoord.y);
  // console.log(titelCoord);
  // eslint-disable-next-line no-restricted-globals
  scrollTo(0, titelCoord.y);
});
