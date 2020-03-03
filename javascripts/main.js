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

const fishAttempt = (e) => {
    console.log('in fishAttempt');
    //const bearId = e.target.id; 
    //const bearPosition = bearsData.getBears().findIndex((p) => p.id === bearId);

    alert(`${bearsData.getBears()[bearPosition]} attepmted to catch a fish.`);
};

const init = () => {
    bearForm.printBearForm();
    $('#bear-button').click(addBear);
    $('#river').on('click', '.fish-attempt-button', fishAttempt);
};

init();