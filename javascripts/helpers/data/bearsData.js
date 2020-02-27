const bears = [];

const getBears = () => {
    return bears
};

const setBears = (bearObject) => {
    bears.push(bearObject);
    console.log(bears);
};

export default { getBears, setBears };
