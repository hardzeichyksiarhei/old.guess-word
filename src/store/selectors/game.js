const player = (state) => state.game.player;
const category = (state) => state.game.category;
const words = (state) => state.game.words;
const word = (state) => state.game.word;
const step = (state) => state.game.step;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  player,
  category,
  words,
  word,
  step,
};
