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
    const bearId = e.target.id; 
    const bearsArray = bearsData.getBears();
    const bearPosition = bearsArray.findIndex((p) => p.id === bearId);

    console.log(bearPosition);
    console.log(bearsArray.name);

    alert(`${bearsArray[bearPosition].name} attepmted to catch a fish.`);
};

const init = () => {
    bearForm.printBearForm();
    $('#bear-button').click(addBear);
    $('#river').on('click', '.fish-attempt-button', fishAttempt);
};

init();