import bearsData from '../helpers/data/bearsData.js'
import river from '../components/river.js'
import util from '../helpers/util.js'

const addBear = (e) => {
    e.preventDefault();

    const bearName = document.getElementById('bear-name').value;
    const bearImageURL = document.getElementById('bear-image').value;

    bearsData.setBears({name: bearName, imageURL: bearImageURL })

    document.getElementById('bear-form').reset();
    river.printAllBears();
};


const submitBearEvent = () => {
    document.getElementById('bear-button').addEventListener('click', addBear);
};


export default { submitBearEvent };
