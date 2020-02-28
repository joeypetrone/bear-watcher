import bears from './components/bears.js'
import bearForm from './components/bearForm.js'

const init = () => {
    bearForm.printBearForm();
    bears.submitBearEvent();
};

init();