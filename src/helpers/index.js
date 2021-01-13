export const generateWordsByCategory = (category, number = 5) => {
  return [...category.words]
    .sort(() => Math.random() - Math.random())
    .slice(0, number);
};

const arr_RU = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Э",
  "Ю",
  "Я",
];

export const generateLetter = (category, number = 5) => {
  return arr_RU[Math.floor(Math.random() * arr_RU.length)];
};
