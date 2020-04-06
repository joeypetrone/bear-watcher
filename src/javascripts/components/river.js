import bearsData from '../helpers/data/bearsData';
import util from '../helpers/util';

const printButtons = (bearId) => {
  let domString = '';

  domString += `      <button type="submit" id="${bearId}" class="btn btn-primary mb-2 fish-attempt-button">Fish Attempt</button>`;

  return domString;
};

const printAllBears = () => {
  const Allbears = bearsData.getBears();
  let domString = '';

  Allbears.forEach((bears) => {
    domString += '<div class="card m-2" style="width: 18rem;">';
    domString += `  <img class="card-img-top" src="${bears.imageURL}" alt="Card image cap">`;
    domString += '  <div class="card-body">';
    domString += `      <h5 class="card-title">${bears.name}</h5>`;
    domString += printButtons(bears.id);
    domString += '  </div>';
    domString += '</div>';
  });

  util.printToDom('river', domString);
};

export default { printAllBears };
