const keyboardInput = document.getElementById('keyboard-input');

const ux = 'https://ironhackportugal.slack.com/archives/C05A5FN5HJ9';
const web = 'https://ironhackportugal.slack.com/archives/C05AASRJQ12';
const cohort = 'https://ironhackportugal.slack.com/archives/C05A8DXUSUA';

const cohortLink = document.getElementById('cohort-link');
const uxLink = document.getElementById('ux-link');
const webLink = document.getElementById('web-link');

const uxCohort = document.getElementById('ux-cohort');
const webCohort = document.getElementById('web-cohort');
const channelCohort = document.getElementById('channel-cohort');

const slicedInput = keyboardInput.value.slice(0, -4);

cohortLink.setAttribute('href', cohort);
uxLink.setAttribute('href', ux);
webLink.setAttribute('href', web);

uxCohort.innerHTML = 'oct23-ux-ft';
webCohort.innerHTML = 'oct23-webdev-ft';
channelCohort.innerHTML = 'oct23-cohort';

document.addEventListener('keydown', event => {
  if (event.key == 'Backspace') {
    keyboardInput.value = slicedInput;
  } else if (!Number.isNaN(+event.key)) {
    keyboardInput.value += event.key;
  }

  setTimeout(() => {
    changeChannel();
  }, 1000);
});

function changeChannel() {
  switch (keyboardInput.value) {
    case '1':
    case '100':
      window.open('index.html#what', '_self');
      keyboardInput.value = slicedInput;
      break;
    case '2':
    case '200':
      window.open('index.html#when', '_self');
      keyboardInput.value = slicedInput;
      break;
    case '3':
    case '300':
      window.open('index.html#how', '_self');
      keyboardInput.value = slicedInput;
      break;
    case '4':
    case '400':
      window.open('index.html#hero', '_self');
      keyboardInput.value = slicedInput;
      break;

    //   UX LINK
    case '500':
      window.open(ux, '_self');
      keyboardInput.value = slicedInput;
      break;

    //   WEB LINK
    case '600':
      window.open(web, '_self');
      keyboardInput.value = slicedInput;
      break;

    //   COHORT LINK
    case '700':
      window.open(cohort, '_self');
      keyboardInput.value = slicedInput;
      break;

    //   WIREFRAMES LINK
    case '800':
      window.open('wireframes.html', '_self');
      keyboardInput.value = slicedInput;
      break;
  }
}
