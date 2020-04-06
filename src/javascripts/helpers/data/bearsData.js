const bears = [];

const getBears = () => bears;

const setBears = (bearObject) => {
  bears.push(bearObject);
};

export default { getBears, setBears };
