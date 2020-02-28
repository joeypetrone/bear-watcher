import util from '../helpers/util.js'

const printBearForm = () => {
    let domString = '';

    domString += '<div id="form" class="d-flex justify-content-center">';
    domString += '   <div class="from">';
    domString += '      <h5>Add Bear</h5>';
    domString += '      <form id="bear-form" class="form-inline">';
    domString += '          <label class="sr-only" for="inlineFormInputName2">Bear Name</label>';
    domString += '          <input type="text" class="form-control mb-2 mr-sm-2" id="bear-name" placeholder="Bear Name">';      
    domString += '          <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>';
    domString += '          <label class="sr-only" for="inlineFormInputName2">Bear Name</label>';
    domString += '          <input type="text" class="form-control mb-2 mr-sm-2" id="bear-image" placeholder="Image URL">';
    domString += '          <button type="submit" id="bear-button" class="btn btn-primary mb-2">Submit</button>';
    domString += '      </form>';
    domString += '   </div>';
    domString += '</div>';

    util.printToDom('bear-form-container', domString);
};

export default { printBearForm };