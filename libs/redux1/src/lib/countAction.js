const INC_COUNT = 'INC_COUNT';
const DEC_COUNT = 'DEC_COUNT';

function increaseCount(count) {
  return { type: INC_COUNT, count: count };
}

function decreaseCount(count) {
  return { type: DEC_COUNT, count: count };
}

export {
    increaseCount,
    decreaseCount,
};
