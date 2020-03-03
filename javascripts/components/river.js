import bearsData from '../helpers/data/bearsData.js'
import util from '../helpers/util.js'

const printAllBears = () => {
    const Allbears = bearsData.getBears();
    let domString = '';

    Allbears.forEach( bears => {
        domString += `<div id="${bears.id}" class="card m-2" style="width: 18rem;">`;
        domString += `  <img class="card-img-top" src="${bears.imageURL}" alt="Card image cap">`; 
        domString += '  <div class="card-body">';    
        domString += `      <h5 class="card-title">${bears.name}</h5>`; 
        domString += printButtons();               
        domString += '  </div>';    
        domString += '</div>';
    });

    util.printToDom('river', domString);
};

const printButtons = () => {
    let domString = '';

    domString += '      <button type="submit" id="fish-attempt-button" class="btn btn-primary mb-2">Fish Attempt</button>';

    return domString;
};

export default { printAllBears }