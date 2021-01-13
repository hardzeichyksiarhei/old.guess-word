export const generateWordsByCategory = (category, number = 5) => {
  return [...category.words]
    .sort(() => Math.random() - Math.random())
    .slice(0, number);
};
