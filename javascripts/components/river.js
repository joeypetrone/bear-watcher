import bearsData from '../helpers/data/bearsData.js'
import util from '../helpers/util.js'

const printAllBears = () => {
    const Allbears = bearsData.getBears();
    let domString = '';

    Allbears.forEach( bears => {
        domString += `<div class="card m-2" style="width: 18rem;">`;
        domString += `  <img class="card-img-top" src="${bears.imageURL}" alt="Card image cap">`; 
        domString += '  <div class="card-body">';    
        domString += `  <h5 class="card-title">${bears.name}</h5>`;       
        domString += '  </div>';    
        domString += '</div>';
    });

    util.printToDom('river', domString);
};

export default { printAllBears }