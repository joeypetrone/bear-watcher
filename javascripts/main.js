import bearsData from './helpers/data/bearsData.js'
import bearForm from './components/bearForm.js'
import river from './components/river.js'

const addBear = (e) => {
    e.preventDefault();

    const bearName = $('#bear-name').val();e;
    
    const bearImageURL = $('#bear-image').val();;

    bearsData.setBears({name: bearName, imageURL: bearImageURL, id: `bear_${bearsData.getBears().length + 1}` })

    $('#bear-form').trigger("reset");
    river.printAllBears();
};

const init = () => {
    bearForm.printBearForm();
    $('#bear-button').click(addBear);
};

init();