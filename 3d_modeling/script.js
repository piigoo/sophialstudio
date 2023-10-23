import { faker } from "https://cdn.skypack.dev/@faker-js/faker@7.6.0";

// 图片后缀数组
const imageExtensions = [
'project_6_1.jpg',
'project_6_2.png',
'project_6_3.png',
'project_6_4.jpg',
'project_6_5.jpg',
'project_6_6.jpg',
'project_6_7.jpg'];


const SPEAKERS = document.querySelectorAll('li');
SPEAKERS.forEach((SPEAKER, index) => {
  const img = SPEAKER.querySelector('img');
  const details = SPEAKER.querySelector('.speaker__details');
  const name = SPEAKER.querySelector('.speaker__name');
  const title = SPEAKER.querySelector('.speaker__title');
  const fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const job = `${faker.name.jobTitle()}, ${faker.company.name()}.`;
  name.innerText = fullName;
  title.innerText = job;
  details.innerText = `${fullName}. ${job}`;

  // 使用数组中的对应图片后缀
  img.src = `https://sophial.studio/images/album/${imageExtensions[index]}?format=auto`;
  img.alt = `Image of ${fullName}`;
});

const LIST = document.querySelector('ul');
LIST.style.display = 'flex';