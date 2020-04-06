import bearsData from './helpers/data/bearsData';
import bearForm from './components/bearForm';
import river from './components/river';

import 'bootstrap';
import '../styles/main.scss';

const addBear = (e) => {
  e.preventDefault();

  const bearName = $('#bear-name').val();

  const bearImageURL = $('#bear-image').val();

  bearsData.setBears({ name: bearName, imageURL: bearImageURL, id: `bear_${bearsData.getBears().length + 1}` });

  $('#bear-form').trigger('reset');
  river.printAllBears();
};

const fishAttempt = (e) => {
  const bearId = e.target.id;
  const bearsArray = bearsData.getBears();
  const bearPosition = bearsArray.findIndex((p) => p.id === bearId);

  // eslint-disable-next-line no-undef
  alert(`${bearsArray[bearPosition].name} attepmted to catch a fish.`);
};

const init = () => {
  bearForm.printBearForm();
  $('#bear-button').click(addBear);
  $('#river').on('click', '.fish-attempt-button', fishAttempt);
};

init();
