const categories = (state) => state.categories.categories;
const categoryById = (id) => (state) =>
  state.categories.categories.find((category) => category.id === id);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  categories,
  categoryById,
};
