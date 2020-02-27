const bears = [];

const getBears = () => {
    return bears
};

const setBears = (bearObject) => {
    bears.push(bearObject);
};

export default { getBears, setBears };
