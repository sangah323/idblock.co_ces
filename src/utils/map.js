export const getTitleByType = (list, type) => {
  const item = list.find((item) => item.type === type);
  return item ? item.title : null;
};

export const getTypeByTitle = (list, title) => {
  const item = list.find((item) => item.title === title);
  return item ? item.type : null;
};

// export const getTitleByTab = (list, tab) => {
//   const item = list.find((item) => item.title === title);
//   return item ? item.type : null;
// };
