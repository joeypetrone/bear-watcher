import bearsData from '../helpers/data/bearsData.js'


const addBear = (e) => {
    e.preventDefault();

    const bearName = document.getElementById('bear-name').value;
    const bearImageURL = document.getElementById('bear-image').value;

    bearsData.setBears({name: bearName, imageURL: bearImageURL })

    document.getElementById('bear-form').reset();

};


const submitBearEvent = () => {
    document.getElementById('bear-button').addEventListener('click', addBear);
};


export default { submitBearEvent };
