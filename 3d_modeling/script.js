// 图片后缀数组
const imageExtensions = [
  'project_6_1.jpg',
  'project_6_2.png',
  'project_6_3.png',
  'project_6_4.jpg',
  'project_6_5.jpg',
  'project_6_6.jpg',
  'project_6_7.jpg'
];

const SPEAKERS = document.querySelectorAll('li');
SPEAKERS.forEach((SPEAKER, index) => {
  const img = SPEAKER.querySelector('img');
  const details = SPEAKER.querySelector('.speaker__details');
  const name = SPEAKER.querySelector('.speaker__name');
  const title = SPEAKER.querySelector('.speaker__title');
  
  // 设置为固定的名字、职位和细节
  const fullName = "Sophia Liu";
  const job = "Designer";
  const detailText = "3D_modeling_practice";
  
  name.innerText = fullName;
  title.innerText = job;
  details.innerText = `${fullName}. ${detailText}`;
  
  // 使用数组中的对应图片后缀
  img.src = `https://sophial.studio/images/album/${imageExtensions[index]}?format=auto`;
  img.alt = `Image of ${fullName}`;
});

const LIST = document.querySelector('ul');
LIST.style.display = 'flex';
