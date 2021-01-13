const user = (state) => state.game.user;
const category = (state) => state.game.category;
const words = (state) => state.game.words;
const step = (state) => state.game.step;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  user,
  category,
  words,
  step,
};
